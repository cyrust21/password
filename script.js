const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return text = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your password will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your password will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        
        downloadBtn.innerText = "Your file is downloading...";
        let text = "Cyrustgarage";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 3000);
        downloadBtn.addEventListener("click", initTimer);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);
