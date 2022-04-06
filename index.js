localStorage.clear();

window.addEventListener('resize', () => {
  // Toggle on mobile
  if (window.innerWidth <= 100) {
  alert('Versão celular indisponível / Version mobile indisponible / Mobile version not available')
   
  }
});

function muteMe(elem) {
  elem.muted = true;
  
}
document.getElementById("hit").onloadedmetadata = function() {document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="lose" src="assets/sounds/youlose.mp3"></audio>`);
document.getElementById("lose").onloadedmetadata =  document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id='plin' src='assets/sounds/plin.mp3'></audio>`);
document.getElementById("plin").onloadedmetadata =  document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="fxkeyboard" src='assets/sounds/keyboard.wav'></audio>`)
document.getElementById("fxkeyboard").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id='flame' src='assets/sounds/evilaugh.mp3'></audio>`);
document.getElementById("flame").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="fxsteps" src="assets/sounds/steps.mp3"></audio>`);

setTimeout(function(){document.getElementById("fxsteps").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", ` <audio preload="metadata" id="plane" src="assets/sounds/street.mp3"></audio>`);
document.getElementById("plane").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", ` <audio preload="metadata" id="round" src="assets/sounds/round.mp3"></audio>`);
document.getElementById("round").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="fight" src="assets/sounds/fight.mp3"></audio>`);
document.getElementById("fight").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="stage" src="assets/sounds/super.mp3"></audio>`);
document.getElementById("stage").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", ` <audio preload="metadata" id="hadouk" src="assets/sounds/hadouken.mp3"></audio>`);
}, 1000)

setTimeout(function(){
document.getElementById("hadouk").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="punch" src="assets/sounds/hit.wav"></audio>`);
document.getElementById("punch").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="akum" src="assets/sounds/akuma.mp3"></audio>`);
document.getElementById("akum").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="die" src="assets/sounds/deathryu.mp3"></audio>`);
document.getElementById("die").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata" id="gameover" src="assets/sounds/gameover.mp3"></audio>`);
document.getElementById("gameover").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata"  id="aplause" src="assets/sounds/bravo.mp3"></audio>`);
document.getElementById("aplause").onloadedmetadata = document.getElementById("hit").insertAdjacentHTML("afterend", `<audio preload="metadata"  id="fim" src="assets/sounds/musicafim.mp3"></audio>`)
}, 2000)
}

function mutePage() {
  console.log("muted")
  if (localStorage.mute == 'true') {
    document.getElementById("sound").remove();
    document.querySelector("h1").insertAdjacentHTML("afterend", `<i id="sound" onClick='mutePage()' class="fas fa-volume-up"></i>`);
    
    if(document.getElementById("lose")){
    document.getElementById("lose").muted=false;
     
    }
    if(document.getElementById("hit")){
    document.getElementById("hit").muted=false;  
    }
    if(document.getElementById("plin")){
    document.getElementById("plin").muted=false;  
    }
    if(document.getElementById("fxkeyboard")){
    document.getElementById("fxkeyboard").muted=false;   
    }
    if(document.getElementById("flame")){
    document.getElementById("flame").muted=false; 
    }
    if(document.getElementById("fxsteps")){
    document.getElementById("fxsteps").muted=false;
    }
    if(document.getElementById("round")){
    document.getElementById("round").muted=false; 
    }
     if(document.getElementById("fight")){
     document.getElementById("fight").muted=false;
       
    }
     if(document.getElementById("stage")){
     document.getElementById("stage").muted=false;
       
    }
     if(document.getElementById("hadouk")){
     document.getElementById("hadouk").muted=false;
       
    }
     if(document.getElementById("hadouk2")){
     document.getElementById("hadouk2").muted=false;
     
    }
     if(document.getElementById("punch")){
     document.getElementById("punch").muted=false;
      
    }
     if(document.getElementById("punch2")){
     document.getElementById("punch2").muted=false;
       
    }
     if(document.getElementById("akum")){
     document.getElementById("akum").muted=false;
       
    }
     if(document.getElementById("die")){
     document.getElementById("die").muted=false;
       
    }
     if(document.getElementById("gameover")){
     document.getElementById("gameover").muted=false;
       
    }
     if(document.getElementById("fim")){
     document.getElementById("fim").muted=false;
        
    }
 if(document.getElementById("plane")){
     document.getElementById("plane").muted=false;
        
    }
    
    
    

    return localStorage.mute = 'false';
  }
  localStorage.mute = 'true';
  document.getElementById("sound").remove();
  document.querySelector("h1").insertAdjacentHTML("afterend", `<i id="sound" onClick='mutePage()' class="fas fa-volume-mute"></i>`);
  var elems = document.querySelectorAll("video, audio");

  [].forEach.call(elems, function(elem) {
    muteMe(elem);
  });
}


function francais() {
  localStorage.language = 'francais';
  document.getElementById("lang").style.display = "none";
  start();

}

function english() {
  localStorage.language = 'english';
  document.getElementById("lang").style.display = "none";
  start();

}

function portugues() {
  localStorage.language = 'portugues';
  document.getElementById("lang").style.display = "none";
  start();

}

function start() {
  document.querySelector(".lds-heart").style.display = "inline-block";
  if (localStorage.language == 'francais') {
    var txt0 = "candidat";
    var txt1 = "Chargement";
    var txt2 = "Préparation du pitch";
    var txt3 = "En quête d'inspiration";
    var txt4 = "Recherche de vêtements adaptés";
    var txt5 = "Tentative de bien paraître devant le miroir";
    var txt6 = "Abandon d'une mission impossible";
    var txt7 = "Lutte entre le désespoir et l'acceptation";
    var txt8 = "Ramasser mes morceaux et revenir en force";
    var txt9 = "Je suis prêt !!";
  }
  if (localStorage.language == 'english') {
    var txt0 = "candidate";
    var txt1 = "Loading";
    var txt2 = "Training the pitch";
    var txt3 = "Looking for inspiration";
    var txt4 = "Trying clothes for the interview";
    var txt5 = "Trying to look good in front of the mirror";
    var txt6 = "Abandoning such an impossible mission";
    var txt7 = "Struggling between despair and acceptance";
    var txt8 = "Picking up my pieces and coming in full force";
    var txt9 = "Im ready!!";
  }
  if (localStorage.language == 'portugues') {
    var txt0 = "candidato";
    var txt1 = "Carregando";
    var txt2 = "Treinando o discurso";
    var txt3 = "Procurando inspiração";
    var txt4 = "Experimentando roupas para a entrevista";
    var txt5 = "Tentando ficar bonito na frente do espelho";
    var txt6 = "Abandonando tal missão impossível";
    var txt7 = "Lutando entre aceitação e desespero";
    var txt8 = "Recolhendo meus pedaços e vindo em força total";
    var txt9 = "Eu estou pronto!!";
  }

  setTimeout(function() {
    document.querySelector("h1").insertAdjacentHTML("afterend", `  <button onclick="createCandidat()" id="showCandidat">${txt0}
    
  </button>`)
    document.getElementById("showCandidat").insertAdjacentHTML("afterend", `<div id="loadInit"><p class=" textLoad saving" style="animation: sortientree 5s forwards">${txt1}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:5s;">${txt2}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:10s;">${txt3}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:15s;">${txt4}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:20s;">${txt5}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:25s;">${txt6}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:30s;">${txt7}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:35s;">${txt8}<span>.</span><span>.</span><span>.</span> </p>
<p class="textLoad saving" style="animation-delay:40s;">${txt9} </p>
</div>`)
  }, 100)
  setTimeout(function() {
    document.querySelector("h1").style.display = "block";

    document.querySelector(".lds-heart").style.display = "none";
    document.querySelector("#showCandidat").style.display = "block"
  }, 45000)
}

let timer = 0;

let information = [];
var style = document.createElement('style');
document.head.appendChild(style);

function link(x) {
  alert(x)
}


