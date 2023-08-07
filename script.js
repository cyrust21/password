n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
let text = "FF Tools ProMax " + d + "/" + m + "/" + y;
let encoded = window.btoa(text);
document.getElementById("date").innerHTML = encoded;
const downloadBtn = document.querySelector(".download-btn");


const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        function myFunction(encoded) {
  return "Hello " + encoded;
}
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
        myFunction = encoded;
        downloadBtn.innerText = encoded;
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            return "Hello " + encoded;
            
        }, 3000);
    }, 1000);
}
downloadBtn.addEventListener("click", initTimer);



