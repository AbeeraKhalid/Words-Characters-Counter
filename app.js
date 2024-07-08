let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
   
    var text =this.value;
    let char =text.length;
    document.getElementById("Char").innerHTML = char;
   
    text= text.trim();
    let words= text.split(" ");
    let Cleanlist =words.filter(function(element){
        return element !="";
    })
    // console.log(words) 
    document.getElementById("Word").innerHTML=words.length

})