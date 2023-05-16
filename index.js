const lavadora = {
  "power": false,
  "nivelAgua": 0,
  "nivelLavado": 0,
  "tiempoLavado": 0,
  "enjuague": 0,
  "lavar": false
}

function power(){
  if(lavadora.power){
      lavadora.power= false;
      document.getElementById('powerBadge').classList.remove('bg-success');
      document.getElementById("powerBadge").classList.add('bg-secondary');
      
      const successBadges = document.querySelectorAll('.bg-success');
      successBadges.forEach(badge => {
          badge.classList.remove('bg-success');
          badge.classList.add('bg-secondary');
      });
      lavadora.nivelAgua=0;
      lavadora.nivelLavado=0;
      lavadora.tiempoLavado = 0;
      lavadora.enjuague=3;
      lavadora.lavar=false;
  }else{
      lavadora.power= true;
      document.getElementById('powerBadge').classList.remove('bg-secondary');
      document.getElementById("powerBadge").classList.add('bg-success');
     
  }

}

function nivelAgua() {
  if(lavadora.nivelAgua  === 0 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelAgua = 1;
      document.getElementById('levelWater1').classList.remove('bg-secondary');
      document.getElementById('levelWater1').classList.add('bg-success');
  }else if(lavadora.nivelAgua === 1 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelAgua = 2;
      document.getElementById('levelWater1').classList.remove('bg-success');
      document.getElementById('levelWater1').classList.add('bg-secondary');
      document.getElementById('levelWater2').classList.remove('bg-secondary');
      document.getElementById('levelWater2').classList.add('bg-success');
  }else if(lavadora.nivelAgua === 2 && lavadora.power === true && lavadora.lavar === false) {
      lavadora.nivelAgua = 3;
      document.getElementById('levelWater2').classList.remove('bg-success');
      document.getElementById('levelWater2').classList.add('bg-secondary');
      document.getElementById('levelWater3').classList.remove('bg-secondary');
      document.getElementById('levelWater3').classList.add('bg-success');
  }else if(lavadora.nivelAgua === 3 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelAgua = 4;
      document.getElementById('levelWater3').classList.remove('bg-success');
      document.getElementById('levelWater3').classList.add('bg-secondary');
      document.getElementById('levelWater4').classList.remove('bg-secondary');
      document.getElementById('levelWater4').classList.add('bg-success');
  }else if(lavadora.nivelAgua === 4 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelAgua = 5;
      document.getElementById('levelWater4').classList.remove('bg-success');
      document.getElementById('levelWater4').classList.add('bg-secondary');
      document.getElementById('levelWater5').classList.remove('bg-secondary');
      document.getElementById('levelWater5').classList.add('bg-success');
  }else if(lavadora.nivelAgua === 5 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelAgua = 1;
      document.getElementById('levelWater5').classList.remove('bg-success');
      document.getElementById('levelWater5').classList.add('bg-secondary');
      document.getElementById('levelWater1').classList.remove('bg-secondary');
      document.getElementById('levelWater1').classList.add('bg-success');
  }
}

function nivelLavado(){
  
  if (lavadora.nivelLavado === 0 && lavadora.power === true && lavadora.lavar === false) {
      lavadora.nivelLavado = 1;
      document.getElementById('normal').classList.remove('bg-secondary');
      document.getElementById('normal').classList.add('bg-success');
  }else if(lavadora.nivelLavado === 1 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelLavado=2;
      document.getElementById('normal').classList.remove('bg-success');
      document.getElementById('normal').classList.add('bg-secondary');
      document.getElementById('medio').classList.remove('bg-secondary');
      document.getElementById('medio').classList.add('bg-success');
  }else if(lavadora.nivelLavado === 2 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelLavado=3;
      document.getElementById('medio').classList.remove('bg-success');
      document.getElementById('medio').classList.add('bg-secondary');
      document.getElementById('pesado').classList.remove('bg-secondary');
      document.getElementById('pesado').classList.add('bg-success');
  }else if(lavadora.nivelLavado === 3 && lavadora.power === true && lavadora.lavar === false){
      lavadora.nivelLavado=1;
      document.getElementById('pesado').classList.remove('bg-success');
      document.getElementById('pesado').classList.add('bg-secondary');
      document.getElementById('normal').classList.remove('bg-secondary');
      document.getElementById('normal').classList.add('bg-success');
  }
}

function tiempoLavado(){
  
  if(lavadora.tiempoLavado===0 && lavadora.power === true && lavadora.lavar === false){
      lavadora.tiempoLavado=1;
      document.getElementById('timing1').classList.remove('bg-secondary');
      document.getElementById('timing1').classList.add('bg-success');
  }else if(lavadora.tiempoLavado===1 && lavadora.power === true && lavadora.lavar === false){
      lavadora.tiempoLavado=2;
      document.getElementById('timing1').classList.remove('bg-success');
      document.getElementById('timing1').classList.add('bg-secondary');
      document.getElementById('timing2').classList.remove('bg-secondary');
      document.getElementById('timing2').classList.add('bg-success');
  }else if(lavadora.tiempoLavado===2 && lavadora.power === true && lavadora.lavar === false){
      lavadora.tiempoLavado=3;
      document.getElementById('timing2').classList.remove('bg-success');
      document.getElementById('timing2').classList.add('bg-secondary');
      document.getElementById('timing3').classList.remove('bg-secondary');
      document.getElementById('timing3').classList.add('bg-success');
  }else if(lavadora.tiempoLavado===3 && lavadora.power === true && lavadora.lavar === false){
      lavadora.tiempoLavado=4;
      document.getElementById('timing3').classList.remove('bg-success');
      document.getElementById('timing3').classList.add('bg-secondary');
      document.getElementById('timing4').classList.remove('bg-secondary');
      document.getElementById('timing4').classList.add('bg-success');
  }else if(lavadora.tiempoLavado===4 && lavadora.power === true && lavadora.lavar === false){
      lavadora.tiempoLavado=5;
      document.getElementById('timing4').classList.remove('bg-success');
      document.getElementById('timing4').classList.add('bg-secondary');
      document.getElementById('timing5').classList.remove('bg-secondary');
      document.getElementById('timing5').classList.add('bg-success');
  }else if(lavadora.tiempoLavado===5 && lavadora.power === true && lavadora.lavar === false){
      lavadora.tiempoLavado=1;
      document.getElementById('timing5').classList.remove('bg-success');
      document.getElementById('timing5').classList.add('bg-secondary');
      document.getElementById('timing1').classList.remove('bg-secondary');
      document.getElementById('timing1').classList.add('bg-success');
  }
}

