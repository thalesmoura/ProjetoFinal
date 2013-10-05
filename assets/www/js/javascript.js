function logar(){
		window.location.href='telaTarefa.html';

	//	window.parent.location.href='telaTarefa.html';
	}
	
	//Verificar pq no tel fica um loop de "o campo deve ser preenchido"
function validarEmail(email){
    if (email.value == "" || email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1){
     alert("O campo " + email.name + " deve ser preenchido!");
     email.focus();
     return false;
    }
       //validar email(verificao de endereco eletrônico)
    parte1 = email.value.indexOf("@");
    parte2 = email.value.indexOf(".");
    parte3 = email.value.length;
    if (!(parte1 >= 3 && parte2 >= 6 && parte3 >= 9)) {
 	   alert ("O campo " + email.name + " deve ser conter um endereco eletronico!");
	   email.focus();
       return false;
    }
}	
