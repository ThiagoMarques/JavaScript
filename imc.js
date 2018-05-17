function calculaIMC(peso, altura) {
	return peso / (altura * altura);
}

function elemento1() {
			var form = document.getElementById("formulario");
			var sexo = document.getElementById("sexo").value;
			var peso = +form.peso.value;
			var altura = +form.altura.value;
			var resultado = calculaIMC(peso,altura);
			resultado = resultado.toFixed(2);
			form.resultado.value = resultado;
			
			if(sexo == 'M') {
				if(resultado <= 20.7) {
					form.mensagem.value = "Abaixo do peso ideal";
				}
				else if((resultado > 20.7) && (resultado <= 26.4)) {
					form.mensagem.value = "Peso Ideal";
				}
				else {
					form.mensagem.value = "Acima do Peso";
				}
			}
				
			else {
				if(resultado <= 19.1) {
					form.mensagem.value = "Abaixo do peso ideal";
				}
				else if((resultado > 19.1) && (resultado <= 25.8)) {
					form.mensagem.value = "Peso Ideal";
				}
				else {
					form.mensagem.value = "Acima do Peso";
				}
			}
							

		}

