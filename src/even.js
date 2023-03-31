import readlineSync from "readline-sync";

/*export const greeting = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
};*/

const getRandomNum = () => Math.round(Math.random() * (11 - 1) + 1);

const questionAnswer = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let j = true;
  for (let i = 1; i <= 3 && j === true; i += 1) {
    let questionNum = getRandomNum();
    console.log(`Question: ${questionNum}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === "yes" && questionNum % 2 === 0) {
      if (i === 3) {
        console.log("Correct!");
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log("Correct!");
        j = true;
      }
    } else if (answer === "no" && questionNum % 2 !== 0) {
      if (i === 3) {
        console.log("Correct!");
        console.log(`Congratulations, ${name}!`);
      } else {
        console.log("Correct!");
        j = true;
      }
    } else if (answer === "yes" && questionNum % 2 !== 0) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
      );
      j = false;
    } else if (answer === "no" && questionNum % 2 === 0) {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`
      );
      j = false;
    }
  }
};

export default questionAnswer;
