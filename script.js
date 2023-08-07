n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
let text = "FF Tools ProMax " + d + "/" + m + "/" + y;
let encoded = window.btoa(text);
document.getElementById("date").innerHTML = "Original: " + text + "<br>Password: " + encoded;

const downloadBtn = document.querySelector(".download-btn");
const fileLink = "";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
        function .download-btn() {
        var copyText = document.getElementById("date");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.encoded);
        alert("Copied the text: " + copyText.encoded);
}
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `your password is <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your password is <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        
        downloadBtn.innerText = text;
        h1.innerHTML = encoded;
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerText = encoded;
            h1.innerHTML = encoded;
            document.getElementById("date").innerHTML = text;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);
