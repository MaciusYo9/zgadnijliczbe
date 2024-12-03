

let input=document.getElementById("value");
let button=document.getElementById("send");
let answer=document.getElementById("answer");
let lista=document.getElementById("lista")
let i =0;

let liczba=Math.floor(Math.random()*999+1);



button.addEventListener("click", check);

function check(){

    let value=Number(input.value);
    if(Number.isInteger(value) && value>=1 && value<=999){
        i++;

        if(liczba<value)
        {
            answer.innerHTML="Liczba jest mniejsza!";
        }
        else if(liczba>value)
        {
            answer.innerHTML="Liczba jest większa!";
        }
        else
        {
            answer.innerHTML="Brawo!!! "+liczba+" to poprawna odpowiedź! </br> Udało ci się za "+i+" razem";
            answer.classList.add("wygrana");
            button.innerHTML="Odśwież";
            button.removeEventListener("click", check);
            button.addEventListener("click",reset);

        }
         


        let li = document.createElement("li"); //tworzy element giga pro
        lista.appendChild(li); //dodaje cos do lista
        lista.lastChild.innerHTML=i.toString()+": "+value; //zamienia i na string

    }
    else{
        answer.innerHTML="Podaj poprawdną liczbę!!!"
    }



}


function reset(){
    location.reload(); //odświeża wszystko MEGA OP!!!!


}

let helpz = document.getElementById("podpowiedz");
helpz.addEventListener("click", toggleHelp);




function toggleHelp() {
    if (helpz.classList.contains("help2")) {
        // Jeśli podpowiedź jest otwarta, zamknij ją
        helpz.classList.remove("help2");
        helpz.innerHTML = "?";

    } else {
        // Jeśli podpowiedź jest zamknięta, otwórz ją
        
        helpz.classList.add("help2");
        
        setTimeout(()=> {

            helpz.innerHTML =
            "Twoja liczba jest +- od " +
            (liczba - Math.floor(Math.random() * 10 + 1)) +
            " do " +
            (liczba + Math.floor(Math.random() * 10 + 1));

        },500);
        
        
    }
}




