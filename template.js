/**
 * <script type="text/html" id="script">
 *  <div> 
 *    <#= content #>
 *    <# for(var i=0; i < names.length; i++) { #>
 *    Name: <#= names[i] #> <br/>
 *    <# } #>
 *  </div>
 *  </script>
 * 
 *  var tmpl = $("#itemtemplate").html();
 *  var data = { content: "This is some textual content",
 *               names: ["rick", "markus"]
 *  };
 *  $("#divResult").html(parseTemplate(tmpl, data));
 * 
 *  based on John Resig's Micro Templating engine
 * 
 *  Simple JavaScript Templating
 * John Resig - http://ejohn.org/ - MIT Licensed
**/

(function(){
	var cache = {},
  		err = "";
  
	try
	{
		this.tmpl = function tmpl( str, data )
		{
			// Figure out if we're getting a template, or if we need to
			// load the template - and be sure to cache the result.
			var fn = !/\W/.test(str)
				? cache[str] = cache[str] || tmpl( document.getElementById( str ).innerHTML )
				: // Generate a reusable function that will serve as a template
				  // generator (and which will be cached).
					new Function("obj",
					"var p=[];with(obj){p.push('" +
				   
					// Convert the template into pure JavaScript
					str
						.replace(/[\r\t\n]/g, " ")
						.split("<%").join("\t")
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
						.replace(/\t=(.*?)%>/g, "',$1,'")
						.split("\t").join("');")
						.split("%>").join("p.push('")
						.split("\r").join("\\'")
					+ "');}return p.join('');");
	   
			// Provide some basic currying to the user
			return data ? fn( data ) : fn;
		};
	}
	catch( e )
	{
		err = e.message;	
	}
	
	console.log( err );
	return "< # ERROR: " + err.htmlEncode() + " # >";
})();
