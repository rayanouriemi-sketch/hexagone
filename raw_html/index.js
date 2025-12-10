let messageInput;
let chatWindow;

function sendMessage() {
    if (!messageInput || !chatWindow) {
        messageInput = document.getElementById('message-input');
        chatWindow = document.getElementById('chat-window');
    }

    if (!messageInput || !chatWindow) {
        console.error("Erreur: Les éléments 'message-input' ou 'chat-window' n'ont pas été trouvés.");
        return;
    }

    const text = messageInput.value.trim();

    if (text.length) {
        const messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';
        messageBubble.textContent = text;
        
        chatWindow.appendChild(messageBubble);

        messageInput.value = '';
    } 
}

document.addEventListener('DOMContentLoaded', () => {
    messageInput = document.getElementById('message-input');
    chatWindow = document.getElementById('chat-window');


    if (messageInput) {
        messageInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
});