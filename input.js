// const stdin = process.stdin; 

let connection; 

const setupInput = function (conn) {
  const stdin = process.stdin; 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); 

  connection = conn ; 

  const handleUserInput = function (key) {
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left")
    }
    if (key === 's') {
      conn.write("Move: down")
    }
    if (key === 'd') {
      conn.write("Move: right")
    }
  }

  stdin.on("data", handleUserInput); 

  return stdin;
}

module.exports = {setupInput}; 