
/***********AUDIO**************/
var gameAudio = document.getElementById("myAudio"); 

function playAudio() { 
  gameAudio.play(); 
} 

function pauseAudio() { 
  gameAudio.pause(); 
} 

function volumeUp(){
	if(gameAudio.volume < 1.00)
		gameAudio.volume = gameAudio.volume + 0.05;
	gameAudio.volume = gameAudio.volume.toFixed(3);
}

function volumeDown(){
	if(gameAudio.volume > 0.00)
		gameAudio.volume = gameAudio.volume - 0.05;
	gameAudio.volume = gameAudio.volume.toFixed(3);
}

function changeMusic(NewSong){
	var audio = document.getElementById("track");
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	audio.src = dir + '/Music/' + NewSong;
	gameAudio.load();
}
/***********AUDIO END**************/

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
  this.coins=0;
  this.FaseJugador="introduccion";
  this.list_introduccion_scenes=[];
  this.contadorWichIntro=0;
  this.finales=[];
}


function introduccionScena(){
this.text="";
this.image="";
this.list_respuestas=[];
}

function final(){
this.text="";
this.image="";
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
  this.preguntaDiablo="";
  this.textoResultadoBueno="Pareja buena";
  this.textoResultadoMalo="Pareja mala";
  this.textoResultadoNeutro="Pareja neutra";
  this.imgBueno=document.querySelector("#trabajando1");
  this.imgMalo=document.querySelector("#trabajando1");
  this.imgNeutro=document.querySelector("#trabajando3");
}


