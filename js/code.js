
/***********Declaraciones de estructuras**************/

function jugador() {
  this.list_rondas = [];
  this.ronda_actual = 0;
  this.isLookingDisonace = false;
  this.contadorClickDisonance = 0;
  this.disonanceTemp = null;
  this.maxImagenDesbloqueada = 1;
  this.maxAtributoDesbloqueado = 1;
  this.alma=false;
}

function ronda() {
  this.main_caracter = "";
  this.list_caracters = [];
  this.fichaUsing = 0;
  this.chatUsing = 0;
  this.personajeAsignado = "";
  this.nota_pareja_Asignado = -1;
  this.list_Disonances = [];
  this.faseActual = 0;
  this.Apuesta = -1;//0 bien , 1 neutro , 2 mal
  this.pistaTrue = "";
  this.pistaFalse = "";
  this.countImagenDesbloqueada = 0;
  this.countAtributoDesbloqueado = 0;
}


function caracter(isMain, name) {
  this.isMain = isMain;
  this.name = name;
  this.list_atributes = [];
  this.list_photos = [];
  this.foto_showing = 0;
  this.list_chat = [];
  this.nota_pareja = 0;//0bien , 1 neutro , 2 mal
}

function atribute(description, isDisonance, isBlock) {
  this.description = description;
  this.isDisonance = isDisonance;
  this.isBlock = isBlock;
}

function photo_caracter(src, isDisonance, isBlock) {
  this.src = src;
  this.isDisonance = isDisonance;
  this.isBlock = isBlock;
  this.srcBlocked = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";

}

function disonance(que1, quien1, isMain1, que2, quien2, isMain2, typeDisonance) {
  this.que1 = que1;
  this.quien1 = quien1;
  this.isMain1 = isMain1;
  this.que2 = que2;
  this.quien2 = quien2;
  this.isMain2 = isMain2;
  this.typeDisonance = typeDisonance; //1 es bueno , 2 malo
  this.reached = false;
}

function main_escritorio() {
  this.usingPantalla1 = false;
  this.cualPantalla1 = "";
  this.usingPantalla2 = false;
  this.cualPantalla2 = "";
}

function chat(question, answer) {
  this.question = question;
  this.answer = answer;
  this.answerDisonance = false;
  this.used = false;
}

function pantalla() {

}

/***********Declaraciones de estructuras  END**************/


/***********INICIALIZAR**************/

var escritorio = new main_escritorio();
var jugador = new jugador();



/*RONDA 1*/
var ronda_prueba = new ronda();
var personaje_prueba = new caracter(true, "Pepe pruebas");

