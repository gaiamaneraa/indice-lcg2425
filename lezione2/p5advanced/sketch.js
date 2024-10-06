/* definisco le variabili globali
ovvero visibili e utilizzabili in tutto lo script */
let xsize = 100;
let ysize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //fare un cielo scuro
  background("darkblue");
  //vogliamo disegnare la luna
  fill ("lightyellow");
  stroke("white");
  strokeWeight(5);
  circle(300, 75,100);

    //disegno il prato??
    fill("green")
    stroke("lightgreen")
    strokeWeight(3)
    rect(0,370, 400, 30);

  //didascalia
  fill("white");
  stroke("darkblue");
  strokeWeight(3);
  text("c'era una volta...", 200, 390);

  //ora la prima stella
  stroke ("lightyellow");
  strokeWeight(30);
  point(10, 20);

  //definisco variabili
  let x_starprim= 15;
  let y_starprim= 20;
  point(x_starprim, y_starprim);
  let passo=1;
  //definisco come cambiano le stelle
  for(let i=0; i<50; i =i+passo){
    strokeWeight(i*3)
    if(i%2==0){ /*il resto della divisione per due */
      //corpo di ramo vero (pari)
      stroke("lightyellow");
    } else{
      //corpo di ramo falso (dispari)
      stroke("pink")
    }
      point(x_starprim*i, y_starprim*i);
    }
}
