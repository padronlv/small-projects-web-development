var story = {
    q: "Hi, welcome to Spiced! Would you like to learn Node.js?",
    answers: {
        yes: {
            q: "Ok, your choice... Let's start. Do you know anything about programming?",
            answers: {
                yes: {
                    q: "And do you know anything about Javascript?",
                    answers: {
                        yes: "Ok. I would like to help you, but I don't have time sorry",
                        no: "Learn that before you come back"
                    }
                },
                no: "Really... Go out and enjoy your life!"
            }
        },
        no: "Great decision. Go out and enjoy your life!"
    }
};

const readline = require('readline');
const chalk = require("chalk");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(chalk.bgYellow(chalk.blue("hello")));
function game(story)  {
    rl.question(story.q, function(answer) {
        if(!story.answers[answer]){
            console.log("Answer the question please...");
            game(story);
        } else if (story.answers[answer].q) {
            game(story.answers[answer]);
        } else {
            console.log(chalk.bgYellow(chalk.blue(story.answers[answer])));
            rl.close();
        }
    });
}
game(story);
