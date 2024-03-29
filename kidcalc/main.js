function changeNameTheme(){
    let name = document.getElementById("name").value;
    let user = document.getElementById("user");
    let themeVar = document.getElementById("theme").value;
    let body = document.body;
    user.innerText = name;

    if(themeVar == "theme1"){
        body.classList.remove("theme2","theme3")
        body.classList.add("theme1")
    }
    else if(themeVar == "theme2"){
        body.classList.remove("theme1","theme3")
        body.classList.add("theme2")
    }
    else if(themeVar == "theme3"){
        body.classList.remove("theme2","theme1")
        body.classList.add("theme3")
    }

    return false;
} 