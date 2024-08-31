const popAnimation= [
    {transform: "translateY(5px)", opacity: 0},
    {transform: "translateY(-5px)", opacity: 1}
];

const animateTiming = {
    duration: 500,
    iterations: 1,
}

let  i = 0;

function plus(){
    i++;
    document.getElementById('Quantity').innerHTML = `${i}`;
    
}

function minus(){
    i--;
    document.getElementById('Quantity').innerHTML = `${i}`;
    
}


document.getElementById('s1').addEventListener('click', ()=>{
    document.getElementById('s1').style.boxShadow = '0 0 20px white'; 
    document.getElementById('s1').style.transform = 'scale(1.1)';
    document.getElementById('s2').style.boxShadow = 'none'; 
    document.getElementById('s2').style.transform = 'scale(1)'; 
    document.getElementById('s3').style.boxShadow = 'none'; 
    document.getElementById('s3').style.transform = 'scale(1)';  
    document.getElementById('s4').style.boxShadow = 'none'; 
    document.getElementById('s4').style.transform = 'scale(1)';
    document.getElementById('s5').style.boxShadow = 'none'; 
    document.getElementById('s5').style.transform = 'scale(1)';  
    document.getElementById('mainImgCont').innerHTML = '<img class="c11-gal" src="pics/curry11.png" alt="">';
    document.getElementById('shoeName').innerHTML = 'Curry 11';
    document.getElementById('shoeName').animate(popAnimation, animateTiming);
    document.getElementById('desc').innerHTML = 'The Curry Flow 11 seems like a natural evolution in Curry &#39 s signature line. With a low profile design, lightweight and offering excellent ankle support thanks to the sculpted heel.'
    document.getElementById('desc').animate(popAnimation, animateTiming);
});

document.getElementById('s2').addEventListener('click', ()=>{
    document.getElementById('s2').style.boxShadow = '0 0 20px white'; 
    document.getElementById('s2').style.transform = 'scale(1.1)'; 
    document.getElementById('s1').style.boxShadow = 'none'; 
    document.getElementById('s1').style.transform = 'scale(1)'; 
    document.getElementById('s3').style.boxShadow = 'none'; 
    document.getElementById('s3').style.transform = 'scale(1)'; 
    document.getElementById('s4').style.boxShadow = 'none'; 
    document.getElementById('s4').style.transform = 'scale(1)'; 
    document.getElementById('s5').style.boxShadow = 'none'; 
    document.getElementById('s5').style.transform = 'scale(1)'; 
    document.getElementById('mainImgCont').innerHTML = '<img class="kb6-gal" src="pics/kobe6grinch.png" alt="">';
    document.getElementById('shoeName').innerHTML = 'Kobe 6';
    document.getElementById('shoeName').animate(popAnimation, animateTiming);
    document.getElementById('desc').innerHTML = 'The Kobe 6 Protro sports a sleek, scaled upper inspired by its Black Mamba nickname. Lower, sleeker and faster than before,flexible Air Zoom Turbo unit, responsive foam.'
    document.getElementById('desc').animate(popAnimation, animateTiming);
});

document.getElementById('s3').addEventListener('click', ()=>{
    document.getElementById('s3').style.boxShadow = '0 0 20px white'; 
    document.getElementById('s3').style.transform = 'scale(1.1)'; 
    document.getElementById('s1').style.boxShadow = 'none'; 
    document.getElementById('s1').style.transform = 'scale(1)'; 
    document.getElementById('s2').style.boxShadow = 'none'; 
    document.getElementById('s2').style.transform = 'scale(1)'; 
    document.getElementById('s4').style.boxShadow = 'none'; 
    document.getElementById('s4').style.transform = 'scale(1)'; 
    document.getElementById('s5').style.boxShadow = 'none'; 
    document.getElementById('s5').style.transform = 'scale(1)'; 
    document.getElementById('mainImgCont').innerHTML = '<img class="l21-gal" src="pics/lebron21.png" alt="">';
    document.getElementById('shoeName').innerHTML = 'Lebron 21';  
    document.getElementById('shoeName').animate(popAnimation, animateTiming);
    document.getElementById('desc').innerHTML = 'Last time around, LeBron flipped the script on his shoe game as only the King can. The encore is even better. The LeBron XXI has a cabling system that works with Zoom Air cushioning.';
    document.getElementById('desc').animate(popAnimation, animateTiming);
});

document.getElementById('s4').addEventListener('click', ()=>{
    document.getElementById('s4').style.boxShadow = '0 0 20px white'; 
    document.getElementById('s4').style.transform = 'scale(1.1)'; 
    document.getElementById('s1').style.boxShadow = 'none'; 
    document.getElementById('s1').style.transform = 'scale(1)'; 
    document.getElementById('s2').style.boxShadow = 'none'; 
    document.getElementById('s2').style.transform = 'scale(1)'; 
    document.getElementById('s3').style.boxShadow = 'none'; 
    document.getElementById('s3').style.transform = 'scale(1)'; 
    document.getElementById('s5').style.boxShadow = 'none'; 
    document.getElementById('s5').style.transform = 'scale(1)'; 
    document.getElementById('mainImgCont').innerHTML = '<img class="ky7-gal" src="pics/Kyrie7.png" alt="">';
    document.getElementById('shoeName').innerHTML = 'Kyrie 7';
    document.getElementById('shoeName').animate(popAnimation, animateTiming);
    document.getElementById('desc').innerHTML = 'This 7 Nike Kyrie sneaker is dubbed as Bred and showcases a blend of black, University Red, as well as white. The upper of this sneaker is made of black mesh, while the midsole features red accents.'
    document.getElementById('desc').animate(popAnimation, animateTiming);
});

document.getElementById('s5').addEventListener('click', ()=>{
    document.getElementById('s5').style.boxShadow = '0 0 20px white'; 
    document.getElementById('s5').style.transform = 'scale(1.1)';
    document.getElementById('s1').style.boxShadow = 'none'; 
    document.getElementById('s1').style.transform = 'scale(1)'; 
    document.getElementById('s2').style.boxShadow = 'none'; 
    document.getElementById('s2').style.transform = 'scale(1)'; 
    document.getElementById('s3').style.boxShadow = 'none'; 
    document.getElementById('s3').style.transform = 'scale(1)';  
    document.getElementById('s4').style.boxShadow = 'none'; 
    document.getElementById('s4').style.transform = 'scale(1)'; 
    document.getElementById('mainImgCont').innerHTML = '<img class="mb2-gal" src="pics/mb02.png" alt="">';
    document.getElementById('shoeName').innerHTML = 'PumaMB 02';
    document.getElementById('shoeName').animate(popAnimation, animateTiming);
    document.getElementById('desc').innerHTML = 'Stay consistent in your game and dominate the pitch like a legend with the MB.02 from PUMA. MB.02, these dynamic shoes continue to support your game Celebrating LaMelo Balls star-studded future'
    document.getElementById('desc').animate(popAnimation, animateTiming);
});