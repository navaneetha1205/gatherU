document.addEventListener("DOMContentLoaded", () => {
    const announcements = [
        "🎉 Hackathon this Friday! Register now!",
        "📢 Debate Club is open for new members!",
        "🎭 Drama Club auditions are happening this weekend!"
    ];
    
    const list = document.getElementById("announcements");
    announcements.forEach(announcement => {
        let li = document.createElement("li");
        li.textContent = announcement;
        list.appendChild(li);
    });
});
