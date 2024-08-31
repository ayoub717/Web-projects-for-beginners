

function Convert(){
    let binaryresult = []
    let userInputElem = document.querySelector('.userInput-js');
    let result = document.querySelector('.result');
    let userInput = parseInt(userInputElem.value);
    let quo = Math.floor(userInput/2);
    let rem = userInput % 2;
    binaryresult.push(rem);
    while(quo > 0){
        rem = quo % 2;
        quo = Math.floor(quo/2);
        binaryresult.push(rem);
    }
    finalresult = '';
    binaryresult.reverse().forEach(function(item){
        finalresult +=  '<span>' + item + '</span>';
    });
    result.innerHTML =  finalresult ;


}