function caracter(isMain, name) {
  this.isMain = isMain;
  this.name = name;
  this.list_atributes = [];
  this.list_photos = [];
  this.foto_showing = 0;
  this.list_chat = [];
  this.nota_pareja = 0;//0bien , 1 neutro , 2 mal
  this.color_corazon="#f8f9fa";
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
  this.srcBlocked = document.querySelector("#locked_img");

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

/*Intro*/

/** 1 **/
var intro1=new introduccionScena();
intro1.image=document.querySelector("#intro1");
intro1.text="Hola, soy Juanca Daver y llevo todo mi vida siendo lo que consideran un nini.";
intro1.list_respuestas.push("Continuar...");

var intro2=new introduccionScena();
intro2.image=document.querySelector("#intro1");
intro2.text="Mi rutina es pasarme el dia en el sofá hasta que es la hora de comer";
intro2.list_respuestas.push("Continuar...");

var intro3=new introduccionScena();
intro3.image=document.querySelector("#intro1");
intro3.text="Cuando me levanto del sofa… es para buscar algo precocinado en el super.";
intro3.list_respuestas.push("Continuar...");


/** 2 **/
var intro4=new introduccionScena();
intro4.image=document.querySelector("#intro2");
intro4.text="Y hoy  por fin mi vida ha cambiado de rumbo, he tenido suerte y al fin un camión ha acabado con mi sufrimiento.";
intro4.list_respuestas.push("Continuar...");

var intro5=new introduccionScena();
intro5.image=document.querySelector("#intro2");
intro5.text="Ya era hora.";
intro5.list_respuestas.push("Continuar...");

/** 3 **/


var intro6=new introduccionScena();
intro6.image=document.querySelector("#intro3");
intro6.text="Todo está muy oscuro, pero creo que puedo caminar hacía delante...";
intro6.list_respuestas.push("Continuar...");

/** 4**/
var intro7=new introduccionScena();
intro7.image=document.querySelector("#intro4");
intro7.text="Desconocido-Hola!";
intro7.list_respuestas.push("Seguir caminando...");

var intro8=new introduccionScena();
intro8.image=document.querySelector("#intro4");
intro8.text="Desconocido-¿Qué haces caminando a oscuras hacía el infierno?";
intro8.list_respuestas.push("Seguir caminando...");


var intro9=new introduccionScena();
intro9.image=document.querySelector("#intro4");
intro9.text="Desconocido-Ven conmigo anda, aquí verás mejor…";
intro9.list_respuestas.push("Ir hacia la voz...");


var intro9=new introduccionScena();
intro9.image=document.querySelector("#intro4");
intro9.text="Desconocido-Ven conmigo anda, aquí verás mejor…";
intro9.list_respuestas.push("Ir hacia la voz...");

/** 5**/


var intro10=new introduccionScena();
intro10.image=document.querySelector("#intro5");
intro10.text="Diablo → Ahora me ves? Perfecto. Pues... hola, soy.. el diablo. Como ves. ¿Ahora entiendes por qué sabía hacía donde ibas verdad?";
intro10.list_respuestas.push("Si…");

var intro11=new introduccionScena();
intro11.image=document.querySelector("#intro5");
intro11.text="Diablo → Supongo.. que entiendes que te ha pasado... Estás muerto!";
intro11.list_respuestas.push("Si…");

/** 6**/

var intro12=new introduccionScena();
intro12.image=document.querySelector("#intro6");
intro12.text="Diablo → No te preocupes… Veo que has sido un inútil toda tu vida. Pero te voy a dar una oportunidad para hacer algo con ella antes de desaparecer.";
intro12.list_respuestas.push("Continuar…");

var intro13=new introduccionScena();
intro13.image=document.querySelector("#intro6");
intro13.text="Diablo → Tengo una misión para ti. ¿Y si trabajas para mí y con lo que ganes, compras tu alma para evitar el infierno?";
intro13.list_respuestas.push("¿Qué tengo que hacer?");

var intro14=new introduccionScena();
intro14.image=document.querySelector("#intro6");
intro14.text="Diablo → Es fácil, se me han acumulado un montón de tareas referente a humanos. Una de ellas es hacer parejas.";
intro14.list_respuestas.push("Continuar…");


var intro15=new introduccionScena();
intro15.image=document.querySelector("#intro6");
intro15.text="Diablo →Digamos que si tú me quitas ese trabajo de encima yo podría pagarte en monedas demoniacas .";
intro15.list_respuestas.push("Continuar…");

var intro16=new introduccionScena();
intro16.image=document.querySelector("#intro6");
intro16.text="Diablo →(no preguntes por cambio a euros, suficiente lata me está dando ya el banco).";
intro16.list_respuestas.push("Continuar…");

var intro17=new introduccionScena();
intro17.image=document.querySelector("#intro6");
intro17.text="Diablo →Y con unas cuantas … Puedes comprarme tu alma. ¿Qué me dices?";
intro17.list_respuestas.push("Aceptar trabajo.");
intro17.list_respuestas.push("Seguir tu camino.");


var intro18=new introduccionScena();
intro18.image=document.querySelector("#intro5");
intro18.text="Diablo → ¡Perfecto! Voy a enseñarte tu escritorio.";
intro18.list_respuestas.push("Continuar...");

var intro19=new introduccionScena();
intro19.image=document.querySelector("#intro6");
intro19.text="Diablo →¿Tantas ganas tienes de sufrir en mi territorio? ¿Estás seguro de que no quieres salvarte por mirar unos cuantas fichas de gente?";
intro19.list_respuestas.push("Aceptar trabajo.");
intro19.list_respuestas.push("Seguir tu camino.");

/*intro de escenas a estructura*/

jugador.list_introduccion_scenes.push(intro1);
jugador.list_introduccion_scenes.push(intro2);
jugador.list_introduccion_scenes.push(intro3);
jugador.list_introduccion_scenes.push(intro4);
jugador.list_introduccion_scenes.push(intro5);
jugador.list_introduccion_scenes.push(intro6);
jugador.list_introduccion_scenes.push(intro7);
jugador.list_introduccion_scenes.push(intro8);
jugador.list_introduccion_scenes.push(intro9);
jugador.list_introduccion_scenes.push(intro10);
jugador.list_introduccion_scenes.push(intro11);
jugador.list_introduccion_scenes.push(intro12);
jugador.list_introduccion_scenes.push(intro13);
jugador.list_introduccion_scenes.push(intro14);
jugador.list_introduccion_scenes.push(intro15);
jugador.list_introduccion_scenes.push(intro16);
jugador.list_introduccion_scenes.push(intro17);
jugador.list_introduccion_scenes.push(intro18);
jugador.list_introduccion_scenes.push(intro19);



/*finales*/

var final1=new final();
final1.text=" No habías hecho nada en la vida para merecer ir al infierno.El diablo no ha conseguido convencerte y sigues tu camino hacia la luz... o más bien el cielo.";
final1.image=document.querySelector("#final1");


var final2=new final();
final2.text=" No habías hecho nada en la vida para merecer ir al infierno.El diablo no ha conseguido engañarte y has formado parejas buenas para el mundo.";
final2.image=document.querySelector("#final2");


var final3=new final();
final3.text=" Creo que para estas alturas ya habrás deducido que miento más que hablo. Antes de conocernos ibas al cielo, pero te pare y he conseguido que cometas suficientes pecados como para ir a lo que querías evitar… EL INFIERNO!";
final3.image=document.querySelector("#final3");


var final4=new final();
final4.image=document.querySelector("#final4");
final4.text=" Mira que … he intentado engañarte para que cometieses algún pecado en tus elecciones… Pero es que ha sido demasiado fácil. Lo has hecho tan mal, si era una prueba, que no tiene ni gracia enviarte al infierno.Ya se! Mejor te rencarno en el mundo tan … Fastidiado que has creado. Así disfrutarás de tus elecciones.";





/*introduccion finales*/

jugador.finales.push(final1);
jugador.finales.push(final2);
jugador.finales.push(final3);
jugador.finales.push(final4);

/*RONDA 1-----*/

var ronda_prueba = new ronda();
var personaje_prueba = new caracter(true, "Kevin");

var atributo_1 = new atribute("Me gusta el deporte", false, false);
var atributo_2 = new atribute("Salir de fiesta es mi pasión", false, false);
var atributo_3 = new atribute("Las chicas operadas son más bonitas", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#kevin_foto_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#kevin_gym"), false, false);
var foto3 = new photo_caracter(document.querySelector("#kevin_fiesta_borracho"), false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Karen");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Me gusta el jazz", false, false);
var atributo_2 = new atribute("Soy psicóloga", false, false);
var atributo_3 = new atribute("Creo que todo el mundo puede cambia", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#karen_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#karen_montana"), false, false);
var foto3 = new photo_caracter(document.querySelector("#karen_uni"), false, false);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


////var chat1 = new chat("Hobbie ?", "Pues ser nini");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Yénifer");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("El gimnasio es un plus de puntos", false, false);
var atributo_2 = new atribute("Me gustan los chicos divertidos", false, false);
var atributo_3 = new atribute("Si tienes abdominales te doy mi teléfono.", false, false);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#yenifer_perfil"), false, false);
var foto2 = new photo_caracter(document.querySelector("#yenifer_gym"), false, false);
var foto3 = new photo_caracter(document.querySelector("#yenifer_fiesta"), false, false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

//personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);


//var disonance1 = new disonance("atributo_1", "Karen", false, "atributo_1", "Kevin", true, 2);
//var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
//var disonance3 = new disonance("img_caracter_0", "Karen", false, "atributo_2", "Karen", false, 1);


ronda_prueba.main_caracter = personaje_prueba;
ronda_prueba.list_caracters.push(personaje_prueba1);
ronda_prueba.list_caracters.push(personaje_prueba2);

//ronda_prueba.list_Disonances.push(disonance1);
//ronda_prueba.list_Disonances.push(disonance2);
//ronda_prueba.list_Disonances.push(disonance3);
ronda_prueba.pistaTrue = "Los rubios se atraen";
ronda_prueba.pistaFalse = "Los rubios se atraen";
ronda_prueba.preguntaDiablo="Para dar más emoción a tu trabajo… Vamos a hacer unas apuestas. ¿Qué resultado crees que tendrá tu siguiente pareja ? Si ganas.. te daré unas monedas extras. Si pierdes tranquilo, es solo para divertirme!";
ronda_prueba.textoResultadoBueno="Son felices y Kevin decidió ser mejor en la vida.";
ronda_prueba.textoResultadoMalo="Se forma una pareja tóxica y se meten muchos cuernos";
ronda_prueba.textoResultadoNeutro="Pareja neutra";


/*RONDA 2----*/


var ronda_prueba2 = new ronda();
var personaje_prueba = new caracter(true, "Leo Nahuel");


var atributo_1 = new atribute("Me encantan los animales", false, false);
var atributo_2 = new atribute("Mis días no cuentan si no he comido hummus.", false, false);
var atributo_3 = new atribute("realfooding 4 life", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#leo_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#leo_ducha"), false, false);
var foto3 = new photo_caracter(document.querySelector("#leo_vegano"), false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Anabel");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Me encantan las hamburguesas", false, false);
var atributo_2 = new atribute("Soy más de perros", false, false);
var atributo_3 = new atribute("El mejor relax es un paseo por la montaña", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#anabel_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#anabel_montaña"), false, false);
var foto3 = new photo_caracter(document.querySelector("#anabel_bbq"), false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Pues ser nini");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");
//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);

//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Erica");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("Piensa en verde, tanto comida como lo otro… jiji", false, false);
var atributo_2 = new atribute("Mi sueño es tener una protectora de animales", false, false);
var atributo_3 = new atribute("Te vienes a vivir conmigo a un pueblo?", false, false);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#erica_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#erica_caballo"), false, false);
var foto3 = new photo_caracter(document.querySelector("#erica_vegano"), false, true);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);




ronda_prueba2.main_caracter = personaje_prueba;
ronda_prueba2.list_caracters.push(personaje_prueba1);
ronda_prueba2.list_caracters.push(personaje_prueba2);
ronda_prueba2.preguntaDiablo="MMM… Interesante. Digamos que en la siguiente ronda habrán algunas personas que se sientan ofendidas… jeje.  Crees que acertarás ?";
ronda_prueba2.pistaTrue = "Los diferentes se atraen";
ronda_prueba2.pistaFalse = "Los diferentes se atraen";

ronda_prueba2.textoResultadoBueno="Se equilibran mutuamente y son mejores personas.";
ronda_prueba2.textoResultadoMalo="Crean un ataque a diferentes carnicas del mundo y la lían parda";
ronda_prueba2.textoResultadoNeutro="Pareja neutra";

//ronda_prueba2.list_Disonances.push(disonance2);
//ronda_prueba2.list_Disonances.push(disonance3);


/*RONDA 3---*/


var ronda_prueba3 = new ronda();
var personaje_prueba = new caracter(true, "Amelia");


var atributo_1 = new atribute("Tengo tanto sentido de la justicia que me he sacado las oposiciones.", false, false);
var atributo_2 = new atribute("Mis amigas dicen que a veces se me va la olla.", false, false);
var atributo_3 = new atribute("Solo quiero que me quieran.", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#amelia_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#amelia_poli"), false, false);
var foto3 = new photo_caracter(document.querySelector("#amelia_pegando"), false, true);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Iker");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Soy médico", false, false);
var atributo_2 = new atribute("Me encanta ayudar a la gente", false, false);
var atributo_3 = new atribute("Los uniformes son sexys", false, true);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#iker_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#iker_quirofano"), false, false);
var foto3 = new photo_caracter(document.querySelector("#iker_ong"), false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Pues ser nini");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Rafael");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("Abogado", false, false);
var atributo_2 = new atribute("La justicia es relativa", false, false);
var atributo_3 = new atribute("Todo el mundo tiene un precio", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#rafael_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#rafael_juzgado"), false, false);
var foto3 = new photo_caracter(document.querySelector("#rafael_familia"), false, false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

//personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);


//var disonance1 = new disonance("atributo_1", "Pepe pruebas", true, "atributo_1", "Juan pruebas", false, 2);
//var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
//var disonance3 = new disonance("img_caracter_0", "Juan pruebas", false, "atributo_2", "Juan pruebas", false, 1);


ronda_prueba3.main_caracter = personaje_prueba;
ronda_prueba3.list_caracters.push(personaje_prueba1);
ronda_prueba3.list_caracters.push(personaje_prueba2);
ronda_prueba3.preguntaDiablo="Que bonito es tener una pareja económicamente estable … le da otro sentido al término amor :).Por cierto , ¿que apostarías ?";


ronda_prueba3.pistaTrue = "El mejor ataque es una buena defensa.";
ronda_prueba3.pistaFalse = "Todos necesitamos que nos defiendan alguna vez.";
ronda_prueba3.textoResultadoBueno="Como médico le hace ver el valor de la vida y piensa distinto como policia.";
ronda_prueba3.textoResultadoMalo="Como siempre tiene alguien que le defiende se deja llevar por sus impulsos.";
ronda_prueba3.textoResultadoNeutro="Pareja neutra";


/*RONDA 4---*/


var ronda_prueba4 = new ronda();
var personaje_prueba = new caracter(true, "Rocio");


var atributo_1 = new atribute("Mi dios es ala", false, false);
var atributo_2 = new atribute("No creo en el matrimonio", false, false);
var atributo_3 = new atribute("Me encanta probar cosas nuevas", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#rocio_burka"), false, false);
var foto2 = new photo_caracter(document.querySelector("#rocio_familia"), false, false);
var foto3 = new photo_caracter(document.querySelector("#rocio_noburca"), false, true);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Abdellah");
personaje_prueba1.nota_pareja = 2;
var atributo_1 = new atribute("Las vivencias de tu día a día son lo que te forman como persona", false, false);
var atributo_2 = new atribute("Profesor de universidad prestigiosa", false, false);
var atributo_3 = new atribute("Alah es grande", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#Abdellah_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#Abdellah_familia"), false, false);
var foto3 = new photo_caracter(document.querySelector("#Abdellah_esposas"), false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


var chat1 = new chat("¿Qué piensas del matrimonio?", "Es lo más bonito que te puede pasar.");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Esther");
personaje_prueba2.nota_pareja =0;

var atributo_1 = new atribute("Judía", false, false);
var atributo_2 = new atribute("Vive cada día como si fuera el último", false, false);
var atributo_3 = new atribute("El amor es un sentimiento no un cuerpo.", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#esther_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#esther_evento"), false, false);
var foto3 = new photo_caracter(document.querySelector("#esther_beso"), false, true);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


var chat1 = new chat("Qué buscas en una pareja?", "Que podamos compartir aventuras.");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);


//var disonance1 = new disonance("atributo_1", "Pepe pruebas", true, "atributo_1", "Juan pruebas", false, 2);
//var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
//var disonance3 = new disonance("img_caracter_0", "Juan pruebas", false, "atributo_2", "Juan pruebas", false, 1);


ronda_prueba4.main_caracter = personaje_prueba;
ronda_prueba4.list_caracters.push(personaje_prueba1);
ronda_prueba4.list_caracters.push(personaje_prueba2);
ronda_prueba4.preguntaDiablo="¿Y ahora vamos a tocar este tema? Creo que alguien quiere intentar confundirte… Nono, yo por supuesto que no… esto yaqui para ayudarte… ¿Mm, apuesta eso, como crees que lo harás?";
//ronda_prueba2.list_Disonances.push(disonance1);
//ronda_prueba2.list_Disonances.push(disonance2);
//ronda_prueba2.list_Disonances.push(disonance3);




ronda_prueba4.pistaTrue = "El amor no tiene que ver con tu sexo.";
ronda_prueba4.pistaFalse = "Las diferencias culturales siempre traen demasiados problemas de pareja.";
ronda_prueba4.textoResultadoBueno="Descubre que el amor no se decide y le trata con respeto.";
ronda_prueba4.textoResultadoMalo="Le acaba obligando a casarse y no puede cumplir sus sueños. Además la poligamia le da problemas.";
ronda_prueba4.textoResultadoNeutro="Pareja neutra";


/*RONDA 5---*/


var ronda_prueba5 = new ronda();
var personaje_prueba = new caracter(true, "Frank");


var atributo_1 = new atribute("uh ah grrr", false, false);
var atributo_2 = new atribute("mi querer amigos", true, false);
var atributo_3 = new atribute("fuego no gustar", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#frank_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#frank_fuego"), false, false);
var foto3 = new photo_caracter(document.querySelector("#frank_animales"), true, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Cactus");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Le gusta la naturaleza", true, false);
var atributo_2 = new atribute("Me gustan los largos paseos por la ciudad", true, false);
var atributo_3 = new atribute("asdf uuh aa", true, true);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#cactus_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#cactus_amigos"), true, true);
var foto3 = new photo_caracter(document.querySelector("#cactus_montana"), false, false);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


var chat1 = new chat("¿Que harías si te ataca una muchedumbre?", "mmmm… cerebros .");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Ember");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("Me gusta beber un buen vino tinto… pero no de uva.", true, false);
var atributo_2 = new atribute("Me gusta la gente sana y sin vicios", false, false);
var atributo_3 = new atribute("Sexo siempre con protección!", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#ember_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#ember_noche"), false, false);
var foto3 = new photo_caracter(document.querySelector("#ember_espejo"), false, false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


var chat1 = new chat("Te gustan los amaneceres ?", "Me estás vacilando ?...");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);



var personaje_prueba3 = new caracter(false, "Wetry");
personaje_prueba3.nota_pareja = 1;

var atributo_1 = new atribute("Me gustan los bailes", true, false);
var atributo_2 = new atribute("Odio que me contesten con monosílabos", false, false);
var atributo_3 = new atribute("Siempre hago sexo a hueso!", false, false);
personaje_prueba3.list_atributes.push(atributo_1);
personaje_prueba3.list_atributes.push(atributo_2);
personaje_prueba3.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#wetry_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#wetry_cementerio"), false, false);
var foto3 = new photo_caracter(document.querySelector("#wetry_preocupado"), false, false);

personaje_prueba3.list_photos.push(foto1);
personaje_prueba3.list_photos.push(foto2);
personaje_prueba3.list_photos.push(foto3);


var chat1 = new chat("Que odiarias de una relación?", "Que me acaben rompiendo el corazón, ha ha ha, que gracioso soy");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba3.list_chat.push(chat1);

var disonance1 = new disonance("atributo_1", "Cactus", false, "img_caracter_2", "Frank", true, 1);
var disonance2 = new disonance("img_caracter_1", "Cactus", true, "atributo_3", "Frank", true, 1);
var disonance3 = new disonance("atributo_1", "Ember", false, "atributo_3", "Frank", true, 2);
var disonance4 = new disonance("atributo_2", "Wetry", false, "atributo_1", "Frank", true, 2);



ronda_prueba5.main_caracter = personaje_prueba;
ronda_prueba5.list_caracters.push(personaje_prueba1);
ronda_prueba5.list_caracters.push(personaje_prueba2);
ronda_prueba5.list_caracters.push(personaje_prueba3);

ronda_prueba5.list_Disonances.push(disonance1);
ronda_prueba5.list_Disonances.push(disonance2);
ronda_prueba5.list_Disonances.push(disonance3);
ronda_prueba5.list_Disonances.push(disonance4);



ronda_prueba5.pistaTrue = "Las criaturas con los mismos problemas se apoyan entre ellos.";
ronda_prueba5.pistaFalse = "La nocturnidad te ayudará en tu solución.";
ronda_prueba5.preguntaDiablo="Desde cuando los muertos tienen sentimientos ? Ahh, tu lo estas… no iba por ti… ejem … Apuesta?";
ronda_prueba5.textoResultadoBueno="Son felices y se van a una casita en la montaña a vivir solitos";
ronda_prueba5.textoResultadoMalo="se enfadan ,le dice que tiene muy poca sangre y se come a todos sus amigos animales";
ronda_prueba5.textoResultadoNeutro="En su segunda cita, se dieron cuenta que era mejor seguir como amigos. A día de hoy siguen quedando para asustar a turistas.";


/*RONDA 6---*/


var ronda_prueba6 = new ronda();
var personaje_prueba = new caracter(true, "Maria");


var atributo_1 = new atribute("Vivo en una mansión con piscina y pista de tenis. 3 Ferraris en el garage", false, false);
var atributo_2 = new atribute("altruista", true, false);
var atributo_3 = new atribute("música underground", true, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#maria_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#maria_mansion"), false, false);
var foto3 = new photo_caracter(document.querySelector("#maria_concierto"), false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Marc");
personaje_prueba1.nota_pareja = 2;
var atributo_1 = new atribute("Me gustan las exposiciones de cuadros", false, false);
var atributo_2 = new atribute("Ayudar a los demás es un must", true, false);
var atributo_3 = new atribute("Mac es mejor que Windows", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#marc_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#marc_pc"), false, false);
var foto3 = new photo_caracter(document.querySelector("#marc_compras"), true, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


var chat1 = new chat("¿Si fueras pobre, seguirías feliz?", "El dinero no da la felicidad, pero ayuda.");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Joan");
personaje_prueba2.nota_pareja = 0;

var atributo_1 = new atribute("Viva la música electrónica", false, false);
var atributo_2 = new atribute("El dinero no es lo más importante", false, false);
var atributo_3 = new atribute("Las relaciones te hacen crecer", false, false);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#joan_cara"), false, false);
var foto2 = new photo_caracter(document.querySelector("#joan_amigos"), false, false);
var foto3 = new photo_caracter(document.querySelector("#joan_niños"), true, true);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


var chat1 = new chat("¿Tu estilo te define?", "Si te refieres al pelo es solo una cresta.");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);



var personaje_prueba3 = new caracter(false, "Laia");
personaje_prueba3.nota_pareja = 1;

var atributo_1 = new atribute("Hacker", true, false);
var atributo_2 = new atribute("Me gustan los gatos", false, false);
var atributo_3 = new atribute("Ya tengo tu cuenta bancaria", false, true);
personaje_prueba3.list_atributes.push(atributo_1);
personaje_prueba3.list_atributes.push(atributo_2);
personaje_prueba3.list_atributes.push(atributo_3);

var foto1 = new photo_caracter(document.querySelector("#laia_hacker"), false, false);
var foto2 = new photo_caracter(document.querySelector("#laia_park"), false, false);
var foto3 = new photo_caracter(document.querySelector("#laia_guitarra"), true, false);

personaje_prueba3.list_photos.push(foto1);
personaje_prueba3.list_photos.push(foto2);
personaje_prueba3.list_photos.push(foto3);


var chat1 = new chat("¿Que buscas?", "Ayudar a los demás");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

personaje_prueba3.list_chat.push(chat1);

var disonance1 = new disonance("atributo_2", "Marc", false, "img_caracter_2", "Marc", false, 2);
var disonance2 = new disonance("img_caracter_2", "Joan", false, "atributo_2", "Maria", true, 1);
var disonance3 = new disonance("img_caracter_2", "Laia", false, "atributo_3", "Maria", true, 1);




ronda_prueba6.main_caracter = personaje_prueba;
ronda_prueba6.list_caracters.push(personaje_prueba1);
ronda_prueba6.list_caracters.push(personaje_prueba2);
ronda_prueba6.list_caracters.push(personaje_prueba3);

ronda_prueba6.list_Disonances.push(disonance1);
ronda_prueba6.list_Disonances.push(disonance2);
ronda_prueba6.list_Disonances.push(disonance3);




ronda_prueba6.pistaTrue = "El dinero no es lo importante.";
ronda_prueba6.pistaFalse = "El dinero genera más dinero y amor !";
ronda_prueba6.preguntaDiablo="La siguiente tiene pinta de pija… pero me huele que no acabará en el infierno. ¿Raro verdad? Bueno, tu apuesta...";

ronda_prueba6.textoResultadoBueno="Joan es tan honrado que Maria entiende aún más como ser mejor persona sin basarse en el dinero como base de altruismo.";
ronda_prueba6.textoResultadoMalo="Marc empieza a llevar por el mal camino a Maria, haciendo que empiece a gastar su dinero en tontería en vez de ayudar.";
ronda_prueba6.textoResultadoNeutro="Se entienden muy bien, pero sus respectivas vidas altruistas no les deja mucho tiempo de pareja";




//uno todas las rondas

jugador.list_rondas.push(ronda_prueba);
jugador.list_rondas.push(ronda_prueba2);
jugador.list_rondas.push(ronda_prueba3);
jugador.list_rondas.push(ronda_prueba4);
jugador.list_rondas.push(ronda_prueba5);
jugador.list_rondas.push(ronda_prueba6);
/***********INICIALIZAR END**************/


/***********PARA  INTRODUCCION **************/
function formarIntroduccion(){

 if(jugador.contadorWichIntro == 1){
	 playAudio();
 } 
 else{
	 if(!gameAudio.paused){
		playAudio();
	 }
 } 
 
 var template = document.querySelector("#introduccion_template");
 template.style.display="flex";


var escena=jugador.list_introduccion_scenes[jugador.contadorWichIntro];


var imagen=template.querySelector("#imgIntro");
//imagen.src=escena.image;

while (imagen.firstChild) {
  imagen.removeChild(imagen.firstChild);
}

var capa=escena.image;
capa.classList.remove("hiden");
imagen.appendChild(capa);


var textoDesc=template.querySelector("#TextDescription");
textoDesc.innerText=escena.text;

for(var i=0;i<3;i++){
  var respuesta="";
  switch(i){
    case 0:
      respuesta=template.querySelector("#response1");
    break;
    case 1:
      respuesta=template.querySelector("#response2");
    break;
    case 2:
      respuesta=template.querySelector("#response3");
    break;
  }

if(i<escena.list_respuestas.length){
  respuesta.style.visibility="visible";
  respuesta.innerText=escena.list_respuestas[i];
  respuesta.classList.add("chat-buttom");
  respuesta.addEventListener("click",respuestaIntro);
}else{
  respuesta.style.visibility="hidden";
}


}


}

function respuestaIntro(e){
var cual=e.srcElement.id;

if(jugador.contadorWichIntro==16 && cual=="response1"){
jugador.contadorWichIntro=17;
formarIntroduccion();

}else if(jugador.contadorWichIntro==16 && cual=="response2"){
jugador.contadorWichIntro=18;
formarIntroduccion();

}else if(jugador.contadorWichIntro==18 && cual=="response1"){
jugador.contadorWichIntro=17;
formarIntroduccion();

}else if(jugador.contadorWichIntro==18 && cual=="response2"){
//final al cielo
formarFinal(0);

}else if(jugador.contadorWichIntro==17){
  var template=document.querySelector("#introduccion_template");
  template.style.display="none";
 jugador.FaseJugador="rondas";
 queFaseEstoy();

}else{
  jugador.contadorWichIntro=jugador.contadorWichIntro+1;
  formarIntroduccion();
}



}


/***********PARA INTRODUCCION END**************/

/***********PARA FINALES END**************/


function formarFinal(cual){
	if(cual == 0) changeMusic("heaven.mp3");
	if(cual == 1) changeMusic("heaven.mp3");
	if(cual == 2) changeMusic("hell.mp3");
	if(cual == 3) changeMusic("hell.mp3");
	
var escritorio=document.querySelector("#escritorio");
escritorio.style.display="none";
var intro=document.querySelector("#introduccion_template");
intro.style.display="none";
  var template=document.querySelector("#final_pareja_template");
  template.classList.remove("hiden");
  template.style.visibility = "visible";
  template.style.display="flex";
  var result = template.querySelector("#result");
  //result.id = "result";todo_next
  var capaLol=template.querySelector("#todo_next");
  capaLol.style.visibility="hidden";
  var imagenResult = template.querySelector("#imgResult");
  result.innerText=jugador.finales[cual].text;
  while(imagenResult.firstChild){
    imagenResult.removeChild(imagenResult.firstChild);
  }
  jugador.finales[cual].image.classList.remove("hiden");
  jugador.finales[cual].image.style.width="40%";
  imagenResult.appendChild(jugador.finales[cual].image);



}

/***********PARA FINALES END**************/




/***********PARA control de Rondas**************/

function calcularFinal(){

var contadorBueno=0;
var contadorMalo=0;
var contadorNeutral=0;
var contadorRondas=0;

for(var i=0;i<jugador.list_rondas.length;i++){
var resultRonda=jugador.list_rondas[i].nota_pareja_Asignado;
if(resultRonda!=-1){

switch(resultRonda){

  case 0:
  contadorBueno=contadorBueno+1;
  break;
  case 1:
  contadorNeutral=contadorNeutral+1;
  break;
  case 2:
  contadorMalo=contadorMalo+1;
  break;
}
contadorRondas=contadorRondas+1;
}

}

var ponderadoBien=contadorBueno/contadorRondas;
var ponderadoNeutro=contadorNeutral/contadorRondas;
var ponderadoMalo=contadorMalo/contadorRondas;

console.log("ponderado "+ ponderadoMalo);
if(ponderadoMalo>0.7){
  return 3;
}else if(ponderadoMalo>0.3){
  return 2;
}else {
  return 1;
}


}


function queFaseEstoy() {
//  console.log("QUE FASE ESTOY " + jugador.list_rondas[jugador.ronda_actual].faseActual);
//console.log("FASE ACTUAL NUM " +  jugador.ronda_actual + " en lista hay "+ jugador.list_rondas.length);
if(jugador.alma || jugador.ronda_actual>= jugador.list_rondas.length){

  jugador.FaseJugador="Final";
  var resultFinal=calcularFinal();
  //aqui enseño final segun resultado
  formarFinal(resultFinal);

}

if(jugador.FaseJugador=="introduccion"){

  formarIntroduccion();
}


 if(jugador.FaseJugador=="rondas"){
   switch (jugador.list_rondas[jugador.ronda_actual].faseActual) {
     case "apuesta":
     var pantall=document.querySelector("#final_pareja_template");
      pantall.style.visibility="hidden";
      pantall.style.display="none";
       deactivateall();
       //var capaIconos = document.querySelector(".iconos");
       //capaIconos.style.visibility = "hidden";
       var pantall=document.querySelector("#escritorio");
       pantall.style.visibility="hidden";
       formarApuestasDiablo();
       break;
     case "parejas":
      var pantall=document.querySelector("#escritorio");
      pantall.style.visibility="visible";
     //  var capaIconos = document.querySelector(".iconos");

     //  capaIconos.style.visibility = "visible";
       break;
     case "finalParejas":
       deactivateall();
       var pantall=document.querySelector("#escritorio");
       pantall.style.visibility="hidden";
       var pantall=document.querySelector("#final_pareja_template");
       pantall.style.visibility="visible";
       pantall.style.display="flex";
       formarResultadoRonda();

       break;

     case "finalApuesta":
       deactivateall();
       var pantall=document.querySelector("#escritorio");
       pantall.style.visibility="hidden";
       //var pantall=document.querySelector("#final_pareja_template");
      // pantall.style.visibility="hidden";
      // pantall.style.display="none";

       formarApuestaDiabloResult();
       break;
   }

 }

}

function deactivateall() {
  desactivatePantallaEscritorio("Pantalla_1");
  desactivatePantallaEscritorio("Pantalla_2");
  cleanPantalla("Pantalla_1");
  cleanPantalla("Pantalla_2");
  var capaIconos = document.querySelector(".iconos");

  //capaIconos.style.visibility = "hidden";

}

function formarResultadoRonda() {

  var template=document.querySelector("#final_pareja_template");
  template.classList.remove("hiden");
  template.style.visibility = "visible";
  var result = template.querySelector("#result");
  //result.id = "result";

  var imagenResult = template.querySelector("#imgResult");
  //imagenResult.id = "imgResult";

while(imagenResult.firstChild){
  imagenResult.removeChild(imagenResult.firstChild);
}


  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];


console.log("QUE RESULTADO ES : " +ronda_prueba.nota_pareja_Asignado);

  if (ronda_prueba.nota_pareja_Asignado == 0) {
    result.innerText = ronda_prueba.textoResultadoBueno;
    var clone=ronda_prueba.imgBueno.cloneNode(true);
    clone.classList.remove("hiden");
    clone.style.width="40%";
    imagenResult.appendChild(clone);
  }
  if (ronda_prueba.nota_pareja_Asignado == 1) {
    var clone=ronda_prueba.imgNeutro.cloneNode(true);
    clone.classList.remove("hiden");
    clone.style.width="40%";
    imagenResult.appendChild(clone);
    result.innerText = ronda_prueba.textoResultadoNeutro;
  }
  if (ronda_prueba.nota_pareja_Asignado == 2) {
    var clone=ronda_prueba.imgMalo.cloneNode(true);
    clone.classList.remove("hiden");
    clone.style.width="40%";
    imagenResult.appendChild(clone);
    result.innerText = ronda_prueba.textoResultadoMalo;
  }

  var next =  template.querySelector("#imgNext");

  next.addEventListener("click", nextFase);
  //pantalla1.appendChild(imagenResult);
  //pantalla1.appendChild(result);
  //pantalla1.appendChild(next);



}

function nextFase(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

console.log(ronda_prueba.faseActual);

if(jugador.list_rondas[jugador.ronda_actual].faseActual=="finalParejas"){
  jugador.list_rondas[jugador.ronda_actual].faseActual = "finalApuesta";
  queFaseEstoy();

}else if(jugador.list_rondas[jugador.ronda_actual].faseActual=="finalApuesta"){

  jugador.ronda_actual = jugador.ronda_actual + 1;
  if(jugador.ronda_actual >= jugador.list_rondas.length){
    queFaseEstoy();
  }else{
    jugador.list_rondas[jugador.ronda_actual].faseActual = "apuesta";
    queFaseEstoy();
  }


}

  /*switch (e.srcElement.id) {
    case "imgNext":
      console.log("HAGO CLICK imgNext");
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
  }*/


}


/***********PARA control de rondas END**************/


/***********PARA apuestas diablo**************/

function formarApuestaDiabloResult() {
  var pantalla1 = document.querySelector(".Pantalla_1");
  pantalla1.style.visibility = "visible";

  var template=document.querySelector("#final_pareja_template");
  template.style.visible="visible";
  template.style.display="flex";


  var result = template.querySelector("#result");


  var imagenResult = template.querySelector("#imgResult");

  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  console.log("ASIGNADO "+ronda_prueba.nota_pareja_Asignado);
  console.log("Apuesta "+ronda_prueba.Apuesta);

  if (ronda_prueba.nota_pareja_Asignado == ronda_prueba.Apuesta) {
    result.innerText = "Has acertado la apuesta";
    jugador.coins=jugador.coins+5;
    while(imagenResult.firstChild)
    {

        imagenResult.removeChild(imagenResult.firstChild);

    }
    var clo = document.querySelector("#trabajando4").cloneNode(true);
    clo.classList.remove("hiden");
    clo.style.width="40%";
    imagenResult.appendChild(clo);
  } else {
    result.innerText = "No has acertado la apuesta";
    while(imagenResult.firstChild)
    {

        imagenResult.removeChild(imagenResult.firstChild);

    }
    var clo = document.querySelector("#trabajando5").cloneNode(true);
    clo.classList.remove("hiden");
    clo.style.width="40%";
    imagenResult.appendChild(clo);

  }

  var next = template.querySelector("#imgNext");

  //next.src = "https://image.flaticon.com/icons/png/512/28/28275.png";
  next.addEventListener("click", nextFase);
  //pantalla1.appendChild(imagenResult);
  //pantalla1.appendChild(result);
  //pantalla1.appendChild(next);
}


function formarApuestasDiablo() {
  if(jugador.ronda_actual == 0) changeMusic("chill.mp3");
  if(jugador.ronda_actual == 1) changeMusic("sync.mp3");
  if(jugador.ronda_actual == 2) changeMusic("tecno.mp3");
  if(jugador.ronda_actual == 3) changeMusic("night.mp3");
  if(jugador.ronda_actual == 4) changeMusic("street.mp3");
  if(jugador.ronda_actual == 5) changeMusic("beat.mp3");
  var pantallaEntera=document.querySelector("#escritorio");
  pantallaEntera.style.visibility="hidden";
  var template = document.querySelector("#apuesta_template");
  template.style.visibility = "visible";
  template.classList.remove("hiden");
  template.style.display="flex";
  var imagenDiablo = template.querySelector("#imgDiablo");
  //imagenDiablo.id = "imgDiablo";
  while(imagenDiablo.firstChild)
  {

    imagenDiablo.removeChild(imagenDiablo.firstChild);
  }

 var clone =document.querySelector("#intro5a").cloneNode(true);
  clone.classList.remove("hiden");
  imagenDiablo.appendChild(clone);

  var pregunta =  template.querySelector("#preguntaDiablo");

  var textoDiablo="";

  textoDiablo= jugador.list_rondas[jugador.ronda_actual].preguntaDiablo;

  var pista =  template.querySelector("#preguntaDiablo");
  var random = Math.random();
  if (random < 0.5) {
    textoDiablo =textoDiablo+" Pista:"+ jugador.list_rondas[jugador.ronda_actual].pistaTrue;
  } else {
  textoDiablo =textoDiablo+" Pista:"+ jugador.list_rondas[jugador.ronda_actual].pistaFalse;
  }
  pregunta.innerText =  textoDiablo;

  var bienIcono = template.querySelector("#bienIcono");
  //bienIcono.id = "bienIcono";
  //bienIcono.src = "https://image.freepik.com/iconos-gratis/pulgares-arriba-bien_318-10538.jpg";
  bienIcono.addEventListener("click", elegirApuesta);

  var neutroIcono =template.querySelector("#neutroIcono");
  //neutroIcono.id = "neutroIcono";
  //neutroIcono.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvSegDeIJ83CBtCG-nmaQofRnYp5gmoiSCA&usqp=CAU";
  neutroIcono.addEventListener("click", elegirApuesta);

  var malIcono = template.querySelector("#malIcono");
  //malIcono.id = "malIcono";
  //malIcono.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAMSVxz6-YikIDAFJSIIFYYruUhkd1vWCmg&usqp=CAU";
  malIcono.addEventListener("click", elegirApuesta);

  //pantalla1.appendChild(imagenDiablo);
  //pantalla1.appendChild(pregunta);
  //pantalla1.appendChild(bienIcono);
  //pantalla1.appendChild(neutroIcono);
  //pantalla1.appendChild(malIcono);
  //pantalla1.appendChild(pista);







}




function elegirApuesta(e) {
  console.log("ESTA EN elegir apuesta " + e.srcElement.id);
  console.log(e);
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

  var pantalla=document.querySelector("#escritorio");
  pantalla.style.visibility="visible";

  var template=document.querySelector("#apuesta_template");
  template.style.visibility="hidden";
  template.style.display="none";

}

/***********PARA apuestas diablo END**************/

/***********PARA DISONANCIAS**************/

function recogerClick(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

  if (jugador.isLookingDisonace && e.srcElement.src != "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg") {
    if (jugador.contadorClickDisonance == 0) {
      console.log("Miro disonanica 1");
      console.log( e.srcElement);

      var id_parent;

      if(e.srcElement.nodeName.toLowerCase()=="p"){

        id_parent = e.srcElement.parentNode.parentNode.parentNode.parentNode.classList[0];
      }else if(e.srcElement.nodeName.toLowerCase()=="div"){

        id_parent = e.srcElement.parentNode.parentNode.classList[0];
      }else{

          var esImgCar=false;
          var temp= e.srcElement.parentNode;
          var controlBucle=true;
          while(controlBucle){
            console.log(temp);
            console.log(temp.getAttribute("name"));


            if(temp.getAttribute("name") == "Pantalla_1"){
              esImgCar=true;
                    console.log("Paro en Pantalla_1");
                  controlBucle=false;
            } else if(temp.getAttribute("name") == "Pantalla_2"){
              esImgCar=true;
                    console.log("Paro en Pantalla_2");
                  controlBucle=false;
            }else if(temp.nodeName.toLowerCase()=="body"){
                console.log("Paro en body");
                controlBucle=false;

            }else{
              temp=temp.parentNode;
            }

          }
            id_parent =temp.getAttribute("name");
      }


      var quien = "";
      var main = "";
      var id = e.srcElement.id;
      if(esImgCar){
          id= "img_caracter";

      }
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
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
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
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }

      }

      jugador.disonanceTemp = new disonance(id, quien, main, "", "", false, 0);
      jugador.contadorClickDisonance = jugador.contadorClickDisonance + 1;

    } else if (jugador.contadorClickDisonance == 1) {
      console.log("Miro disonanica 2");
      var id_parent;

      if(e.srcElement.nodeName.toLowerCase()=="p"){

        id_parent = e.srcElement.parentNode.parentNode.parentNode.parentNode.classList[0];
      }else if(e.srcElement.nodeName.toLowerCase()=="div"){

        id_parent = e.srcElement.parentNode.parentNode.classList[0];
      }else{

          var esImgCar=false;
          var temp= e.srcElement.parentNode;
          var controlBucle=true;
          while(controlBucle){
            console.log(temp);
            console.log(temp.getAttribute("name"));


            if(temp.getAttribute("name") == "Pantalla_1"){
              esImgCar=true;
                    console.log("Paro en Pantalla_1");
                  controlBucle=false;
            } else if(temp.getAttribute("name") == "Pantalla_2"){
              esImgCar=true;
                    console.log("Paro en Pantalla_2");
                  controlBucle=false;
            }else if(temp.nodeName.toLowerCase()=="body"){
                console.log("Paro en body");
                controlBucle=false;

            }else{
              temp=temp.parentNode;
            }

          }
            id_parent =temp.getAttribute("name");
      }


      var quien = "";
      var main = "";
      var id = e.srcElement.id;
      if(esImgCar){
          id= "img_caracter";

      }
      if (id_parent == "Pantalla_1") {

        if (escritorio.cualPantalla1 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
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
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
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
      mirarDisonancia()

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
        confirm("has detectado disonancia tipo (1 bueno ,2 malo) --> " + ronda_prueba.list_Disonances[i].typeDisonance);
        //bueno
        if(ronda_prueba.list_Disonances[i].typeDisonance ==1){
           ronda_prueba.list_caracters[ronda_prueba.fichaUsing].color_corazon="#00ff08";

        }else{
          ronda_prueba.list_caracters[ronda_prueba.fichaUsing].color_corazon="#FF2600";
        }
        activarAsignar();
        return true;
      }
    }

    confirm("No es disonante");
    return false;
  } else {
    confirm("No es disonante");
    return false;
  }






}


/***********PARA DISONANCIAS END**************/


/***********PARA TARJETAS**************/



function nextImage(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (this.id === "flecha") {
    var pantalla = document.querySelector("." + whereIsPantalla("tarjetas_icono"));
    var imagen_usuario = pantalla.querySelector("#img_caracter");
    ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing + 1;
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing > 2) {
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing = 0;

    }
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
      while(imagen_usuario.firstChild)
      {

          imagen_usuario.removeChild(imagen_usuario.firstChild);

      }
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked.classList.remove("hiden");
      imagen_usuario.appendChild(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked);
    } else {
      while(imagen_usuario.firstChild)
      {

          imagen_usuario.removeChild(imagen_usuario.firstChild);

      }
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src.classList.remove("hiden");
        imagen_usuario.appendChild(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src);
    }


  } else if (this.id === "flecha_2") {
    var pantalla = document.querySelector("." + whereIsPantalla("tarjeta_principal_icono"));
    var imagen_usuario = pantalla.querySelector("#img_caracter");
    ronda_prueba.main_caracter.foto_showing = ronda_prueba.main_caracter.foto_showing + 1;
    if (ronda_prueba.main_caracter.foto_showing > 2) {
      ronda_prueba.main_caracter.foto_showing = 0;

    }
  //  imagen_usuario.src = ronda_prueba.main_caracter.list_photos[ronda_prueba.main_caracter.foto_showing].src;
    while(imagen_usuario.firstChild)
    {

        imagen_usuario.removeChild(imagen_usuario.firstChild);

    }
    ronda_prueba.main_caracter.list_photos[ronda_prueba.main_caracter.foto_showing].src.classList.remove("hiden");
   imagen_usuario.appendChild(ronda_prueba.main_caracter.list_photos[ronda_prueba.main_caracter.foto_showing].src);
  }


}



function nextFicha(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  ronda_prueba.fichaUsing = ronda_prueba.fichaUsing + 1;
  if (ronda_prueba.fichaUsing > ronda_prueba.list_caracters.length-1) {
    ronda_prueba.fichaUsing = 0;
  }
  var result = whereIsPantalla("tarjetas_icono");

  pantalla_volcar = document.querySelector("." + result);

  cleanPantalla(result)
  formarPantallaTarjetas("tarjetas_icono", true);
  llenarInfoTarjetaIcono(pantalla_volcar);
  if (momentoAsignacion()) {

    activarAsignar();
  }else{

    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
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
        while(imagen_caracter.firstChild)
        {

            imagen_caracter.removeChild(imagen_caracter.firstChild);

        }
        ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src.classList.remove("hiden");
        imagen_caracter.appendChild( ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src);

        ronda_prueba.countImagenDesbloqueada = ronda_prueba.countImagenDesbloqueada + 1;
      }
    } else {
      confirm("No puedes desbloquear más por ronda");
    }


  }

}


function formarPantallaTarjetas(type, nuevo) {
var template="";
    if (type == "tarjetas_icono") {
      template=document.querySelector("#aspirante_template");
    }else{
      template=document.querySelector("#principal_template");
    }
  //var template = document.querySelector("#principal_template");
  var newTemplate=template.cloneNode(true);
  newTemplate.classList.remove("hiden");
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


  //var ima_carac = document.createElement("img");

  //ima_carac.id = "img_caracter";

  var ima_carac=newTemplate.querySelector("#img_caracter");
  //ima_carac.appendChild(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src);
  ima_carac.addEventListener("click", recogerClick);


  if (type == "tarjetas_icono") {
    var ima_flecha = newTemplate.querySelector("#flecha");
    ima_carac.addEventListener("click", imageBlocked);
    ima_flecha.addEventListener("click", nextImage);
  } else if (type == "tarjeta_principal_icono") {
    var ima_flecha = newTemplate.querySelector("#flecha_2");
    ima_flecha.id = "flecha_2";
    ima_flecha.addEventListener("click", nextImage);
  }



  //var name_cara = newTemplate.querySelector("#name_caracter");
  var capa_list_atributos = newTemplate.querySelector("#atributos_list_principal");

  if (type == "tarjetas_icono") {
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock) {
      var atributo_1 = document.createElement("img");
      atributo_1.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_1.classList.add("imgBlockedAtr");
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
      atributo_2.classList.add("imgBlockedAtr");
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
      atributo_3.classList.add("imgBlockedAtr");
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

    var ima_flecha_ficha = newTemplate.querySelector("#flecha_ficha");
    //ima_flecha_ficha.src = "https://e7.pngegg.com/pngimages/593/775/png-clipart-arrow-computer-icons-encapsulated-postscript-right-arrow-angle-text.png";
    //ima_flecha_ficha.id = "flecha_ficha";
    ima_flecha_ficha.addEventListener("click", nextFicha);


    //falta controlar que aparezca la barra de arriba .

    /*var verificarPareja = document.createElement("img");
    verificarPareja.src = "https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-41-512.png";
    verificarPareja.id = "verfiy_asig";
    verificarPareja.addEventListener("click", asignarPareja);
    verificarPareja.style.visibility = "hidden";*/
var verificarPareja = document.querySelector("#verfiy_asig");
verificarPareja.addEventListener("click", asignarPareja);


  }


  var exit_icon = newTemplate.querySelector("#exitIcon");
  //exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
//  exit_icon.id = "exitIcon";
  exit_icon.cualPantalla = type;
  exit_icon.addEventListener("click", exitPantalla);

  //pantalla_volcar.appendChild(ima_carac);
  //pantalla_volcar.appendChild(ima_flecha);
  //pantalla_volcar.appendChild(name_cara);

  capa_list_atributos.appendChild(atributo_1);
  capa_list_atributos.appendChild(atributo_2);
  capa_list_atributos.appendChild(atributo_3);

  if (type == "tarjetas_icono") {
    //pantalla_volcar.appendChild(ima_flecha_ficha);
    //pantalla_volcar.appendChild(verificarPareja);
  }

  //pantalla_volcar.appendChild(exit_icon);

  pantalla_volcar.appendChild(newTemplate);

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
  }else{

    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
  }
}







/***********PARA TARJETAS END**************/


/***********PARA CHAT **************/

function formarChat(which) {
  var template=document.querySelector("#chat_template").cloneNode(true);
  template.classList.remove("hiden");

  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var res = pantalla_libre(which.id);
  if (res == "NO") {
    return false;
  }

  var pantalla_volcar = document.querySelector("." + res);

  //var divMessages = document.createElement("div");
  //divMessages.id = "ChatMessages";

  //var divQuestions = document.createElement("div");
  //divQuestions.id = "ChatQuestions";

  var exit_icon = template.querySelector("#exitIcon");
  //exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
  //exit_icon.id = "exitIcon";
  exit_icon.cualPantalla = which.id;
  exit_icon.addEventListener("click", exitPantalla);

  //pantalla_volcar.appendChild(divMessages);
  //pantalla_volcar.appendChild(divQuestions);
  //pantalla_volcar.appendChild(exit_icon);
  //var list_chat = template.querySelector("#chat-list-aspirantes");

  for (var i = 0; i < ronda_prueba.list_caracters.length; i++) {
    //console.log("#button"+i+1);
    var numeroTemp=i+1;
    var p =  template.querySelector("#button"+numeroTemp);
    p.style.visibility="visible";
    p.caracterChat = i;
    p.text = ronda_prueba.list_caracters[i].name;
    p.addEventListener("click", changeChat);

  }


  pantalla_volcar.appendChild(template);

  return pantalla_volcar;
}


function changeChat(e) {
  var queCaracter = e.srcElement.caracterChat;
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
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
      p_a.classList.add("text-right");
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
  p_a.classList.add("text-right");
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


function formarTienda(which,nuevo){

  var template = document.querySelector("#tienda_template").cloneNode(true);
  template.classList.remove("hiden");

  if (!nuevo) {
    var pantalla_volcar = document.querySelector("." + whereIsPantalla(which));
    pantalla_volcar.style.visibility = "visible";
  } else {
    var res = pantalla_libre(which);
    if (res == "NO") {
      return false;
    }
    var pantalla_volcar = document.querySelector("." + res);
}


var masImagen=template.querySelector("#texto_imagen");
masImagen.innerText="Tienes "+ jugador.maxImagenDesbloqueada + " desbloqueo imagenes por ronda (5c)";

var imgMasImg=template.querySelector("#masImagen");
//imgMasImg.id="masImagen";
//imgMasImg.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasImg.addEventListener("click",comprarAlgo);

var masAtributo=template.querySelector("#texto_atributo");
masAtributo.innerText="Tienes "+ jugador.maxAtributoDesbloqueado + "desbloqueo atributos por ronda (5c)";

var imgMasAtr=template.querySelector("#masAtributo");;
//imgMasAtr.id="masAtributo";
//imgMasAtr.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasAtr.addEventListener("click",comprarAlgo);

var masAlma=template.querySelector("#texto_alma");
masAlma.innerText="Tu alma (coste 50 )";

var imgMasAlma=template.querySelector("#masAlma");
//imgMasAlma.id="masAlma";
//imgMasAlma.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasAlma.addEventListener("click",comprarAlgo);

var exit_icon = template.querySelector("#exitIcon");
//exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
//exit_icon.id = "exitIcon";
exit_icon.cualPantalla =which;
exit_icon.addEventListener("click", exitPantalla);

/*pantalla_volcar.appendChild(masImagen);
pantalla_volcar.appendChild(imgMasImg);
pantalla_volcar.appendChild(masAtributo);
pantalla_volcar.appendChild(imgMasAtr);
pantalla_volcar.appendChild(masAlma);
pantalla_volcar.appendChild(imgMasAlma);
pantalla_volcar.appendChild(exit_icon);*/
var textCoins=template.querySelector("#textCoins");
textCoins.innerText="Monedas "+jugador.coins;


pantalla_volcar.appendChild(template);

return pantalla_volcar;

}


function comprarAlgo(e){

  var id = e.srcElement.id;

  switch(id){
  case "masImagen":
  if(confirm("Quieres comprar una imagen extra por ronda?")){
    if(jugador.maxImagenDesbloqueada < 2 && jugador.coins>=5){
      if( jugador.coins>5){
        jugador.maxImagenDesbloqueada=2;
        jugador.coins=jugador.coins-5;
        var pantalla=whereIsPantalla("tienda_icono");
        cleanPantalla(pantalla);
        var cual=formarTienda("tienda_icono",false);
        cual.style.visibility="visible";
      }else{
        confirm("No tienes suficientes monedas");
      }

    }else{
      confirm("No puedes comprar más mejora imagen");
    }
  }

  break;
  case "masAtributo":
  if(confirm("Quieres comprar un atributo extra por ronda?")){
    if(jugador.maxAtributoDesbloqueado < 2 && jugador.coins>=5){
      if( jugador.coins>5){
        jugador.maxAtributoDesbloqueado=2;
        jugador.coins=jugador.coins-5;
        var pantalla=whereIsPantalla("tienda_icono");
        cleanPantalla(pantalla);
        var cual=formarTienda("tienda_icono",false);
        cual.style.visibility="visible";
      }else{
        confirm("No tienes suficientes monedas");
      }

    }else{
      confirm("No puedes comprar más mejora atributo");
    }
  }

  break;
  case "masAlma":
  if(confirm("Quieres tu alma?")){
    if(!jugador.alma ){
      if( jugador.coins>=50){
        jugador.alma=true;
        jugador.coins=jugador.coins-50;
        //deberia enviar al final segun tus acciones.
        queFaseEstoy();
      }else{
        confirm("No tienes suficientes monedas");
      }

    }else{
      confirm("Ya has comprado alma");
    }
  }

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
  /*if (result != "NO_EXIST" && (namePantalla == "tarjeta_principal_icono" || )) {
    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
  }*/

  if(momentoAsignacion()){
    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="visible";

  }else{

    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
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


var icono_tarjetas = document.querySelector("a#tarjetas_icono");
var icono_chat = document.querySelector("a#chat_icono");
var icono_main = document.querySelector("a#tarjeta_principal_icono");
var icono_lupa = document.querySelector("a#lupa_icono");
var icono_tienda = document.querySelector("a#tienda_icono");

icono_tarjetas.addEventListener("click", onClickIcon);
icono_chat.addEventListener("click", onClickIcon);
icono_main.addEventListener("click", onClickIcon);
icono_lupa.addEventListener("click", onClickIcon);
icono_tienda.addEventListener("click", onClickIcon);

function llenarInfoTarjetaIcono(pantalla_volcar) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
  var name = pantalla_volcar.querySelector("#name_caracter");
  var atr1 = pantalla_volcar.querySelector("#atributo_1");
  var atr2 = pantalla_volcar.querySelector("#atributo_2");
  var atr3 = pantalla_volcar.querySelector("#atributo_3");
  if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
    while(imagen_caracter.firstChild)
    {

        imagen_caracter.removeChild(imagen_caracter.firstChild);

    }
    ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked.classList.remove("hiden");
      imagen_caracter.appendChild(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked);

  } else {
    while(imagen_caracter.firstChild)
    {

        imagen_caracter.removeChild(imagen_caracter.firstChild);

    }
    ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src.classList.remove("hiden");
      imagen_caracter.appendChild(ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src);

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
      console.log("Entro click en " + this.id);
        var pantalla_volcar = formarPantallaTarjetas(this.id);
        console.log(pantalla_volcar);
        pantalla_volcar.style.visibility = "visible";
        var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
        var name = pantalla_volcar.querySelector("#name_caracter");
        var atr1 = pantalla_volcar.querySelector("#atributo_1");
        var atr2 = pantalla_volcar.querySelector("#atributo_2");
        var atr3 = pantalla_volcar.querySelector("#atributo_3");

        //imagen_caracter.src = ronda_prueba.main_caracter.list_photos[0].src;
        while(imagen_caracter.firstChild)
        {

            imagen_caracter.removeChild(imagen_caracter.firstChild);

        }
         ronda_prueba.main_caracter.list_photos[0].src.classList.remove("hiden");
          imagen_caracter.appendChild( ronda_prueba.main_caracter.list_photos[0].src);


        name.innerText = ronda_prueba.main_caracter.name;
        atr1.innerText = ronda_prueba.main_caracter.list_atributes[0].description;
        atr2.innerText = ronda_prueba.main_caracter.list_atributes[1].description;
        atr3.innerText = ronda_prueba.main_caracter.list_atributes[2].description;
        break;

      case "lupa_icono":

        jugador.isLookingDisonace = true;

        break;
      case "tienda_icono":
      var pantalla_volcar = formarTienda(this.id,true);
      if (!pantalla_volcar == false) {
        pantalla_volcar.style.visibility = "visible";

      }


          break;

      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }

    if (momentoAsignacion()) {

      activarAsignar();
    }else{

      var barra=document.querySelector("#barra_superior");
      barra.style.visibility="hidden";
    }


  }


}

function activarAsignar() {
  /*var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

  var resp1 = whereIsPantalla("tarjetas_icono");
  var pantalla = document.querySelector("." + resp1);
  var iconoVerificar = document.querySelector("#verfiy_asig");
  iconoVerificar.style.visibility = "visible";*/

var ronda_prueba = jugador.list_rondas[jugador.ronda_actual]
var barra=document.querySelector("#barra_superior");
barra.style.visibility="visible";
var corazon= barra.querySelector("#heart");
corazon.style.color= ronda_prueba.list_caracters[ronda_prueba.fichaUsing].color_corazon;
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
    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
    jugador.list_rondas[jugador.ronda_actual].faseActual = "finalParejas";
    jugador.coins=jugador.coins+10;
    queFaseEstoy();

  }


}


/*********Para el escritorio END**************/

/*EJECUTAR*/
jugador.FaseJugador="introduccion";
jugador.list_rondas[jugador.ronda_actual].faseActual = "apuesta";
var pantall=document.querySelector("#escritorio");
pantall.style.visibility="hidden";
queFaseEstoy();
