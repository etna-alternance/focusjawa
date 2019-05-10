"use strict";

FJ.run = function() {
	this.rootElement = document.querySelector( "#project" );
	
	this.listArr = [];
	this.listArr.push( new List( "NOT ASSIGNED", [] ) );

	this.listArr.forEach( l => {
		project.append( l.rootElement );
		l.update();
	} );
};

FJ.run();
