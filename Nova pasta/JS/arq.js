function alterarBorderRadius(opcao,inputId){
    const valor = document.getElementById(inputId).value;
    const quadrado = document.getElementById("quadrado");
    const myInput = document.getElementById("myInput");

switch (opcao) {
    case 1:
        quadrado.style.borderBottomLeftRadius = valor;
        myInput.value += `border-bottom-left-radius: ${valor};`;
        break;
    case 2:
        quadrado.style.borderTopLeftRadius = valor;
        myInput.value += `border-top-left-radius: ${valor};`;
        break;
    case 3:
        quadrado.style.borderTopRightRadius = valor;
        myInput.value += `border-top-right-radius: ${valor};`;
        break;
    case 4:
        quadrado.style.borderBottomRightRadius = valor;
        myInput.value += `border-bottom-right-radius: ${valor};`;
        break;
    default:
        myInput.value = "Opção inválida!";
}}
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
