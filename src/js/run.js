"use strict";

FJ.run = function() {
	FJ.sd._init();
	FJ.project._init();

	FJ.project.addList( new List( "NOT ASSIGNED", [] ) );
	FJ.project.updateAll();
};

FJ.run();
