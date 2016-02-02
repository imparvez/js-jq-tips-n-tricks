/*---- Jquery Version -----*/
$(document).ready(function(){
	var route = {
		_routes: {}, //The routes will be stored here KEY(_routes): VALUE({empty_object})

		add : function(url,action){
			this._routes[url] = action;
		},

		run : function(){
			$.each(this._routes, function(pattern){
				if(location.href.match(pattern)){
					this()
				}
			})
		}
	}

	route.add('project.html', function(){
		$(".project").on('click', function(){
			alert($(this).text())
		})

		//Old way to check the element existence
		console.log($("#exist").length == 1 ? 'exists' : 'doesn\'t exist');

		//Trick
		$.fn.exists = function(){ return this.length > 0; } 
		//jQuery.fn = $.fn (shorthand) => Jquery.prototype OR $.prototype 

		console.log($('#existsdfsd').exists() ? "exists!" : "doesn't exist!");
		//return this.length > 0 ==> 0 > 0 ==> FALSE ==> ELEMENT DOSEN'T EXISTS
		console.log($('#exist').exists() ? "exists!" : "doesn't exist!");
		//return this.length > 0 ==> 1 > 0 ==> TRUE ==> ELEMENT EXISTS
	})

	route.add('/', function(){
		$(".home").on('click', function(){
			alert($(this).text())
		})

		/*TO check whether the element with the id is which element is it <div> or <p> using is() function*/
		$("#elem").is('div') && console.log("IT IS DIV ELEMENT")

		$("#elem").is('p') && console.log("IT IS P ELEMENT")

		/*To check whether the element is visible in DOM or not*/
		$("#elem").is(':visible') && console.log("IT IS VISIBLE")

		$("#elem").is(':not(:visible)') && console.log("IT IS NOT VISIBLE")

		/*To check how many elements on your page*/
		console.log('This page has ' + $('*').length + ' elements!');

	})

	route.add('work.html', function(){
		$(".work").on('click', function(){
			alert($(this).text())
		})
	})

	route.add('contact-us.html', function(){
		$(".contact").on('click', function(){
			alert($(this).text())
		})
	})

	route.run();
})