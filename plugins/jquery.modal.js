/**
 * jQuery Modal Plugin
 * Estevo Lucas
 *
 * Copyright (c) 2006 Estevo Lucas
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Library to create, show em delete modal windows
 */
 
( function( $ )
{
	var defaults = {
			modal: "div",
			modalID: "modal",
			buttonClose: ".bt_close:first",
			buttonMini: "button.bt_mini",
			buttonMiniFunction: null,
			create: true,
			remove: true,
			center: false,
			closeOnClick: false,
			closeCallback: null,
			effectVelocity: $.browser.msie ? 0 : 700 ,
			beginShow: true
		},
		queue = [], toback =  [];
	
	$.fn.modal = function( settings, callback )
	{
		typeof settings == "function"
			? callback = settings
			: callback = callback || function(){};
		
		return this.each( function()
		{
			new $m( this, settings, callback );
		});
	}
	
	$.modalFunc = function( container, settings, callback )
	{
		this.settings = $.extend( {}, defaults, settings || {});
		this.div = $( container ).hide();
		this.callback = callback;
		this.clicked = 0;
		
		this.init();
	}
	
	var $m = $.modalFunc;
	
	$m.fn = $m.prototype = {
        modal: '0.3'
    };
	
	$m.fn.show = function()
	{
		this.div.fadeIn();
		$( ".modalLoader", this.modal ).hide();
	}
		
	$m.fn.toClose = function( callback, mantain )
	{
		var mantain = mantain || false;
		this.close( mantain, callback || function(){} );
	}
	
	$m.fn.extend = $.extend;
	
	$m.fn.extend({
		init: function()
		{
			this.modal = $( this.settings.modal + "#" + this.settings.modalID );
			
			var self = this,
				s = self.settings,
				loader = $( ".modalLoader", this.modal ),
				show = function()
				{
					self.callback.call( self.div, self );
					loader.hide();
				},
				callback = function()
				{
					if( self.settings.create )
					{
						s.beginShow
							? ( s.effectVelocity
								? self.div.fadeIn( show )
								: self.div.show() | show() )
							: self.callback.call( self.div, self );
							
						$.browser.msie && $( "html" ).addClass( "modal" );
						s.center && self.center();
					}
					else if( !s.create )
						self.close();	
				}
				
			this.selects = $( "select:visible" );
			
			if( !this.modal.length && this.settings.create && this.div.length )
			{
				this.create();
				
				s.effectVelocity
					? this.modal.fadeIn( this.settings.effectVelocity, callback() )
					: this.modal.show() && callback();	
			}			
			else if( this.modal.length && this.div.length )
			{
				//self.modal.show()
				this.settings.create
					? s.effectVelocity 
						? self.modal.fadeIn()
						: self.modal.show()
					: self.modal.hide();
					
				callback()
			}
			else if( !this.div.length )
				console.error( "The element doesn't were found" );
			
			$( document ).keyup( function( e )
			{
				if( self.modal.is( ":visible" ) && self.div.is( ":visible" ) && e.keyCode == 27 )
					self.close();
			});
				
			this.settings.closeOnClick && this.modal.unbind().click( function()
			{
				self.close();
				
				self.settings.closeCallback && self.settings.closeCallback();
			});
			
			$.browser.msie
				&& this.selects.css( "visibility", "hidden" );
			
			$.browser.msie && $.browser.version.indexOf( "6" ) != -1
				&& this.modal.css( "height", $( "html" )[ 0 ].offsetHeight )
				&& window.scrollTo( 0, 0 )
			
			this.buttons();
			this.queue();
		},
		
		buttons: function()
		{
			var self = this
				count = 0;
			
			// 
			if( this.settings.buttonClose )
			{
				var close = this.buttonClose = $( this.settings.buttonClose, this.div );
				
				close.length && close.click( function( event )
				{
					!self.clicked && self.close();
					!self.clicked && !!self.settings.closeCallback && self.settings.closeCallback();
					
					return false;
				});
			}
			
			// Minimizar
			if( this.settings.buttonMini )
			{
				var mini = this.buttonMini = $( this.settings.buttonMini, this.div );
				

				mini.length && mini.click( function()
				{
					if( self.div.is( ":visible" ) || !count )
					{
						self.settings.buttonMiniFunction && self.settings.buttonMiniFunction();
						self.close( true );
					}
					count++;
				});
			}
		},
		
		create: function()
		{
			var s = this.settings;
			
			this.modal = $( '<' + s.modal + '></' + s.modal + '>' ).attr( "id", s.modalID ).hide().appendTo( "body" );
			
			this.size();
			this.zindex();
			
			return true;
		},
		
		close: function( mantain, callback )
		{
			var self = this
				callback = callback || function(){},
				hide = function()
				{
					self.settings.effectVelocity > 0 
						? self.modal.fadeOut( self.settings.effectVelocity, callback )
						: self.modal.hide() && callback();
					
					self.clicked++;
					!mantain && self.settings.remove && self.div.remove() && ( self.clicked = 0 ) ;
					
					$.browser.msie && $( "html" ).removeClass( "modal" );
					self.queue( true );
					self.callback;
				};
			
			self.settings.closeCallback && self.settings.closeCallback();
			
			self.div.is( ":visible" ) && ( $.browser.msie
				? self.div.hide() | hide()
				: self.div.fadeOut( hide )
			)
			
			$.browser.msie && this.selects.css( "visibility", "visible" ); 
		},
		
		size: function( m )
		{
			m && ( this.modal = m );
			
			if( $.browser.msie && $.browser.version == "6.0" )
			{
				var h = document.body.clientHeight;
				var w = document.body.clientWidth;
				
				//this.modal.css( { "position": "absolute", "height": h + "px", "width": w + "px" } );
				this.modal.css( { "position": "absolute", "height": h + "px", "width": "100%" } );
			}	
			
			return true;
		},
		
		center: function()
		{
			//top = Number( this.div.height() / 2 ) * -1;
			
			for( name in { "height": 0, "width": 0 } )
			{
				eval( name + "= Number( this.div." + name + "() / 2 ) * -1" );
			}
			
			this.div.length == 1
			   ? this.div.css( { "marginTop": height, "marginLeft": width } )
			   : 0;
		},
		
		queue: function( back )
		{
			if( !back )
			{
				queue.push( this.settings.modalID );
				
				if( queue.length > 1 )
				{
					var id = queue[ queue.length - 2 ],
						elem = $( "#" + id + ":visible" );
					
					elem.length && id != this.settings.modalID && elem.hide() && toback.push( elem );
				}	
			}
			else
				toback.length && toback[ toback.length - 1 ].show() && toback.pop() && queue.pop();
		},
		
		zindex: function( zindex )
		{
			var zindex = zindex ? zindex : ( parseInt( this.div.css( "zIndex" ) ) -1 );
			
			this.modal.css( "zIndex", zindex );
			
			return true;
		}
	});
	
	$.modal =
	{
		create: function( settings )
		{
			var s = $.extend( {}, defaults, settings || {} );
			
			this.modal = $( "#" + s.modalID );
			if( !this.modal.length )
			{
				this.modal = $( '<' + s.modal + '></' + s.modal + '>' )
					.attr( "id", s.modalID )
					.appendTo( "body" );
			}
			
			this.modal.show();
			
			this.prototype.size( this.modal );
			//this.zindex();
			
			return true;	
		},
		
		show: function( settings )
		{
			var s = $.extend( {}, defaults, settings || {} );
			
			this.create();
			
			!$( "p.modalLoader", this.modal ).length
				? $( "<p class='modalLoader'>Carregando...</p>" ).appendTo( this.modal )
				: $( "p.modalLoader", this.modal ).show();
		},
		
		hide: function()
		{
			this.modal.hide();	
		}
	}
	
	$.modal.prototype = $m.fn;
	
})( jQuery );