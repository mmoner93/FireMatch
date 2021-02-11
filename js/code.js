/***********Declaraciones de estructuras**************/

function jugador(){
this.list_rondas=[];
this.ronda_actual=0;
}

function ronda(){
this.main_caracter="";
this.list_caracters=[];
this.fichaUsing=0;
}


function caracter(isMain,name){
this.isMain=isMain;
this.name=name;
this.list_atributes=[];
this.list_photos=[];
this.foto_showing=0;

}

function atribute(description,isDisonance,isBlock){
this.description=description;
this.isDisonance=isDisonance;
this.isBlock=isBlock;
}

function photo_caracter(src,isDisonance,isBlock){
this.src=src;
this.isDisonance=isDisonance;
this.isBlock=isBlock;
this.srcBlocked="https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";

}


function main_escritorio(){
  this.usingPantalla1=false;
  this.cualPantalla1="";
  this.usingPantalla2=false;
  this.cualPantalla2="";
}



function pantalla(){

}

/***********Declaraciones de estructuras  END**************/


/***********INICIALIZAR**************/

var escritorio=new main_escritorio();
var ronda_prueba=new ronda();




var personaje_prueba=new caracter(true,"Pepe pruebas");
console.log(personaje_prueba);

var atributo_1=new atribute("Soy ciego",false,false);
var atributo_2=new atribute("Me gusta las cabras",false,false);
var atributo_3=new atribute("Soy de campo",false,false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1=new photo_caracter("https://image.shutterstock.com/z/stock-vector-vector-pixel-art-suspicious-man-isolated-cartoon-1591895995.jpg",false,false);
var foto2=new photo_caracter("https://image.shutterstock.com/image-vector/vector-pixel-art-girl-anime-600w-1102810826.jpg",false,false);
var foto3=new photo_caracter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2BGxHSQK46Kgw49miYuO3142BjlvC9j_lA&usqp=CAU",false,false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1=new caracter(true,"SARA pruebas");
console.log(personaje_prueba);

var atributo_1=new atribute("Soy ciega",false,false);
var atributo_2=new atribute("Me gustas tu",false,false);
var atributo_3=new atribute("Soy poliamorosa",false,false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1=new photo_caracter("https://www.lorealprofessionnel.es/-/media/master/es/webedia-hair-trend-news-2/es_es/3144/7192-peinados-para-cara-redonda-orig-2.ashx",false,false);
var foto2=new photo_caracter("https://i.pinimg.com/originals/db/50/89/db508974ed8fbd967c62df21ce5a1eb3.jpg",false,false);
var foto3=new photo_caracter("https://img4.codigonuevo.com/ef/de/06/caras-futuro-mileniales-codigo-nuevo-930x600.jpg",false,true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


var personaje_prueba2=new caracter(true,"Juan pruebas");
console.log(personaje_prueba);

var atributo_1=new atribute("Arriba la fiesta",false,false);
var atributo_2=new atribute("No soy fiel",false,false);
var atributo_3=new atribute("Robo todo",false,false);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1=new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg",false,true);
var foto2=new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg",false,false);
var foto3=new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg",false,false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


ronda_prueba.main_caracter=personaje_prueba;
ronda_prueba.list_caracters.push(personaje_prueba1);
ronda_prueba.list_caracters.push(personaje_prueba2);



/***********INICIALIZAR END**************/



/***********PARA TARJETAS**************/

var flecha_next= document.querySelector("img#flecha");
flecha_next.addEventListener("click", nextImage);

function nextImage(e){

if(this.id === "flecha"){
  var pantalla=document.querySelector("."+whereIsPantalla("tarjetas_icono"));
  var imagen_usuario=pantalla.querySelector("img#img_caracter");
  ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing+1;
  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing>2){
  ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing=0;

  }
  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock){
    imagen_usuario.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked;
  }else{
    imagen_usuario.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
  }


}else if(this.id === "flecha_2"){
  var pantalla=document.querySelector("."+whereIsPantalla("tarjeta_principal_icono"));
  var imagen_usuario=pantalla.querySelector("img#img_caracter");
  ronda_prueba.main_caracter.foto_showing=ronda_prueba.main_caracter.foto_showing+1;
  if(ronda_prueba.main_caracter.foto_showing>2){
  ronda_prueba.main_caracter.foto_showing=0;

  }
  imagen_usuario.src=ronda_prueba.main_caracter.list_photos[ronda_prueba.main_caracter.foto_showing].src;

}


}

var flecha_next= document.querySelector("img#flecha_2");
flecha_next.addEventListener("click", nextImage);




var flecha_next_ficha= document.querySelector("img#flecha_ficha");
flecha_next_ficha.addEventListener("click", nextFicha);

function nextFicha(e){
  ronda_prueba.fichaUsing=ronda_prueba.fichaUsing+1;
  if(ronda_prueba.fichaUsing>1){
    ronda_prueba.fichaUsing=0;
  }
  var result=whereIsPantalla("tarjetas_icono");
  console.log(result);
  pantalla_volcar=document.querySelector("."+result);
  var imagen_caracter=pantalla_volcar.querySelector("#img_caracter");
  var name=pantalla_volcar.querySelector("#name_caracter");
  var atr1=pantalla_volcar.querySelector("#atributo_1");
  var atr2=pantalla_volcar.querySelector("#atributo_2");
  var atr3=pantalla_volcar.querySelector("#atributo_3");

  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].isBlock){
    imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].srcBlocked;
  }else{
    imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].src;
  }

  name.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
  atr1.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].description;
  atr2.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].description;
  atr3.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].description;

}


