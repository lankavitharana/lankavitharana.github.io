
const PLUS = 0;
const MINUS = 1;
var gameRound = 0;
var level=1
var question = [];
var backMusic;

$(document).ready(function() {
    $('#start_btn').on('click', startClicked);
    $('#answer').keypress(processAnswer);
    backMusic = new Audio('/media/back.mp3').play();
});

function setLevel(level) {
    this.level = level;
}

function startClicked(event) {
    $('#start_btn').hide();
    gameRound = 0;
    startMathGameEngine();
}

function processAnswer(event) {
    let key = event.which;
    if(key === 13) {
        if($('#answer').val() == question[4]) {
            actOnCorrentAnswer();
        } else {
            actOnWrongAnswer();
        }
        $('#result').show();
        setTimeout(function() { 
            startMathGameEngine();
        }, 4000);
    }
}

function actOnCorrentAnswer() {
    new Audio('/media/success.mp3').play();
    $('#result-img').attr('class', 'right-answer');
}

function actOnWrongAnswer() {
    new Audio('/media/fail.mp3').play();
    $('#result-img').attr('class', 'wrong-answer');
}

function startMathGameEngine() {
    question = getMathQuestion();
    populateQuestion();
    $('#result').hide();
    $('#result-img').attr('class', '');
    $('#answer').val('');
    $('#question').show();
}

function populateQuestion() {
    $('#left').text(question[0]);
    $('#opSign').text(question[2]);
    $('#right').text(question[3]);
    if(level == 1) {
        populateAnimation('apple-left', question[0], false);
        let neg = question[1] === MINUS;
        populateAnimation('apple-right', question[3], neg);
    }
}

function getMathQuestion() {
    let left = getRandomNumberForQues();
    let op = getRandomOpForQues();
    let opSing = getOpSign(op);
    let right = getRandomNumberForQues();
    if(op === MINUS && left < right) {
        var temp = left;
        left = right;
        right = temp;
    }
    let result = getResults(left, op, right);
    return [left, op, opSing, right, result];
}

function getRandomNumberForQues() {
    let mod;
    if(level <= 1) {
        mod = 10;
    } else if( level <= 2) {
        mod = 20;
    } else {
        mod = 100;
    }
    return Math.round(Math.abs(Math.random()*1000))%mod;
}

function getRandomOpForQues() {
    return Math.round(Math.abs(Math.random()*1000))%2;
}

function getOpSign(op) {
    switch (op) {
        case PLUS:
            return '+';
        case MINUS:
            return '-';
    }
}

function getResults(left, op, right) {
    switch (op) {
        case PLUS:
            return left + right;
        case MINUS:
            return left - right;
    }
}

function populateAnimation(appleClass, count, neg) {
    deleteApples(appleClass);
    createApples(appleClass, count, neg);
    let span = 30;
    let currentSpan;
    $('.' + appleClass).each(function(index, apple) {
        let leftAnim;
        if(index%2 == 0) {
            currentSpan = (index + 1)*span;
            leftAnim = '+=' + currentSpan + 'px';
        } else {
            leftAnim = '-=' + currentSpan + 'px';
        }
        
        $(this).animate({top: '580px', left: leftAnim}, 5000);
    });
}

function createApples(className, count, neg) {
    let appleClassName = neg ? className + ' neg' : className;
    for (i = 0; i < count; ++i) {
        let appleElement = $($.parseHTML('<div class="apple ' + appleClassName +'"></div>'));
        $(".eq").append(appleElement);
    }
}

function deleteApples(appleClass) {
    $('.' + appleClass).each(function(index, apple) {
        $(this).remove();
    });
}
