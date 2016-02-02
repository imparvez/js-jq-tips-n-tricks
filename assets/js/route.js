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
	})

	route.add('/', function(){
		$(".home").on('click', function(){
			alert($(this).text())
		})
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