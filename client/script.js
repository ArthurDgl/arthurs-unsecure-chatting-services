class Message {
    constructor(authorName, messageString) {
        this.authorName = authorName;
        this.messageString = messageString;
        this.dateTime = "";
    }
}

function getProfilePicture(authorName) {
    return 'cat.jpg';
}

function displayMessage(message) {
    let messagesDiv = document.getElementById('messages');
    let messageDiv = document.createElement('div');
    messageDiv.className = 'message';

    let profilePicture = document.createElement('img');
    profilePicture.className = 'pfp';
    profilePicture.src = getProfilePicture(message.authorName);

    let authorName = document.createElement('p');
    let b = document.createElement('b');
    b.textContent = message.authorName + " :";
    authorName.className = 'author_name';
    authorName.appendChild(b);

    let messageHeader = document.createElement('div');
    messageHeader.className = 'message_header';

    messageHeader.appendChild(profilePicture);
    messageHeader.appendChild(authorName);

    messageDiv.appendChild(messageHeader);

    let messageText = document.createElement('p');
    messageText.textContent = message.messageString;
    messageText.className = 'message_text';

    messageDiv.appendChild(messageText);

    let messagesBottom = document.getElementById('messages_bot');
    messagesDiv.insertBefore(messageDiv, messagesBottom);
    scrollToEnd();
}

function sendMessage() {
    let messageInput = document.getElementById('message_input');
    let messageString = messageInput.value;

    if (messageString == "") return;

    let message = new Message("Arthur", messageString);

    messageInput.value = "";

    displayMessage(message);
}

function scrollToEnd() {
    let messagesDiv = document.getElementById('messages');
    messagesDiv.scroll({top: messagesDiv.scrollHeight, behavior: 'smooth'});
}


window.onload = (event) => {
    scrollToEnd();

    document.getElementById('send_button').onclick = (event) => {sendMessage();}

    document.getElementById('message_input').onkeydown = (event) => {
        if (event.key == 'Enter') {
            sendMessage();
        }
    }
}