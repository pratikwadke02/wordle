let enter = document.getElementById("enter");
let keys = document.querySelectorAll("button.keys");
let backspace = document.getElementById("Backspace");
let guess1 = document.getElementById("guessTable");
let answer = ["N","A","S","T","Y"];
let i = 1,
  j = 1;

keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (j > 5) {
      alert("Cannot enter more words");
    } else {
      
      console.log(keys.innerText);
      guess1.rows[i-1].cells.item(j-1).innerHTML = key.innerHTML;
      j++;
    }
  });
});

enter.addEventListener("click", () => {
    if(j==6 && i<7){
        console.log(enter.textContent);
        for(let x=0;x<5;x++){
            if(guess1.rows[i-1].cells.item(x).innerHTML == answer[x]){
                guess1.rows[i-1].cells.item(x).classList.add("bg-green");
            }else if(guess1.rows[i-1].cells.item(x).innerHTML == answer[0] ||guess1.rows[i-1].cells.item(x).innerHTML == answer[1] || guess1.rows[i-1].cells.item(x).innerHTML == answer[2] || guess1.rows[i-1].cells.item(x).innerHTML == answer[3] || guess1.rows[i-1].cells.item(x).innerHTML == answer[4]){
                guess1.rows[i-1].cells.item(x).classList.add("bg-yellow");
            }else{
                guess1.rows[i-1].cells.item(x).classList.add("bg-wrong");
            }
        }
        i++;
        j=1;
    }else{
        alert("Enter the full word");
    }
  
});

backspace.addEventListener("click",()=>{
    if(j>1){
        guess1.rows[i-1].cells.item(j-1).innerText = "";
        j--;
    }
})

//console.log(j);
//console.log(key.textContent);
      //let array_of_guess1 = guess1.children;
      //console.log(guess1);

      /*
let guess1 = document.getElementById("guessTable");
console.log(guess1.rows[0].cells.item(3).innerHTML);
*/