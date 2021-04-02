// get the input data
const inputData = document.querySelector('#takeInputData');

// get the submit button
const submit = document.querySelector('#submitBtn');

// get the popup win page
const popUp = document.querySelector("#popupContainer");

// get the popup lose page
const popUpLose = document.querySelector("#loseGame");

// get the popup button
const popUpBtn = document.querySelector("#popupBtn");

// get the popup lose button
const popUpLoseBtn = document.querySelector("#loseGameBtn");




// function
let checkGuessNumber = () =>{

    // get input data value
    const textInputData = inputData.value;
    const inputDataValue = parseInt(textInputData,10);

    // random number
    const randomNum = Math.random();

    // random number between 1 to 10
    const randomNumOneToTen = Math.floor(randomNum*10);

    // condition
    if(randomNumOneToTen === inputDataValue){
        popUp.style = "display: block";
    }
    else{
        popUpLose.style = "display: block";
    }
}

// remove popup win page function
let removePopPage = () =>{
    popUp.style = "display: none";
};

// remove popup lose page function
let removePopLosePage = () => {
    popUpLose.style = "display: none";
}

// add click eventListner
submit.addEventListener('click', checkGuessNumber); 

// add click eventListner on Popup button
popUpBtn.addEventListener('click', removePopPage);

// add click eventListner on Popup lose button
popUpLoseBtn.addEventListener('click', removePopLosePage);

// add keydown eventListner
inputData.addEventListener('keydown', event => {
    if (event.isComposing || event.keyCode === 13) {
        checkGuessNumber();
    }
  });
