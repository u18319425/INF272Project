function Vitals()
{
   
    document.getElementById("hRate").innerHTML = Math.floor((Math.random() * 100) + 80);
    document.getElementById("bSugar").innerHTML = Math.floor((Math.random() * 170) + 60);
    document.getElementById("wBlood").innerHTML = Math.floor((Math.random() * 100000) + 30000);
    document.getElementById("rBlood").innerHTML = Math.floor((Math.random() * 100000) + 30000);
    document.getElementById("glucose").innerHTML = Math.floor((Math.random() * 140) + 50);
    document.getElementById("cholesterol").innerHTML = Math.floor((Math.random() * 100) + 20);
    document.getElementById("bPressure").innerHTML = Math.floor((Math.random() * 150) + 35);
    document.getElementById("antibodies").innerHTML = Math.floor((Math.random() * 20000) + 7000);
    document.getElementById("iLevels").innerHTML = Math.floor((Math.random() * 600) + 450);
    
}

setInterval(Vitals(), 2000);
