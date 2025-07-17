// Dark mode toggle
document.getElementById('toggleDark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}

function addComment() {
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
    if (text) {
        const commentBox = document.createElement("div");
        commentBox.className = "comment";
        commentBox.textContent = text;
        document.getElementById("comments").appendChild(commentBox);
        saveComment(text);
        input.value = "";
    }
}

function saveComment(text) {
    const comments = JSON.parse(localStorage.getItem('comments') || "[]");
    comments.push(text);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments') || "[]");
    comments.forEach(text => {
        const commentBox = document.createElement("div");
        commentBox.className = "comment";
        commentBox.textContent = text;
        document.getElementById("comments").appendChild(commentBox);
    });
}

window.onload = loadComments;
