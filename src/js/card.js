"use strict";

class Card {
	constructor( id, title, ttl ) {
		const root = Card.template.cloneNode( true ),
			qs = n => root.querySelector( `.card${n}` );

		this.rootElement = root;
		this._elId = qs( "Id" );
		this._elTitle = qs( "Title" );
		this._elTtl = qs( "Ttl" );

		this._setId( id );
		this._setTitle( title );
		this._setTtl( ttl );
		this.rootElement.addEventListener( "click", this.click.bind( this ) );
	}

	_setId( id ) {
		this.id = id;
		this._elId.innerText = `#${id}`;
	}
	_setTitle( t ) {
		this.title = t;
		this._elTitle.innerText = t;
	}
	_setTtl( ttl ) {
		this.ttl = ttl;
		this._elTtl.innerText = ttl;
	}
	click( e ) {
		FJ.ticketsapi.getTicketById( this.id )
			.then( ticket => FJ.modal.show.call( FJ.modal, ticket ) );
	}
}

Card.template = document.querySelector( ".card" );
Card.template.remove();
