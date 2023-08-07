n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
let text = "FF Tools ProMax " + d + "/" + m + "/" + y;
let encoded = window.btoa(text);
document.getElementById("date").innerHTML = encoded;

const downloadBtn = document.querySelector(".download-btn");
const fileLink = "";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
        
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your password is <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your password is <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.getElementById("date").innerHTML = text;
        downloadBtn.innerText = "encoded";
        
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer"); 
    downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
           
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);



