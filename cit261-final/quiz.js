//Quiz

//check if there is anything in local storage
//if there isn't, build the quiz
//if there is, show the results page
function checkLS(){
    if(localStorage.getItem("level") === null){
        // display quiz right away
        showSlide(n);
    } else {
        saveResults();  
    }
}


//Questions object

(function() {
  const quizQuestions = [
    {
      question: "What planet is 6th from the sun?",
      answers: {
        a: "Saturn",
        b: "Neptune",
        c: "Venus"
      },
      correctAnswer: "a"
    },
    {
      question: "What are the only two planets that don't have any moons?",
      answers: {
        a: "Mars and Pluto",
        b: "Saturn and Neptune",
        c: "Mercury and Venus"
      },
      correctAnswer: "c"
    },
    {
      question: "How many planets are there in our solar system?",
      answers: {
        a: "10",
        b: "8",
        c: "5",
        d: "11"
      },
      correctAnswer: "b"
    },
      
      {
      question: "What planet is the smallest?",
      answers: {
        a: "Venus",
        b: "Pluto",
        c: "Mercury",
        d: "Earth"
      },
      correctAnswer: "c"
    },
      
      {
      question: "What planet is the largest?",
      answers: {
        a: "Venus",
        b: "Neptune",
        c: "Mercury",
        d: "Jupiter"
      },
      correctAnswer: "d"
    },
      
      {
      question: "What planet is the coldest?",
      answers: {
        a: "Saturn",
        b: "Uranus",
        c: "Earth",
        d: "Neptune"
      },
      correctAnswer: "d"
    }
  ];

  function constructQuiz() {
    const html = [];


    quizQuestions.forEach((currentQuestion, questionNumber) => {
      // store answer options
      const answers = [];

      
      for (letter in currentQuestion.answers) {
        // create a radio button for each answer option
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      html.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = html.join("");
  }

  function showResults() {
   
    const answerContainers = quizContainer.querySelectorAll(".answers");
      
    var showSave = document.getElementById("save");
    var showRepeat = document.getElementById("repeat");
    var storageForm = document.getElementById("storage-form");
         
        showSave.classList.add("show");
        showRepeat.classList.add("show"); 
        storageForm.classList.add("show"); 

    // store correct answers
    let numCorrect = 0;
      

  
    quizQuestions.forEach((currentQuestion, questionNumber) => {
      // get selected answer for each question
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        
        // correct answers are green
        answerContainers[questionNumber].style.color = "lightgreen";
        
      } else {
   
        // incorrect answers are red
        answerContainers[questionNumber].style.color = "red";
      }
       
       
        var result = document.getElementById("result"); 
        result.innerHTML = "Score: " + numCorrect;  
        result.classList.add("quiz-result"); 
        var status = document.getElementById("level");
        
        if (numCorrect === 6 ) {
            status.value = "Planet Super Ninja"; 
        }  else {
            status.value = "Planet Ninja In Training"; 
        }

    
    });

  }
    
 

    
 

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // build the quiz
  constructQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();


function saveResults() {
     var showRepeat = document.getElementById("repeat");
   showRepeat.classList.add("show"); 
    var level = document.getElementById("level").value; 
 
    let quizData = localStorage.getItem('level') ?JSON.parse(localStorage.getItem('level')) : [];
    
    localStorage.setItem('level', JSON.stringify(quizData));
   

    quizData.push(level);
    localStorage.setItem('level', JSON.stringify(quizData));
    const dataLevel = JSON.parse(localStorage.getItem('level'));
    var quiz = document.getElementById("quiz-wrapper"); 
    var buttons = document.getElementById("button-wrapper");
    var buttonsTwo = document.getElementById("button-wrapper-two");
    var ninjaStatus = document.getElementById("ninja-status"); 
    var form = document.getElementById("storage-form"); 
    var save = document.getElementById("save"); 
    
    quiz.classList.add("hidden");
    buttons.classList.add("hidden");
    form.classList.remove("show");
    save.classList.remove("show"); 
    
    ninjaStatus.classList.add("show"); 
    


     var userLevel = document.getElementById("ninja-level");
    userLevel.innerHTML = dataLevel; 
      
    
}

function takeAgain(){
      localStorage.clear();
    window.location.reload();
} 