var atributo_1 = new atribute("Soy ciego", true, false);
var atributo_2 = new atribute("Me gusta las cabras", true, false);
var atributo_3 = new atribute("Soy de campo", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://image.shutterstock.com/z/stock-vector-vector-pixel-art-suspicious-man-isolated-cartoon-1591895995.jpg", false, false);
var foto2 = new photo_caracter("https://image.shutterstock.com/image-vector/vector-pixel-art-girl-anime-600w-1102810826.jpg", false, false);
var foto3 = new photo_caracter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2BGxHSQK46Kgw49miYuO3142BjlvC9j_lA&usqp=CAU", false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "SARA pruebas");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Soy ciega", false, true);
var atributo_2 = new atribute("Me gustas tu", false, false);
var atributo_3 = new atribute("Soy poliamorosa", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://www.lorealprofessionnel.es/-/media/master/es/webedia-hair-trend-news-2/es_es/3144/7192-peinados-para-cara-redonda-orig-2.ashx", false, false);
var foto2 = new photo_caracter("https://i.pinimg.com/originals/db/50/89/db508974ed8fbd967c62df21ce5a1eb3.jpg", false, false);
var foto3 = new photo_caracter("https://img4.codigonuevo.com/ef/de/06/caras-futuro-mileniales-codigo-nuevo-930x600.jpg", false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


var chat1 = new chat("Hobbie ?", "Pues ser nini");
var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


personaje_prueba1.list_chat.push(chat1);
personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Juan pruebas");
personaje_prueba2.nota_pareja = 1;

var atributo_1 = new atribute("Arriba la fiesta", true, false);
var atributo_2 = new atribute("No soy fiel", true, true);
var atributo_3 = new atribute("Robo todo", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg", false, true);
var foto2 = new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg", false, false);
var foto3 = new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg", false, false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba2.list_chat.push(chat1);
personaje_prueba2.list_chat.push(chat2);


var disonance1 = new disonance("atributo_1", "Pepe pruebas", true, "atributo_1", "Juan pruebas", false, 2);
var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
var disonance3 = new disonance("img_caracter_0", "Juan pruebas", false, "atributo_2", "Juan pruebas", false, 1);


ronda_prueba.main_caracter = personaje_prueba;
ronda_prueba.list_caracters.push(personaje_prueba1);
ronda_prueba.list_caracters.push(personaje_prueba2);

ronda_prueba.list_Disonances.push(disonance1);
ronda_prueba.list_Disonances.push(disonance2);
ronda_prueba.list_Disonances.push(disonance3);
ronda_prueba.pistaTrue = "los rubios son fieles";
ronda_prueba.pistaFalse = "los rubios son infieles";

/*RONDA 2*/


var ronda_prueba2 = new ronda();
var personaje_prueba = new caracter(true, "ALBARI pruebas");


var atributo_1 = new atribute("Soy ciego y tonto", true, false);
var atributo_2 = new atribute("Me gusta las cabras y caballos", true, false);
var atributo_3 = new atribute("Soy de camposs", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://image.shutterstock.com/z/stock-vector-vector-pixel-art-suspicious-man-isolated-cartoon-1591895995.jpg", false, false);
var foto2 = new photo_caracter("https://image.shutterstock.com/image-vector/vector-pixel-art-girl-anime-600w-1102810826.jpg", false, false);
var foto3 = new photo_caracter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2BGxHSQK46Kgw49miYuO3142BjlvC9j_lA&usqp=CAU", false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "SARADONGA pruebas");
personaje_prueba1.nota_pareja = 2;
var atributo_1 = new atribute("Soy ciegaNGA", false, true);
var atributo_2 = new atribute("Me gustas tuNGA", false, false);
var atributo_3 = new atribute("Soy poliamorosaNGA", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://www.lorealprofessionnel.es/-/media/master/es/webedia-hair-trend-news-2/es_es/3144/7192-peinados-para-cara-redonda-orig-2.ashx", false, false);
var foto2 = new photo_caracter("https://i.pinimg.com/originals/db/50/89/db508974ed8fbd967c62df21ce5a1eb3.jpg", false, false);
var foto3 = new photo_caracter("https://img4.codigonuevo.com/ef/de/06/caras-futuro-mileniales-codigo-nuevo-930x600.jpg", false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


var chat1 = new chat("Hobbie ?", "Pues ser nini");
var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


personaje_prueba1.list_chat.push(chat1);
personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Juanss pruebas");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("Arriba la fiestass", true, false);
var atributo_2 = new atribute("No soy fielss", true, true);
var atributo_3 = new atribute("Robo todoss", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg", false, true);
var foto2 = new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg", false, false);
var foto3 = new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg", false, false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba2.list_chat.push(chat1);
personaje_prueba2.list_chat.push(chat2);


var disonance1 = new disonance("atributo_1", "Pepe pruebas", true, "atributo_1", "Juan pruebas", false, 2);
var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
var disonance3 = new disonance("img_caracter_0", "Juan pruebas", false, "atributo_2", "Juan pruebas", false, 1);


ronda_prueba2.main_caracter = personaje_prueba;
ronda_prueba2.list_caracters.push(personaje_prueba1);
ronda_prueba2.list_caracters.push(personaje_prueba2);

ronda_prueba2.list_Disonances.push(disonance1);
ronda_prueba2.list_Disonances.push(disonance2);
ronda_prueba2.list_Disonances.push(disonance3);

ronda_prueba2.pistaTrue = "los morenos son fieles";
ronda_prueba2.pistaFalse = "los morenos son infieles";

jugador.list_rondas.push(ronda_prueba);
jugador.list_rondas.push(ronda_prueba2);


/***********INICIALIZAR END**************/


/***********PARA control de Rondas**************/


function queFaseEstoy() {
  console.log("QUE FASE ESTOY " + jugador.list_rondas[jugador.ronda_actual].faseActual);
  switch (jugador.list_rondas[jugador.ronda_actual].faseActual) {
    case "apuesta":
      deactivateall();
      var capaIconos = document.querySelector(".iconos");
      capaIconos.style.visibility = "hidden";
      formarApuestasDiablo();
      break;
    case "parejas":
      var capaIconos = document.querySelector(".iconos");

      capaIconos.style.visibility = "visible";
      break;
    case "finalParejas":
      deactivateall();
      formarResultadoRonda();

      break;

    case "finalApuesta":
      deactivateall();
      formarApuestaDiabloResult();
      break;
  }

}

function deactivateall() {
  desactivatePantallaEscritorio("Pantalla_1");
  desactivatePantallaEscritorio("Pantalla_2");
  cleanPantalla("Pantalla_1");
  cleanPantalla("Pantalla_2");
  var capaIconos = document.querySelector(".iconos");

  capaIconos.style.visibility = "hidden";

}

function formarResultadoRonda() {

  var pantalla1 = document.querySelector(".Pantalla_1");
  pantalla1.style.visibility = "visible";

  var result = document.createElement("p");
  result.id = "result";

  var imagenResult = document.createElement("img");
  imagenResult.id = "imgResult";
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual]

  if (ronda_prueba.nota_pareja_Asignado == 0) {
    result.innerText = "Buena pareja";
    imagenResult.src = "https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";
  }
  if (ronda_prueba.nota_pareja_Asignado == 1) {
    imagenResult.src = "https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";
    result.innerText = " pareja neutra";
  }
  if (ronda_prueba.nota_pareja_Asignado == 2) {
    imagenResult.src = "https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";
    result.innerText = "Mala pareja";
  }

  var next = document.createElement("img");
  next.id = "imgNext";
  next.src = "https://image.flaticon.com/icons/png/512/28/28275.png";
  next.addEventListener("click", nextFase);
  pantalla1.appendChild(imagenResult);
  pantalla1.appendChild(result);
  pantalla1.appendChild(next);



}

function nextFase(e) {
  switch (e.srcElement.id) {
    case "imgNext":
      var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
      jugador.list_rondas[jugador.ronda_actual].faseActual = "finalApuesta";
      queFaseEstoy();
      break;

    case "imgNext2":
      var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
      jugador.ronda_actual = jugador.ronda_actual + 1;
      jugador.list_rondas[jugador.ronda_actual].faseActual = "apuesta";

      queFaseEstoy();
      break;
  }


}


/***********PARA control de rondas END**************/


/***********PARA apuestas diablo**************/

function formarApuestaDiabloResult() {
  var pantalla1 = document.querySelector(".Pantalla_1");
  pantalla1.style.visibility = "visible";

  var result = document.createElement("p");
  result.id = "result";

  var imagenResult = document.createElement("img");
  imagenResult.id = "imgResult";
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (ronda_prueba.nota_pareja_Asignado == ronda_prueba.Apuesta) {
    result.innerText = "Has acertado";
    imagenResult.src = "https://pontesano.com/wp-content/uploads/2018/06/Acierto..jpg";
  } else {
    result.innerText = "No has acertado";
    imagenResult.src = "https://pontesano.com/wp-content/uploads/2018/06/ERROR.jpg";

  }

  var next = document.createElement("img");
  next.id = "imgNext2";
  next.src = "https://image.flaticon.com/icons/png/512/28/28275.png";
  next.addEventListener("click", nextFase);
  pantalla1.appendChild(imagenResult);
  pantalla1.appendChild(result);
  pantalla1.appendChild(next);
}


function formarApuestasDiablo() {
  var pantalla1 = document.querySelector(".Pantalla_1");
  pantalla1.style.visibility = "visible";
  var imagenDiablo = document.createElement("img");
  imagenDiablo.id = "imgDiablo";
  imagenDiablo.src = "https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";

  var pregunta = document.createElement("p");
  pregunta.innerText = "Que crees que pasara en la siguiente ronda?";

  var pista = document.createElement("p");
  var random = Math.random();
  if (random < 0.5) {
    pista.innerText = jugador.list_rondas[jugador.ronda_actual].pistaTrue;
  } else {
    pista.innerText = jugador.list_rondas[jugador.ronda_actual].pistaFalse;
  }

  var bienIcono = document.createElement("img");
  bienIcono.id = "bienIcono";
  bienIcono.src = "https://image.freepik.com/iconos-gratis/pulgares-arriba-bien_318-10538.jpg";
  bienIcono.addEventListener("click", elegirApuesta);

  var neutroIcono = document.createElement("img");
  neutroIcono.id = "neutroIcono";
  neutroIcono.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvSegDeIJ83CBtCG-nmaQofRnYp5gmoiSCA&usqp=CAU";
  neutroIcono.addEventListener("click", elegirApuesta);

  var malIcono = document.createElement("img");
  malIcono.id = "malIcono";
  malIcono.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAMSVxz6-YikIDAFJSIIFYYruUhkd1vWCmg&usqp=CAU";
  malIcono.addEventListener("click", elegirApuesta);

  pantalla1.appendChild(imagenDiablo);
  pantalla1.appendChild(pregunta);
  pantalla1.appendChild(bienIcono);
  pantalla1.appendChild(neutroIcono);
  pantalla1.appendChild(malIcono);
  pantalla1.appendChild(pista);

}




function elegirApuesta(e) {
  console.log("ESTA EN " + e.srcElement.id);
  switch (e.srcElement.id) {
    case "bienIcono":
      if (confirm("Quieres elegir apuesta bien ?")) {
        jugador.list_rondas[jugador.ronda_actual].Apuesta = 0;
        jugador.list_rondas[jugador.ronda_actual].faseActual = "parejas";
        deactivateall();
        queFaseEstoy();
      }

      break;
    case "neutroIcono":
      if (confirm("Quieres elegir apuesta neutro ?")) {
        jugador.list_rondas[jugador.ronda_actual].Apuesta = 1;
        jugador.list_rondas[jugador.ronda_actual].faseActual = "parejas";
        deactivateall();
        queFaseEstoy();
      }

      break;
    case "malIcono":
      if (confirm("Quieres elegir mal ?")) {
        jugador.list_rondas[jugador.ronda_actual].Apuesta = 2;
        jugador.list_rondas[jugador.ronda_actual].faseActual = "parejas";
        deactivateall();
        queFaseEstoy();

      }

      break;
  }


}

/***********PARA apuestas diablo END**************/

/***********PARA DISONANCIAS**************/

function recogerClick(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

  if (jugador.isLookingDisonace && e.srcElement.src != "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg") {
    if (jugador.contadorClickDisonance == 0) {
      console.log("Miro disonanica 1");

      var id_parent = e.srcElement.parentNode.classList[0];
      var quien = "";
      var main = "";
      var id = e.srcElement.id;
      console.log(id_parent);
      if (id_parent == "Pantalla_1") {

        if (escritorio.cualPantalla1 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.name.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }


      } else if (id_parent == "Pantalla_2") {

        if (escritorio.cualPantalla2 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.name.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }

      }

      jugador.disonanceTemp = new disonance(id, quien, main, "", "", false, 0);
      jugador.contadorClickDisonance = jugador.contadorClickDisonance + 1;

    } else if (jugador.contadorClickDisonance == 1) {
      console.log("Miro disonanica 2");
      var id_parent = e.srcElement.parentNode.classList[0];
      var main = "";
      var quien = "";
      var id = e.srcElement.id;
      if (id_parent == "Pantalla_1") {

        if (escritorio.cualPantalla1 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.name.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }


      } else if (id_parent == "Pantalla_2") {
        if (escritorio.cualPantalla2 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.name.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }

      }

      jugador.disonanceTemp.que2 = id;
      jugador.disonanceTemp.quien2 = quien;
      jugador.disonanceTemp.isMain2 = main;
      jugador.contadorClickDisonance = jugador.contadorClickDisonance + 1;
    }

    if (jugador.contadorClickDisonance == 2) {
      console.log("Miro disonanica 3");
      mirarDisonancia();
      jugador.contadorClickDisonance = 0;
    }

  }



}


function mirarDisonancia() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  console.log(jugador.disonanceTemp);
  if ((jugador.disonanceTemp.que1 != jugador.disonanceTemp.que2) || (jugador.disonanceTemp.quien1 != jugador.disonanceTemp.quien2)) {

    var que1 = jugador.disonanceTemp.que1;
    var quien1 = jugador.disonanceTemp.quien1;
    var main1 = jugador.disonanceTemp.isMain1;
    var que2 = jugador.disonanceTemp.que2;
    var quien2 = jugador.disonanceTemp.quien2;
    var main2 = jugador.disonanceTemp.isMain2;



    for (var i = 0; i < ronda_prueba.list_Disonances.length; i++) {

      var contador = 0;
      if ((ronda_prueba.list_Disonances[i].isMain1 == main1 &&
        ronda_prueba.list_Disonances[i].que1 == que1 &&
        ronda_prueba.list_Disonances[i].quien1 == quien1) ||
        (ronda_prueba.list_Disonances[i].isMain1 == main2 &&
          ronda_prueba.list_Disonances[i].que1 == que2 &&
          ronda_prueba.list_Disonances[i].quien1 == quien2)
      ) {
        contador = contador + 1;

      }
      if ((ronda_prueba.list_Disonances[i].isMain2 == main1 &&
        ronda_prueba.list_Disonances[i].que2 == que1 &&
        ronda_prueba.list_Disonances[i].quien2 == quien1) ||
        (ronda_prueba.list_Disonances[i].isMain2 == main2 &&
          ronda_prueba.list_Disonances[i].que2 == que2 &&
          ronda_prueba.list_Disonances[i].quien2 == quien2)
      ) {
        contador = contador + 1;

      }
      console.log("Contador es " + contador);
      if (contador == 2) {
        ronda_prueba.list_Disonances[i].reached = true;
        console.log("has detectado disonancia tipo :" + ronda_prueba.list_Disonances[i].typeDisonance);
        return true;
      }
    }

    console.log("No es disonante");
    return false;
  } else {
    console.log("No es disonante");
    return false;
  }






}


/***********PARA DISONANCIAS END**************/


/***********PARA TARJETAS**************/



function nextImage(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (this.id === "flecha") {
    var pantalla = document.querySelector("." + whereIsPantalla("tarjetas_icono"));
    var imagen_usuario = pantalla.querySelector("img#img_caracter");
    ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing + 1;
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing > 2) {
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing = 0;

    }
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
      imagen_usuario.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked;
    } else {
      imagen_usuario.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
    }


  } else if (this.id === "flecha_2") {
    var pantalla = document.querySelector("." + whereIsPantalla("tarjeta_principal_icono"));
    var imagen_usuario = pantalla.querySelector("img#img_caracter");
    ronda_prueba.main_caracter.foto_showing = ronda_prueba.main_caracter.foto_showing + 1;
    if (ronda_prueba.main_caracter.foto_showing > 2) {
      ronda_prueba.main_caracter.foto_showing = 0;

    }
    imagen_usuario.src = ronda_prueba.main_caracter.list_photos[ronda_prueba.main_caracter.foto_showing].src;

  }


}



function nextFicha(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  ronda_prueba.fichaUsing = ronda_prueba.fichaUsing + 1;
  if (ronda_prueba.fichaUsing > 1) {
    ronda_prueba.fichaUsing = 0;
  }
  var result = whereIsPantalla("tarjetas_icono");

  pantalla_volcar = document.querySelector("." + result);

  cleanPantalla(result)
  formarPantallaTarjetas("tarjetas_icono", true);
  llenarInfoTarjetaIcono(pantalla_volcar);
  if (momentoAsignacion()) {

    activarAsignar();
  }
}


function imageBlocked(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var name = whereIsPantalla("tarjetas_icono");
  var pantalla_volcar = document.querySelector("." + name);
  var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
  if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
    if (ronda_prueba.countImagenDesbloqueada < jugador.maxImagenDesbloqueada) {
      if (confirm("Quieres desbloquear imagen?")) {
        ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock = false;
        imagen_caracter.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
        ronda_prueba.countImagenDesbloqueada = ronda_prueba.countImagenDesbloqueada + 1;
      }
    } else {
      confirm("No puedes desbloquear más por ronda");
    }


  }

}


function formarPantallaTarjetas(type, nuevo) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (nuevo) {
    var pantalla_volcar = document.querySelector("." + whereIsPantalla(type));
    pantalla_volcar.style.visibility = "visible";
  } else {
    var res = pantalla_libre(type);
    if (res == "NO") {
      return false;
    }
    var pantalla_volcar = document.querySelector("." + res);

  }


  var ima_carac = document.createElement("img");
  ima_carac.id = "img_caracter";


  ima_carac.addEventListener("click", recogerClick);

  var ima_flecha = document.createElement("img");
  ima_flecha.src = "https://e7.pngegg.com/pngimages/593/775/png-clipart-arrow-computer-icons-encapsulated-postscript-right-arrow-angle-text.png";
  if (type == "tarjetas_icono") {
    ima_carac.addEventListener("click", imageBlocked);
    ima_flecha.id = "flecha";
  } else if (type == "tarjeta_principal_icono") {

    ima_flecha.id = "flecha_2";
  }

  ima_flecha.addEventListener("click", nextImage);

  var name_cara = document.createElement("p");
  name_cara.id = "name_caracter";
  if (type == "tarjetas_icono") {
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock) {
      var atributo_1 = document.createElement("img");
      atributo_1.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_1.id = "atributo_1_i";
      atributo_1.cual = 0;
      atributo_1.addEventListener("click", unlockAtribute);
    } else {
      var atributo_1 = document.createElement("p");
      atributo_1.id = "atributo_1";
      atributo_1.addEventListener("click", recogerClick);
    }

    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].isBlock) {
      var atributo_2 = document.createElement("img");
      atributo_2.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_2.id = "atributo_2_i";
      atributo_2.cual = 1;
      atributo_2.addEventListener("click", unlockAtribute);
    } else {
      var atributo_2 = document.createElement("p");
      atributo_2.id = "atributo_2";
      atributo_2.addEventListener("click", recogerClick);
    }

    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].isBlock) {
      var atributo_3 = document.createElement("img");
      atributo_3.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_3.id = "atributo_3_i";
      atributo_3.cual = 2;
      atributo_3.addEventListener("click", unlockAtribute);
    } else {
      var atributo_3 = document.createElement("p");
      atributo_3.id = "atributo_3";
      atributo_3.addEventListener("click", recogerClick);
    }

  } else {
    var atributo_1 = document.createElement("p");
    atributo_1.id = "atributo_1";
    atributo_1.addEventListener("click", recogerClick);
    var atributo_2 = document.createElement("p");
    atributo_2.id = "atributo_2";
    atributo_2.addEventListener("click", recogerClick);
    var atributo_3 = document.createElement("p");
    atributo_3.id = "atributo_3";
    atributo_3.addEventListener("click", recogerClick);
  }






  if (type == "tarjetas_icono") {

    var ima_flecha_ficha = document.createElement("img");
    ima_flecha_ficha.src = "https://e7.pngegg.com/pngimages/593/775/png-clipart-arrow-computer-icons-encapsulated-postscript-right-arrow-angle-text.png";
    ima_flecha_ficha.id = "flecha_ficha";
    ima_flecha_ficha.addEventListener("click", nextFicha);

    var verificarPareja = document.createElement("img");
    verificarPareja.src = "https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-41-512.png";
    verificarPareja.id = "verfiy_asig";
    verificarPareja.addEventListener("click", asignarPareja);
    verificarPareja.style.visibility = "hidden";


  }


  var exit_icon = document.createElement("img");
  exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
  exit_icon.id = "exitIcon";
  exit_icon.cualPantalla = type;
  exit_icon.addEventListener("click", exitPantalla);

  pantalla_volcar.appendChild(ima_carac);
  pantalla_volcar.appendChild(ima_flecha);
  pantalla_volcar.appendChild(name_cara);
  pantalla_volcar.appendChild(atributo_1);
  pantalla_volcar.appendChild(atributo_2);
  pantalla_volcar.appendChild(atributo_3);

  if (type == "tarjetas_icono") {
    pantalla_volcar.appendChild(ima_flecha_ficha);
    pantalla_volcar.appendChild(verificarPareja);
  }

  pantalla_volcar.appendChild(exit_icon);



  return pantalla_volcar;

}