function createCandidat() {
  if (localStorage.language == 'francais') {
    var txt0 = "nom complet:";
    var txt1 = "age:";
    var txt2 = "compétences:";
    var txt3 = "Accepter";
    var txt4 = "Refuser";
  }
  if (localStorage.language == 'english') {
    var txt0 = "full name:";
    var txt1 = "age:";
    var txt2 = "competencies";
    var txt3 = "Accept";
    var txt4 = "Refuse";
  }
  if (localStorage.language == 'portugues') {
    var txt0 = "nome completo:";
    var txt1 = "idade:";
    var txt2 = "competências:";
    var txt3 = "Aceitar";
    var txt4 = "Recusar";
  }

  document.getElementById("showCandidat").style.display = 'none';
  document.getElementById("showCandidat").insertAdjacentHTML("afterend", `<div id='column' ><img id='photo' src='assets/img/fiddlecvphoto2.png'> </div><div id='card'><table><tr> <td>${txt0}</td> <td>Alexandre Gaglianone</td><tr> <td>${txt1}</td><td> 35</td> <tr><td>${txt2}</td> <td><strong>HTML, CSS/Sass, Bootstrap, JavaScript/Vue.Js, Node.Js, SQL/MySql, mongoDb, Git/GitHub.   </td></table> <div id='buttons'> <button id='accept' onclick='acceptIt()'>${txt3}</button><span id='mouse'> <button id='refuse' style='z-index:200;' onclick='refuseIt(0,0,0)'>${txt4} </button></div> </span></div>`);
}

function acceptIt() {
  if (localStorage.language == 'francais') {
    var txt0 = "contact";
    var txt1 = "0";

  }
  if (localStorage.language == 'english') {
    var txt0 = "contact";
    var txt1 = "+33";

  }
  if (localStorage.language == 'portugues') {
    var txt0 = "contato";
    var txt1 = "+33";

  }
  window.location.href = "mailto:alex.gaglianone@gmail.com"
  document.getElementById("accept").insertAdjacentHTML("afterend", `<ul id="acceptTxt"> <strong> <li> ${txt0}: ${txt1}768364537 </li> <li> email: alex.gaglianone@gmail.com </li>`)
  document.getElementById("accept").style.display = 'none';
  document.getElementById("refuse").style.display = 'none'


}

localStorage.timesClicked = 0

function idea() {
  document.getElementById("photo").insertAdjacentHTML("afterend", "<img id='idea' src='assets/img/idea.png'>")

}

function openFrame(x, y) {
  if (!document.getElementById('framed')) {
    if (x != 0) {

      return document.querySelector("#exp").insertAdjacentHTML("afterend", `<div id='framed'><a href="${x}" target="_blank" rel="noopener noreferrer"><i class='scaleText fas fa-globe-americas iconProj'"></i></a><a href="${y}" target="_blank" rel="noopener noreferrer"><i class='fab fa-github-square iconProj scaleText'"></i></a></div>`);
    }
    return document.querySelector("#exp").insertAdjacentHTML("afterend", `<div id='framed'><a href="${y}" target="_blank" rel="noopener noreferrer"><i class='fab fa-github-square iconProj scaleText' "></i></a></div>`);

  }
  document.getElementById('framed').remove();

  if (x != 0) {
    return document.querySelector("#exp").insertAdjacentHTML("afterend", `<div id='framed'><a href="${x}" target="_blank" rel="noopener noreferrer"><i class='scaleText fas fa-globe-americas iconProj'"></i></a><a href="${y}" target="_blank" rel="noopener noreferrer"><i class='fab fa-github-square iconProj scaleText'"></i></a></div>`)
  }
  return document.querySelector("#exp").insertAdjacentHTML("afterend", `<div id='framed'><a href="${y}" target="_blank" rel="noopener noreferrer"><i class='fab fa-github-square iconProj scaleText'"></i></div>`);



}

function random() {
  return Math.random() * (87 - 1) + 1;
}
let x = 0;

function growing() {
  if (x == 9) {
    return x = 9;
  }
  return ++x;

}

function youlose() {
  if (document.getElementById("lose")) {
  document.getElementById("lose").play();  
    document.getElementById("stage").pause();
     document.getElementById("lose").volume = 0.8;
    
     if (localStorage.mute == 'true') {      
      document.getElementById("lose").muted = true;
      
    }
   
    setTimeout(function(){  document.getElementById("lose").remove()}, 3000 )
    document.getElementById("photo").style.animation = "hide 1s forwards";
  }
}