function enjuague(){
  console.log("enjuague");
  if(lavadora.enjuague===0 && lavadora.power === true && lavadora.lavar === false){
      lavadora.enjuague=1;
      document.getElementById('risen1').classList.remove('bg-secondary');
      document.getElementById('risen1').classList.add('bg-success');
  }else if(lavadora.enjuague===1 && lavadora.power === true && lavadora.lavar === false){
      lavadora.enjuague=2;
      document.getElementById('risen1').classList.remove('bg-success');
      document.getElementById('risen1').classList.add('bg-secondary');
      document.getElementById('risen2').classList.remove('bg-secondary');
      document.getElementById('risen2').classList.add('bg-success');
  }else if(lavadora.enjuague===2 && lavadora.power === true && lavadora.lavar === false){
      lavadora.enjuague=3;
      document.getElementById('risen2').classList.remove('bg-success');
      document.getElementById('risen2').classList.add('bg-secondary');
      document.getElementById('risen3').classList.remove('bg-secondary');
      document.getElementById('risen3').classList.add('bg-success');
  }else if(lavadora.enjuague===3 && lavadora.power === true && lavadora.lavar === false){
      lavadora.enjuague=1;
      document.getElementById('risen3').classList.remove('bg-success');
      document.getElementById('risen3').classList.add('bg-secondary');
      document.getElementById('risen1').classList.remove('bg-secondary');
      document.getElementById('risen1').classList.add('bg-success');
      
  }
}

function lavar(){
  console.log("lavando");
  if(lavadora.power === true && lavadora.nivelAgua >0 && lavadora.nivelLavado >0 && lavadora.tiempoLavado >0 && lavadora.enjuague >0){
      if(lavadora.lavar){
          lavadora.lavar= false;
      
          document.getElementById('lavar').classList.remove('bg-success');
          document.getElementById("lavar").classList.add('bg-secondary');
      }else{
          lavadora.lavar= true;
          document.getElementById('lavar').classList.remove('bg-secondary');
          document.getElementById("lavar").classList.add('bg-success');
      }
  }
  
}

function resetLavadora() {
  if (lavadora.power === true && lavadora.lavar === false) {
    lavadora.nivelAgua = 0;
    lavadora.nivelLavado = 0;
    lavadora.tiempoLavado = 0;
    lavadora.enjuague = 3;
    document.getElementById('levelWater1').classList.remove('bg-success');
    document.getElementById('levelWater1').classList.add('bg-secondary');
    document.getElementById('levelWater2').classList.remove('bg-success');
    document.getElementById('levelWater2').classList.add('bg-secondary');
    document.getElementById('levelWater3').classList.remove('bg-success');
    document.getElementById('levelWater3').classList.add('bg-secondary');
    document.getElementById('levelWater4').classList.remove('bg-success');
    document.getElementById('levelWater4').classList.add('bg-secondary');
    document.getElementById('levelWater5').classList.remove('bg-success');
    document.getElementById('levelWater5').classList.add('bg-secondary');
    document.getElementById('normal').classList.remove('bg-success');
    document.getElementById('normal').classList.add('bg-secondary');
    document.getElementById('medio').classList.remove('bg-success');
    document.getElementById('medio').classList.add('bg-secondary');
    document.getElementById('pesado').classList.remove('bg-success');
    document.getElementById('pesado').classList.add('bg-secondary');
    document.getElementById('timing1').classList.remove('bg-success');
    document.getElementById('timing1').classList.add('bg-secondary');
    document.getElementById('timing2').classList.remove('bg-success');
    document.getElementById('timing2').classList.add('bg-secondary');
    document.getElementById('timing3').classList.remove('bg-success');
    document.getElementById('timing3').classList.add('bg-secondary');
    document.getElementById('timing4').classList.remove('bg-success');
    document.getElementById('timing4').classList.add('bg-secondary');
    document.getElementById('timing5').classList.remove('bg-success');
    document.getElementById('timing5').classList.add('bg-secondary');
    document.getElementById('risen1').classList.remove('bg-success');
    document.getElementById('risen1').classList.add('bg-secondary');
    document.getElementById('risen2').classList.remove('bg-success');
    document.getElementById('risen2').classList.add('bg-secondary');
    document.getElementById('risen3').classList.remove('bg-success');
    document.getElementById('risen3').classList.add('bg-secondary');
    console.log("Lavadora reiniciada");
  }
}