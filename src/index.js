module.exports = function toReadable (number) {
   
    let arr = String(number).split("");
          
    let one = ["zero", 'one', "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let two = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let hu_th = ["hundred", "thousand"];  
    
    
    if (number==0){
       return('zero');
    }
 
    if (arr.length == 1){
       return (one[arr[0]]);
    }
       
     if (arr.length == 2&&number>19){
          if (arr[1]==0){
        return (two[arr[0]]);
    }
      
          return (two[arr[0]]+" "+one[arr[1]]);
      }
      else if(number<=19)  {
          return(teens[arr[1]]);
      }
    
      if(arr.length == 3){
       let x = one[arr[0]];
       arr=arr.slice(1, 3);
       let y = arr.join("");
       if (y>19){
          if (arr[1]==0){
        return (x+" hundred "+two[arr[0]]);
    }
      
          return (x+" hundred "+two[arr[0]]+" "+one[arr[1]]);
      }
      else {
          if (arr[0]==0&&arr[1]==0){
          return(x+" hundred");
         }
          if (arr[0]==0){
              return (x+" hundred"+" "+one[arr[1]]);
          }
          
          return(x+" hundred "+teens[arr[1]]);
      }





      }






    }
