var tabuleiro = [];
var jogador = 1;
var cont1 = 0;
var cont2 = 0;

function ExistePosicao (linha, coluna, tabuleiro) {

	return tabuleiro.length>=linha && tabuleiro[0].length >= coluna;
}

function EstaVazio (linha, coluna, tabuleiro) {

	return tabuleiro[linha][coluna] == 0;
}

function AdicionaNaPosicao (linha, coluna, valor, tabuleiro) {

	if (EstaVazio(linha, coluna, tabuleiro) == true)
	{
		return tabuleiro[linha][coluna] = valor;
	}
}

function LinhaMatriz (linha, tabuleiro) {

	return tabuleiro[linha];
}

function ColunaMatriz (coluna, tabuleiro) {

	var col=new Array(tabuleiro.length);

	for (var i=0; i < col.length; i=i+1)
		{
			col[i] = tabuleiro[i][coluna];
		}

	return col;
}

function DiagonalEsquerdaMatriz (tabuleiro) {

	var dig=new Array (tabuleiro.length);

	for (var i=0; i < dig.length; i=i+1)
	{
		dig[i] = tabuleiro [i][i];
	}

	return dig;
}

function DiagonalDireitaMatriz (tabuleiro) {

	var digD=new Array (tabuleiro.length);

	var j= tabuleiro[0].length-1;

	for (var i=0; i < digD.length; i=i+1)
	{
		digD[i] = tabuleiro[i][j];
		j=j-1;
	}

	return digD;
}

function GanhaLinhaMatriz (linha, tabuleiro) {


	for (var i=0; i < tabuleiro.length; i=i+1)
	{
		tabuleiro[linha][i] = tabuleiro[linha][i] + 2;
	}
	
}

function GanhaColunaMatriz (coluna, tabuleiro) {

	for (var i=0; i < tabuleiro.length; i=i+1)
	{
		tabuleiro[i][coluna] = tabuleiro[i][coluna] + 2; 
	}

}

function GanhaDiagonalEsquerda (tabuleiro) {


	for (var i=0; i < tabuleiro.length; i=i+1)
	{
		tabuleiro[i][i] = tabuleiro[i][i] + 2;
		
	}
}

function GanhaDiagonalDireita (tabuleiro) {

	var j= tabuleiro[0].length-1;

	for (var i=0; i < tabuleiro.length; i=i+1)
	{
		tabuleiro[i][j] = tabuleiro[i][j] + 2;
		j=j-1;
	}
}

function ValoresIguais (vetor) {

	var ct = 0;

	for (var i=0; i < vetor.length-1; i=i+1)
	{	
		if(vetor[i] == 0)
		{
			return false;
		}

		if (vetor[0] == vetor[i+1] )
		{
			ct++;	
		}
			
		
	}

	if (ct == vetor.length-1)
	{
		return true;
	}
	else
	{
		return false;
	}	



}

function MatrizIguais (tabuleiro) {

	for (var i=0; i < tabuleiro.length; i=i+1)
	{
		if (ValoresIguais(LinhaMatriz(i,tabuleiro)))
		{
			console.log("Linha");
			GanhaLinhaMatriz(i, tabuleiro);
			if (jogador == 1)
			{
				cont1 = cont1 + 1;
			}
			else
			{
				cont2 = cont2 + 1;
			}	

			return true;
		}

		if (ValoresIguais(ColunaMatriz(i, tabuleiro)))
		{
			console.log("Coluna");
			GanhaColunaMatriz(i, tabuleiro);
			if (jogador == 1)
			{
				cont1 = cont1 + 1;
			}
			else
			{
				cont2 = cont2 + 1;
			}	
			return true;
		}
	}

	if (ValoresIguais(DiagonalEsquerdaMatriz(tabuleiro)))
		{
			console.log("DigEsq");
			GanhaDiagonalEsquerda(tabuleiro);
			if (jogador == 1)
			{
				cont1 = cont1 + 1;
			}
			else
			{
				cont2 = cont2 + 1;
			}	
			return true;
		}
	else if (ValoresIguais(DiagonalDireitaMatriz(tabuleiro)))
		{
			console.log("DigDir");
			GanhaDiagonalDireita(tabuleiro);
			if (jogador == 1)
			{
				cont1 = cont1 + 1;
			}
			else
			{
				cont2 = cont2 + 1;
			}	
			return true;
		}



	return false;
}

function IndiceLinha (tabuleiro, pos) {


	var IL = [];
	var max = tabuleiro.length;
	var ct = 0;

	for (var i=0; i < max; i=i+1)
	{
		IL[i] = new Array(max);
	}

	for (var i=0; i < max; i=i+1)
		{
			for (var j=0; j < max; j=j+1)
			{
				ct=ct+1;
				IL[i][j] = ct;
			}
			
		}


	for (var i=0; i < max; i=i+1)
		{
			for (var j=0;j < max; j=j+1)
			{
				if (pos == IL[i][j])
				{
					return i;
				}
			}
		}	
		
}

