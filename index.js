// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    const Scuber =42 ;
  if (num>Scuber) {
    return num - Scuber ;
  } 
  else 
   {return Scuber - num  }
}

function distanceFromHqInFeet(num){
   return distanceFromHqInBlocks(num) * 264 ;
}

function distanceTravelledInFeet(num1, num2){
   
  
    if (num2>num1){
      return ((num2 - num1)*264) ;
    }
    else  (num2<num1)
    {
        return ((num1-num2)*264) ;
    }
      }

f
function calculatesFarePrice(num1, num2){
    let dis = distanceTravelledInFeet(num1, num2) ;
    if (dis<400){
        return 0 ;
    }
    else if (dis>=400 && dis<=2000){
        return (dis-400)*0.02 ;
    }
    else if (dis>2000 && dis<=2500){
        return 25
    }
     else (dis>2500) 
         return 'cannot travel that far'
     
}
    
