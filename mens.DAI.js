/**
 * TODO: documentacao
 */
DocumentReady = true;

Module( "mens", function( m )
{
	/**
	 * TODO: documentacao
	 */
	Class( "DAI",
	{
		has: 
		{
			version:
			{
				is: "r",
				init: "0.1"
			},
			
			/**
			 * TODO: documentacao
			 */
			callQueue:
			{
				is: "rw",
				init: []
			},
			
			/**
			 * TODO: documentacao
			 */
			timeoutDelay:
			{
				is: "rw",
				init: 15
			},
			
			/**
			 * TODO: documentacao
			 */
			onQueue:
			{
				is: "rw",
				init: null
			},
			
			/**
			 * TODO: documentacao
			 */
			nTimeout:
			{
				is: "rw",
				init: null
			},
			
			ajaxParams:
			{
				is: "rw",
				init: {}
			},
			
			params:
			{
				is: "rw",
				init: {}
			}
		},
		
		methods:
		{
			getData: function( data )
			{
				var settings = 
				{
					name: "untitled",
					cache: false,
					callback: function(){}	
				};
				
				this.setParams( $.extend( {}, settings, data || {} ) );
										 
				var params = this.getParams();
					
				this.setAjaxParams(
				{
					type: params.method,
					data: data,
					cache: params.cache,
					success: mens.ui.Delegate.create( this, this.onAjaxSuccess ),
					error: mens.ui.Delegate.create( this, this.onAjaxError )	
				});
				
				with( this )
				{
					if( mens.DAI.documentReady() )
					{
						mens.ui.LoadingIndicator.show();
						
						this.startTimeout();
						
						if( params.method == "post" )
						{
							// TODO alterar para o param callbak
							ajaxParams.url = DataAccessInterface.sources[ controler.type ][ action ];
							ajaxParams.dataType = "json";
						}
						else
						{
							ajaxParams.url = DataAccessInterface.sources[ controler.type ][ action ];
							ajaxParams.dataType = "jsonp";
						}
						
						$.ajax(	ajaxParams );
						
						console.log( "executando: " + settings.name );
					}
					else
					{
						enqueue( action, params);
					}
				}
			},
				
			enqueue: function( action, params )
			{
				console.log( "enfileirando: " + this.getParams().name );
				
				this.callQueue.push( { action: action, params: params } );
					
				if( !this.onQueue )
				{
					// TODO
					$( mens.ui.Delegate.create( this, this.onDocReady ) );
					onQueue = true;
				}
			},
		
			onDocReady: function()
			{
				mens.DAI.documentReady( true );
					
				console.log( "Documento carregado: " + this.getParams().name );
					
				for( var k = 0; k < this.callQueue.length; k++ )
				{
					this.getData( callQueue[ k ] );
				}
				
				this.setCallQueue( [] );
			},
		
			/**
			 * TODO: documentacao
			 */
			onAjaxSuccess: function( response )
			{
				// TODO mens.ui.LoadingIndicator.hide();
				mens.ui.LoadingIndicator.hide();
				
				this.stopTimeout();
				
				if( response.Status == 0 )
				{
					var data = response.Data;
					
					console.log( "DAI: SUCESSO" );
					
					if( data.constructor == Array )
						data = { data: data }
					
					// TODO Arumar
					this.getParams.callback()
				}
				else
				{
					// TODO mens.ui.Message.show( message );
					mens.ui.Message.show( response.Message );
				}
				
				return response;
			},
			
			onAjaxError: function(e)
			{
				mens.ui.LoadingIndicator.hide();
		
				this.stopTimeout();
				
				console.log( "DAI: ERROR" );
				
				// TODO callback
				$( this ).trigger( 'error', e );
				
				mens.ui.Message.show( e );
			},
		
			stopTimeout: function()
			{
				clearTimeout( this.nTimeout );
			},
		
			startTimeout: function()
			{
				this.stopTimeout();
				this.nTimeout = setTimeout( mens.ui.Delegate.create( this, this.timeoutError ), this.timeoutDelay * 1000 );
			},
		
			timeoutError: function()
			{
				this.onAjaxError( "Ocorreu um erro processando sua solicitação. Tente novamente mais tarde." );
			}
		},
		
		classMethods: 
		{
			documentReady: function( value )
			{
				if( value != null )
					DocumentReady = value;
				else
					return DocumentReady;
			}
		}
	})
});