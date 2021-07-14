function films(){
	let switcher = document.getElementById("first").classList;
	switcher.add("active");
	switcher = document.getElementById("second").classList;
	switcher.remove("active");
	let tv = document.getElementById("page-tv").classList;
	let movies = document.getElementById("page-films").classList;
	movies.remove("page-films-off");
	tv.remove("page-tv-active");
}

function tv(){
	let switcher = document.getElementById("second").classList;
	switcher.add("active");
	switcher = document.getElementById("first").classList;
	switcher.remove("active");
	let tv = document.getElementById("page-tv").classList;
	let movies = document.getElementById("page-films").classList;
	movies.add("page-films-off");
	tv.add("page-tv-active");
}

function enter(){
	let button_enter = document.getElementById("enter").classList;
	let button_exit = document.getElementById("exit").classList;
	let wrapper = document.getElementById("wrapper").classList;
	
	button_exit.remove("hide");
	button_enter.add("hide");
	wrapper.add("modal-wrapper-click");
	
}
function exit(){
	let button_enter = document.getElementById("enter").classList;
	let button_exit = document.getElementById("exit").classList;
	let user_name="";
	let user = document.getElementById("user");
	user.innerHTML = user_name.replace(/&/g, '&amp;').replace(/</g, '&lt;');
	button_exit.add("hide");	
	button_enter.remove("hide");
}

window.onload = function(){
	let button_exit = document.getElementById("exit").classList;
	let button_enter = document.getElementById("enter").classList;
	if(localStorage.length > 0){
		let user_name = localStorage.key(0);
		let user = document.getElementById("user");
		user.innerHTML = user_name.replace(/&/g, '&amp;').replace(/</g, '&lt;');
		button_exit.remove("hide");
		button_enter.add("hide");
	}
	else{
		button_exit.add("hide");
		button_enter.remove("hide");
	}
};

function login(){
	let login = document.getElementById("login").value;
	let pass = document.getElementById("password").value;
	let user_name;
	if(login == "" && pass == "")
		alert("Вы не ввели логин и пароль!")
	else if(login == "")
		alert("Вы не ввели логин!")
	else if(pass == "")
		alert("Вы не ввели пароль!")
	else{		
		let login_mas = login.split(' ');
		if(login_mas.length > 1)
			user_name = login_mas[0] + " " + login_mas[1][0] + ".";
		else
			user_name=login;
		let wrapper = document.getElementById("wrapper").classList;
		wrapper.remove("modal-wrapper-click");
		let user = document.getElementById("user");
		user.innerHTML = user_name.replace(/&/g, '&amp;').replace(/</g, '&lt;');
		let check_box = document.getElementById("radio");
		if(check_box.checked){
			localStorage.setItem(user_name,pass);
		}
	}
	document.getElementById("login").value="";
	document.getElementById("password").value="";
}

function Search(){
	
	let elasticItems = document.querySelectorAll(".movies li"); 
	elasticItems.forEach(function(elem){  
		elem.classList.remove("hide");	
	});
	let val = document.getElementById("input").value.trim().toLowerCase(); 
	let el = document.getElementById("movies").classList;
	let i = 0; 
	if(val != ""){ 
		elasticItems.forEach(function(elem){ 
			if(elem.innerText.toLowerCase().search(val) == -1) { 
				elem.classList.add("hide"); 
			}
			else{
				i++;
				elem.classList.remove("hide"); 
				if(i != 1){
					elem.classList.add("flex-margin"); 
				}
				else{
					elem.classList.remove("flex-margin"); 
				}
			}
		});
		el.add("flex-start");
	}
	else {
		elasticItems.forEach(function(elem){
			elem.classList.remove("hide");
			elem.classList.remove("flex-margin");
		});
		el.remove("flex-start");
	}

}

function long_login(){
	let login = document.getElementById("login").loginue;
	let login2;
	let i=0;
	if(login.length > 13){
		alert("Максимальная длина ввода данных 13 символов");
		login2 = login.slice(0,-1);
		document.getElementById("login").loginue = login2;
	}
}

function long_pass(){
	let pass = document.getElementById("password").passue;
	let pass2;
	let i=0;
	if(pass.length > 13){
		alert("Максимальная длина ввода данных 13 символов");
		pass2 = pass.slice(0,-1);
		document.getElementById("password").passue = pass2;
	}
}