function unlockAtribute(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var pantalla = document.querySelector("." + whereIsPantalla("tarjetas_icono"));
  var atributoBlock = e.srcElement.cual;

  if (ronda_prueba.countAtributoDesbloqueado < jugador.maxAtributoDesbloqueado) {
    if (confirm("Quieres desbloquear atributo ?")) {
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[atributoBlock].isBlock = false;
      cleanPantalla(whereIsPantalla("tarjetas_icono"));
      var pantalla_volcar = formarPantallaTarjetas("tarjetas_icono", true);
      llenarInfoTarjetaIcono(pantalla_volcar);
      ronda_prueba.countAtributoDesbloqueado = ronda_prueba.countAtributoDesbloqueado + 1;
    }
  } else {
    confirm("No puedes desbloquear más atributos por ronda");
  }



  if (momentoAsignacion()) {

    activarAsignar();
  }
}







/***********PARA TARJETAS END**************/


/***********PARA CHAT **************/

function formarChat(which) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var res = pantalla_libre(which.id);
  if (res == "NO") {
    return false;
  }

  var pantalla_volcar = document.querySelector("." + res);

  var divMessages = document.createElement("div");
  divMessages.id = "ChatMessages";

  var divQuestions = document.createElement("div");
  divQuestions.id = "ChatQuestions";

  var exit_icon = document.createElement("img");
  exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
  exit_icon.id = "exitIcon";
  exit_icon.cualPantalla = which.id;
  exit_icon.addEventListener("click", exitPantalla);

  pantalla_volcar.appendChild(divMessages);
  pantalla_volcar.appendChild(divQuestions);
  pantalla_volcar.appendChild(exit_icon);

  for (var i = 0; i < ronda_prueba.list_caracters.length; i++) {
    var p = document.createElement("p");
    p.caracterChat = i;
    p.innerText = ronda_prueba.list_caracters[i].name;
    p.addEventListener("click", changeChat);
    pantalla_volcar.appendChild(p);
  }




  return pantalla_volcar;
}


