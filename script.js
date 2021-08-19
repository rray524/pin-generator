document.getElementById('generate-pin-btn').addEventListener('click', function () {
    const generateRandomNum = Math.round(Math.random() * 10000);
    // turn random number to string 
    const randomString = generateRandomNum + '';
    if (randomString.length == 4) {
        document.getElementById('pin-screen').value = randomString;
    }
});

document.querySelector('.calc-body').addEventListener('click', function (event) {
    const calcNumber = event.target.innerText;
    if (calcNumber != '<' && calcNumber != 'C' && calcNumber != 'Submit') {
        let inputScreenVal = document.getElementById('input-screen').value;
        inputScreenVal = inputScreenVal + calcNumber;
        document.getElementById('input-screen').value = inputScreenVal;
    }
    else if (calcNumber == 'C') {
        document.getElementById('input-screen').value = '';
    }

});
document.querySelector('.submit-btn').addEventListener('click', function () {
    const pinScreenvalue = document.getElementById('pin-screen').value;
    const inputScreenValue = document.getElementById('input-screen').value;


    if (pinScreenvalue == inputScreenValue) {
        document.querySelector('.notify2').style.display = 'block'
        document.querySelector('.notify').style.display = 'none'
    }
    else {
        document.querySelector('.notify').style.display = 'block'
        document.querySelector('.notify2').style.display = 'none'
    }

});