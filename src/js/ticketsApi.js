"use strict";

FJ.ticketsapi = {
	_init( method ) {
		this._params = {
			method,
			"content-type": "application/json"
		}
	},

	// tmp: filters does not work yet
	getTicketsByFilters( filters ) {
		this._init( "GET" );
		return fetch( 
			"https://private-0d938-tickets34.apiary-mock.com/tickets",
			this._params )
		.then( res => res.json() )
		.then( res => res[ 0 ] );
	},

	getTicketById( id ) {
		this._init( "GET" );
		return fetch( 
			`https://private-0d938-tickets34.apiary-mock.com/ticket/${id}`,
			this._params )
		.then( res => res.json() )
		.then( res => res[ 0 ] );
	}
}
