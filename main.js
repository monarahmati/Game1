const choose = ["Rock" , "Paper" , "scissors"];

const userChoose = prompt("choose : Rock , Paper , scissors ")
if (userChoose) {
    console.log(`Your choose ( ${userChoose} )`)
}else{
    console.log("False")
}

const randomChoose = Math.floor(Math.random(choose) * 3);
const computerChoose = choose[randomChoose];

console.log(`Computer chooses ( ${computerChoose} )`);

if ( userChoose === computerChoose){
    console.log(` mosavy shoden`)
} else if(userChoose === "Rock") {
    if ( computerChoose === "scissors"){
        console.log(`You Win!`)
    } else {
        console.log(` You lose!`)
    }
} else if ( userChoose === "Paper" ) {
    if (computerChoose === "Rock"){
        console.log(`You Win!`)
    }  else {
        console.log(`You lose!`)
    }
} else if (userChoose === "scissors"){
    if ( computerChoose === "Paper"){
        console.log(`You win!`)
    }else{
        console.log(`You lose!`)
    }
}
