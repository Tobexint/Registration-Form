// Try edit me
const message = 'Hello Tobex!'

// Update text
document.querySelector('#root').innerHTML = message

// Log to the console
console.log(message)

var button = document.getElementById('button').addEventListener('click', buttonClick);

var t = document.querySelector('.container')

t.addEventListener('mouseenter', runEvent);
t.addEventListener('mouseleave', leave);

function buttonClick(){
    console.log("Button Clicked!");
    document.querySelector('.container').style.backgroundColor = "lightgray";
    
}

function runEvent(){
    document.querySelector('.container').style.backgroundColor = "skyblue";
}

function leave(){
    document.querySelector('.container').style.backgroundColor = "white";
}

function enter(){
    document.querySelector('input[type="text"]').style.backgroundColor = "gray";
}