function refuseIt(x, y, z) {


  if (localStorage.timesClicked < 3 & localStorage.timesClicked >= 0) {
    setTimeout(function() {
      document.getElementById("photo").style.animation = 'hit 1s forwards';
    }, 100);
    if (document.getElementById("hit")) {
      document.getElementById("hit").play();
    }
    
    document.getElementById("hit").volume = 1;
    if (localStorage.mute == 'true') {      
      document.getElementById("hit").muted = true;
    }
   



    setTimeout(function() {
      document.getElementById("photo").style.animation = 'unset';
    }, 2000);

    y = random();
    x = random();

    document.getElementById("refuse").style.position = 'fixed';
    document.getElementById("refuse").style.left = x + '%';
    document.getElementById("refuse").style.top = y + '%';

    ++localStorage.timesClicked;



    if (localStorage.timesClicked == 3) {
      document.getElementById("refuse").style.position = 'unset';

      document.getElementById("photo").src = 'assets/img/ouch.png';

      setTimeout(function() {
        document.getElementById("photo").insertAdjacentHTML("afterend", "<div class='buble' style='animation: tab1 1s forwards; border: solid 2px; width: 12px; height: 12px; border-radius: 20px; position: absolute; left: 10%; top:125px; z-index:	-1;'></div> ")
      }, 1200);
      setTimeout(function() {
        document.getElementById("photo").insertAdjacentHTML("afterend", "<div class='buble' style='animation: tab1 1s forwards;border: solid 2px; width: 20px; height: 20px; border-radius: 20px; position: absolute; left: 10%;    top: 95px;z-index:	-1;'></div> ")
      }, 1500);

      setTimeout(function() {
        document.getElementById("photo").style.border = 'solid 2px black';
        document.getElementById("photo").src = 'assets/img/CREATOR-gd-jpeg-v1-0-using-IJG-JPEG-v80-default-quality.jpg'
      }, 1000);
      setTimeout(function() {
        document.getElementById("photo").insertAdjacentHTML("afterend", "<div id='ideaici'  style='border:0; position:absolute; background-image:url(assets/img/nuvemidea.png); background-size: contain;top:7px; left: 9.5%; height: 80px;'><img id='idea' src='assets/img/idea.png''></div> ")
      }, 3000);
      setTimeout(function() {
      document.getElementById("plin").play();
  
         document.getElementById("plin").volume = 1;
         if (localStorage.mute == 'true') {      
      document.getElementById("plin").muted = true;
    }
        
      }, 2020);
      setTimeout(function() {

        if (localStorage.language == 'francais') {
          var txt0 = "Chargement";


        }
        if (localStorage.language == 'english') {
          var txt0 = "Loading";


        }
        if (localStorage.language == 'portugues') {
          var txt0 = "Carregando";


        }
        document.getElementById("photo").style.display = 'none';
        document.getElementById("idea").style.display = 'none';
         document.body.insertAdjacentHTML("afterbegin", `<div id='load'> <p class='saving'> ${txt0}<span>.</span><span>.</span><span>.</span></p> <div class='lds-facebook'><div></div><div></div><div></div></div> </div>`);
        document.getElementById("fxkeyboard").play();

     
         document.getElementById("fxkeyboard").volume = 0.8;
         if (localStorage.mute == 'true') {      
      document.getElementById("fxkeyboard").muted = true;
    }
        

        style.sheet.insertRule('#card{top:0px;height: 1px;}'); /* nice */
        style.sheet.insertRule('body {background-color: black}');
        style.sheet.insertRule('.buble {display:none}');
        style.sheet.insertRule('h1{position:fixed; top:2px;background-color:white; text-transform: uppercase; text-align: center; line-height: 2; border-radius: 37px; width:55%; font-family: "Fredoka One", cursive; font-size:1.6em}');
        style.sheet.insertRule('button{background-color: #c2fbd7; border-radius: 100px;box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px; color: green; cursor: pointer; display: inline-block; font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif; padding: 7px 20px;text-align: center; text-decoration: none; transition: all 250ms;border: 0; font-size: 16px; user-select: none; webkit-user-select: none; touch-action: manipulation; margin: 20px; margin-top: 13%;font-family: "Fredoka One", cursive;  }')
        style.sheet.insertRule('button:hover{box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px; transform: scale(1.05) rotate(-1deg);}');

        style.sheet.insertRule('i{color: white;font-size: 1.8rem;cursor: pointer;margin-right: 5px}');
        style.sheet.insertRule('#photo{position:unset;left: 36px;top:79px; border: 5px solid white !important;border-radius:25px;}');
        style.sheet.insertRule('#icons{width:100%;margin-top: 10px; margin-left:	5px;}')
        style.sheet.insertRule('#icons2{display:flex; flex-direction:column;width: 100%; margin-left: 5px;}')
        style.sheet.insertRule('table{display:none}')
        style.sheet.insertRule('#buttons{display: flex; position: fixed; bottom: 0%; right: 38%;}')
        style.sheet.insertRule('button{margin: 0% 20px 20px !important;}')
        style.sheet.insertRule('#card{margin-top:0; width:100%; position: relative;}')
        style.sheet.insertRule('.scaleIcon:hover{animation: scaleIcon 1s forwards}')
        style.sheet.insertRule('#column{display: flex; flex-direction: column;position: absolute; width: 21%; left: 10px; top: 18%;}')
        style.sheet.insertRule('#slider{display: flex;flex-direction: column;position: absolute;right: 20px;top: 48%;}')

        style.sheet.insertRule('input[type="radio"]:checked:after{background-color:red;}');
        style.sheet.insertRule('input[type="radio"]:after{background-colord: red;}');

        style.sheet.insertRule('label > input[type="radio"]{display: none;}');

        style.sheet.insertRule('label > input[type="radio"] + *::before{ content: "";    display: inline-block; vertical-align: bottom; width: 0.7rem; height: 0.7rem; margin-right: 0.3rem; border-radius: 20%; border-style: double; border-width: 0.1rem;    border-color: white; margin-bottom: 5px;}');


        style.sheet.insertRule('label > input[type="radio"]:checked + *::before {background: radial-gradient(rgb(194, 251, 215) 0%, #225a14a3 100%, transparent 29%, transparent); border-color: white;}');

        style.sheet.insertRule(' label > input[type="radio"]:checked + * {color: rgb(194, 251, 215);}');
        style.sheet.insertRule('.scaleText:hover{animation: scaleText 1s forwards; cursor:pointer;}')
        style.sheet.insertRule('.frames{border:0; border-radius:12px;}')
        style.sheet.insertRule('#framed{animation: framesButton 1s forwards; width: 23%;background: radial-gradient(rgb(106 147 121) -7%, rgba(34, 90, 20, 0.64) 100%, transparent 0%, transparent);border-radius: 10px; height: 57px; display: flex; justify-content: space-evenly; align-items: center;  margin: auto;}');



        /*  style.sheet.insertRule('{}')'*/
        document.getElementById("mouse").addEventListener("click", clickRun);


        document.getElementById("mouse").addEventListener("mouseover", sad);

        document.getElementById("mouse").addEventListener("mouseout", normal);

      }, 5000);

      function clickRun() {

        document.getElementById("mouse").removeEventListener("mouseout", normal);
        document.getElementById("mouse").removeEventListener("mouseover", sad);
        document.getElementById("mouse").addEventListener("mousemove", run);
        document.getElementById("mouse").removeEventListener("click", clickRun);


      }

      function sad() {
        document.getElementById("photo").src = 'assets/img/Photolab-634992194.jpg';
        document.getElementById("photo").style.animation = "100ms shake infinite alternate";


      }

      function normal() {
        document.getElementById("photo").src = 'assets/img/fiddlecvphoto2.png';
        document.getElementById("photo").style.animation = "";
      }

      function run() {
        document.getElementById("photo").style.animation = "";

        var a = random();


        if (a > 44) {
          document.getElementById("refuse").style.backgroundColor = "";
          document.getElementById("refuse").style.color = "";
        }
        if (a < 44) {
          document.getElementById("refuse").style.backgroundColor = "red";
          document.getElementById("refuse").style.color = "yellow";
        };
        let scalex = "scale(0." + random().toString().charAt(0) + ")";
        let scales = "scale(1." + growing() + ")";

        document.getElementById("refuse").style.position = 'absolute';
        document.getElementById("refuse").style.transform = scalex;
        document.getElementById("accept").style.transform = scales;



        if (!document.getElementById("flame2")) {
          document.getElementById("photo").insertAdjacentHTML("afterend", " <span id='flame2'></span>"); 
          document.body.style.backgroundRepeat = "no-repeat";
          document.getElementById("photo").src = 'assets/img/diabao.gif';
          document.getElementById("flame").play();        
          document.getElementById("flame").volume = 1;
              if (localStorage.mute == 'true') {      
      document.getElementById("flame").muted = true;
    }
          style.sheet.insertRule('body{background-image:url(assets/img/fire-15.gif); background-repeat:repeat; background-size: cover; background-attachment: fixed;}');
        }
        var btn = document.getElementById("refuse");

        if (!btn.style.left) {

          // Default to 500 to start
          btn.style.left = "60%";
        }
        if (!btn.style.bottom) {
          btn.style.top = 'unset'
          btn.style.bottom = "2%"
        }
        var posTop = parseInt(btn.style.bottom);

        var posLeft = parseInt(btn.style.left);
        if (posTop >= 1) {
          ;
          if (posTop >= 400) {
            btn.style.bottom = "1%";
          } else if (posTop >= 1) {

            posTop += 1;
            btn.style.bottom = (posTop + 1) + "%";

          }
        }
        if (posLeft >= 87) {

          btn.style.left = "1%";
        } else if (posLeft >= 1) {
          posLeft += 1;
          btn.style.left = (posLeft + 1) + "%";

        }


        setTimeout(function() {
          document.getElementById("mouse").removeEventListener("mousemove", run);
          document.getElementById("refuse").style.display = "none";
          document.getElementById("accept").style.display = "none";
          document.getElementById("refuse").style.transform = "scale(1)";
          document.getElementById("accept").style.transform = "scale(1)";
          document.getElementById("refuse").style.backgroundColor = "";
          document.getElementById("refuse").style.color = "";
          btn.style.position = 'unset';
          if (!document.getElementById("ok")) {
            document.body.style.backgroundImage = "url('')";
            style.sheet.insertRule('#ok{ position: absolute; top:32%; right: 25%; width: 45%; height:45%; background-color:white; border-radius:25px; animation: ok 1s forwards; display:flex; justify-content: center; align-items: center; font-size: 2rem;}');
            style.sheet.insertRule('#curtain{position:absolute; width:75%; height: 100%; background-color:black; z-index:2;    top: 18%;    left: 19%;  }');
            style.sheet.insertRule('body{background-repeat:no-repeat}');
            style.sheet.insertRule('#curtain{background-repeat:no-repeat; display:none;}');

            document.body.insertAdjacentHTML("afterend", '<div id="ok"> <h3 class="saving"> <span>O</span><span>K</span><span>.</span><span>.</span><span>.</span></h3>');
            document.getElementById("photo").src = 'assets/img/Photolab-634992194.jpg';
            setTimeout(function() {
              document.getElementById("photo").style.animation = 'hide 0.5s forwards';
              localStorage.stop = true;
              setTimeout(function() {
              document.getElementById("fxsteps").play();
                
                document.getElementById("fxsteps").volume = 0.8;
                     if (localStorage.mute == 'true') {      
      document.getElementById("fxsteps").muted = true;
    }
              }, 2500)
              document.body.insertAdjacentHTML("afterbegin", `<div style="height:unset;" id='curtain'><div id="vid" style="display:none;width:100%;height:0px;position:relative;padding-bottom:56.250%;"></div>`);
              if (window.innerWidth > 649) {
   document.body.style.backgroundImage = "url('assets/img/opencloseyoutube.gif')";
   
  }
             
            }, 6000);
            setTimeout(function() {
              style.sheet.insertRule('.tab1{animation: curtainClose 1.8s forwards}');
              style.sheet.insertRule('#tab2{animation: curtainClose 1.8s forwards}');
              document.getElementById("ok").style.animation = 'curtainClose 1.8s forwards'
            },8000)
            document.body.style.backgroundRepeat = "no-repeat";
            setTimeout(function() {
              document.body.style.backgroundImage = "url('')";
            }, 16000)
            setTimeout(function() {

              document.getElementById("photo").style.animation = 'iconsComp 2s forwards';
              document.getElementById("photo").src = 'assets/img/muro.JPG';
              style.sheet.insertRule('#curtain{top: 17% !important; left: 19% !important;width: 61% !important;z-index:0 !important;}');
              style.sheet.insertRule('h1{z-index:1;}');
              document.getElementById("slider").remove();
              document.getElementById("curtain").style.display = 'block';
              document.getElementById("curtain").insertAdjacentHTML("afterbegin", `<div id="show" style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/xkls6n?autoplay=1&nocontrols=1&loop=0" frameborder="0" width="100%" height="unset" allowfullscreen allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>`);
              document.getElementById("plane").play();
                if (localStorage.mute == 'true') {      
      document.getElementById("plane").muted = true;
    }
              document.getElementById("refuse").disabled = true;
            }, 16000);
          }
          setTimeout(function() {
            if (document.getElementById("curtain").style.display != "none") {
              document.getElementById("curtain").style.display = "none";;
              style.sheet.insertRule('#recrut{position: absolute; right: 5%;height:52%; bottom: 9%; width: 24%;}');
              document.getElementById("refuse").disabled = false;
              document.body.insertAdjacentHTML("afterbegin", ` <img id="recrut" src="assets/img/UA0RXKs.gif"> <div id="lifebar1"><span id="health1"></span><h3 class="jouer">Candidat</h3></div><div id="lifebar2"><span id="health2"></span><h3 class="jouer">${localStorage.info}</h3></div><img id="ko" src="assets/img/KO.jpg"><p id="times">99</p> <img id="ryu" src="assets/img/Ryucvshados.gif">`);
               document.getElementById("round").play();
              document.getElementById("round").volume = 1;
                              if (localStorage.mute == 'true') {      
      document.getElementById("round").muted = true;
    }
              style.sheet.insertRule('#ryu{position: absolute;height:60%; width: 50%; bottom: 8%; left: 7%;}');
              style.sheet.insertRule('#lifebar1{border: 3px solid white;background-color: yellow; width:32%; height:32px; position: absolute;left: 20%; top:17%;border-radius: 6px;}');
              style.sheet.insertRule('#lifebar2{border: 3px solid white;background-color: yellow; width:32%; height:32px; position: relative; left: 22%; bottom: -16vh;;border-radius: 6px;}');
              style.sheet.insertRule('.jouer{margin-top:40px; margin-left:1px; color:white;font-size:1.8rem;font-family:monospace; color:orange;text-overflow: ellipsis;white-space: nowrap; overflow: hidden;	}');
              style.sheet.insertRule('#ko{position: absolute;  top: 16%;  left: 52%;}');
              style.sheet.insertRule('#times{position: absolute;  top: 19.5%;  left: 53%; font-size:2.4rem;font-family:fantasy; color:orange;}');

              let roundTime = document.getElementById("times").innerHTML;


              setInterval(function() {
                if (!document.getElementById("times")) {
                  return
                }
                if (document.getElementById("times").innerHTML == 1) {
                  document.getElementById("times").remove();
                  return youlose();
                }
                if (document.getElementById("times").innerHTML) {
                  document.getElementById("times").innerHTML = roundTime - 1;
                  roundTime = document.getElementById("times").innerHTML;
                }
              }, 1000);

              localStorage.timesClicked = 100;

              setTimeout(function() {
              document.getElementById("fight").play();
                
                 document.getElementById("fight").volume = 1;
                               if (localStorage.mute == 'true') {      
      document.getElementById("fight").muted = true;
    }
                
              }, 1600);
              setTimeout(function() {
                document.getElementById("stage").play();
                document.getElementById("stage").volume = 0.6;
                       if (localStorage.mute == 'true') {      
      document.getElementById("stage").muted = true;
    }
              }, 100);
              document.body.style.backgroundImage = "url('assets/img/Super-Street-Fighter-II-Turbo-Arcade-Video-Game-1994-Capcom-Animated-Background-Stage-Guile-USA.gif')";
              document.getElementById("refuse").style.display = "unset";
              document.getElementById("accept").style.display = "unset";
            }


          }, 32000)


        }, 9000)






      }



      setTimeout(function() {
        document.getElementById("load").style.display = 'none';


        document.getElementById("card").insertAdjacentHTML("afterend", "<div id='slider'><label for='slide1'><input id='slide1' name='slider' type='radio' checked><span style='cursor:pointer;'></span></label><label for='slide2'><input  id='slide2'  type='radio' name='slider'><span style='cursor:pointer;'></span></label></div>");
        document.getElementById("photo").insertAdjacentHTML("afterend", "<div id='icons'><a href='https://github.com/lelepg22' target='_blank' rel='noopener noreferrer'><i class='scaleIcon fab fa-github'></i></a> <a href='https://www.linkedin.com/in/alexandre-gaglianone/' target='_blank' rel='noopener noreferrer'><i class='scaleIcon fab fa-linkedin'></i></a> <a style='font-size:1.8rem' href='mailto:alex.gaglianone@gmail.com'<i onclick=link('alex.gaglianone@gmail.com') class='scaleIcon fas fa-envelope-square'></i></a></div><div id='icons2'><a href='tel:+33768364537'<i onclick=link('+33768364537') class='fas fa-phone-alt'>  +33768364537</i></a> <i class='fas fa-home' style='font-size:1rem; margin-top:7px'>  Toulouse, France</i></div> ");

        document.getElementById("photo").src = 'assets/img/fiddlecvphoto2.png';
        document.querySelector("#loadInit").style.display = "none";
        document.getElementById("photo").style.display = 'block';

        if (localStorage.language == 'francais') {
          var txt0 = "Développeur Web";
          var txt1 = "COMPÉTENCES";
          var txt2 = "Expériences";
          var txt3 = "Transformation d'une maquette en site web avec HTML & CSS";
          var txt4 = "Dynamisation d'une page web avec des animations CSS";
          var txt5 = "Optimisation d'un site web existant";
          var txt6 = "Construction d'un site de e-commerce en JavaScript";
          var txt7 = "Construction d'une API sécurisée pour une application d'avis gastronomiques";
          var txt8 = "Création d'un réseau social d’entreprise ";
          var txt9 = "Projets";
          var txt10 = "FORMATION";
        }
        if (localStorage.language == 'english') {
          var txt0 = "Web Developer";
          var txt1 = "COMPETENCIES";
          var txt2 = "Experiences";
          var txt3 = "Transformation of a model into a website with HTML & CSS";
          var txt4 = "Dynamizing a web page with CSS animations";
          var txt5 = "Optimization of an existing website";
          var txt6 = "Building an e-commerce site in JavaScript";
          var txt7 = "Building a secure API for a restaurant review application";
          var txt8 = "Creation of an enterprise social network ";
          var txt9 = "Projects";
          var txt10 = "EDUCATION";
        }
        if (localStorage.language == 'portugues') {
          var txt0 = "Desenvolvedor Web";
          var txt1 = "COMPETÊNCIAS";
          var txt2 = "Experiências";
          var txt3 = "Transformação de uma maquete em um website com HTML & CSS";
          var txt4 = "Dinamização de uma página web com animações CSS";
          var txt5 = "Otimização de um site existente";
          var txt6 = "Construindo um site de e-commerce em JavaScript";
          var txt7 = "Construindo um API seguro para uma aplicação de revisão de restaurante";
          var txt8 = "Criação de uma social network corporativa ";
          var txt9 = "Projetos";
          var txt10 = "Graduação";
        }
        document.querySelector("h1").insertAdjacentHTML("afterend", `<div class='tab1'><h2 style='font-size:1.6rem'>${txt10}</h2> <ul style='list-style:none'><li style='width:100%;'>OpenClassroom - ${txt0} </li> </ul> <h2 style='font-size: 1.6rem'>${txt1}</h2><ul style='list-style:none; display:flex; flex-direction:row;flex-wrap:wrap;margin-top:-3px;width:127%'> <li><img class='iconsComp' src='assets/img/html-5.png'></img></li><li><img class='iconsComp' src='assets/img/css.png'></li><li><img class='iconsComp' src='assets/img/file-type-sass-icon-130182.png'></li><li><img class='iconsComp' src='assets/img/bootstrap-plain-wordmark-logo-icon-146620.png'></li><li><img class='iconsComp' src='assets/img/javascript.png'</div>'></li><li><img class='iconsComp' src='assets/img/vuejs-original-wordmark-logo-icon-146305.png'></li><li><img class='iconsComp' src='assets/img/nodejs-original-wordmark-logo-icon-146412.png'></li><li><img class='iconsComp' src='assets/img/mongodb-plain-wordmark-logo-icon-146423.png'></li><li><img class='iconsComp' src='assets/img/mysql-original-wordmark-logo-icon-146417.png'></li><li><img style='background-color:white;border-radius:20px' class='iconsComp' src='assets/img/symbole-de-recherche-seo.png'></li><li><img class='iconsComp' src='assets/img/accessibility-3999.png'></li></div><div id='tab2'><h2 id='exp'>${txt2}/${txt9}</h2><ul style='list-style:none; line-height:2.4rem;'><li onclick=openFrame('https://lelepg22.github.io/Transformation-d-une-maquette-en-site-web-avec-HTML-CSS/','https://github.com/lelepg22/Transformation-d-une-maquette-en-site-web-avec-HTML-CSS') class='scaleText'>${txt3}</li><li onclick=openFrame('https://lelepg22.github.io/Dynamisation-d-une-page-web-avec-des-animations-CSS/','https://github.com/lelepg22/Dynamisation-d-une-page-web-avec-des-animations-CSS')  class='scaleText'>${txt4}</li><li onclick="openFrame('https://lelepg22.github.io/Optimisation-d-un-site-web-existant/', 'https://github.com/lelepg22/Optimisation-d-un-site-web-existant')" class='scaleText'>${txt5}</li><li onclick=openFrame(0,'https://github.com/lelepg22/Construction-d-un-site-de-e-commerce-en-JavaScript') class='scaleText'>${txt6}</li><li onclick=openFrame(0,'https://github.com/lelepg22/Construction-d-une-API-securisee-pour-une-application-d-avis-gastronomiques') class='scaleText'>${txt7}</li><li onclick=openFrame(0,'https://github.com/lelepg22/Creation-d-un-reseau-social-d-entreprise') class='scaleText'>${txt8}</li></ul> </div>`);
				 document.querySelector("#sound").style.color="white";

        document.querySelector("#slide1").addEventListener('change', function() {
          if (this.checked) {
            localStorage.stop = true;

            slide1();
          } else {

            slide2()
          }
        });
        document.querySelector("#slide2").addEventListener('change', function() {
          if (this.checked) {
            localStorage.stop = true;

            slide2();
          } else {

            slide1()
          }
        });

        function slide() {
          setInterval(function() {

            if (localStorage.stop == 'true') {
              return localStorage.stop = 'true';
            };
            if (timer == 0) {
              timer++;
              document.querySelector('#slide2').checked = true;
              slide2();
            } else {
              if (localStorage.stop == 'true') {
                return localStorage.stop = 'true';
              }
              if (timer == 1) {
                timer = 0;
                document.querySelector('#slide1').checked = true;
                return slide1();
              }
            }
          }, 16000);
        }
        slide();

        function slide2() {
          document.querySelector(".tab1").style.display = 'none';
          document.querySelector("h1").style.display = 'none';
          document.querySelector("#tab2").style.display = 'block';
        };

        function slide1() {
          document.querySelector("h1").style.animation = 'tab1 5s'
          document.querySelector("h1").style.display = 'block';
          document.querySelector(".tab1").style.display = 'block';
          document.querySelector("#tab2").style.display = 'none';
        }
        if (localStorage.language == 'francais') {
          var txt0 = "Veuillez entrer votre pseudo :";
          var txt1 = "Recruteur/Recruteuse";


        }
        if (localStorage.language == 'english') {
          var txt0 = "Please enter your name:"
          var txt1 = "Recruiter";


        }
        if (localStorage.language == 'portugues') {
          var txt0 = "Por favor insira o seu nome:";
          var txt1 = "Recrutador/Recrutadora";


        }
        let person = prompt(txt0, txt1);
        if (person == null || person == "") {
          person = "ANOM";
          localStorage.info = person;
          information.push(person);

        } else {
          localStorage.info = person;
          information.push(person);
        }





      }, 8000);










    }





  }
  if (localStorage.timesClicked >= 100) {
    document.querySelector("h1").style.display = 'none';
	document.getElementById("hadouk").play();
    document.getElementById("hadouk").volume = 1;
                   if (localStorage.mute == 'true') {      
      document.getElementById("hadouk").muted = true;
    }
    setTimeout(function() {
      document.getElementById("punch").play();
      document.getElementById("punch").volume = 1;
                     if (localStorage.mute == 'true') {      
      document.getElementById("punch").muted = true;
    }
    }, 1400)
    setTimeout(function() {
      style.sheet.insertRule('#health2{background-color: red; width: 2px; height: 32px;position: absolute; transform-origin: left; transform: scaleX(0); animation: lifehit 1s forwards;}');
    }, 1600)


    setTimeout(function() {
      document.getElementById("ryu").src = "assets/img/hadouken.gif";
      if (!document.getElementById("gifmaq")) {
        localStorage.timesClicked = -10;
        style.sheet.insertRule('#scene{position:absolute;left:37%;top:42%;}')
        style.sheet.insertRule('#gifmaq{width:82%; border-radius: 50px; border: 2px solid white; animation:fenetre 0.8s linear forwards;}')

        document.getElementById("ryu").insertAdjacentHTML("afterend", `<div id="scene"><img id="gifmaq" src="assets/img/projet2gife07e7cddc8cc8473.gif"></div>`)
      }
    }, 450)

    setTimeout(function() {
      document.getElementById("ryu").src = "assets/img/Ryucvshados.gif"
    }, 1050)

  }
  if (localStorage.timesClicked < 0 & localStorage.timesClicked > -12) {
  document.getElementById("hadouk").play(); 
     document.getElementById("hadouk").volume = 1;
    if (localStorage.mute == 'true') {      
      document.getElementById("hadouk").muted = true;
    }
    localStorage.timesClicked = 'z';


    setTimeout(function() {
      document.getElementById("ryu").src = "assets/img/hadouken.gif";
      style.sheet.insertRule('#form{width:50%;position:absolute;left:47%;top:50%;animation:fenetre 0.8s linear forwards;}');

      style.sheet.insertRule('#list{position: absolute; background-color: black; top: -12vh; left:-16vw; z-index: 1; display: flex; border-radius: 25px; border: 2px solid white; text-align: center;    width: 50px; height: 50px; align-items: center; justify-content: center;}');
      style.sheet.insertRule('.wbox{border: groove 2px white; padding: 6px; margin-left:25px; position: relative;  top: -10%;border-radius:5px;}');
      style.sheet.insertRule('.ei{margin: 6px; width:30px;}');
      style.sheet.insertRule('#weather{line-height: 29px; text-align: center; position: relative; bottom: 5px; border-radius: 6px;}');
      style.sheet.insertRule('#artist{line-height: 29px; text-align: center; position: relative; bottom: 5px; border-radius: 6px;}');
      style.sheet.insertRule('#codePostal{line-height: 29px; text-align: center; position: relative; bottom: 5px; border-radius: 6px;}');
      style.sheet.insertRule('#akuma{position: absolute;width: 53%;height:69%; bottom: 11px; animation: akuma 1s forwards}');
      style.sheet.insertRule('#paging{color:white; font-weight:heavy; cursor:pointer}');

      style.sheet.insertRule('#imgFrame{display:none;position:absolute; border-radius: 25px; right: -100px; bottom: -8px;border:solid; animation:tab1 1s forwards; height: 90px;}');
      style.sheet.insertRule('#imgArtist{border-radius: 25px;width: 90px; height: 90px;}');

      style.sheet.insertRule('#weatherBox{background-color: black; color: white; display: flex; flex-direction: column; min-width: 45%; line-height: 33px; height: 84px; justify-content: center; padding-left: 25px; border-radius: 20px; border: solid; position: absolute; top: 30%; left: 33%; animation: tab1 1s forwards;}');
      style.sheet.insertRule('#listArtists{display:flex; flex-direction:row;background-color: black; color: white; width: 65%; height: 33px; height: fit-content; justify-content: space-evenly; padding-left: 25px; border-radius: 20px; border: solid; position: absolute; top: 28%; left:23%; animation: tab1 1s forwards;padding-bottom:5px; min-height:80px;}');
      document.getElementById("gifmaq").style.display = "none";
      if (localStorage.language == 'francais') {
        var txt0 = "insérer la ville";
        var txt1 = "code postal";
        var txt2 = "artiste";
      }
      if (localStorage.language == 'english') {
        var txt0 = "insert city";
        var txt1 = "french postal code";
        var txt2 = "artist";

      }
      if (localStorage.language == 'portugues') {
        var txt0 = "insira cidade";
        var txt1 = "c. postal francês";
        var txt2 = "artista";

      }
      document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="form"><div><input type="text" id="weather" placeholder='"${txt0}"'><button onClick="doWeather()" class="buttonForm"><i class="fas fa-cloud-sun-rain"></i></button></div><div><input type="text" id="codePostal" placeholder='${txt1} ex: "31000"'> <button onClick="doCodePostal()" class="buttonForm"><i class="fas fa-search-location"></i></button></div><div><input type="text" id="artist" placeholder='ex. ${txt2} : "Jimi Hendrix".'><button onClick="doArtist()" class="buttonForm"><i class="fas fa-music"></i></button></div></div>`);
    }, 450);
    setTimeout(function() {
      document.getElementById("ryu").src = "assets/img/Ryucvshados.gif"
    }, 1750);
    setTimeout(function() {
   document.getElementById("punch").play()
      document.getElementById("punch").volume = 1;
       if (localStorage.mute == 'true') {      
      document.getElementById("punch").muted = true;
    }
    }, 1400);
    return setTimeout(function() {
      document.getElementById("health2").style.animation = "lifehit2 1s forwards";
    }, 1600);


  }
  if (localStorage.timesClicked == 'z') {

    if (document.getElementById("weatherBox")) {
      document.getElementById("weatherBox").style.display = "none";
    }
    if (document.getElementById("listArtists")) {
    if(document.getElementById("list")){
      document.getElementById("list").style.display = "none";}
      document.getElementById("listArtists").style.display = "none";
    }
    document.getElementById("form").style.display = "none";
    document.getElementById("recrut").style.display = "none";
    if (document.getElementById("times")) {
      document.getElementById("times").style.display = "none";
      document.getElementById("times").innerHTML = -2;
    }
    if(!document.getElementById("akuma")){
    document.getElementById("ryu").insertAdjacentHTML("afterend", `<img id="akuma" src="assets/img/akuma-certto.gif"></img>`);
    setTimeout(function() {
    document.getElementById("akum").play();
      document.getElementById("akum").volume = 0.7;
        if (localStorage.mute == 'true') {      
      document.getElementById("akum").muted = true;
    }
  
    }, 2000)}

    setTimeout(function() {
      document.getElementById("ryu").style.display = "none";
      document.body.style.backgroundImage = "none";

      setTimeout(function() {
        style.sheet.insertRule('#health1{background-color: red; width: 2px; height: 32px;position: absolute; transform-origin: left; transform: scaleX(0); animation: lifehit3 1s forwards;}');
      }, 5000)

      setTimeout(function() {
        style.sheet.insertRule('#health1{background-color: red; width: 2px; height: 32px;position: absolute; transform-origin: left; transform: scaleX(0); animation: lifehit3 1s forwards;}');
        style.sheet.insertRule('#final{color:white; position: absolute;}');
        style.sheet.insertRule('li{animation: tab1 1s forwards}');
        style.sheet.insertRule('.merci{font-family: "Fredoka One", cursive;top: 75%; animation: tab1 1s forwards; color:white; position:absolute;	}');
        style.sheet.insertRule('h3{animation: sortientree 10s forwards; color:white}');
        style.sheet.insertRule('#finalListe{list-style:circle; animation: sortientree 16s forwards;line-height: 41px; font-size: 1.4rem; margin-top:14px;}');
        style.sheet.insertRule('h2{animation: sorti 8s forwards; color:white;}');
        style.sheet.insertRule('#ici{position: absolute; text-align: center;  top: 73px;}');

        style.sheet.insertRule('#sortie{position:absolute;animation: sorti 8s forwards; top: 43%; text-align: center; width: 60%; line-height: 30px;}');
        document.getElementById("akuma").style.display = "none";
        document.getElementById("refuse").style.display = "none";
        document.getElementById("accept").style.display = "none";
        document.getElementById("lifebar1").style.display = "none";
        document.getElementById("lifebar2").style.display = "none";
        document.getElementById("ko").style.display = "none";
        document.querySelector("h1").style.display = 'block';


         document.getElementById("die").play();
        document.getElementById("die").volume = 1;
           if (localStorage.mute == 'true') {      
      document.getElementById("die").muted = true;
    }
        
        setTimeout(youlose(), 1000);
        setTimeout(function() {
          document.body.style.backgroundImage = "url('assets/img/game-over.gif')";
           if (window.innerWidth < 650) {
           document.body.style.backgroundSize="contain";
            document.body.style.backgroundPosition="center";
  
   
  }
         document.getElementById("gameover").play();
          document.getElementById("gameover").volume = 0.4;
             if (localStorage.mute == 'true') {      
      document.getElementById("gameover").muted = true;
    }
        }, 3000)
        setTimeout(function() {
           document.getElementById("fim").play();
           document.getElementById("fim").volume = 1;
             if (localStorage.mute == 'true') {      
      document.getElementById("fim").muted = true;
    }
          
          
          document.body.style.backgroundImage = "none";

          if (localStorage.language == 'francais') {
            var txt0 = "Appliqué dans cette présentation ";
            var txt1 = "Intégration des API's externes";
            var txt2 = "Manipulation du DOM";
            var txt3 = "Animations CSS";
            var txt4 = "Responsive web design";
            var txt5 = "Montage d'images et de vidéos";
          }
          if (localStorage.language == 'english') {
            var txt0 = "Applied in this presentation ";
            var txt1 = "Integration of external API's";
            var txt2 = "DOM manipulation";
            var txt3 = "CSS animations";
            var txt4 = "Responsive web design";
            var txt5 = "Image and video editing";

          }
          if (localStorage.language == 'portugues') {
            var txt0 = "Aplicado nesta apresentação ";
            var txt1 = "Integração de API's externas";
            var txt2 = "Manuseio do DOM";
            var txt3 = "Animações CSS";
            var txt4 = "Responsive web design";
            var txt5 = "Edição de imagem e vídeo";

          }
          document.querySelector("h1").insertAdjacentHTML("afterend", `<div id="final"><ul id="finalListe">${txt0} :
<li style="opacity: 0; animation-delay:1s">${txt1}</li>
<li style="opacity: 0; animation-delay:2s">${txt2}</li>
<li style="opacity: 0; animation-delay:3s">${txt3}</li>
<li style="opacity: 0; animation-delay:4s">${txt4}</li>
<li style="opacity: 0; animation-delay:5s">${txt5}</li></ul>
</div>`);
        }, 8500)
        setTimeout(function() {
          document.getElementById("finalListe").remove();
          if (localStorage.language == 'francais') {
            var txt0 = "J'espère que vous vous êtes autant amusés que moi.";
            var txt1 = "Je vous souhaite à tous une excellente journée";
            var txt2 = "N'hésitez pas à partager, à commenter, à aimer, toute aide et retour est plus que bienvenue.";
            var txt3 = "Merci de votre temps et de votre attention";
            var txt4 = "Merci à vous!!";
          }
          if (localStorage.language == 'english') {
            var txt0 = "I hope you had as much fun as I did.";
            var txt1 = "I wish you all an excellent day";
            var txt2 = "Feel free to share, comment, like, any help and feedback is more than welcome.";
            var txt3 = "Thank you for your time and attention";
            var txt4 = "Thank you!";

          }
          if (localStorage.language == 'portugues') {
            var txt0 = "Espero que você se tenha divertido tanto quanto eu.";
            var txt1 = "Desejo a todos um excelente dia";
            var txt2 = "Sinta-se à vontade para compartilhar, comentar, qualquer ajuda e feedback é mais do que bem-vindo.";
            var txt3 = "Obrigado pelo seu tempo e atenção";
            var txt4 = "Obrigado!!";

          }

          document.querySelector("h1").insertAdjacentHTML("afterend", `<h3 id="ici">${txt0}
 <br>
 <br>

${txt1}</h3>`)
        }, 16000)
        setTimeout(function() {
          if (localStorage.language == 'francais') {
            var txt0 = "J'espère que vous vous êtes autant amusés que moi.";
            var txt1 = "Je vous souhaite à tous une excellente journée";
            var txt2 = "N'hésitez pas à partager, à commenter, à aimer, toute aide et retour est plus que bienvenue.";
            var txt3 = "Merci de votre temps et de votre attention";
            var txt4 = "Merci à vous!!";
          }
          if (localStorage.language == 'english') {
            var txt0 = "I hope you had as much fun as I did.";
            var txt1 = "I wish you all an excellent day";
            var txt2 = "Feel free to share, comment, like, any help and feedback is more than welcome.";
            var txt3 = "Thank you for your time and attention";
            var txt4 = "Thank you!";

          }
          if (localStorage.language == 'portugues') {
            var txt0 = "Espero que você se tenha divertido tanto quanto eu.";
            var txt1 = "Desejo a todos um excelente dia";
            var txt2 = "Sinta-se à vontade para compartilhar, comentar, qualquer ajuda e feedback é mais do que bem-vindo.";
            var txt3 = "Obrigado por seu tempo e atenção";
            var txt4 = "Obrigado!!";

          }
          document.getElementById("ici").insertAdjacentHTML("afterend", `<div id="sortie"><h3 style="color:red">${txt2}
</h3><h2>${txt3}</h2></div>`);
          setTimeout(function() {
            if (localStorage.language == 'francais') {
              var txt0 = "J'espère que vous vous êtes autant amusés que moi.";
              var txt1 = "Je vous souhaite à tous une excellente journée";
              var txt2 = "N'hésitez pas à partager, à commenter, à aimer, toute aide et retour est plus que bienvenue.";
              var txt3 = "Merci de votre temps et de votre attention";
              var txt4 = "Merci à vous!!";
              var txt5 = "Partager";
            }
            if (localStorage.language == 'english') {
              var txt0 = "I hope you had as much fun as I did.";
              var txt1 = "I wish you all an excellent day";
              var txt2 = "Feel free to share, comment, like, any help and feedback is more than welcome.";
              var txt3 = "Thank you for your time and attention";
              var txt4 = "Thank you!";
              var txt5 = "Share";

            }
            if (localStorage.language == 'portugues') {
              var txt0 = "Espero que você se tenha divertido tanto quanto eu.";
              var txt1 = "Desejo a todos um excelente dia";
              var txt2 = "Sinta-se à vontade para compartilhar, comentar, qualquer ajuda e feedback é mais do que bem-vindo.";
              var txt3 = "Obrigado por seu tempo e atenção";
              var txt4 = "Obrigado!!";
              var txt5 = "Compartilhar";

            }
            document.querySelector("#linkShare").insertAdjacentHTML("beforeend", `
            <p class="merci" style="color:white; position:absolute; top:-42px;">${txt5} <p>`)
            document.querySelector("h1").insertAdjacentHTML("afterend", `
            <p class="merci" style="color:red; margin-left: 5px; margin-top:29px;">${txt4} <p>`)
            setTimeout(function() {
              document.querySelector("#linkShare").style.display = "flex";
            }, 3000);
            setInterval(function() {
              let a = random();
              let b = random();
              if(document.getElementById("bye")){ document.getElementById("bye").remove();}
              document.querySelector("h1").insertAdjacentHTML("afterend", `<p id="bye" style="animation:sorti 2s forwards; position: absolute; top:${a}%; right:${b}%; color:rgb(194, 251, 215); font-weight: bolder; font-family: 'Fredoka One', cursive; ">${txt4} </p>`)
            }, 5000)
          }, 5000)
          setTimeout(function() {
           document.getElementById("aplause").play();
                     if (localStorage.mute == 'true') {      
      document.getElementById("aplause").muted=true;
    }
            document.getElementById("aplause").volume = 0.1;
          }, 7000)
        }, 19000)


      }, 6000)

    }, 2700)

  }

}
async function fetchWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ce16e5c8c3556db1888cd42b6cb63dc5`);

  return await response.json();
}
async function fetchArtist(artist) {
  const response = await fetch(`https://dev-assignment.ew.r.appspot.com/search?q=${artist}&offset=0`);

  return await response.json();
}
async function fetchArtists(artist, page) {
  const response = await fetch(`https://dev-assignment.ew.r.appspot.com/search?q=${artist}&offset=${page}&limit=3`);

  return await response.json();
}


async function fetchCodePostal(code) {
  const response = await fetch(`https://geo.api.gouv.fr/communes?codePostal=${code}`);

  return await response.json();
}

function artistInfo(params) {
  if (!document.getElementById("imgArtist")) {
    document.getElementById("imgFrame").insertAdjacentHTML("beforeend", `<img id="imgArtist" src=""></img>`)
  }
  document.getElementById("imgArtist").src = params.dataset.img;

  document.getElementById("imgFrame").style.display = "block";
  document.getElementById("form").style.zIndex = -1;
}

function removeArt() {
  if (document.getElementById("imgArtist")) {
    document.getElementById("imgArtist").remove();
    document.getElementById("imgFrame").style.display = "none"
     document.getElementById("form").style.zIndex ="unset";
  }
};

async function paging(y) {




  if (y == 'previous') {
    y = parseInt(localStorage.page) - 3;
    localStorage.page = y;
  }

  if (y == 'next') {
    y = parseInt(localStorage.page) + 3;
    localStorage.page = y;
  }


  document.getElementById("listArtists").remove();

  document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="listArtists"><div id="imgFrame"><img id="imgArtist" src=""></img></div></div>`);


  var x = x = document.getElementById("artist").value;
  let page = await fetchArtists(x, y);
  page;
  if (page.error) {

    if (y > 0) {
     
      y = y - 3;
      localStorage.page = y;
      page = await fetchArtists(x, y)
    }
    if (y < 0) {
      
      y = y + 3;
      localStorage.page = y;
      page = await fetchArtists(x, y);
    }
  }
  page;
  if (page.artists.items.length == 0) {
    y = y - 3;
    localStorage.page = y;
    page = await fetchArtists(x, y)
  }
  for (var i = 0; i < page.artists.items.length; i++) {
    console.log(page)
    if (page.artists.items[i].images.length < 3) {
      return document.getElementById("listArtists").insertAdjacentHTML("beforeend", `<a href="${page.artists.items[i].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><span data-img="https://s7.gifyu.com/images/spotify-une.jpg" onmouseover="artistInfo(this)" onmouseleave="removeArt()" style="display:flex; flex-direction:column; align-items: center;"><p style="font-family: 'Poppins'; margin-right: 10px;color: white; cursor: pointer">${page.artists.items[i].name}</p><i  class="fa fa-spotify"></i></span></a>`)
    }

    document.getElementById("listArtists").insertAdjacentHTML("beforeend", `<a href="${page.artists.items[i].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><span  data-img="${page.artists.items[i].images[2].url}" onmouseover="artistInfo(this)" onmouseleave="removeArt()" style="display:flex; flex-direction:column; align-items: center;"><p style="font-family: 'Poppins'; margin-right: 10px;color: white; cursor: pointer">${page.artists.items[i].name}</p><i  class="fa fa-spotify"></i></span></a>`)
  }

}


