
/***********Declaraciones de estructuras**************/

function jugador(){
this.list_rondas=[];
this.ronda_actual=0;
}

function ronda(){
this.main_caracter="";
this.list_caracters=[];
this.fichaUsing=0;
this.chatUsing=0;
this.personajeAsignado="";
}


function caracter(isMain,name){
this.isMain=isMain;
this.name=name;
this.list_atributes=[];
this.list_photos=[];
this.foto_showing=0;
this.list_chat=[];

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

function chat(question,answer){
  this.question=question;
  this.answer=answer;
  this.used=false;
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

var atributo_1=new atribute("Soy ciega",false,true);
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


var chat1=new chat("Hobbie ?","Pues ser nini");
var chat2=new chat("Vives solo ?","Si las pelusas de mi ombligo no cuentan...");


personaje_prueba1.list_chat.push(chat1);
personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2=new caracter(true,"Juan pruebas");
console.log(personaje_prueba);

var atributo_1=new atribute("Arriba la fiesta",false,false);
var atributo_2=new atribute("No soy fiel",false,true);
var atributo_3=new atribute("Robo todo",false,true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1=new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg",false,true);
var foto2=new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg",false,false);
var foto3=new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg",false,false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


var chat1=new chat("Hobbie ?","Soy un elfo nivel 100");
var chat2=new chat("Vives solo ?","Mis waifus dicen que no");

personaje_prueba2.list_chat.push(chat1);
personaje_prueba2.list_chat.push(chat2);

ronda_prueba.main_caracter=personaje_prueba;
ronda_prueba.list_caracters.push(personaje_prueba1);
ronda_prueba.list_caracters.push(personaje_prueba2);



/***********INICIALIZAR END**************/



/***********PARA TARJETAS**************/

/*var flecha_next= document.querySelector("img#flecha");
flecha_next.addEventListener("click", nextImage);*/

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



function nextFicha(e){
  ronda_prueba.fichaUsing=ronda_prueba.fichaUsing+1;
  if(ronda_prueba.fichaUsing>1){
    ronda_prueba.fichaUsing=0;
  }
  var result=whereIsPantalla("tarjetas_icono");

  pantalla_volcar=document.querySelector("."+result);

  cleanPantalla(result)
  formarPantallaTarjetas("tarjetas_icono",true);
  llenarInfoTarjetaIcono(pantalla_volcar);
  if(momentoAsignacion()){

  activarAsignar();
  }
}


function imageBlocked(e){
var name=whereIsPantalla("tarjetas_icono");
var pantalla_volcar=document.querySelector("."+name);
var imagen_caracter=pantalla_volcar.querySelector("#img_caracter");
  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock){
    ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock=false;
  }
imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
}


function formarPantallaTarjetas(type,nuevo){
if(nuevo){
var pantalla_volcar=document.querySelector("." + whereIsPantalla(type));
pantalla_volcar.style.visibility="visible";
}else{
var pantalla_volcar=document.querySelector("." + pantalla_libre(type));

}


var ima_carac=document.createElement("img");
ima_carac.id="img_caracter";
ima_carac.addEventListener("click", imageBlocked);

var ima_flecha=document.createElement("img");
ima_flecha.src="https://e7.pngegg.com/pngimages/593/775/png-clipart-arrow-computer-icons-encapsulated-postscript-right-arrow-angle-text.png";
if(type=="tarjetas_icono"){

  ima_flecha.id="flecha";
}else if(type=="tarjeta_principal_icono"){

  ima_flecha.id="flecha_2";
}

ima_flecha.addEventListener("click", nextImage);

var name_cara=document.createElement("p");
name_cara.id="name_caracter";
if(type=="tarjetas_icono"){
  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock){
    var atributo_1=document.createElement("img");
    atributo_1.src="https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
    atributo_1.id="atributo_1_i";
    atributo_1.cual=0;
    atributo_1.addEventListener("click", unlockAtribute);
  }else{
    var atributo_1=document.createElement("p");
    atributo_1.id="atributo_1";
  }

  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].isBlock){
    var atributo_2=document.createElement("img");
    atributo_2.src="https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
    atributo_2.id="atributo_2_i";
    atributo_2.cual=1;
    atributo_2.addEventListener("click", unlockAtribute);
  }else{
    var atributo_2=document.createElement("p");
    atributo_2.id="atributo_2";
  }

  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].isBlock){
    var atributo_3=document.createElement("img");
    atributo_3.src="https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
    atributo_3.id="atributo_3_i";
    atributo_3.cual=2;
    atributo_3.addEventListener("click", unlockAtribute);
  }else{
    var atributo_3=document.createElement("p");
    atributo_3.id="atributo_3";
  }

}else{
  var atributo_1=document.createElement("p");
  atributo_1.id="atributo_1";
  var atributo_2=document.createElement("p");
  atributo_2.id="atributo_2";
  var atributo_3=document.createElement("p");
  atributo_3.id="atributo_3";
}






