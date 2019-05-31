import "css/font.css";
import "css/fontawesome.css";
import "css/root.css";
import "css/app.css";
import "css/modal.css";
import "css/list.css";
import "css/card.css";

import "js/init";
import "js/sd";
import "js/ticketsApi";
import "js/modal";
import "js/project";
import List from "js/list";

FJ.run = function() {
	FJ.sd._init();
	FJ.project._init();

	FJ.project.addList( new List( "NOT ASSIGNED", [] ) );
	FJ.project.updateAll();
};

FJ.run();
