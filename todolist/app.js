var input=document.getElementById("userInput");
var ul=document.querySelector("ul");
var botton=document.getElementById("enter");

function creatListeElement() {    //Declaration de la fonction
    var li=document.createElement("li");   //Creation element
    var textValue=document.createTextNode(input.value);   //Creation element qui nous avons pas sur html
    li.appendChild(textValue);                           //appenchild=Creation element wast mn element
    ul.appendChild(li);
    input.value="";
    // function liColor (){
    // li.classList.toggle("color");
    // }
    // li.addEventListener("click",liColor);

    var deleteButton=document.createElement("button");
     deleteButton.appendChild(document.createTextNode("X"));
     li.appendChild(deleteButton);
     deleteButton.addEventListener("click",deleteIteam);
    function deleteIteam(){
        li.classList.add("delete");
    }
    
}
function inputLength (){                                     //longeur du caractere
    return input.value.length;                              //le resultat
}

function addListeAfterClick(){                                   
    if (inputLength()>0) {
        creatListeElement();
    }
}
function addListeAfterPress (event){
    if (inputLength()>0 && event.which===13) {                  //code du botton
        creatListeElement();
    }

}
botton.addEventListener("click", addListeAfterClick);               //une fois nclickiw y3tina lresultat

input.addEventListener("keypress", addListeAfterPress);
