let Bgcolor=document.querySelector('select');
let html = document.querySelector('html');

Bgcolor.onchange = function() {
	let color=Bgcolor.value;
	switch(color){
		case 'white':
			update(color,'black');break;
		case 'black':
			update(color,'white');break;
		case 'purple':
			update(color,'white');break;
		case 'yellow':
			update(color,'white');break;
	}
}
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}