/***********PARA TARJETAS END**************/

/*********Para el escritorio**************/


function whereIsPantalla(namePantalla){
console.log("nombre pantalla" + namePantalla);
console.log("nombre pantalla" + escritorio.cualPantalla1);
console.log(escritorio);
  if( escritorio.cualPantalla1==namePantalla){
    return "Pantalla_1";

  }else if(escritorio.cualPantalla2==namePantalla){
    return "Pantalla_2";

  }else{

    return "NO_EXIST";
  }



}


function pantalla_libre(pantallaNueva){
  if (escritorio.usingPantalla1 ==false){

    escritorio.usingPantalla1=true;
    escritorio.cualPantalla1=pantallaNueva;
    return "Pantalla_1";

  }else{

    escritorio.usingPantalla2=true;
    escritorio.cualPantalla2=pantallaNueva;
    return "Pantalla_2";
  }

}


var icono_tarjetas = document.querySelector("img#tarjetas_icono");
var icono_chat= document.querySelector("img#chat_icono");
var icono_main= document.querySelector("img#tarjeta_principal_icono");

icono_tarjetas.addEventListener("click", onClickIcon);
icono_chat.addEventListener("click", onClickIcon);
icono_main.addEventListener("click", onClickIcon);





function onClickIcon(e) {

/*switch(this.id){
case "tarjetas_icono":

break;

default:
break;


}*/

var pantalla_volcar=document.querySelector("." + pantalla_libre(this.id));
switch (this.id) {
  case "tarjetas_icono":
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    //pantalla_volcar.style.backgroundColor = "black";
    pantalla_volcar.style.visibility="visible";
    var imagen_caracter=pantalla_volcar.querySelector("#img_caracter");
    var name=pantalla_volcar.querySelector("#name_caracter");
    var atr1=pantalla_volcar.querySelector("#atributo_1");
    var atr2=pantalla_volcar.querySelector("#atributo_2");
    var atr3=pantalla_volcar.querySelector("#atributo_3");
    if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].isBlock){
      imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].srcBlocked;
    }else{
      imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].src;
    }
    imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[0].src;
    name.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
    atr1.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].description;
    atr2.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].description;
    atr3.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].description;

    break;
  case "chat_icono":
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    break;
  case "tarjeta_principal_icono":
  pantalla_volcar.style.visibility="visible";
  var imagen_caracter=pantalla_volcar.querySelector("#img_caracter");
  var name=pantalla_volcar.querySelector("#name_caracter");
  var atr1=pantalla_volcar.querySelector("#atributo_1");
  var atr2=pantalla_volcar.querySelector("#atributo_2");
  var atr3=pantalla_volcar.querySelector("#atributo_3");

  imagen_caracter.src=personaje_prueba.list_photos[0].src;
  name.innerText=personaje_prueba.name;
  atr1.innerText=personaje_prueba.list_atributes[0].description;
  atr2.innerText=personaje_prueba.list_atributes[1].description;
  atr3.innerText=personaje_prueba.list_atributes[2].description;
    break;
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    break;
}



}


/*********Para el escritorio END**************/
