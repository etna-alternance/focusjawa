"use strict";

function newHighlight( cnt, icn ) {
	const s = document.createElement( "span" );
	
	s.classList.add( "highlight", icn );
	s.innerText = cnt;
	return s;
}

window.FJ = {};

FJ.sd =
FJ.modal =
FJ.project =
FJ.ticketsapi = {};

