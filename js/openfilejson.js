function load(){
var mydata= (networks);
alert(mydata[0].id);
alert(mydata[0].name);

}
function pulalinha(){
	document.write("</br>");
}	
/*function print(){
	var mydata= (networks);
	document.write("ID 0: "+mydata[0].id);
	pulalinha();
	document.write("Name 0: "+mydata[0].name);
	pulalinha();
	pulalinha();
	document.write("ID 728: "+mydata[728].id);
	pulalinha();
	document.write("Name 728: "+mydata[728].name);
	pulalinha();
}*/	

function showonpage(){
	var mydata = (networks);
	var idx = document.getElementById("idsearch").value;
	
	document.getElementById('id0').innerHTML = 'ID'+idx+': '+ mydata[idx].id;
	document.getElementById('name0').innerHTML = 'Name'+idx+': ' + mydata[idx].name;
}

function search(){	
	var mydata= (networks);
	var ljx = document.getElementById("ljbusca").value;
	/* if (ljx.length < 1 && ljx.value == false) //|| ljx == null || ljx == ""
	{
		alert("Campo de busca esta vazio");
		document.getElementById("ljbusca").focus();
	}
	else
	{
		for(var i = 0; i < networks.length; i++)
		{
			if(networks[i].name.includes(ljx))
			{
				document.getElementById('id1').innerHTML = "ID Encontrado "+ljx+" na posição: "+ i;
				document.getElementById('Network1').innerHTML = "Pertence a rede: "+networks[i].id;
				document.getElementById('loja1').innerHTML = "Loja Tem o nome: "+networks[i].name;
			}
		}
	} */
	for(var i = 0; i < networks.length; i++)
		{
			if(networks[i].name.includes(ljx))
			{
				document.getElementById('id1').innerHTML = "ID Encontrado "+ljx+" na posição: "+ i;
				document.getElementById('Network1').innerHTML = "Pertence a rede: "+networks[i].id;
				document.getElementById('loja1').innerHTML = "Loja Tem o nome: "+networks[i].name;
			}
		}
	
}

function limpa(){
	document.getElementById("frm").reset();
}

function testf(){
	var ljx = document.getElementById("ljbusca").value;
	if (ljx == null || ljx == "")
	{
		alert("Campo de busca esta vazio");
		document.getElementById("ljbusca").focus();
	}
}	