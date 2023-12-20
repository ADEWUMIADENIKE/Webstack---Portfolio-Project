var questionBank= [
    {
        question : '_____ is an example of a primary memory',
        option : ['Hard drives','Digital video disk','Floppy disks','ROM'],
        answer : 'ROM'
    },
    {
        question : '______ provide timing and control signals to direct the operation of the other units',
        option : ['Arithmetic and logic unit','Control unit','Processing unit','Memory unit'],
        answer : 'Control unit'
    },
    {
        question : 'The following are computer memory unit except',
        option : ['Fortobyte','Terabyte','Nibble','Kilobyte'],
        answer : 'Fortobyte'
    },
    {
        question : 'The elementary building block of a digital circuit with several inputs but one output is',
        option : ['Difference engine','Digital computer','Logic gate','Hybrid circuits'],
        answer : 'Logic gate'
    },
    {
        question : 'The following are the stephs involved in instruction cycle except',
        option : ['Fetch','Execute','Store','Decode'],
        answer : 'Store'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');

var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score=0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.' +(i+1)+' ' +questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+ ' ' +(i+1)+ ' ' + 'of'  + ' ' + questionBank.length;
}
//function to calculate scores
function calcscore(e){
    if(e.innerHTML===questionBank[i].answer & score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to dispaly next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+'/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//back to quiz buton event
function backToQuiz(){
    location.reload();
}

//function to check answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'block';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();