//JavaScript Document

var TECLA = {
	CIMA:38,
	BAIXO: 40,
	ESQUERDA: 37,
	DIREITA: 39,
	
	W: 87,
	A: 65,
	S: 83,
	D: 68,
	
	I: 104,
	K: 98,
	J: 100,
	L: 102,
	
	T: 84,
	G: 71,
	F: 70,
	H: 72
	
};

var marcador = {
	scoreA: 0,
	scoreB: 0	
}

var pingpong = {}
pingpong.teclasPressionadas = [];

pingpong.bola = {
	velocidade: 30,
	x: 600,
	y: 300,
	directX: 1, //quando bate muda direcao
	directY: 1,	//quando é 1 mexe no sentido positivo
}

$(document).ready(function() {
	"use strict";
    var team1 = prompt("Team 1 name: ", "Team1");
	var team2 = prompt("Team 2 name: ", "Team2");
	
	$(".pl1").html(team1 + ": ");
	$(".pl2").html(team2 + ": ");

});
$(function(){
	"use strict";
	
	//alert("Pinga Ponga~!");
	/*
	$(document).keydown(function(e){
		
		//alert(e.which);
		
		console.log(e.which);
		
		switch (e.which){
		
		case TECLA.CIMA:
				var topo1=parseInt($("#raquete2").css("top"));
				
				if(topo1<10){
					topo1=0;
				}else{
				$("#raquete2").css("top", topo1 -10);
				}
				break;
			 
		case TECLA.BAIXO:
				var baixo1=parseInt($("#raquete2").css("top"));
				
				if(baixo1>125){
					baixo1=0;
				}else{
				$("#raquete2").css("top", baixo1 +10);
				}
				break;
				
		case TECLA.W:
				var topo2=parseInt($("#raquete1").css("top"));
				
				$("#raquete1").css("top", topo2 -10);
				break;		
				
		case TECLA.S:
				var baixo2=parseInt($("#raquete1").css("top"));
				$("#raquete1").css("top", baixo2 +10);
				break;
				
		}
		
		});*/
		
	pingpong.timer = setInterval(gameloop, 30);	
	
	
	var topo1=parseInt($("#raquete2").css("top"));
	
	//random1();
	
	
	$(document).keydown(function(e){
		pingpong.teclasPressionadas[e.which] = true;	
	});

	$(document).keyup(function(e){
		pingpong.teclasPressionadas[e.which] = false;	
	});

}); //$(function()
	
function random1(){
	"use strict";
	
	var hue = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';
	
	var hue1 = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';
	
	var hue3 = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';
	/*
	var hue4 = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';
	/*
	//
	
	$("#campo").css({
		"background-color" : hue
		});	
	$("body").css({
		"background-color" : hue4,
	});	*/
		
		
		$(".raquete").css({
		"border-color": hue1
		});
		
		$(".t1").css({
		//"background-color" : "rgb(0, 0, 26)",
		});
		
		$(".t2").css({
		//"background-color" : "rgb(26, 0, 0)",
		});
		
	$("#bola").css({
		"border-color": hue3
		});
	
}
	