function changeChat(e) {
  var queCaracter = e.srcElement.caracterChat;
  ronda_prueba.chatUsing = queCaracter;
  clearMessages();
  cleanQuestion();
  llenarChatEscrito();
  ponerPreguntasNohechas();



}


function llenarChatEscrito() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divMessages = document.querySelector("#ChatMessages");
  for (var i = 0; i < ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat.length; i++) {
    if (ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].used) {
      var question = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].question;
      var p_q = document.createElement("p");
      p_q.innerText = question;
      var answer = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].answer;
      var p_a = document.createElement("p");
      p_a.innerText = answer;
      divMessages.appendChild(p_q);
      divMessages.appendChild(p_a);
    }

  }


}

function ponerPreguntasNohechas() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divQuestions = document.querySelector("#ChatQuestions");
  for (var i = 0; i < ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat.length; i++) {
    if (!ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].used) {
      var question = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].question;
      var p_q = document.createElement("p");
      p_q.id = "";
      p_q.questionId = i;
      p_q.innerText = question;
      p_q.addEventListener("click", askQuestion);
      divQuestions.appendChild(p_q);
    }

  }

}


function askQuestion(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var idquestion = e.srcElement.questionId;

  var question = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].question;

  var answer = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].answer;

  var divMessages = document.querySelector("#ChatMessages");
  var p_q = document.createElement("p");
  p_q.innerText = question;
  var p_a = document.createElement("p");
  p_a.innerText = answer;
  divMessages.appendChild(p_q);
  divMessages.appendChild(p_a);
  ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].used = true;
  cleanQuestion();
  ponerPreguntasNohechas();

}

