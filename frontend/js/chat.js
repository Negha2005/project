class ChatSupport {
    constructor() {
        this.createChatWidget();
        this.minimized = true;
    }

    createChatWidget() {
        const chatWidget = document.createElement('div');
        chatWidget.className = 'chat-widget';
        chatWidget.innerHTML = `
            <div class="chat-header">
                <span>Customer Support</span>
                <button class="minimize-chat">−</button>
            </div>
            <div class="chat-body">
                <div class="chat-messages"></div>
                <div class="chat-input">
                    <input type="text" placeholder="Type your message...">
                    <button class="send-message">Send</button>
                </div>
            </div>
        `;

        document.body.appendChild(chatWidget);
        this.setupEventListeners(chatWidget);
    }

    setupEventListeners(widget) {
        const minimizeBtn = widget.querySelector('.minimize-chat');
        const input = widget.querySelector('.chat-input input');
        const sendBtn = widget.querySelector('.send-message');

        minimizeBtn.addEventListener('click', () => this.toggleChat(widget));
        sendBtn.addEventListener('click', () => this.sendMessage(input.value));
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage(input.value);
        });
    }

    toggleChat(widget) {
        this.minimized = !this.minimized;
        widget.classList.toggle('minimized');
    }

    sendMessage(message) {
        if (!message.trim()) return;
        
        const messagesContainer = document.querySelector('.chat-messages');
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = message;
        
        messagesContainer.appendChild(messageElement);
        document.querySelector('.chat-input input').value = '';
        
        // Simulate response
        setTimeout(() => {
            const response = document.createElement('div');
            response.className = 'message support-message';
            response.textContent = "Thank you for your message. An agent will respond shortly.";
            messagesContainer.appendChild(response);
        }, 1000);
    }
} 