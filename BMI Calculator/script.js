//Ayoub Unitop new web project
//////////////  BMI Calculator  //////////
//Bmi Formula: weight (kg) / [height (m)]2

//1 getting infos.-> Dom
const heightInput = document.querySelector('.height-input');
const weightInput = document.querySelector('.weight-input'); 

const height = Number(heightInput.value);
const weight = Number(weightInput.value);

// 3 calculating

function calculate(){
    const BMI =  weight/(height*height);
    console.log(parseFloat(BMI));
    
}








