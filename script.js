function calculoMedia() {
    var nota1 = parseInt(document.getElementById('notaM1').value)
    var nota2 = parseInt(document.getElementById('notaM2').value)
    var media = (nota1 + nota2) / 2
 
    document.getElementById('notaFinal').innerText = "Média Final é: " + media
 
    if(media >= 5) {
        //document.getElementById('resultadoAluno').innerText = "Aprovado"
        Swal.fire({
        title: "Parabéns",
        text: "Você foi Aprovado",
        icon: "success"
});
    } else {
        //document.getElementById('resultadoAluno').innerText = "Reprovado"
        Swal.fire({
        title: "Enfim",
        text: "Reprovado",
        icon: "error"
    });
    }
}