if(type=="tarjetas_icono"){

  var ima_flecha_ficha=document.createElement("img");
  ima_flecha_ficha.src="https://e7.pngegg.com/pngimages/593/775/png-clipart-arrow-computer-icons-encapsulated-postscript-right-arrow-angle-text.png";
  ima_flecha_ficha.id="flecha_ficha";
  ima_flecha_ficha.addEventListener("click", nextFicha);

  var verificarPareja=document.createElement("img");
  verificarPareja.src="https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-41-512.png";
  verificarPareja.id="verfiy_asig";
  verificarPareja.addEventListener("click", asignarPareja);
  verificarPareja.style.visibility="hidden";


}


var exit_icon=document.createElement("img");
exit_icon.src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
exit_icon.id="exitIcon";
exit_icon.cualPantalla=type;
exit_icon.addEventListener("click", exitPantalla);

pantalla_volcar.appendChild(ima_carac);
pantalla_volcar.appendChild(ima_flecha);
pantalla_volcar.appendChild(name_cara);
pantalla_volcar.appendChild(atributo_1);
pantalla_volcar.appendChild(atributo_2);
pantalla_volcar.appendChild(atributo_3);

if(type=="tarjetas_icono"){
pantalla_volcar.appendChild(ima_flecha_ficha);
pantalla_volcar.appendChild(verificarPareja);
}

pantalla_volcar.appendChild(exit_icon);



return pantalla_volcar;

}

function unlockAtribute(e){
var pantalla=document.querySelector("."+whereIsPantalla("tarjetas_icono"));
var atributoBlock=e.srcElement.cual;
ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[atributoBlock].isBlock=false;
cleanPantalla(whereIsPantalla("tarjetas_icono"));
var pantalla_volcar=formarPantallaTarjetas("tarjetas_icono",true);
llenarInfoTarjetaIcono(pantalla_volcar);
if(momentoAsignacion()){

activarAsignar();
}
}




/***********PARA TARJETAS END**************/


/***********PARA CHAT **************/

function formarChat(which){

var pantalla_volcar=document.querySelector("." + pantalla_libre(which.id));

var divMessages=document.createElement("div");
divMessages.id="ChatMessages";

var divQuestions=document.createElement("div");
divQuestions.id="ChatQuestions";

var exit_icon=document.createElement("img");
exit_icon.src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
exit_icon.id="exitIcon";
exit_icon.cualPantalla=which.id;
exit_icon.addEventListener("click", exitPantalla);

pantalla_volcar.appendChild(divMessages);
pantalla_volcar.appendChild(divQuestions);
pantalla_volcar.appendChild(exit_icon);

for (var i=0;i< ronda_prueba.list_caracters.length ;i++){
var p=document.createElement("p");
p.caracterChat=i;
p.innerText=ronda_prueba.list_caracters[i].name;
p.addEventListener("click", changeChat);
pantalla_volcar.appendChild(p);
}




return pantalla_volcar;
}


function changeChat(e){
var queCaracter=e.srcElement.caracterChat;
ronda_prueba.chatUsing=queCaracter;
clearMessages();
cleanQuestion();
llenarChatEscrito();
ponerPreguntasNohechas();



}


function llenarChatEscrito(){

  var divMessages=document.querySelector("#ChatMessages");
  for (var i=0; i<ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat.length;i++){
      if (ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].used){
        var question=ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].question;
        var p_q=document.createElement("p");
        p_q.innerText=question;
        var answer=ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].answer;
        var p_a=document.createElement("p");
        p_a.innerText=answer;
        divMessages.appendChild(p_q);
        divMessages.appendChild(p_a);
      }

  }


}

function ponerPreguntasNohechas(){

  var divQuestions=document.querySelector("#ChatQuestions");
  for (var i=0;i<ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat.length;i++){
    if (!ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].used){
        var question=ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].question;
        var p_q=document.createElement("p");
        p_q.id="";
        p_q.questionId=i;
        p_q.innerText=question;
        p_q.addEventListener("click", askQuestion);
        divQuestions.appendChild(p_q);
    }

  }

}


function askQuestion(e){

  var idquestion=e.srcElement.questionId;

  var question=ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].question;

  var answer=ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].answer;

    var divMessages=document.querySelector("#ChatMessages");
    var p_q=document.createElement("p");
    p_q.innerText=question;
    var p_a=document.createElement("p");
    p_a.innerText=answer;
    divMessages.appendChild(p_q);
    divMessages.appendChild(p_a);
  ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].used=true;
  cleanQuestion();
 ponerPreguntasNohechas();

}

function cleanQuestion(){

  var divQuestions=document.querySelector("#ChatQuestions");
  while (divQuestions.firstChild) {
      divQuestions.removeChild(divQuestions.firstChild);
    }
}

