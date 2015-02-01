
/*
 * all codes here are to perform functions and to controll all operation.
   the function like parsing, converting, accessing, system file (read, new write, append)
   crawling and etc.
   all functions here are special function that do not exist on midleware neither express   
 */

 /*
	format function to create here, like this :
	//with callback
	exports.wcb_function-name = function(param1, param2, callback){
	  use the param
	  finally call the callback
	};
	//give return value 
	exports.wrv_function-name = function(param1, param2, param3,...,paramn){
		statement
		return value;
	}
 */
 
//sample wcb
 exports.wcb_test = function(words, callback){
  callback(words);
};

//sample wrv
 exports.wcb_test = function(words){
  return (words);
};
