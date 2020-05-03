
function start(){
    document.getElementById('start').style.display='none';
    document.getElementById('play').style.display='flex';
    document.getElementById('header').classList.add('small');
};
function restart(){
    document.getElementById('play').style.display='none';
    document.getElementById('start').style.display='flex';
    document.getElementById('header').classList.remove('small');
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generate(){
    return questions[getRandomInt(questions.length)];
};

function reload(){
    document.getElementById('questions').innerHTML = generate();
}