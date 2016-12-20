function permAlone(str) {
   var spl = str.split("");
   var result = [];
  
  
  
  var n = n ||spl.length;
  
  //Get the main arrays
  for(var i = 0; i<n; i++){
     swap(spl,0,i);
    result.push(spl);
    spl = str.split("");
  }
  
  //how manny permutations should i have?
  function factorial(f){
    if(f===0 || f === 1){
      return 1;
    }
    return f*factorial(f-1);
  }

  var numPerms = factorial(str.length);
  

  //Main function
 var perms = function(copyResul, x){
    //Copy the previous result and make new arrays from them
     var copyResul = result.slice();
    //go inside and from every array make their swap arrays
       for(var j = 0; j<copyResul.length; j++){
            var used = copyResul[j].slice(0,x); //slice the elemtns that are used
            var ostatak = copyResul[j].slice(x,copyResul.length);//what is left?
                  for(var i = 0; i<n-x; i++){//go inside what is left and swap that
                      swap(ostatak,0,i);
                      result.push(used.concat(ostatak));
                       ostatak = copyResul[j].slice(x,copyResul.length);  
                }                                  
        }    
 };

  //how manny times shoud i call perms function? till my variable z is less than str.length-2
  for( var z = 1; z <= str.length-2; z++){
    perms(result,z);
  } 
  
  //swaping two elemtns function
  function swap(arr, a,b){
     var tmp = arr[a];
     arr[a] = arr[b];
     arr[b] = tmp;   
   }

  //Reverse array to get the exact arrays and slice them!
  var lastArr =  result.reverse().slice(0,numPerms);
  return lastArr;
  
}

console.log(permAlone('ABCDE'));