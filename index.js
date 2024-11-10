// My code in my Thinking of javascript for progress bar and check mark;

// let changeColor = document.querySelector('.check-box');

// let changetick = false;
// changeColor.addEventListener('click', function() {
//     changeColor.style.backgroundColor = 'rgb(40, 141, 40)';
//     changeColor.style.border = '1px solid rgb(40, 141, 40)';
//     changetick = true;
//     let barcolor = document.querySelector('.progress-in');

//     if(changetick == true) {
//         barcolor.style.cssText = "width:33%; height: 100%; background-color: var(--primary-color); display: flex; align-items: center;"
//         let changeText = document.querySelector('.progress-bar-text');
//         changeText.textContent = "1/3 tasks done!"

//     }
// });

// let changeColor1 = document.querySelector('.check-box1');
// let changetick1 = false;
// changeColor1.addEventListener('click', function() {
//     changeColor1.style.backgroundColor = 'rgb(40, 141, 40)';
//     changeColor1.style.border = '1px solid rgb(40, 141, 40)';
//     changetick1 = true;

//     let barcolor = document.querySelector('.progress-in');

//     if(changetick && changetick1 == true) {
//         barcolor.style.cssText = "width:66%; height: 100%; background-color: var(--primary-color); display: flex; align-items: center;"
//         let changeText = document.querySelector('.progress-bar-text');
//         changeText.textContent = "2/3 tasks done!"
//     }

// });

// let changeColor2 = document.querySelector('.check-box2');

// let changetick2 = false;
// changeColor2.addEventListener('click', function() {
//     changeColor2.style.backgroundColor = 'rgb(40, 141, 40)';
//     changeColor2.style.border = '1px solid rgb(40, 141, 40)';
//     changetick2 = true;

//     let barcolor = document.querySelector('.progress-in');

//     if(changetick && changetick1 && changetick2 == true) {
//         barcolor.style.cssText = "width:100%; height: 100%; background-color: var(--primary-color); display: flex; align-items: center;"
//         let changeText = document.querySelector('.progress-bar-text');
//         changeText.textContent = "3/3 tasks done!"
//     }
// });

// for this click functionality we just have to add a class using javascript dont have to write that much see below'

   //my code; bas Practice Dont use this
// =================================================================================




















// fun1.forEach((element) => {
//    element.addEventListener('click', function() {
//       let parent = element.parentElement;
//       parent.classList.toggle('completed');
//    });
// }) ;

// same function using for loop
// Parent elemnt is used to find the first parent of the class; is what i Think;

// 1. Functionality --> So with this we can now mark and unmark tick property;
// for(let i = 0; i<addClass.length; i++) {
//    let parent = addClass[i].parentElement;
//    addClass[i].addEventListener('click', function() {
//       parent.classList.toggle('completed');
//    });
// }

// Now We've to understand (some and Every Function) from array methods to perform a functionality;

// 2. functionality;--> 
{

   // This tick and Green optin shoukd only come when we've added all the goals, mean 
   // none input field should be empty;
   // so we've to check all the input fields and if all are filled then only we can
   // add the tick and green option;

   //  first of all take all elements in 

   
   // Optimal way;

// now just add a class in goal when a click event occur
 
   
   const inputCheck = document.querySelectorAll('.input-write');
   const showError = document.querySelector('.error1');
   const raiseBar = document.querySelector('.progress-bar');
   const addClass = document.querySelectorAll(".check-box");
   const progressIn = document.querySelector('.progress-in');
   const paraProgress = document.querySelector('.para-progress');
   const textProgress = document.querySelector('.text-progress');


   const allQuotes = [
      "Raise the bar by completing your goals",
      "Well begun its half done",
      "Just a step away, Keep going!",
      "Whoa! You just completed all the goals, time for chill ✨"
   ]
   

   const myData = JSON.parse(localStorage.getItem('myData')) || {};

   let checkCnt = 0;
   inputCheck.forEach((e) => {
      if(myData[e.id] && myData[e.id].completed)
      {
         checkCnt++;
      }
      
   });

   let ele = `${100/inputCheck.length * checkCnt}%`;
   progressIn.style.width = ele;
   paraProgress.innerText = `${checkCnt}/${inputCheck.length} Task Completed `;
   textProgress.innerText = allQuotes[checkCnt];


   // ye click kro to class add hojye wo functionaity
   addClass.forEach((input) => {

      const parent = input.parentElement;
      input.addEventListener('click', function(e) {
         
                          // isme ye poore input p traverse and ckeck ki all filled;
         const allFilled =  [...inputCheck].every(function(e) {
            return e.value;
         });

         // agr all filled hai to add class show green else show error;
         if(allFilled)
         {
            parent.classList.toggle('completed');
            let elementId = input.nextElementSibling.id; // --> id likhna tb first second ayega;
           
            // to ye hua updation
            myData[elementId].completed = !myData[elementId].completed
            
            // ab apni local storage ka state update kr dege
            localStorage.setItem('myData', JSON.stringify(myData));

            // again fot Updation in App;
            checkCnt = 0;
            inputCheck.forEach((e) => {
               if(myData[e.id].completed) checkCnt++;
               
            });
         
            let ele = `${100/inputCheck.length * checkCnt}%`;
            progressIn.style.width = ele;
            paraProgress.innerText = `${checkCnt}/${inputCheck.length} Task Completed `;
            textProgress.innerText = allQuotes[checkCnt];


            // Ye Code likha tha ki usi object pe create krdu pr bna nhi
            // console.log(myData[wide].size);
            // myData[wide].size = ele;
            // localStorage.setItem('myData', JSON.stringify(myData));
            

            // myData[wide] = ;
            // localStorage.setItem('myData', JSON.stringify(myData));

         }
         else 
         {
            showError.classList.add('show-error');
         }
            
      });
   })


   // task 4;--> 
   // now ab hme esa krna hai ki jo b input fill hogya h wo reload kre to hatt na jaye using local storage;
   // or ese hi tock mark or bar ko b set krna hai;


   // Third Functionality; jese hi input pe focus kroge to error bar hatt  jyega'
   inputCheck.forEach((input) => {

      // ye ni b lgaoge to work krega bcoz you initialized all with empty state;
      // if phle se data stored ho;
      if(myData[input.id]) {
         input.value = myData[input.id].name;

         if(myData[input.id].completed) {
            input.parentElement.classList.add('completed');
         }
      }

      // input.value = myData[e.target.id].name; ye statement glt hone k karan js iske neeche ka cha ni rha tha;

      // ab yha pe dekh lege agr hmare input ki class phle se completed hai to 
      // usme class add krege fetch krke;
      // ----------------------
      

      // thi is where we are storing our input data;
      input.addEventListener('input', function(e) {


         // dont use this it'll affect storing of values;
         // if(myData[e.target.id].completed) return;

         // use this; -> 
         if(myData[e.target.id] && myData[e.target.id].completed)
         {
            e.target.value = myData[e.target.id].name;
            return;
         }
         
         // ab isi input ko local storage se yha pe laane k liye;
         // ye updation to storage;
         // agr storage me h to fetch krke dikha do
        
            myData[e.target.id] = {

               name: e.target.value, 
               // fixed this error by self;
               completed : false
               
            }
          
         localStorage.setItem('myData', JSON.stringify(myData));
         
      });

      input.addEventListener('focus', function(e) {

         showError.classList.remove('show-error');
         
         
      });
   });


// Now Add a Functionality that when you check on boxes you cannot further edit it unless you uncheck

}
   
    

