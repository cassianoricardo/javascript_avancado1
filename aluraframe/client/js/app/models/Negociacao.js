class Negociacao {
	
	constructor (data, quantidade, valor){
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);
	}
	
	get volume(){
		return this._quantidade.value * this._valor.value;
	}
	
	get data(){
		return new Date(this._data.getTime());
	}
	
	get quantidade(){
		return this._quantidade.value;
	}
	
	get valor(){
		return this._valor.value;
	}	
}