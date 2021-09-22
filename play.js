const net = require("net") ; 

const connect = function (){   // create a variable: connect
  const conn = net.createConnection({
    host: "135.23.223.133", 
    port: 50542}, 
    console.log("yes mann")); 
    conn.setEncoding("utf8"); 

    conn.on("connect" , ()=>{
      conn.write("Name: YBY"); 
      console.log("Successfully connected to game server ..yadayada");
    })
    conn.on("data", (data) => {
      // code that does something when the connection is first established
      console.log(data)
    });

    

    // console.log("yes mann2");
    return conn; 

    
}; 

// console.log("YB connecting .... ") ; 
connect();

module.exports = connect ; 