function cleanQuestion() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divQuestions = document.querySelector("#ChatQuestions");
  while (divQuestions.firstChild) {
    divQuestions.removeChild(divQuestions.firstChild);
  }
}

function clearMessages() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divQuestions = document.querySelector("#ChatMessages");
  while (divQuestions.firstChild) {
    divQuestions.removeChild(divQuestions.firstChild);
  }
}



/***********PARA CHAT END**************/


/*********Para la tienda**************/


function formarTienda(){

var masImagen=document.createElement("p");
masImagen.innerText="Tienes "+ jugador.maxImagenDesbloqueada + " desbloqueo imagenes por ronda";

var imgMasImg=document.createElement("img");
imgMasImg.id="masImagen";
imgMasImg.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasImg.addEventListener("click",comprarAlgo);

var masAtributo=document.createElement("p");
masImagen.innerText="Tienes "+ jugador.maxAtributoDesbloqueado + "desbloqueo atributos por ronda";

var imgMasImg=document.createElement("img");
imgMasImg.id="masAtributo";
imgMasImg.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasImg.addEventListener("click",comprarAlgo);

var masImagen=document.createElement("p");
masImagen.innerText="Tu alma";

var imgMasImg=document.createElement("img");
imgMasImg.id="masAlma";
imgMasImg.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasImg.addEventListener("click",comprarAlgo);



}


