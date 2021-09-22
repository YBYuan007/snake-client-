const net = require("net") ; 

const connect = function (){   // create a variable: connect
  const conn = net.createConnection({
    host: "135.23.223.133", 
    port: 50542}, 
    console.log("yes mann")); 
    conn.setEncoding("utf8"); 

    conn.on("connect", ()=>{
      conn.write("Name: YBY");
      console.log("Successfully connected to game server ..yadayada");

      let a = ["Move: up","Move: left","Move: down","Move: right"]; 

      for (let j = 0 ; j < a.length; j++ ) {
        console.log("yyyyyyy");
        setTimeout(()=>{
        for (let i  = 0 ; i < 10; i++){ 
          setTimeout(()=>{  
            conn.write(a[j]);
            }, 100*i)}
          }, 1000*j)}
      });

    conn.on("data", (data) => {
      console.log(data);
    });

    return conn;     
};
connect();
module.exports = connect ; 

        // (function(innerv, outterv) {
        //   setTimeout(function() { 
        //     setTimeout(()=>{  
        //       conn.write(a[j]);
        //       console.log("innerv: ", innerv , "outterv: ", outterv);
        //       console.log("time: ", 50*innerv+j*10, "motion: ", a[outterv]);
        //       }, 50*innerv)
        //   },  outterv);
        // })(i,j);
