const clearLogButton = document.querySelector('.js-clear');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

console.log(clearLogButton);
document.addEventListener("keydown", logMessage);
document.addEventListener("keyup", logMessage);
clearLogButton.addEventListener("click", reset);

function logMessage({type, key, code}) {
    const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
        <li><b>Event: </b>${type}</li>
        <li><b>Key: </b>${key}</li>
        <li><b>Code: </b>${code}</li>
    </ul>
    </div>`;

    logList.insertAdjacentHTML("afterbegin", markup);
    if(type==="keyup"){
        incrementKeypressCounter();
    }
}

function incrementKeypressCounter () {
    keypressCounter+=1;
}

function reset() {
    keypressCounter = 1;
    logList.innerHTML = "";
  }


  const parent = document.querySelector("#parent");
  const child = document.querySelector("#child");
  const descendant = document.querySelector("#descendant");
  
  parent.addEventListener("click", () => {
    console.log("Parent click handler");
  });
  
  child.addEventListener("click", () => {
    console.log("Child click handler");
  });
  
  descendant.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Descendant click handler");
  });

  parent.addEventListener("click", (event) => {
    console.log("event.target: ", event.target);
    console.log("event.currentTarget: ", event.currentTarget);
  });

  