function comprarAlgo(e){

  var id = e.srcElement.id;

  switch(id){
  case "masImagen":

  break;
  case "masAtributo":

  break;
  case "masAlma":

  break;
  }

}


/*********Para la tienda END**************/





/*********Para el escritorio**************/


function exitPantalla(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var namePantalla = e.srcElement.cualPantalla;

  var cual = whereIsPantalla(namePantalla);

  cleanPantalla(cual);
  desactivatePantallaEscritorio(namePantalla);
  var result = whereIsPantalla("tarjetas_icono");
  if (result != "NO_EXIST" && namePantalla == "tarjeta_principal_icono") {
    var icono = document.querySelector("#verfiy_asig");
    icono.style.visibility = "hidden";
  }

}


function cleanPantalla(namePantalla) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var pantalla = document.querySelector("." + namePantalla);

  while (pantalla.firstChild) {
    pantalla.removeChild(pantalla.firstChild);
  }
  pantalla.style.visibility = "hidden";

}


function whereIsPantalla(namePantalla) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (escritorio.cualPantalla1 == namePantalla) {
    return "Pantalla_1";

  } else if (escritorio.cualPantalla2 == namePantalla) {
    return "Pantalla_2";

  } else {

    return "NO_EXIST";
  }



}

function desactivatePantallaEscritorio(namePantalla) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (escritorio.cualPantalla1 == namePantalla) {
    escritorio.cualPantalla1 = "";
    escritorio.usingPantalla1 = false;

  } else if (escritorio.cualPantalla2 == namePantalla) {
    escritorio.cualPantalla2 = "";
    escritorio.usingPantalla2 = false;

  } else {


  }
}


