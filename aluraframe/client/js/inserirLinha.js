var formulario = document.querySelector('.form');
formulario.addEventListener('submit', function(event){
	event.preventDefault();
	inserirNovaLinha();
	formulario.reset();
	document.querySelector('#data').focus();
});
function criarLinha(){
	return document.createElement('tr');
};
function criarColuna(){
	return document.createElement('td');
};
function inserirNovaLinha(){
	negociacao = {
		data : document.querySelector('#data').value,
		quantidade : document.querySelector('#quantidade').value,
		valor : document.querySelector('#valor').value
	}
	
	var colunaData = criarColuna();
	colunaData.textContent = negociacao.data;
	var colunaQuantidade = criarColuna();
	colunaQuantidade.textContent = negociacao.quantidade;
	var colunaValor = criarColuna();
	colunaValor.textContent = negociacao.valor;
	var colunaVolume = criarColuna();
	colunaVolume.textContent = negociacao.quantidade * negociacao.valor;
	var linha = criarLinha();
	linha.appendChild(colunaData);
	linha.appendChild(colunaQuantidade);
	linha.appendChild(colunaValor);
	linha.appendChild(colunaVolume);
	
	var tabelaCorpo = document.querySelector('table tbody');
	tabelaCorpo.appendChild(linha);
}
