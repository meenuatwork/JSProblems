
function repeat (str,num){
   var input = "";
   if (num > 0){
    for (var i  = 0; i < num; i++){
        input = input + str;

    }
    console.log (input);
   } 
   else{
    console.log("error");
   } 
}

repeat("hey",4)
repeat("hay",0)
repeat("hay",-1)