function pantalla_libre(pantallaNueva) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (escritorio.usingPantalla1 == false) {

    escritorio.usingPantalla1 = true;
    escritorio.cualPantalla1 = pantallaNueva;
    return "Pantalla_1";

  } else if (escritorio.usingPantalla2 == false) {

    escritorio.usingPantalla2 = true;
    escritorio.cualPantalla2 = pantallaNueva;
    return "Pantalla_2";
  } else {
    return "NO";
  }

}


var icono_tarjetas = document.querySelector("img#tarjetas_icono");
var icono_chat = document.querySelector("img#chat_icono");
var icono_main = document.querySelector("img#tarjeta_principal_icono");
var icono_lupa = document.querySelector("img#lupa_icono");
icono_tarjetas.addEventListener("click", onClickIcon);
icono_chat.addEventListener("click", onClickIcon);
icono_main.addEventListener("click", onClickIcon);
icono_lupa.addEventListener("click", onClickIcon);

function llenarInfoTarjetaIcono(pantalla_volcar) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
  var name = pantalla_volcar.querySelector("#name_caracter");
  var atr1 = pantalla_volcar.querySelector("#atributo_1");
  var atr2 = pantalla_volcar.querySelector("#atributo_2");
  var atr3 = pantalla_volcar.querySelector("#atributo_3");
  if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
    imagen_caracter.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked;
  } else {
    imagen_caracter.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
  }

  name.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
  if (!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock) {
    atr1.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].description;
  }
  if (!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].isBlock) {
    atr2.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].description;
  }
  if (!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].isBlock) {
    atr3.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].description;
  }


}


