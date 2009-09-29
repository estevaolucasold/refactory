$( function()
{
	module( "Basic" );
	
	test( "simple teste sem jQuery", function()
	{
		var	data =
			{
				users:
				[
				 	{
						name: "Estevão Lucas",
						url: "www.creativemarkup.com.br"
					}
				]
			},
			elements = tmpl( "user_tmpl", data );		
		
		console.log( $.trim( elements ) );
		equals( $( "li", elements ).length, data.users.length, "Elementos montados deve ser igual ao data" );
	});
	
	test( "simple teste com jQuery", function()
	{
		var	data =
			{
				users:
				[
				 	{
						name: "Estevão Lucas",
						url: "www.creativemarkup.com.br"
					}
				]
			},
			elements = tmpl( "user_tmpl_jquery", data );		
		
		console.log( $.trim( elements ) );
		equals( $( "li", elements ).length, data.users.length, "Elementos montados deve ser igual ao data" );
	});
});