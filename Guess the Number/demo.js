var gn = document.getElementById("one")
    var r = document.getElementById("result")
    var score = document.getElementById("score")
    var rn=Math.floor(Math.random()*10)+1
    var s=10
    function check()
    {
        var en = gn.value
        if(rn==en){
            console.log("You win!")
            result.textContent="Guess is Right"
            alert("YOU WON")
        }
        else{
            s=s-1
            score.textContent="Score:" + s
            console.log("You are Wrong!")
            result.textContent="Guess is Wrong"
            alert("YOU LOSE")
        }
    }