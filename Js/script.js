const questions=[
    {
        question:"Comment appelle-t-on les habitants des iles?",
        answers:[
            { text: "Les codeurs", correct:false},
            { text: "Les insulaires", correct:true},
            { text: "Les dakarois", correct:false},
            { text: "Les pikinois", correct:false},
            
        ]

    },
    {
        question:"Comment appelle-t-on les habitants de Madagascar?",
        answers:[
            { text: "Les Magadiscios", correct:false},
            { text: "Les Capitalistes", correct:false},
            { text: "Les Malgaches", correct:true},
            { text: "Les Pikinois", correct:false},
            
        ]
    },
    {
        question:"Comment appelle-t-on les habitants du Danemark?",
        answers:[
            { text: "Les Danois", correct:true},
            { text: "Les Dophins", correct:false},
            { text: "Les Dakarois", correct:false},
            { text: "Les Polonais", correct:false},
            
        ]
    },
    {
        question:"Comment appelle-t-on les habitants de Kédougou?",
        answers:[
            { text: "Les Kedougouois", correct:false},
            { text: "Les Kankourans", correct:false},
            { text: "Les Dakarois", correct:false},
            { text: "Les Kédovins", correct:true},
        ]
    },
    {
        question:"Comment appelle-t-on une personne la radio?",
        answers:[
            { text: "une ecouteuse", correct:false},
            { text: "une auditrice", correct:true},
            { text: "une spectatrice", correct:false},
            { text: "une mangue", correct:false},
        ]
    },
    {
        question:"Comment appelle-t-on une personne qui habite en ville?",
        answers:[
            { text: "un citadin", correct:true},
            { text: "un vilain", correct:false},
            { text: "un visiteur", correct:false},
            { text: "un villageois", correct:false},
        ]
    },
    {
        question:"Comment appelle-t-on une annee qui compte 366jours?",
        answers:[
            { text: " synonyme", correct:false},
            { text: "lunaire", correct:false},
            { text: "bissextile", correct:true},
            { text: "jupiter", correct:false},
        ]
    },
    {
        question:"Comment appelle-t-on les animaux qui se nourissent de viandes?",
        answers:[
            { text: "carnivors", correct:true},
            { text: "cartables", correct:false},
            { text: "herbivores", correct:false},
            { text: "mammiferes", correct:false},
        ]
    },
    {
        question:"Comment appelle-t-on qui fait du velo?",
        answers:[
            { text: "sportif", correct:false},
            { text: "velo", correct:false},
            { text: "coureur", correct:false},
            { text: "cycliste", correct:true},
        ]
    },
    {
        question:"Comment appelle-t-on une personne qui travaille aux champs?",
        answers:[
            { text: "Agriculteur", correct:true},
            { text: "coordonniers", correct:false},
            { text: "manguiers", correct:false},
            { text: "voyageurs", correct:false},
        ]
    },
    {
        question:"Comment appelle-t-on un dirigeant d'empire?",
        answers:[
            { text: "roi", correct:true},
            { text: "reine", correct:false},
            { text: "empereur", correct:false},
            { text: "empire", correct:false},
        ]
    },
    {
        question:"Comment appelle-t-on une personne qui travaille aux champs?",
        answers:[
            { text: "Agriculteur", correct:true},
            { text: "coordonniers", correct:false},
            { text: "manguiers", correct:false},
            { text: "voyageurs", correct:false},
        ]
    },
    {
        question:"Quel est le titre des rois du cayor?",
        answers:[
            { text: "Mansa", correct:true},
            { text: "Damel", correct:false},
            { text: "Bourba Djolof", correct:false},
            { text: "Alboury", correct:false},
        ]
    },
    {
        question:"Qui est Nelson Mandela?",
        answers:[
            { text: "Ancien footballeur de l'equipe du Congo", correct:false},
            { text: "Ancien president de l'Afrique du sud", correct:true},
            { text: "Le premier ministre du Senegal", correct:false},
            { text: "Le fondateur de Gomycode", correct:false},
        ]
    },
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Suivant";
    showQuestion(); 
}

/******une fonction qui pertmet d'afficher les questions posees */
function showQuestion(){
    resetState();
         let currentQuestion=questions[currentQuestionIndex];
         let questionNo=currentQuestionIndex + 1;
         questionElement.innerHTML=questionNo + "." + currentQuestion.question;

/*****For displaying the questions*****/
          currentQuestion.answers.forEach(answer=>{
            const button =document.createElement( "button");
            button.innerHTML= answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
          });
}  

 function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
   const selectedBtn= e.target;
   const isCorrect= selectedBtn.dataset.correct === "true";
   if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
   }else{
    selectedBtn.classList.add("incorrect");
   }
   Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
      button.disabled=true;
   });
   nextButton.style.display="block";
}

  
function showScore(){
    resetState();
    questionElement.innerHTML=`Votre score est de ${score} sur ${questions.length}! `;
    nextButton.innerHTML="Recommencer";
    nextButton.style.display="block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

/*******Appel de la function startQuiz ****/
 startQuiz();