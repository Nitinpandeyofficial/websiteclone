// Simple JS example (dynamic notice add)
document.addEventListener("DOMContentLoaded", () => {
    const noticeList = document.getElementById("noticeList");

    setTimeout(() => {
        const li = document.createElement("li");
        li.textContent = "Online Form Submission Extended";
        noticeList.appendChild(li);
    }, 2000);
});
