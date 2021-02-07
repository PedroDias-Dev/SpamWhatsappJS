var message = "BRUH MOMENTO";
var count = 10; 
var looper = 0;
for(looper=0;looper<count;looper++)
{
	window.InputEvent = window.Event || window.InputEvent;
	var d = new Date();
	var event = new InputEvent('input', {bubbles: true});
	var textbox= document.querySelector('#main > footer > div._3SvgF._1mHgA.copyable-area > div.DuUXI > div > div._1awRl.copyable-text.selectable-text');
	
	textbox.textContent = message;
	textbox.dispatchEvent(event);
	var b = document.querySelectorAll('#main > footer > div._3SvgF._1mHgA.copyable-area > div:nth-child(3) > button')[0]
	b.click();
}
