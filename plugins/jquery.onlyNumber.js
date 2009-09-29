$.fn.onlyNumber = function( settings )
{
	var defaults = {
			except: "-.A"	
		},
		settings = $.extend( {}, defaults, settings || {}),
		except = [];
		
	for( var i = 0; i < settings.except.length; i++ )
	{
		except.push( settings.except.charCodeAt( i ) );
	}
	
	return this.each( function()
	{
		$( this ).keypress( function( e )
		{
			if( e.which!=8 && e.which!=0 && ( e.which<48 || e.which>57 ) && $.inArray( e.which, except ) == -1 )
				return false;
		});
	});
}
