
function save() {
	// 画像初期化
	localStorage.removeItem("picture");
	var picture = document.getElementById("picture").value;
	localStorage.setItem('picture', picture);
	// カラー初期化
	localStorage.removeItem("line_color");
	var line_color = document.getElementById("line_color").value;
	localStorage.setItem('line_color', line_color);
}
	  
function load() {
	var mydata = "";
	load_picture = localStorage.getItem('picture');
	load_line_color = localStorage.getItem('line_color');
	alert(load_picture);
	alert(load_line_color);
}