function moveBola(){
	"use strict";
	var alturaCampo = parseInt($("#campo").css("height"));
	var comprimentoCampo = parseInt($("#campo").css("width"));
	var bola = pingpong.bola;
	
	
	
	
	//limite inferior
	if(bola.y+bola.velocidade*bola.directY > alturaCampo){
		bola.directY = -1;
	}
	//limite superior
	if(bola.y+bola.velocidade*bola.directY < 0){
		bola.directY = 1;
	}
	//limite direito
	if(bola.x+bola.velocidade*bola.directX > comprimentoCampo){
		bola.directX = -1;
	}
	//limite esquerdo
	if(bola.x+bola.velocidade*bola.directX < 0){
		bola.directX = 1;
	}
	
	//equacao do movimento da bola
	bola.x += bola.velocidade * bola.directX;
	bola.y += bola.velocidade * bola.directY;
	
	
	//verifica raquete
	
	//raquete esquerda 1 e 2 
	var raqueteEsquerdaX = parseInt($("#raquete1").css("left")) + parseInt($("#raquete1").css("width"));
	var raqueteEsquerdaYBaixo = parseInt($("#raquete1").css("top")) + parseInt($("#raquete1").css("height")) ;
	var raqueteEsquerdaYTopo = parseInt($("#raquete1").css("top"));
	
	//quando colide
	if(bola.x + bola.velocidade*bola.directX < raqueteEsquerdaX){
		if(bola.y + bola.velocidade*bola.directY <= raqueteEsquerdaYBaixo && bola.y + bola.velocidade*bola.directY >= raqueteEsquerdaYTopo){
		bola.directX = 1;
		tocacor1();
		}
	}  
	
	var raqueteEsquerdaX2 = parseInt($("#raquete3").css("left")) + parseInt($("#raquete3").css("width"));
	var raqueteEsquerdaYBaixo2 = parseInt($("#raquete3").css("top")) + parseInt($("#raquete3").css("height")) ;
	var raqueteEsquerdaYTopo2 = parseInt($("#raquete3").css("top"));
	
	//quando colide
	if(bola.x + bola.velocidade*bola.directX < raqueteEsquerdaX2){
		if(bola.y + bola.velocidade*bola.directY <= raqueteEsquerdaYBaixo2 && bola.y + bola.velocidade*bola.directY >= raqueteEsquerdaYTopo2){
		bola.directX = 1;
		tocacor1();
		}
	}   
	
	
	//raquete direita 1 e 2
	var raqueteDireitaX = parseInt($("#raquete2").css("left"));
	var raqueteDireitaYBaixo = parseInt($("#raquete2").css("top")) + parseInt($("#raquete2").css("height")) ;
	var raqueteDireitaYTopo = parseInt($("#raquete2").css("top"));
	
	//quando colide
	if(bola.x + bola.velocidade*bola.directX >= raqueteDireitaX){
		if(bola.y + bola.velocidade*bola.directY <= raqueteDireitaYBaixo && bola.y + bola.velocidade*bola.directY >= raqueteDireitaYTopo){
		
		bola.directX = -1;
		tocacor2();
		}
	} 
	var raqueteDireitaX2 = parseInt($("#raquete4").css("left"));
	var raqueteDireitaYBaixo2 = parseInt($("#raquete4").css("top")) + parseInt($("#raquete4").css("height")) ;
	var raqueteDireitaYTopo2 = parseInt($("#raquete4").css("top"));
	
	//quando colide
	if(bola.x + bola.velocidade*bola.directX >= raqueteDireitaX2){
		if(bola.y + bola.velocidade*bola.directY <= raqueteDireitaYBaixo2 && bola.y + bola.velocidade*bola.directY >= raqueteDireitaYTopo2){
		
		bola.directX = -1;
		tocacor2();
		}
	} 
	
	
	//reset da bola se passar direito
	if(bola.x + bola.velocidade*bola.directX>comprimentoCampo){
		bola.x = 600;
		bola.y = 300;
		
	// copia do mover a bola
	$("#bola").css({
		"left" : bola.x,
		"top" : bola.y
		});
		bola.directX = -1;
		marcador.scoreA++;
		
		$("#scoreA").html(marcador.scoreA);
		
	}
	//reset da bola se passar esquerdo
	if(bola.x + bola.velocidade*bola.directX<0){
		bola.x = 600;
		bola.y = 300;	
		
	// copia do mover a bola
	$("#bola").css({
		"left" : bola.x,
		"top" : bola.y
		});
		bola.directX = 1;
		marcador.scoreB++;
		
		$("#scoreB").html(marcador.scoreB);
		
	}
	
	
	
	//mover a bola
	$("#bola").css({
		"left" : bola.x,
		"top" : bola.y
		});
}

function restart() {
	"use strict";
	if (confirm("Reiniciar?") == true) {
        location.reload();
	}
}

