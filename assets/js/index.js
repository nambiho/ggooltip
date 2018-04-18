;(function () {
	"use strict";

	window.addEventListener('DOMContentLoaded', function (e) {
		var sl = new simplelib()
		,showdiv = sl.util.getbyId('showdiv')
		;
		
		sl.ggooltip({
			//message:{text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium.'},
			message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, praesentium.',
			x:true
		})
	})
} ());