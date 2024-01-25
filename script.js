let userscore = 0;
let compscore = 0;
const user =document.querySelector("#user-score");
const comp = document.querySelector("#comp");
const play = document.querySelector("#message");
const Drawgame = () => {
    console.log("Choices are same game Draw");
    play.innerText ="Game Draw Play Again!!";
    play.style.backgroundColor = "#081031";
}
const showwinner =(userwin,userchoice,computer) =>
{
    if(userwin)
    {
       play.innerText =`${userchoice} beats ${computer} You Win !!`;
       console.log("You Win");
       play.style.backgroundColor = "green";
       userscore++;
       user.innerText =`${userscore}`;

    }
    else
    {
        play.innerText =`${computer} beats ${userchoice} You Losse !!`;
        console.log("You loose");
        play.style.backgroundColor = "red";
        compscore++;
        comp.innerText =`${compscore}`;

    }
};
let choices = document.querySelectorAll(".choice");

const genCompChoices =() =>
{
    const option =["rock","paper","scissors"];
    let ind = Math.floor(Math.random()*3);

    // console.log("computer choice -> ",option[ind]);
     return option[ind];
}
const playGame =(userchoice) =>
{
    console.log("User choice -> ",userchoice);
    
    const computer = genCompChoices();
    console.log("computer choices -> ",computer)


    if(userchoice === computer)
    {
        Drawgame();
    }

    else
    {
        let userwin = true;
        if(userchoice === "rock")
        {
            //scissors or paper
            userwin = computer ==="scissors"?true:false;


        }

        else if(userchoice === "scissors")
        {
            //rock or paper

            userwin = computer ==="rock"?false:true;
        }

        else
        {
            //rock or scissor

            userwin = computer ==="scissors"?false:true;
        }

        showwinner(userwin,userchoice,computer);
    }
   
 
};

choices.forEach((choice) =>
{
 
    choice.addEventListener("click",() =>
    {

        const userchoice = choice.getAttribute("id");

        playGame(userchoice);
       

    });
});
