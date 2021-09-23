const {connect}= require("./client"); // set up connection 
const {setupInput} = require("./input");  // allow inputs 

console.log("connecting...") ;
const conn = connect();

setupInput(conn);