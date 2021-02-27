var https = require("https");

/*
function CatStrings(p1, p2, p3)
{
  var s = p1;
  if(typeof p2 !== "undefined") {s += p2;}
  if(typeof p3 !== "undefined") {s += p3;}
  return s;
};
*/
/*=========================================================================================*/


var options = { 
  host: 'min-api.cryptocompare.com',
  path: '/data/price?fsym=BTC&tsyms=USD,JPY,EUR',
  //port: 80,
  method: 'GET',
  headers: { "api_key" : "5aaae87dee4132ce6b96a4b9ec3114e442aa02413c647fb7a133a742fdc3c7e6" }
  //fsym=BTC,
  //tsyms=USD,JPY,EUR
};


var request = https.get(options,function (http_res){
 var data = "";

 // this event fires many times, each time collecting another piece of the response
 http_res.on("data", function (chunk) {
     // append this chunk to our growing `data` var
     data += chunk;
 });

 // this event fires *one* time, after all the `data` events/chunks have been gathered
 http_res.on("end", function () {
     // you can use res.send instead of console.log to output via express
     console.log(data)
 });
    

}).on("error", (err) => {
 console.log("Error: " + err.message);
 });


/*======================================================================================================*/

var options = { 
  host: 'min-api.cryptocompare.com',
  path: '/data/pricehistorical?fsym=BTC&tsyms=USD&ts=1611872912',
  //port: 80,
  method: 'GET',
  headers: { "api_key" : "5aaae87dee4132ce6b96a4b9ec3114e442aa02413c647fb7a133a742fdc3c7e6" }
  //fsym=BTC,
  //tsyms=USD,JPY,EUR
};


var request = https.get(options,function (http_res){
 var data = "";

 // this event fires many times, each time collecting another piece of the response
 http_res.on("data", function (chunk) {
     // append this chunk to our growing `data` var
     data += chunk;
 });

 // this event fires *one* time, after all the `data` events/chunks have been gathered
 http_res.on("end", function () {
     // you can use res.send instead of console.log to output via express
     console.log(data)
 });
    

}).on("error", (err) => {
 console.log("Error: " + err.message);
 });


 /*======================================================================================================*/

var options = { 
   host: 'min-api.cryptocompare.com',
   path: '/data/all/coinlist',
   //port: 80,
   method: 'GET',
   headers: { "api_key" : "5aaae87dee4132ce6b96a4b9ec3114e442aa02413c647fb7a133a742fdc3c7e6" }
   //fsym=BTC,
   //tsyms=USD,JPY,EUR
};
 

 var request = https.get(options,function (http_res){
  var data = "";

  // this event fires many times, each time collecting another piece of the response
  http_res.on("data", function (chunk) {
      // append this chunk to our growing `data` var
      data += chunk;
  });

  // this event fires *one* time, after all the `data` events/chunks have been gathered
  http_res.on("end", function () {
      // you can use res.send instead of console.log to output via express

      let arr = [JSON.parse(data)] ;
      arr.filter( item => {
        iterateObject(item);
      });
      
      function iterateObject(obj) {
        for(prop in obj) {
          if(typeof(obj[prop]) == "object"){
            iterateObject(obj[prop]);
          } else {
            if(prop == "Symbol") {
              console.log(obj[prop]);
            }
          }
        }
      }
      
    });

 }).on("error", (err) => {
  console.log("Error: " + err.message);
  });


  /*=====================================================================================================*/