function IndiceColuna (tabuleiro, pos) {


	var IL = [];
	var max = tabuleiro.length;
	var ct = 0;

	for (var i=0; i < max; i=i+1)
	{
		IL[i] = new Array(max);
	}

	for (var i=0; i < max; i=i+1)
		{
			for (var j=0; j < max; j=j+1)
			{
				ct=ct+1;
				IL[i][j] = ct;
			}
			
		}


	for (var i=0; i < max; i=i+1)
		{
			for (var j=0;j < max; j=j+1)
			{
				if (pos == IL[i][j])
				{
					return j;
				}
			}
		}	

}


function CriarTab (tamanho) {

	tabuleiro = [];
	var table = document.createElement("table");
	var limpa = document.getElementById("limp");
	var jg = document.getElementById("jogo");
	limpa.innerHTML = "";
	document.getElementById("victory").innerHTML = "";
	var ct=0;
	Tab(tamanho);
	for (var i=0; i < tamanho; i=i+1)
	{
		var tr = document.createElement("tr");

		for (var j=0; j < tamanho; j=j+1)
		{
			ct=ct+1;
			var td = document.createElement("td");

			var div = document.createElement("div");

			var img = document.createElement("img");
			div.style.width = "100px";
			div.style.height = "100px";
			//div.style.border = "solid 1px";
			img.style.width = "100px";
			img.src = 'fundo.jpg';
			img.id = ct;
			img.setAttribute("onclick","ControlaJogo("+ct+");");


			tr.appendChild(td);
			td.appendChild(div);
			div.appendChild(img);
		}
		table.appendChild(tr);
	}
	table.style.margin = "auto";
	jg.appendChild(table);

	limpa.appendChild(table);

	console.log(tabuleiro);
	
}

function ControlaJogo (pos) {

	document.getElementById("score").innerHTML = "Jogador 1 (" + cont1 + " - " + cont2 + ") Jogador 2"; 
	
	if(EstaVazio(IndiceLinha(tabuleiro, pos),IndiceColuna(tabuleiro,pos),tabuleiro))
	{
		AdicionaNaPosicao(IndiceLinha(tabuleiro, pos),IndiceColuna(tabuleiro, pos), jogador, tabuleiro);

		if(MatrizIguais(tabuleiro))
		{
			
			document.getElementById("victory").innerHTML = "O Jogador " + jogador + " venceu !";

			document.getElementById("score").innerHTML = "Jogador 1 (" + cont1 + " - " + cont2 + ") Jogador 2"; 

			console.log("Jogador Wins " + jogador);

			for (var i = 0; i < tabuleiro.length; i++) {
                for (var j = 0; j < tabuleiro.length; j++) {
                    if(tabuleiro[i][j]==0){
                        tabuleiro[i][j]=10;
                    }
                }
            }

		}
		else if(empata(tabuleiro))
		{
			
			document.getElementById("victory").innerHTML = "Empate";

			document.getElementById("score").innerHTML = "Jogador 1 (" + cont1 + " - " + cont2 + ") Jogador 2"; 
		}

		

		var cont = 0;

		for (var i=0; i < tabuleiro.length; i=i+1)
		{
			for (var j=0; j < tabuleiro.length; j=j+1)
			{
				cont = cont +1;
				if (tabuleiro[i][j] == 1)
				{
					document.getElementById(""+cont).src = "x.png";
				}
				else if (tabuleiro[i][j] == 2)
				{
					document.getElementById(""+cont).src = "bola.png";
				}
				else if (tabuleiro[i][j] == 3)
				{
					document.getElementById(""+cont).src = "x-verde.png";
				}
				else if (tabuleiro[i][j] == 4)
				{
					document.getElementById(""+cont).src = "bola-verde.png";
				}


			}
		}



		if (jogador == 1)
		{
			jogador = 2;

		}
		else
		{
			jogador = 1;
		}

		document.getElementById("vez").innerHTML = "Vez do jogador: " + jogador;
	}

	

}

function Tab (MAX) 
{
		for (var i=0; i < MAX; i=i+1)
			{
				tabuleiro[i] = new Array(MAX);
			}

		for (var i=0; i < MAX; i=i+1)
		{
			for (var j=0; j < MAX; j=j+1)
			{
				tabuleiro[i][j] = 0;
			}
			
		}
}


function checkNumber(event)
{
	var keycode=event.keyCode;

	if(keycode>=48 && keycode<=57)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function empata(tabuleiro)
{
	for (var i=0; i < tabuleiro.length; i=i+1)
	{
		for (var j=0; j < tabuleiro.length; j=j+1)
		{
			if (tabuleiro[i][j] == 0)
			{
				return false;
			}

		}

	}

	return true;
}



