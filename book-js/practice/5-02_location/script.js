var lang = document.querySelector('html').lang;

var opt;
// if(lang === 'ja') {
// 	opt = document.querySelector('option[value="index.html"]');
// } else if(lang === 'en') {
// 	opt = document.querySelector('option[value="index-en.html"]');
// } else if(lang === 'zh') {
// 	opt = document.querySelector('option[value="index-zh.html"]');
// }
switch(lang) {
	case 'ja':
		opt = document.querySelector('option[value="index.html"]');
		break;
	case 'en':
		opt = document.querySelector('option[value="index-en.html"]');
		break;
	case 'zh':
		opt = document.querySelector('option[value="index-zh.html"]');
		break;
}
opt.selected = true;
document.getElementById('form').select.onchange = function() {
	location.href = document.getElementById('form').select.value;
}