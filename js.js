function startGame(){
    gameloop()
}

var count = 0;
var personVis = false;
var score = 0;

function gameloop(){
    personVis = !personVis

    if (personVis == true){
        var classToset = "character visible"
    }
    else{
        var classToset = "character hidden"
    }

    var gamezone = document.getElementById("gamezone");

    for( i = 0; i<8; i++){
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML = " "
        gamezone.children[i].onclick = function(){score -= 2; document.getElementById("scores").innerHTML = "Баллы: "+score }
    }

    var randomNum = Math.floor(Math.random()*8) + 1;

    gamezone.children[randomNum-1].innerHTML = " "
    gamezone.children[randomNum-1].className = classToset + " tail";
    gamezone.children[randomNum-1].onclick = function(){score += 1; document.getElementById("scores").innerHTML = "Баллы: "+score}

    count += 1;

    if(count < 15){
        setTimeout(gameloop, personVis ? 1000 : 3000)   
    }
    else{
        alert("Игра окончена");
        alert("твой счет " + score);  
    }



}