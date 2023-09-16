
// let string = 'meenu yadav';
// for (var i = string.length-1; i >= 0; i--){
//     console.log(string[i]);
// } 
function reverseString(str){
    var NewString = "";
 for (var i = str.length-1; i >= 0; i--){
    NewString += str[i];
 }
 console.log(NewString);
}
reverseString("meenu yadav");
  
