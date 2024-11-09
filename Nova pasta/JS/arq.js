function alterarBorderRadius(){
    const valor = document.getElementById("input-radius").value;
    const quadrado = document.getElementById("quadrado");
    quadrado.style.borderRadius = valor;
}