async function doArtist(x) {
  if (document.getElementById("weatherBox")) {
    document.getElementById("weatherBox").remove();

  }

  x = document.getElementById("artist").value;
  if (document.getElementById("listArtists")) {
    document.getElementById("listArtists").remove();
  }

  let artist = await fetchArtist(x);
  let artists = await fetchArtists(x, 0);


 
	if (!artist.artists || artist.artists.total == 0){ document.getElementById("artist").style.animation="buttonerror 2s forwards";
  return setTimeout(function(){document.getElementById("artist").style.animation=""},2000)}
   if (!document.getElementById("listArtists")) {
    document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="listArtists"><div id="imgFrame"><img id="imgArtist" src=""></img></div></div>`)
  }
  if (artist.artists.total > 5) {
    localStorage.page = 0;
    if(document.getElementById("list")){document.getElementById("list").remove();}
    document.getElementById("scene").insertAdjacentHTML("beforeend", `<span id="list"><i class="paging fa fa-angle-left" onclick="paging('previous')"></i> <i style="margin:0;"  class="fa fa-angle-right paging" onclick="paging('next')"></i></span>`)
    let artists = await fetchArtists(x, 0)
    console.log(artists);

    for (var i = 0; i < artists.artists.items.length; i++) {
      if (artists.artists.items[i].images.length < 3) {
        document.getElementById("listArtists").insertAdjacentHTML("beforeend", `<a href="${artists.artists.items[i].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><span data-img="https://s7.gifyu.com/images/spotify-une.jpg" onmouseover="artistInfo(this)" onmouseleave="removeArt()" style="display:flex; flex-direction:column; align-items: center;"><p style="font-family: 'Poppins'; margin-right: 10px;color: white; cursor: pointer">${artists.artists.items[i].name}</p><i  class="fa fa-spotify"></i></span></a>`)
      }

      if (artists.artists.items[i].images.length > 0) {

        document.getElementById("listArtists").insertAdjacentHTML("beforeend", `<a href="${artists.artists.items[i].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><span data-img="${artists.artists.items[i].images[2].url}" onmouseover="artistInfo(this)" onmouseleave="removeArt()" style="display:flex; flex-direction:column; align-items: center;"><p style="font-family: 'Poppins'; margin-right: 10px;color: white; cursor: pointer">${artists.artists.items[i].name}</p><i  class="fa fa-spotify"></i></span></a>`)
      }
    }
  }
  if (artist.artists.total < 5) {
  
  
    for (var i = 0; i < artist.artists.items.length; i++) {
    
      console.log('artist menor , ' + artist);
      console.log(artist);
      if (artist.artists.items[i].images.length < 3) {
         document.getElementById("listArtists").insertAdjacentHTML("beforeend", `<a href="${artist.artists.items[i].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><span data-img="https://s7.gifyu.com/images/spotify-une.jpg" onmouseover="artistInfo(this)" onmouseleave="removeArt()" style="display:flex; flex-direction:column; align-items: center;"><p style="font-family: 'Poppins'; margin-right: 10px;color: white; cursor: pointer">${artist.artists.items[i].name}</p><i  class="fa fa-spotify"></i></span></a>`); 
      }
if (artist.artists.items[i].images.length > 2) {
      document.getElementById("listArtists").insertAdjacentHTML("beforeend", `<a href="${artist.artists.items[i].external_urls.spotify}" target="_blank" rel="noopener noreferrer"><span data-img="${artist.artists.items[i].images[2].url}" onmouseover="artistInfo(this)" onmouseleave="removeArt()" style="display:flex; flex-direction:column; align-items: center;"><p style="font-family: 'Poppins'; margin-right: 10px;color: white; cursor: pointer">${artist.artists.items[i].name}</p><i  class="fa fa-spotify"></i></span></a>`)
      }
    }
  }

}

