$(function() {
	$('h1').fontmix();
});

$.fn.fontmix = function(){
	var text = this.text().replace(/(\S)/g, "<span>$1</span>");

	var divClass = this.prop("nodeName").toLowerCase();
	
	this.append("<div class='"+divClass+"'>"+text+"</div>");
	
	return this;

};