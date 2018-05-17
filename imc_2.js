function calculaIMC(peso, altura) {
	return peso / (altura * altura);
}

function mensagemIMC() {
	document.write("Teste");
	/*switch(sexo) {
		case "M":
			if(resultado <= 20.7) {
				form.mensagem.value = "Abaixo do peso ideal";
			}
			else if((resultado > 20.7) && (resultado <= 26.4)) {
				form.mensagem.value = "Peso Ideal";
			}
			else {
				form.mensagem.value = "Acima do Peso";
			}
		case "F":
			if(resultado <= 19.1) {
				form.mensagem.value = "Abaixo do peso ideal";
			}
			else if((resultado > 19.1) && (resultado <= 25.8)) {
				form.mensagem.value = "Peso Ideal";
			}
			else {
				form.mensagem.value = "Acima do Peso";
			}
	}*/
}

function switchCaseIMC() {
			var form = document.getElementById("formulario");
			var sexo = document.getElementById("sexo").value;
			var peso = form.peso.value;
			var altura = form.altura.value;
			var resultado = calculaIMC(peso,altura);
			resultado = resultado.toFixed(2);
			form.resultado.value = resultado;
			//mensagemIMC();
			form.resultado.value = resultado;
			form.mensagem.value = "Peso Ideal";

			/*switch(sexo) {
				case "M":
					if(resultado <= 20.7) {
					form.mensagem.value = "Abaixo do peso ideal";
					}
					else if((resultado > 20.7) && (resultado <= 26.4)) {
						form.mensagem.value = "Peso Ideal";
					}
					else {
						form.mensagem.value = "Acima do Peso";
					}
				case "F":
					if(resultado <= 19.1) {
						form.mensagem.value = "Abaixo do peso ideal";
					}
					else if((resultado > 19.1) && (resultado <= 25.8)) {
						form.mensagem.value = "Peso Ideal";
					}
					else {
						form.mensagem.value = "Acima do Peso";
					}
				default:
					switchCaseIMC();*/
			}						

		}

