$( function()
{
	module( "Content Controller - Basic" );
	
	//
	test( "a basic class", function()
	{
		Class( "SuperClasse",
		{
			has:
			{
				value:
				{
					is: "rw",
					init: "teste"
				}
			},
			
			methods:
			{
				myMethod: function()
				{
					return "The value is: " + this.value;
				}
			}
		});
		
		var mySuperClass = new SuperClasse();
		
		equals( mySuperClass.getValue(), "teste", "verifing value's value property" );
		
		mySuperClass.setValue( "teste2" )
		equals( mySuperClass.getValue(), "teste2", "verifing new value's value property" );
	});
		
	module( "Content Controller - Basic 2 " );
	
	test( "Instance", function()
	{
		var CC = new mens.ContentControler( { element: $( "h1" ) } );
		
		console.log( CC );
	});
});