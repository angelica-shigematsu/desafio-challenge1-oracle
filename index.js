let text = document.getElementById("text").value;

let inputTextModify = []

let textInput = []

const criptografia = ["ai", "enter", "imes", "ober", "ufat"]

document.addEventListener("click", function(e) {
  e.preventDefault();
  let nameButton = e.target.value;

  switch(nameButton) {
    case "Criptografar": 
      cleanText();

      textInput = separateInArray();

      hasTextOuptup(textInput);

      textInput.map((letter, index) => {

        if (letter == "a") {
          inputTextModify[index] = criptografia[0];
        } else if (letter == "e") {
          inputTextModify[index] = criptografia[1]
        } else if (letter == "i") {
          inputTextModify[index] = criptografia[2]
        } else if (letter == "o") {
          inputTextModify[index] = criptografia[3]
        } else if (letter == "u") {
          inputTextModify[index] = criptografia[4]
        } else {
          inputTextModify[index] = letter
        }
      })
 
      printOutputTextArea(inputTextModify);
      break;
      case "Descriptografar": 
      let cont = 0;
        cleanText();

        textInput = separateInArray();

        hasTextOuptup(textInput);

        for(let i = cont; i < textInput.length; i++) {

          if (textInput[i] == "a") {
            inputTextModify[cont] = "a";
            i += criptografia[0].length -1;
          } else if (textInput[i]  == "e") {
            inputTextModify[cont] = "e";
            i += criptografia[1].length -1;

          } else if (textInput[i]  == "i") {
            inputTextModify[cont] = "i";
            i += criptografia[2].length -1;

          } else if (textInput[i] == "o") {
            inputTextModify[cont] = "o";
            i += criptografia[3].length -1;

          } else if (textInput[i] == "u") {
            inputTextModify[cont] = "u"
            i += criptografia[4].length -1;
          } else {
            inputTextModify[cont] = textInput[i];
          }
          cont++
      }
      printOutputTextArea(inputTextModify);
      break;
  }
});

const cleanText = ( ) => {
  inputTextModify = []
  document.getElementById("textOutput").innerHTML = "";
}

const separateInArray = () => {
  return (document.getElementById("text").value).split('');
}

const printTextOutput = (text) => {
  document.getElementById("textOutput").innerHTML = text.join("");
}

const hasTextOuptup = (text) => {
  let showMessage = text.length ? 'hidden': 'visible'
  document.getElementsByClassName("main__output__float")[0].style.visibility = showMessage;
}

const isVisibleCopyButton = (text) => {
  let showButton = text.length ? 'visible': 'hidden';
  document.getElementsByClassName("main__output__button")[0].style.visibility = showButton;
}

const copyText = () => {
  var content = document.getElementById('textOutput').innerHTML;
  // Selecionar o texto dentro do textarea
  navigator.clipboard.writeText(content)
      .then(() => {console.log('Text copied to clipboard...')})
      .catch(err => {
        console.log('Something went wrong', err);
      })

}

const printOutputTextArea = (inputTextModify) => {
  printTextOutput(inputTextModify);

  isVisibleCopyButton(inputTextModify);
}
