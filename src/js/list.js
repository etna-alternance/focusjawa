"use strict";

class List {
	constructor ( title, filters=[] ) {
		const root = List.template.cloneNode( true ),
			qs = n => root.querySelector( `.list${n}` );

		this.rootElement = root;
		this._title = qs( "Title" );
		this._counter = qs( "Counter" );
		this._cards = qs( "Cards" );

		this.title = title;
		this.filters = filters;
		this.tickets = [];

		this._setTitle( this.title );
	}

	_setTitle( t ) {
		this._title.textContent = t;
	}
	_setCounter( nb ) {
		this._counter.innerText = `(${nb})`;
	}

	_fill( arr ) {
		arr.forEach( t => {
			const c = new Card( t.id, t.title, t.ttl );

			this.tickets.push( c );
			this._cards.append( c.rootElement );
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
