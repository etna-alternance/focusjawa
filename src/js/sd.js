import showdown from "showdown";

FJ.sd = {
	run( o ) {
		return this.root.makeHtml( o );
	},

	_init() {
		this.opt = {
			simplifiedAutoLink: true,
			extensions: [ "targetlink" ]
		};

		showdown.extension( "targetlink", () => this._targetLink() );
		this.root = new showdown.Converter( this.opt );
	},

	_targetLink() {
		return [ {
			type: "html",
			regex: /(<a [^>]+?)(>.*<\/a>)/g,
			replace: "$1 target='_blank'$2"
		} ];
	}
};
