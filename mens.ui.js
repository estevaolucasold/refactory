/**
 * TODO: documentacao
 */
Module( "mens.ui", function( mens )
{
	/**
	 * TODO: documentacao
	 */
	Class( "LoadIndicator",
	{
		has: 
		{
			/**
			 * TODO: documentacao
			 */
			ctShow:
			{
				is: "rw",
				init: 0
			},
			
			/**
			 * TODO: documentacao
			 */
			element:
			{
				is: "rw",
				init: null	
			}
		},
		
		methods:
		{
			init: function()
			{
				this.getElement() == null
					&& this.setElement( $( "#loadIndicator" ) );
			},
		
			show: function()
			{
				this.init();
				this.setCtShow( this.getCtShow()++ );
				this.getElement.show();
			},
		
			hide: function()
			{
				this.setCtShow( this.getCtShow()-- );
				
				this.getCtShow <= 0
					&& this.getEl.hide();
			}
		}
	});
	
	/**
	 * TODO: documentacao
	 */
	Class( "Delegate",
	{
		classMethods:
		{
			create: function( obj, func )
			{
				var f = function()
				{
					var target = arguments.callee.target;
					var func = arguments.callee.func;
			
					return func.apply( target, arguments );
				};
			
				f.target = obj;
				f.func = func;
				
				return f;
			}
		}
	});
	
	/**
	 * TODO: documentacao
	 */
	Class( "Message",
	{
		classMethods:
		{
			init: function()
			{
				$( "<div id='message' class='message'><p></p></div>" ).appendTo( "body" );
			},
			
			show: function( message, type )
			{
				var type = type || "",
					html = $( "#message:first" );
				
				html
					.fadeIn( "slow" );
					.attr( "class", "message " + type );
					.find( "p" ).html( message 	);
				
				$.browser.msie && $.browser.version == "6.0"
					&& html.css( "top", $( window ).scrollTop() + 100 );
				
				$( "body" ).mousemove( mens.ui.Message.mousemove() );
		
			},
		
			hide: function()
			{
				mens.ui.Message.html().fadeOut( "slow" );
			},
			
			mousemove: function()
			{
				$( "body" ).unbind( "mousemove", mens.ui.Message.mousemove() );
				
				setTimeout( mens.ui.Message.hide(), 2000 );
			}
		}
	});
}

// Deixar a mensagem ativa
$( mens.ui.Message.init() );