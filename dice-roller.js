const args = process.argv.slice(2);

const rollDice = function() {
  let newRoll = [];
  let total = "";
  for (let i = 0; i < args; i++) {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    newRoll.push(randomNum)
  }
  total = newRoll.join(", ");
  console.log(`Rolled ${args} dice: ${total}`)
};

rollDice();