let Textarea = document.getElementById("textbox");
 let Character= document.getElementById("Char")
 let Words = document.getElementById("Word");
 let Sentences = document.getElementById("Sentence");

 Textarea.addEventListener("input",()=>{
  Character.textContent=Textarea.value.length;
  let text=Textarea.value.trim();
  
  Words.textContent=text.split(/\s+/).filter((item)=>item).length;
  Sentences.textContent=text.split(/[.|?|!]+/g).length-1


 })
// textbox.addEventListener('input',function(){
   
//     var text =this.value;
//     let char =text.length;
//    
//     document.getElementById("Char").innerHTML = char;
    

//     text= text.trim();
//     let words= text.split(" ");
//     let Cleanlist =words.filter(function(element){
//         return element !="";-
//     // console.log(words) 
//     document.getElementById("Word").innerHTML=words.length
//     document.getElementById("Sentence").innerHTML = Sentences;
// })