function tocacor1(){
	"use strict";
	//mudar de  cor com colisao (esquerda)
	var bin1 = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';
	$("#bola").css("background-color", bin1);
	$(".t1").css("background-color", bin1);
	$("#campo").css("background-color", bin1);
}
function tocacor2(){
	"use strict";
	//mudar de  cor com colisao (direita)
	var bin2 = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';
	
	$("#bola").css("background-color", bin2);
	$(".t2").css("background-color", bin2);
	$("#campo").css("background-color", bin2);
	
}

function endgame(){
"use strict";

var scorey = 'rgb(' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ',' + (Math.floor((255)*Math.random()) + 0) + ')';

	if(marcador.scoreA>=10){
	$("#vencedor").css({
		"color": scorey,
		"font-size": "10em"
		});
	$("#vencedor").html("Player 1 Ganhou !");
	//terminar
	pingpong.bola = {
	velocidade: 0,
	};
	
	
	}else
	if(marcador.scoreB>=10){
	$("#vencedor").css({
		"color": scorey,
		"font-size": "10em"
		});
	$("#vencedor").html("Player 2 Ganhou !");
	//terminar
	pingpong.bola = {
	velocidade: 0,
	};


	}
	
}

	
function gameloop(){
"use strict";

	
	
	var bola = pingpong.bola;
	
	if(marcador.scoreA===9 || marcador.scoreB===9){
	bola.velocidade = 45;
	console.log(bola.velocidade);
	}else
	if(marcador.scoreA===6 || marcador.scoreB===6){
	bola.velocidade = 40;
	console.log(bola.velocidade);
	}else
	if(marcador.scoreA===3 || marcador.scoreB===3){
	bola.velocidade = 35;
	console.log(bola.velocidade);
	}
	
	endgame();
	random1();
	moveBola();
	moveRaquetes();

} //function gameloop()
	
	
function moveRaquetes(){
	"use strict";
	
	if (pingpong.teclasPressionadas[TECLA.CIMA]){
		var topo1=parseInt($("#raquete2").css("top"));
		$("#raquete2").css("top", topo1 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.BAIXO]){
		var baixo1=parseInt($("#raquete2").css("top"));
		$("#raquete2").css("top", baixo1 + 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.ESQUERDA]){
		var esq1=parseInt($("#raquete2").css("left"));
		$("#raquete2").css("left", esq1 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.DIREITA]){
		var dir1=parseInt($("#raquete2").css("left"));
		$("#raquete2").css("left", dir1 + 30);		
	}
	
	
	
	if (pingpong.teclasPressionadas[TECLA.W]){
		var topo2=parseInt($("#raquete1").css("top"));
		$("#raquete1").css("top", topo2 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.S]){
		var baixo2=parseInt($("#raquete1").css("top"));
		$("#raquete1").css("top", baixo2 + 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.A]){
		var esq2=parseInt($("#raquete1").css("left"));
		$("#raquete1").css("left", esq2 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.D]){
		var dir2=parseInt($("#raquete1").css("left"));
		$("#raquete1").css("left", dir2 + 30);		
	}
	

	if (pingpong.teclasPressionadas[TECLA.T]){
		var topo3=parseInt($("#raquete3").css("top"));
		$("#raquete3").css("top", topo3 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.G]){
		var baixo3=parseInt($("#raquete3").css("top"));
		$("#raquete3").css("top", baixo3 + 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.F]){
		var esq3=parseInt($("#raquete3").css("left"));
		$("#raquete3").css("left", esq3 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.H]){
		var dir3=parseInt($("#raquete3").css("left"));
		$("#raquete3").css("left", dir3 + 30);		
	}
	
	
	if (pingpong.teclasPressionadas[TECLA.I]){
		var topo4=parseInt($("#raquete4").css("top"));
		$("#raquete4").css("top", topo4 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.K]){
		var baixo4=parseInt($("#raquete4").css("top"));
		$("#raquete4").css("top", baixo4 + 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.J]){
		var esq4=parseInt($("#raquete4").css("left"));
		$("#raquete4").css("left", esq4 - 30);		
	}
	if (pingpong.teclasPressionadas[TECLA.L]){
		var dir4=parseInt($("#raquete4").css("left"));
		$("#raquete4").css("left", dir4 + 30);		
	}
	
} //function moveRaquetes()





























