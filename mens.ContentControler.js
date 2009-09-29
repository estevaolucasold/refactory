/**
 * TODO: documentacao
 */
Module( "mens", function( mens )
{
	/**
	 * TODO: documentacao
	 */
	Class( "ContentControler",
	{
		has: 
		{
			/**
			 * @description HTML usado para montar a listagem
			 */
			template:
			{
				is: "rw"
			},
			
			/**
			 * @description Elemento que será usado para fazer a montagem
			 */
			element:
			{
				is: "ro"
			},
			
			/**
			 * @description Conteúdo vindo dos JSONs
			 */
			data:
			{
				is: "rw"
			}
		},
		
		methods:
		{
			montar: function()
			{
				this.render( getTemplate() );
			},
		
			render: function( t )
			{
				this.getElement.append( t, this.getTemplateData() );
			},
		
			getTemplate: function()
			{
				return $.template( this.template.content );
			},
		
			/**
			 * TODO: documentacao
			 */
			load: function( params )
			{
				var defaultParams = DataAccessInterface.getRequestParams(
						$.getURLParam('o') == null ? 'Id' : $.getURLParam('o'),
						0,
						0,
						$.getURLParam('t') == null ? TAGS_AREA_ATUAL : $.getURLParam('t'),
						0,
						null,
						$.getURLParam('v') == null ? null : $.getURLParam('v')
					),
					request = {};
					
				$.extend( request, defaultParams, params );
					
				mens.DAI( { method: 'get', params: request, callback: this.onDataLoad } );
			},
		
			onDataLoad: function( data )
			{
				this.data = data;
				this.montar();
			},
		
			getTemplateData: function()
			{
				var params = getSupportParameters(),
					templateData = {};
					
				$.extend( templateData, this.data, params );
					
				return templateData;
			},
		
			getSupportParameters: function()
			{
				var r = { UrlArea: URL_AREA_ATUAL };
					
				if(	this.data._index != null )
					r.Numero = this.data._index + 1;
		 
				return r;
			}
		}
	})
});