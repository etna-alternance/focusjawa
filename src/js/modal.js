"use strict";

FJ.modal = {
	show( data ) {
		this.isOpen = true;
		this._init();
		this._emptyCnt();
		return this._open( data );
	},
	hide() {
		this.isOpen && this.root.click();
	},

	_init() {
		if ( !this._ready ) {
			const qs = s => document.querySelector( `#modal${ s }` ),
				opt = { simplifiedAutoLink: true };

			this.els = {};			
			this.root = qs( "" );
			this.window = qs( "Window" );
			this.els.body = qs( "Body" );
			this.els.tags = qs( "Tags" );
			this.els.title = qs( "Title" );
			this.els.author = qs( "Author" );
			this.els.created = qs( "CreatedAt" );
			this.els.affected = qs( "AffectedTo" );
			this.clRoot = this.root.classList;

			this.root.onclick = this._close.bind( this );
			this.window.onkeyup =
			this.window.onclick = e => { e.stopPropagation(); };
			this.window.onkeydown = e => {
				e.keyCode === 27 && this._close();
				e.stopPropagation();
			};


			this.mdToHTML = new showdown.Converter( opt );
			this._ready = true;
		}
	},

	_open( ticket ) {
		this.isOpen = true;
		this.clRoot.add( "modal-show" );
		this._setTitle( ticket.id, ticket.title );
		this._setTags( ticket.tags );
		this._setAuthor( ticket.creator.login );
		this._setAffectedTo( ticket.users );
		this._setCreatedAt( ticket.created_at );
		this._setBody( ticket.messages );
		setTimeout( () => this.window.focus() , 250 );
		return new Promise( res => this.resolve = res )
			.then( val => {
				this.root.classList.remove( "modal-show" );
				this._emptyCnt();
				this.isOpen = false;
				return val;
			} );
	},
	_close() {
		this.resolve( true );
	},

	_setTitle( id, t ) {
		this.els.title.innerText = `#${id} ${t}`;
	},
	_setTags( tags ) {
		tags.forEach( t => this.els.tags.append( newHighlight( t, "tag" ) ) );
	},
	_setAuthor( n ) {
		this.els.author.append( newHighlight( n, "user" ) );
	},
	_setAffectedTo( users ) {
		users.forEach( u =>
			this.els.affected.append( newHighlight( u.login, "user" ) ) );
	},
	_setCreatedAt( d ) {
		this.els.created.append( newHighlight( d, "time" ) );
	},
	_setBody( mes ) {
		const qs = ( e, s ) => e.querySelector( `.modal${ s }` );

		mes.forEach( m => {
			const el = this.templateMsg.cloneNode( true );

			el.classList.add( m.type );
			qs( el, "MsgCnt" ).innerHTML = this.mdToHTML.makeHtml( m.content );
			qs( el, "MsgAuthor" ).innerText = m.author.login;
			qs( el, "MsgCreatedAt" ).innerText = m.created_at;
			this.els.body.append( el );
		} );
	},

	_emptyCnt() {
		Object.values( this.els ).forEach( el => { el.innerHTML = "" } );
	}
}

FJ.modal.templateMsg = document.querySelector( ".modalMsg" );
FJ.modal.templateMsg.remove();
