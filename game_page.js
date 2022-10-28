player1_name = localStorage.getItem("player1_info");
player2_name = localStorage.getItem("player2_info");
player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;
document.getElementById("question_player").innerHTML = "question turn :" + player1_name;
document.getElementById("answer_player").innerHTML = "answer turn :" + player2_name;

function sendnumber() {
    
}