function clearMessages(){

  var divQuestions=document.querySelector("#ChatMessages");
  while (divQuestions.firstChild) {
      divQuestions.removeChild(divQuestions.firstChild);
    }
}



/***********PARA CHAT END**************/


/*********Para el escritorio**************/


function exitPantalla(e){

var namePantalla=e.srcElement.cualPantalla;

var cual=whereIsPantalla(namePantalla);

cleanPantalla(cual);
desactivatePantallaEscritorio(namePantalla);
var result=whereIsPantalla("tarjetas_icono");
if(result!="NO_EXIST" && namePantalla=="tarjeta_principal_icono"){
  var icono = document.querySelector("#verfiy_asig");
  icono.style.visibility="hidden";
}

}


function cleanPantalla(namePantalla){

var pantalla = document.querySelector("."+namePantalla);

while (pantalla.firstChild) {
    pantalla.removeChild(pantalla.firstChild);
  }
pantalla.style.visibility="hidden";

}


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

function desactivatePantallaEscritorio(namePantalla){

  if( escritorio.cualPantalla1==namePantalla){
    escritorio.cualPantalla1="";
    escritorio.usingPantalla1=false;

  }else if(escritorio.cualPantalla2==namePantalla){
    escritorio.cualPantalla2="";
    escritorio.usingPantalla2=false;

  }else{


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


function llenarInfoTarjetaIcono(pantalla_volcar){
  var imagen_caracter=pantalla_volcar.querySelector("#img_caracter");
  var name=pantalla_volcar.querySelector("#name_caracter");
  var atr1=pantalla_volcar.querySelector("#atributo_1");
  var atr2=pantalla_volcar.querySelector("#atributo_2");
  var atr3=pantalla_volcar.querySelector("#atributo_3");
  if(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock){
    imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked;
  }else{
    imagen_caracter.src=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
  }

  name.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
  if(!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock){
    atr1.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].description;
  }
  if(!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].isBlock){
    atr2.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].description;
  }
  if(!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].isBlock){
    atr3.innerText=ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].description;
  }


}


function onClickIcon(e) {

result=whereIsPantalla(this.id);
console.log(result);
if(result=="NO_EXIST"){

switch (this.id) {
  case "tarjetas_icono":
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    //pantalla_volcar.style.backgroundColor = "black";
    var pantalla_volcar=formarPantallaTarjetas(this.id);
    pantalla_volcar.style.visibility="visible";
    llenarInfoTarjetaIcono(pantalla_volcar);

    break;
  case "chat_icono":
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    var pantalla_volcar=formarChat(this);
    pantalla_volcar.style.visibility="visible";
    llenarChatEscrito();
    ponerPreguntasNohechas();


    break;
  case "tarjeta_principal_icono":
  var pantalla_volcar=formarPantallaTarjetas(this.id);
  pantalla_volcar.style.visibility="visible";
  var imagen_caracter=pantalla_volcar.querySelector("#img_caracter");
  var name=pantalla_volcar.querySelector("#name_caracter");
  var atr1=pantalla_volcar.querySelector("#atributo_1");
  var atr2=pantalla_volcar.querySelector("#atributo_2");
  var atr3=pantalla_volcar.querySelector("#atributo_3");

  imagen_caracter.src=ronda_prueba.main_caracter.list_photos[0].src;
  name.innerText=ronda_prueba.main_caracter.name;
  atr1.innerText=ronda_prueba.main_caracter.list_atributes[0].description;
  atr2.innerText=ronda_prueba.main_caracter.list_atributes[1].description;
  atr3.innerText=ronda_prueba.main_caracter.list_atributes[2].description;
    break;
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    break;
}

if(momentoAsignacion()){

activarAsignar();
}

}


}

function activarAsignar(){

var resp1=whereIsPantalla("tarjetas_icono");
var pantalla=document.querySelector("."+resp1);
var iconoVerificar=document.querySelector("#verfiy_asig");
iconoVerificar.style.visibility="visible";

}


function momentoAsignacion(){
var control=0;

var resp1=whereIsPantalla("tarjetas_icono");
var resp2=whereIsPantalla("tarjeta_principal_icono");

if (resp1=="Pantalla_1" || resp1=="Pantalla_2"){
  control=control+1;
}

if (resp2=="Pantalla_1" || resp2=="Pantalla_2"){
  control=control+1;
}

if(control>=2){
  return true;
}else{
  return false;
}


}

function asignarPareja(){
  ronda_prueba.personajeAsignado=ronda_prueba.list_caracters[ronda_prueba.fichaUsing];
console.log("Se ha asignado :");
console.log(ronda_prueba.personajeAsignado.name);
}


/*********Para el escritorio END**************/
