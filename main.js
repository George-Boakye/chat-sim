let textMessage = document.getElementById("text-message");
let sendBtn = document.getElementById("btn");
let textArea = document.getElementById("right-section");
let form = document.getElementById("form");

if (textMessage.value === "") {
  sendBtn.style.display = "none";
}

textMessage.addEventListener("keydown", () => {
  sendBtn.style.display = "block";
});

textMessage.addEventListener("blur", () => {
  if (textMessage.value === "") {
    sendBtn.style.display = "none";
  }
});

function currentTime() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  return time;
}



function chatReply() {
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");
  div3.setAttribute("class", "reply");
  div4.setAttribute("class", "reply-wrapper");
  div3.innerHTML = `<p>Hello there</p> <p class = "time">${currentTime()}</p>`;
  div4.appendChild(div3);
  textArea.appendChild(div4);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userText = textMessage.value.trim();
 

  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let p = document.createElement("p");
  div1.setAttribute("class", "sender");
  div2.setAttribute("class", "sender-wrapper");
  p.innerHTML = `${userText} <p class = "time">${currentTime()}</p>`;
  div1.appendChild(p);
  div2.appendChild(div1);
  textArea.appendChild(div2);


  let currentProfile =  document.getElementById("current-profile");


  if (userText.toLowerCase().includes("hi")) {
    setTimeout(() => {
      chatReply();
      currentProfile.innerText = "Hello there";
    }, 2000);

   
  }

  textMessage.value = "";
  sendBtn.style.display = "none";
});
