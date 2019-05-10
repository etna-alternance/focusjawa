"use strict";

class List {
	constructor ( title, filters=[] ) {
		const root = List.template.cloneNode( true ),
			qs = n => root.querySelector( `.list${n}` );

		this.rootElement = root;
		this._elTitle = qs( "Title" );
		this._elCounter = qs( "Counter" );
		this._elCards = qs( "Cards" );

		this.title = title;
		this.filters = filters;
		this.cards = [];

		this._setTitle( this.title );
	}

	_setTitle( t ) {
		this._elTitle.textContent = t;
	}
	_setCounter( nb ) {
		this._elCounter.innerText = `(${nb})`;
	}

	_fill( arr ) {
		arr.forEach( t => {
			const c = new Card( t.id, t.title, t.ttl );

			this.cards.push( c );
			this._elCards.append( c.rootElement );
		} );
	}

	update() {
		FJ.ticketsapi.getTicketsByFilters( this.filters )
			.then( res => {
				this._setCounter( res.data.total );
				this._fill( res.data.results );
			} );
	}
}

List.template = document.querySelector( ".list" );
List.template.remove();
