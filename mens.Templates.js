Module( "mens", function( m )
{
	Class( "Templates", {} );
	
	Class( "Templates",
	{
        does: [ Joose.Singleton ],
    
        methods:
		{
			content: function()
			{
				var T = this;
				
				T.PessoasDestaqueHome =
				{
					listItem:
					{
						content: 
							'<li class="${Plano}">'+
							'<img src="${FotoUrl}" alt="${Apelido}" />'+
							'<p>"${Frase}"</p>' +
							'<strong>${Apelido}</strong> <span>${Cidade} - ${Sigla}</span> </li>'
					},
					
					listWrapper: '<ul class="listWrapper bgPlans"></ul>'
				};
				
				T.Institucional =
				{
					content: '${Descricao}'
				};
				
				T.Regulamento =
				{
					content: '<div class="regulation"><h6>${Titulo}</h6>${Descricao}</div>'
				}	
			}
		}
    })
	
	var T = m.Templates.getInstance();
	
	console.log( T );
	
});