function onClickIcon(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  jugador.isLookingDisonace = false;

  result = whereIsPantalla(this.id);

  if (result == "NO_EXIST") {

    switch (this.id) {
      case "tarjetas_icono":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        //pantalla_volcar.style.backgroundColor = "black";
        var pantalla_volcar = formarPantallaTarjetas(this.id);
        if (!pantalla_volcar == false) {
          pantalla_volcar.style.visibility = "visible";
          llenarInfoTarjetaIcono(pantalla_volcar);
        }


        break;
      case "chat_icono":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        var pantalla_volcar = formarChat(this);
        if (!pantalla_volcar == false) {
          pantalla_volcar.style.visibility = "visible";
          llenarChatEscrito();
          ponerPreguntasNohechas();

        }


        break;
      case "tarjeta_principal_icono":
        var pantalla_volcar = formarPantallaTarjetas(this.id);
        pantalla_volcar.style.visibility = "visible";
        var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
        var name = pantalla_volcar.querySelector("#name_caracter");
        var atr1 = pantalla_volcar.querySelector("#atributo_1");
        var atr2 = pantalla_volcar.querySelector("#atributo_2");
        var atr3 = pantalla_volcar.querySelector("#atributo_3");

        imagen_caracter.src = ronda_prueba.main_caracter.list_photos[0].src;
        name.innerText = ronda_prueba.main_caracter.name;
        atr1.innerText = ronda_prueba.main_caracter.list_atributes[0].description;
        atr2.innerText = ronda_prueba.main_caracter.list_atributes[1].description;
        atr3.innerText = ronda_prueba.main_caracter.list_atributes[2].description;
        break;

      case "lupa_icono":

        jugador.isLookingDisonace = true;

        break;
      case "tienda_icono":



          break;

      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }

    if (momentoAsignacion()) {

      activarAsignar();
    }

  }


}

function activarAsignar() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

  var resp1 = whereIsPantalla("tarjetas_icono");
  var pantalla = document.querySelector("." + resp1);
  var iconoVerificar = document.querySelector("#verfiy_asig");
  iconoVerificar.style.visibility = "visible";

}


function momentoAsignacion() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var control = 0;

  var resp1 = whereIsPantalla("tarjetas_icono");
  var resp2 = whereIsPantalla("tarjeta_principal_icono");

  if (resp1 == "Pantalla_1" || resp1 == "Pantalla_2") {
    control = control + 1;
  }

  if (resp2 == "Pantalla_1" || resp2 == "Pantalla_2") {
    control = control + 1;
  }

  if (control >= 2) {
    return true;
  } else {
    return false;
  }


}

function asignarPareja() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (confirm("Quieres asignar estas dos personas?")) {
    ronda_prueba.personajeAsignado = ronda_prueba.list_caracters[ronda_prueba.fichaUsing];
    ronda_prueba.nota_pareja_Asignado = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].nota_pareja;
    console.log("Se ha asignado :");
    console.log(ronda_prueba.personajeAsignado.name);

    cleanPantalla("Pantalla_1");
    cleanPantalla("Pantalla_2");
    desactivatePantallaEscritorio("tarjetas_icono");
    desactivatePantallaEscritorio("tarjeta_principal_icono");
    deactivateall();
    jugador.list_rondas[jugador.ronda_actual].faseActual = "finalParejas";
    queFaseEstoy();

  }


}


/*********Para el escritorio END**************/

/*EJECUTAR*/
jugador.list_rondas[jugador.ronda_actual].faseActual = "apuesta";
queFaseEstoy();
