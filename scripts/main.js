let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/handsomeboy.jpg') {
      myImage.setAttribute('src', 'images/handsomeboy2.jpg');
    } else {
      myImage.setAttribute('src', 'images/handsomeboy.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('谁是勾八？');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name1', myName);
      myHeading.textContent = '勾八是' + myName;
    }
  }
  
  
  if(!localStorage.getItem('name1')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '勾八是' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
 }