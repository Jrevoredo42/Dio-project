
function substituiPares(array){

    if(!array.length) return -1;
    if(!array) return -1;

    for(let i=0; i<array.length; i++){

        if(array[i] === 0){
            console.log('Vocẽ já tem o valor zero');
        }
         else if(array[i] % 2 === 0){
             console.log(`substituindo ${array[i]} por 0`)
            array[i] = 0
        }
      
    }
        return array

}

let exArray = [1, 4, 12, 53, 19, 21, 0];
substituiPares(exArray);

  
    
    
