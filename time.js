const questionList=[{
question:"What Is The Capital City Of France ?",
option:["Berlin","Madrid","Paris","Lisbon"],
answer:"Paris",
},
{
question:"What Is The Capital City Of Ethiopia ?",
option:["Addis Ababa","Madrid","Paris","Lisbon"],
answer:"Addis Ababa",
}
];
let currentquestion=0;
let timer=30;
let score=0;
let timerInterval;
 const time=document.getElementById("time");
    const question=document.getElementById("question");
    const options=document.querySelector(".options");
const result=document.getElementById("result");
const restartbtn=document.getElementById("restartbtn");
function loadquestion(){
if(currentquestion>=questionList.length){

    endQuiz();
    return;
}
    clearInterval(timerInterval);

    timer=30;
    time.textContent=timer;
    startTimer();
    const currentquiz=questionList[currentquestion];
    question.textContent=currentquiz.question;

    options.innerHTML="";

   currentquiz.option.forEach(
     (option)=>{
        const button=document.createElement("button");
      button.textContent=option;
button.classList.add("optionn");
        button.onclick=()=>{checkanswer(option);};
        options.appendChild(button);
     });

  

}

     function checkanswer(selected){
      const currentquiz=questionList[currentquestion];
        if(selected===currentquiz.answer){
            score++;
         
        }
          currentquestion++;
          loadquestion();
     }

 function startTimer(){
     timerInterval=setInterval(()=>{
   timer--;
   time.textContent=timer;
   if(timer<=0){
    clearInterval(timerInterval);
    currentquestion++;
    loadquestion();
}
},1000);
time.textContent=timer;


}

function endQuiz(){
clearInterval(timerInterval);

question.style.display="none";
options.style.display="none";
result.textContent=`Score:${score}`;
restartbtn.textContent="Restart";
restartbtn.style.display="block";
restartbtn.style.border="none";
restartbtn.style.borderRadius="25px";
   restartbtn.style.backgroundColor=" rgb(36, 239, 36)";


}
restartbtn.addEventListener("click",()=>{
score = 0;
currentquestion = 0;
question.style.display = "block";
options.style.display = "block";

loadquestion();
});
loadquestion();
