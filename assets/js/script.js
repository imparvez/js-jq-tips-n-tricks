/*---- Jquery Version -----*/
// $(document).ready(function(){
// 	alert("DOM READY")
// })


/*---- Shorter Jquery Version ----*/
// $(function(){
// 	alert("NEW DOM READY")
// })

/*---- Without Jquery ----*/
// document.addEventListener('DOMContentLoaded', function(){
// 	alert("WITHOUT JQUERY")
// }, false);

/*---- Works AnyWhere----*/
r(function(){
	alert("DOM READY!!!!!!")
})

function r(f) {/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}