
var HelloNoreen = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloNoreen.init()");

//			// attach an event to an HTML element
//			var self = this;
//			jQuery(".HelloNoreen .myElementClass").click(function() {
//				self.myMethod();
//				// do something
//				...
//			});
		},
		
		myMethod: function() {
			alert("HelloNoreen.myMethod()");
		}
		// no comma after last method
	};
}();

//jQuery(HelloNoreen.init()); // Run after page loads