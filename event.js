//the change in the state of an object is known as event
/*Events are fired to notifycode of interesting changes
 that may affect code execution.
 such as mouse clicks, keyboard events, form events like submit
 print event and many more*/

 //event handling in javascript
 /*node.event=()=>{
    //handle here;
 }*/
 let btn1= document.querySelector("#btn1");
//  btn1.onclick=() =>{
//     console.log("btn1 has been clicked");
//     let a=25;
//     a++;
//     console.log(a);
//  }

 btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
 }
 let div= document.querySelector("div");
 div.onmouseover=()=>{
    console.log("you are inside div")
 }

 /* Event object
 it is a special object that has details about the event.
 All event handlers have access to the event objects properties and methods

 node.event=(e)=>{
    //handle here
 }*/

 //event listener
 /*node.addEventListener(event,callback)
 node.removeEventListener(event,callback)

 note the callback reference should be same to remove*/

 let btn2=document.querySelector("#btn2");
 btn2.addEventListener("click",()=>{
    console.log("button2 is submit button")
 });
 btn2.addEventListener("click",()=>{
    console.log("button2 is submit button handler2")
 });
 btn2.addEventListener("click",()=>{
    console.log("button2 is submit button handler3")
 });
 btn2.addEventListener("click",()=>{
    console.log("button2 is submit button handler4")
 });
 
 