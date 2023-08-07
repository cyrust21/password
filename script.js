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
        
        document.getElementById("date").innerHTML = encoded;
        
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer"); }
           
        }, 3000);
    }, 1000);
    function myFunction() {
  // Get the text field
  var copyText = document.getElementById("date");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.encoded);

  alert("Copied the text: " + copyText.encoded);
}
}

downloadBtn.addEventListener("click", initTimer);
