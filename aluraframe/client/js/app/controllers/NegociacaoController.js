		//console.log(new Date(this._inputData.value.split('-')));
		//console.log(new Date(this._inputData.value.replace(/-/g,',')));
class NegociacaoController{
	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}
	
	AdicionarNegociacao(event){
		event.preventDefault();
		let negociacao = new Negociacao(new Date(this._inputData.value.split('-')),this._inputQuantidade,this._inputValor);
		console.log(negociacao.data);
		console.log(negociacao.quantidade);
		console.log(negociacao.valor);
		}
}