//  HTML Elements Accessing
let lvlBtn = document.querySelectorAll('.lvl-btn');
let levelsBunch = document.querySelector('.levels')
let disableBtn = document.querySelector('.disable-btn')
let disableUser = document.querySelector('.disable-user')
let randomInp = document.querySelector('#randomNumInp');
let lvlDisplay = document.querySelector('#level-display');
let userInp = document.querySelector('#userInp');
let newGame = document.querySelector('#newGame');
let submitBtn = document.querySelector('#submitBtn');
// let popupBtn = document.querySelector('#popupBtn');
// let popupDisplay = document.querySelector('.popupDisplay');
const popupBtn = document.getElementById("popupBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
let btnId;
let randomNum;
let cl = console.log.bind(console);



// Logic on click of btn
lvlBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btnId = parseInt(btn.getAttribute('id'));
    cl(`Btn Id: ${btnId}`);
    lvlDisplay.innerText = `You Selected ${btn.innerText} Level Guess Is 1 - ${btnId}`
    randomNum = Math.floor(Math.random() * btnId + 1);
    cl(`Random Num: ${randomNum}`);
    userInp.value = '';
    userInp.focus();
    disableAllBtns();
    userInp.removeAttribute('disabled');
    submitBtn.disabled = false;
  });
});

// Logic for disable & enable btns
let disableAllBtns = () => {
  lvlBtn.forEach((btn) => {
    btn.disabled = true;
  })
}
let enableAllBtns = () => {
  lvlBtn.forEach((btn) => {
    btn.disabled = false;
  })
}

// Logic for on click of new game btn
newGame.addEventListener('click', () => {
  setTimeout(() => {
    lvlDisplay.innerText = `You Started A New Game Select Level`;
  }, 100);
  disableBtn.setAttribute('placeholder', `Random Number`);
  userInp.value = '';
  lvlDispShake();
  enableAllBtns();
})


//  Logic For Click On Check Btn
submitBtn.addEventListener('click', () => {
  if (userInp.disabled) {
    cl('User Input Field Cannot Be Empty!')
    lvlDisplay.innerText = 'Select The Level!';
    lvlDispShake();
  } else if (userInp.value == randomNum) {
    cl('Won');
    lvlDisplay.innerText = 'Guess Is Correct';
    userInp.style.border = 'none';
    userInp.setAttribute('disabled', '');
    disableBtn.setAttribute('placeholder', `Random No: ${randomNum}`);
    submitBtn.disabled = true;
  } else {
    cl('Try Again');
    lvlDisplay.innerText = 'Try Again';
    userInp.focus();
    userInp.value = '';
    usrInpShake();
  }
})


// Shake Effect Add & Remove 
let lvlDispShake = () => {
  // Added Shake Effect
  levelsBunch.setAttribute("class", "userErr");
  // Removing Shake effect After 500 milliseconds
  setTimeout(() => {
    levelsBunch.classList.remove("userErr");
  }, 500);
}
let usrInpShake = () => {
  // Added Shake Effect
  userInp.setAttribute("class", "userErr");
  userInp.style.border = '2px solid crimson'
  // Removing Shake effect After 500 milliseconds
  setTimeout(() => {
    userInp.classList.remove("userErr");
  }, 500);
}


// Popup Btn Working
popupBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});