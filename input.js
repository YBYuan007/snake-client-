const handleUserInput = function (abc) {
  // your code here
  console.log(`you typed: ${abc}`);
};

const setupInput = (fun)=>{
  const stdin = process.stdin;
  stdin.on("data", fun)
};

module.exports ={
  handleUserInput,
  setupInput
}


// We're specifically referring to the handleUserInput and setupInput functions.