async function doCodePostal(x) {
  if (document.getElementById("listArtists")) {
    document.getElementById("listArtists").remove();
    document.getElementById("list").remove()
  }
  x = document.getElementById("codePostal").value;


  let codePostal = await fetchCodePostal(x);
  if(!codePostal[0]){
  document.getElementById("codePostal").style.animation="buttonerror 2s forwards";
  return setTimeout(function(){document.getElementById("codePostal").style.animation=""},2000)}
  if (document.getElementById("weatherBox")) {
    document.getElementById("weatherBox").remove();
    return document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="weatherBox"><p style="text-align:center;"><i style="position: relative;
    left: -5%; top: 22%;" class="fas fa-map-marked-alt"></i>  Code Postal : ${x} <br> Ville : ${codePostal[0].nom}</p></div>`)


  }

  return document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="weatherBox"><p style="text-align:center;"><i style="position: relative;
    left: -5%; top: 22%;" class="fas fa-map-marked-alt"></i>Code Postal : ${x}  <br> Ville : ${codePostal[0].nom}</p></div>`)
}

async function doWeather(x) {
  if (document.getElementById("listArtists")) {
    document.getElementById("listArtists").remove();
    document.getElementById("list").remove()
  }
  x = document.getElementById("weather").value;

  let weather = await fetchWeather(x);
  if (!weather.main) {
  document.getElementById("weather").style.animation="buttonerror 2s forwards";
  return setTimeout(function(){document.getElementById("weather").style.animation=""},2000)
  

    



    return console.log(weather.message);
  }


  if (!document.getElementById("weatherBox")) {
    return document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="weatherBox"><span> <i class="ei fas fa-tint"></i> <span class="wbox">  ${weather.main.humidity}% </span> </span> <div><i class="ei fas fa-temperature-low"></i> <span><span class="wbox"> ${weather.main.temp}Cº </span> <span class="wbox"> ${weather.main.temp_max}Cº.<span style="color:red">MAX</span> </span> <span class="wbox"> ${weather.main.temp_min}Cº.<span style="color:#4848f7">min</span </span>  </span></div></div>`)
  }
  if (document.getElementById("weatherBox")) {
    document.getElementById("weatherBox").remove();
    document.getElementById("scene").insertAdjacentHTML("afterend", `<div id="weatherBox"><span> <i class="ei fas fa-tint"></i> <span class="wbox">  ${weather.main.humidity}% </span> </span> <div><i class="ei fas fa-temperature-low"></i> <span><span class="wbox"> ${weather.main.temp}Cº </span> <span class="wbox"> ${weather.main.temp_max}Cº.<span style="color:red">MAX</span> </span> <span class="wbox"> ${weather.main.temp_min}Cº.<span style="color:#4848f7">min</span </span>  </span></div></div>`)


  }


}
