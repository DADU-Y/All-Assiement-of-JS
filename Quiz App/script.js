var firebaseConfig = {
  apiKey: "AIzaSyDUKjsHnlVnkFsS7jtMNM7iP1HW-FvUuzk",
  authDomain: "quiz-app-cf3a9.firebaseapp.com",
  databaseURL: "https://quiz-app-cf3a9-default-rtdb.firebaseio.com",
  projectId: "quiz-app-cf3a9",
  storageBucket: "quiz-app-cf3a9.firebasestorage.app",
  messagingSenderId: "679966348653",
  appId: "1:679966348653:web:c17d950c5439d32fe8b664"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var userName = prompt("Enter your name:");

var questions = [
  {
    question: "HTML Stands for",
    option1: "Hyper Text Markup Language",
    option2: "Hyper Tech Markup Language",
    option3: "Hyper Touch Markup Language",
    corrAnswer: "Hyper Text Markup Language",
  },
  {
    question: "CSS Stands for",
    option1: "Cascoding Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascating Style Sheets",
    corrAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used for most large heading",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    corrAnswer: "<h1>",
  },
  {
    question: "Which tag is used to make element unique ",
    option1: "id",
    option2: "class  ",
    option3: "label",
    corrAnswer: "id",
  },
  {
    question: "Any element assigned with id, can be get in css ",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",
  },
  {
    question: "CSS can be used with ______ methods ",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",
  },
  {
    question: "In JS variable types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",
  },
  {
    question: "In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
  {
    question: "toFixed() is used to define length of decimal ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",
  },
  {
    question: "push() method is used to add element in the start of array ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",
  },
];

var quesElement = document.getElementById("ques");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var index = 0;
var score = 0;
var timer = document.getElementById("timer");
var min = 1;
var sec = 59;
var stopTimer;

function updateTimer() {
  timer.innerHTML = `${min} : ${sec < 10 ? '0' + sec : sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      nextQuestion();
    }
  }
}

stopTimer = setInterval(updateTimer, 1000);

function nextQuestion() {
  var nextBtn = document.getElementById("btn");
  var allOptions = document.getElementsByTagName("input");

  for (var i = 0; i < allOptions.length; i++) {
    if (allOptions[i].checked) {
      allOptions[i].checked = false;
      var selectedValue = allOptions[i].value;
      var selectedOption = questions[index - 1][`option${selectedValue}`];
      var correctAnswer = questions[index - 1]["corrAnswer"];
      if (selectedOption === correctAnswer) {
        score++;
      }
    }
  }

  nextBtn.disabled = true;

  if (index > questions.length - 1) {
    clearInterval(stopTimer);
    showFinalScore();
  } else {
    quesElement.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
    index++;
    min = 1;
    sec = 59;
  }
}

function clicked() {
  var nextBtn = document.getElementById("btn");
  nextBtn.disabled = false;
}

function showFinalScore() {
  var percentage = ((score / questions.length) * 100).toFixed(2);


  firebase.database().ref("quizResults").push({
    name: userName,
    score: score,
    total: questions.length,
    percentage: percentage,
  });

  Swal.fire({
    title: 'Quiz Completed!',
    html: `<strong>You scored:</strong> ${score} / ${questions.length}<br><strong>Percentage:</strong> ${percentage}%`,
    icon: 'success',
    confirmButtonText: 'Nice!',
    confirmButtonColor: '#3085d6',
    background: '#f1f1f1',
    color: '#333',
    timer: 6000,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
}
