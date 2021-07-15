addEventListener("load",load)

var FrontServer="https://localhost:80/";

function load(){
    document.getElementById("registronuevo").addEventListener("click",click);

}

function click(){
    SendParameters(FrontServer + "register/enviar",ServerResponse);
}



function SendParamenters(servidor,FunctionToPerform){

    var xmlhttp = new XMLHttpRequest();

    var data= new FormData();
    data.append("email",$("mail").value);
    data.append("usuario",$("username").value);
    data.append("contrasenia",$("password").value);

    xmlhttp.open("POST",servidor,true);
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if(xmlhttp.status == 200){
                FunctionToPerform(xmlhttp.responseText);
        }else{
            alert("An error has occurred");
        }
    }
}

    xmlhttp.setRequestHeader("enctype","multipart/form-data");    

    xmlhttp.send(data);
}