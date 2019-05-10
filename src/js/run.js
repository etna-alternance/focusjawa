"use strict";

FJ.run = function() {
	FJ.project._init();

	FJ.project.addList( new List( "NOT ASSIGNED", [] ) );
	FJ.project.updateAll();
};

FJ.run();
