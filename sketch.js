function setup() {
  createCanvas3D(windowWidth, windowHeight);
  environment (SUNSET)
  
  var quercia = beginGroup()
  diffuse("#3F2300");
  cylinder(0, 1, 0, 0.5, 2);
  roughness(1);
  diffuse("#013509")
  roughness(0.1);
  sphere(0, 2.5, 0, 1.5)
  sphere(1, 2 , 0, 1)
  endGroup();
  var lato=30
  var numeroalberi=30;
for (var i=0; i<numeroalberi; i++) {
  var x=random (-lato/2, lato/2);
  var y=0;
  var z=random (-lato/2, lato/2);
    clone(quercia, x, y, z);
}
  
  var abete = beginGroup()
  diffuse("#3F2300");
 cylinder(-3, 0.5, 0, 0.5, 1);
  diffuse("#002506")
  roughness(0.1);
  cone(-3, 2.5, 0, 1, 3.5);
  clone(abete, -1, 0, 2)
  endGroup();
   var lato=31
  var numeroalberi=10;
for (var i=0; i<numeroalberi; i++) {
  var x=random (-lato/2, lato/2);
  var y=0;
  var z=random (-lato/2, lato/2);
    clone(abete, x, y, z);
  abete.setScale(random(1, 1.5));
}
  var terreno= beginGroup()
  align(BOTTOM);
  diffuse("#005C0F");
  box(0,0,0,lato, 1, lato);
  endGroup();
  pushFX(BLOOM,0.5);
  //pushFX(GLITCH)
  
  

}

function draw() {
  
}