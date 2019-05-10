"use strict";

FJ.project = {
	_init() {
		this.rootElement = document.querySelector( "#project" );
		this.lists = [];
	},

	addList( list ) {
		this.rootElement.append( list.rootElement );
		this.lists.push( list );
	},

	updateAll() {
		this.lists.forEach( l => l.update() );
	}
}
