// Code your solutions in this file
const names = (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(names) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  };

  return (messages);
};



function countDown() {
  let count = 11;
  while (count > 0) {
    count--;
    console.log(count);
  };
};
