const displayStr = document.getElementById('displayStr');


/**
 * Erase the current string and replace with 0.
 */
function clearScreen(){
    displayStr.textContent = '0';
}

/**
 * This function will check if there exists a leading 0 in the display. 
 * If it exists, remove and create empty string, else append display string. 
 */
function checkForZero(){
    if(displayStr.textContent === '0'){
        displayStr.textContent = '';
    }
} 
    
function display(val){
    checkForZero();    

    var givenValue = val;
    //console.log(displayStr.textContent);
    displayStr.textContent += givenValue;
}
/**
 * Give functionality to the calculator buttons. 
 * Prints to the display screen and any unique functions
 */
var rowOne = document.querySelector('.row_1');
for(let num of rowOne.children){
    if(num.textContent === 'C'){
        num.addEventListener('click', clearScreen, false);
    } else {
        num.addEventListener('click', function(){
        display(num.textContent);
        }, false);
    } 
}

var rowTwo = document.querySelector('.row_2');
for(let num of rowTwo.children){
    num.addEventListener('click', function(){
        display(num.textContent);
    }, false);
}

var rowThree = document.querySelector('.row_3');
for(let num of rowThree.children){
    num.addEventListener('click', function(){
        display(num.textContent);
    }, false);
}

var rowFour = document.querySelector('.row_4');
for(let num of rowFour.children){
    num.addEventListener('click', function(){
        display(num.textContent);
    }, false)
}

var rowFive = document.querySelector('.row_5');
for(let num of rowFive.children){
    if(num.textContent === '='){
        num.addEventListener('click', calculate, false);
    } else {
        num.addEventListener('click', function(){
        display(num.textContent);
        }, false);
    } 
}
