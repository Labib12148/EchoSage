import React, { useEffect, useRef, useCallback } from 'react';
import userImage from "../assets/user.png"
import chatImage from "../assets/chat.png";
import EchoSageNavbar from '../Navbar/EchoSageNavbar';
import './EchoSage.css';

function EchoSage() {
    const chatContainerRef = useRef(null);

    const sendMessage = useCallback(async () => {
        const fileNamesElement = document.getElementById('file-name');
        if (fileNamesElement) {
            fileNamesElement.innerHTML = '';
        }
        const promptInput = document.getElementById('prompt');
        if (!promptInput) {
            console.error('Prompt input element not found');
            return;
        }
    
        const prompt = promptInput.value.trim();
        if (!prompt) return;
    
        // Display your message
        displayMessage('You', prompt);
    
        promptInput.value = '';
    
        const imageInput = document.getElementById('image-input');
        if (imageInput.files.length > 0) {
            try {
                const formData = new FormData();
                formData.append('prompt', prompt);
    
                // Loop through each selected file and append it to FormData
                for (let i = 0; i < imageInput.files.length; i++) {
                    formData.append('image', imageInput.files[i]);
                }
    
                const response = await fetch('http://localhost:12148/Image', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (data.response) {
                    // Display EchoSage's response
                    displayMessage("EchoSage", data.response);
                } else {
                    // Display default message for EchoSage
                    displayMessage("EchoSage", "Well, howdy there, partner! Y'all know, I'm all about spreading good vibes, but reckon I can't wrangle up what you're lookin' for. How 'bout we rustle up somethin' else that'll tickle your fancy?");
                }
            } catch (error) {
                console.error("Error generating content:", error.message);
                // Display default message for EchoSage
                displayMessage("EchoSage", "Well, howdy there, partner! Y'all know, I'm all about spreading good vibes, but reckon I can't wrangle up what you're lookin' for. How 'bout we rustle up somethin' else that'll tickle your fancy?");
            }
        } else {
            try {
                const response = await fetch('http://localhost:12148/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userInput: prompt })
                });
                const data = await response.json();
    
                if (data.response) {
                    // Display EchoSage's response
                    displayMessage("EchoSage", data.response);
    
                } else {
                    // Display default message for EchoSage
                    displayMessage("EchoSage", "Well, howdy there, partner! Y'all know, I'm all about spreading good vibes, but reckon I can't wrangle up what you're lookin' for. How 'bout we rustle up somethin' else that'll tickle your fancy?");
                }
            } catch (error) {
                console.error("Error generating content:", error.message);
                // Display default message for EchoSage
                displayMessage("EchoSage", "Well, howdy there, partner! Y'all know, I'm all about spreading good vibes, but reckon I can't wrangle up what you're lookin' for. How 'bout we rustle up somethin' else that'll tickle your fancy?");
            }
        }
        
        
    }, []);
    
    

    useEffect(() => {
        const handleKeyPress = async (event) => {
            if (event.keyCode === 13 && event.shiftKey) {
                event.preventDefault();
                document.getElementById('prompt').value += '\n';
            } else if (event.keyCode === 13) {
                event.preventDefault();
                await sendMessage();
            }
        };

        const promptInput = document.getElementById('prompt');
        if (promptInput) {
            promptInput.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            if (promptInput) {
                promptInput.removeEventListener('keydown', handleKeyPress);
            }
        };
    }, [sendMessage]);

    function displayMessage(sender, message) {
        const chatContainer = chatContainerRef.current;

        if (!chatContainer) {
            console.error('Chat container not found');
            return;
        }

        const spacerElement = document.createElement('div');
        spacerElement.classList.add('message-gap');

        if (chatContainer.childNodes.length > 0) {
            chatContainer.appendChild(spacerElement);
        }

        if (typeof message !== 'string') {
            message = String(message);
        }

        const lines = message.split('\n');

        for (let index = 0; index < lines.length; index++) {
            const line = lines[index];
            const messageElement = document.createElement('div');

            if (index === 0) {
                if (sender === 'You') {
                    messageElement.classList.add('user-message');
                    const userImageElement = document.createElement('img');
                    userImageElement.src = userImage;
                    userImageElement.classList.add('avatar');
                    userImageElement.style.width = '30px';
                    messageElement.appendChild(userImageElement);
                } else if (sender === 'EchoSage') {
                    messageElement.classList.add('EchoSage-message');
                    const chatImageElement = document.createElement('img');
                    chatImageElement.src = chatImage;
                    chatImageElement.classList.add('avatar');
                    chatImageElement.style.width = '30px';
                    messageElement.appendChild(chatImageElement);
                }

                const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

                const textNode = document.createElement('div');
                textNode.innerHTML = `${sender}: ${formattedLine.trim()}`;
                messageElement.appendChild(textNode);
            } else {
                const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                messageElement.innerHTML = formattedLine.trim();
            }

            chatContainer.appendChild(messageElement);

            if (index < lines.length - 1) {
                const lineBreak = document.createElement('br');
                chatContainer.appendChild(lineBreak);
            }
        }

        chatContainer.scrollTop = chatContainer.scrollHeight;

    }

    function clearChat() {
        // Clear the chat container
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.innerHTML = '';
        }
    
    }

    function displayFileName(event) {
        const fileInput = event.target;
        const fileNamesElement = document.getElementById('file-name');
        if (!fileNamesElement) {
            console.error('File name element not found');
            return;
        }

        fileNamesElement.innerHTML = '';

        const files = fileInput.files;

        if (files.length > 2) {
            fileInput.value = '';
            const alertMessage = 'You can only attach up to 2 files.';
            window.alert(alertMessage);

            const alertBox = document.querySelector('.alert');
            if (alertBox) {
                alertBox.classList.add('alert');
            }
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const fileName = files[i].name;
            const maxLength = 15;
            let displayText = fileName.length > maxLength ? fileName.substring(0, maxLength) + '...' : fileName;
            const fileNameElement = document.createElement('div');
            fileNameElement.textContent = '- ' + displayText;
            fileNamesElement.appendChild(fileNameElement);
        }
    }

    return (
        <div>
            <EchoSageNavbar />

            <div className="clear-chat-container">
                <button className="clear-chat-button" onClick={clearChat}>Clear Chat</button>
            </div>
            <div className="chat-container" ref={chatContainerRef}></div>
            <div className="input-container">
                <label htmlFor="image-input" className="attach-button" id="file-label">
                    <span className="attach-text">Attach Image</span>
                    <input
                        type="file"
                        id="image-input"
                        multiple
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={displayFileName}
                    />
                    <span id="file-name" className="file-name"></span>
                </label>
                <input type="text" className="input-field" id="prompt" name="prompt" placeholder="Message EchoSage..." />
                <button className="send-button" onClick={sendMessage}>Send</button>
                <div className="loading-indicator" id="loading-indicator">Loading...</div>
            </div>
        </div>
    );
}

export default EchoSage;
