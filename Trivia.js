function pantalla2(){
    let userName = document.getElementById('nombre').value.toUpperCase();
    document.getElementById('pantalla1').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'block';
    document.getElementById('saludo').innerHTML = 'Hola ' + userName;
  }
  
  function seccionA() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('questionsA').style.display = 'block';
  }
  
  function seccionB() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('questionsB').style.display = 'block';
  }

  function seccionC() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('questionsC').style.display = 'block';  
  }
  
  function clickSendAnswersA() {
      let questionOneA = ''; //  para definir el valor de la primera pregunta
      if (document.getElementById('optionOne').checked) {
          questionOneA = document.getElementById('optionOne').value;
      }
      if (document.getElementById('optionTwo').checked) {
          questionOneA = document.getElementById('optionTwo').value;
      }
      if (document.getElementById('optionThree').checked) {
          questionOneA = document.getElementById('optionThree').value;
      }
      let questionTwoA = ''; // para definir el valor de la segunda pregunta
      if (document.getElementById('optionFour').checked) {
          questionTwoA = document.getElementById('optionFour').value;
      }
      if (document.getElementById('optionFive').checked) {
          questionTwoA = document.getElementById('optionFive').value;
      }
      if (document.getElementById('optionSix').checked) {
          questionTwoA = document.getElementById('optionSix').value;
      }
      let questionThreeA = ''; // para definir el valor de la tercera pregunta
      if (document.getElementById('optionSeven').checked) {
          questionThreeA = document.getElementById('optionSeven').value;
      }
      if (document.getElementById('optionEight').checked) {
          questionThreeA = document.getElementById('optionEight').value;
      }
      if (document.getElementById('optionNine').checked) {
          questionThreeA = document.getElementById('optionNine').value;
      }
  
      let questionOnePointsA = ''; // checkea respuestas correctas
      if (questionOneA === '1') {
          questionOnePointsA = 1;
      }
      else {
          questionOnePointsA = 0;
      }
  
      let questionTwoPointsA = '';
      if (questionTwoA === '1') {
          questionTwoPointsA = 1;
      }
      else {
          questionTwoPointsA = 0;
          
      }
  
      let questionThreePointsA = '';
      if (questionThreeA === '1') {
          questionThreePointsA = 1;
      }
      else {
          questionThreePointsA = 0;
      }
      let correctAnswersA = questionOnePointsA + questionTwoPointsA + questionThreePointsA; // suma puntos
  
  document.getElementById('questionsA').style.display ='none';
  document.getElementById('questionsB').style.display ='none';
  document.getElementById('points').innerHTML = '¡Tu puntaje es de ' + correctAnswersA + '/3 punto(s)!'; // entrega el resultado
  document.getElementById('ultimaPantalla').style.display = 'block';
  }
  
  function clickSendAnswersB() {
      let questionOneB = ''; //  para definir el valor de la primera pregunta
      if (document.getElementById('optionOneB').checked) {
          questionOneB = document.getElementById('optionOneB').value;
      }
      if (document.getElementById('optionTwoB').checked) {
          questionOneB = document.getElementById('optionTwoB').value;
      }
      if (document.getElementById('optionThreeB').checked) {
          questionOneB = document.getElementById('optionThreeB').value;
      }
      let questionTwoB = ''; // para definir el valor de la segunda pregunta
      if (document.getElementById('optionFourB').checked) {
          questionTwoB = document.getElementById('optionFourB').value;
      }
      if (document.getElementById('optionFiveB').checked) {
          questionTwoB = document.getElementById('optionFiveB').value;
      }
      if (document.getElementById('optionSixB').checked) {
          questionTwoB = document.getElementById('optionSixB').value;
      }
      let questionThreeB = ''; // para definir el valor de la tercera pregunta
      if (document.getElementById('optionSevenB').checked) {
          questionThreeB = document.getElementById('optionSevenB').value;
      }
      if (document.getElementById('optionEightB').checked) {
          questionThreeB = document.getElementById('optionEightB').value;
      }
      if (document.getElementById('optionNineB').checked) {
          questionThreeB = document.getElementById('optionNineB').value;
      }
  
      let questionOnePointsB = ''; // checkea respuestas correctas
      if (questionOneB === '1') {
          questionOnePointsB = 1;
      }
      else {
          questionOnePointsB = 0;
      }
  
    let questionTwoPointsB = '';
      if (questionTwoB === '1') {
          questionTwoPointsB = 1;
      }
      else {
          questionTwoPointsB = 0;
      }
  
      let questionThreePointsB = '';
      if (questionThreeB === '1') {
          questionThreePointsB = 1;
      }
      else {
          questionThreePointsB = 0;
      }
  let correctAnswersB = (questionOnePointsB + questionTwoPointsB + questionThreePointsB); // suma puntos
  
  document.getElementById('questionsA').style.display ='none';
  document.getElementById('questionsB').style.display ='none';
  document.getElementById('questionsc').style.display ='none';
  document.getElementById('points').innerHTML = '¡Tu puntaje es de ' + correctAnswersB + '/3 punto(s)!'; // entrega el resultado
  document.getElementById('ultimaPantalla').style.display = 'block';
  }
  
  function clickSendAnswersC() {
    let questionOneC = ''; //  para definir el valor de la primera pregunta
    if (document.getElementById('optionOneC').checked) {
        questionOneC = document.getElementById('optionOneC').value;
    }
    if (document.getElementById('optionTwoC').checked) {
        questionOneC = document.getElementById('optionTwoC').value;
    }
    if (document.getElementById('optionThreeC').checked) {
        questionOneC = document.getElementById('optionThreeC').value;
    }
    let questionTwoC = ''; // para definir el valor de la segunda pregunta
    if (document.getElementById('optionFourC').checked) {
        questionTwoC = document.getElementById('optionFourC').value;
    }
    if (document.getElementById('optionFiveC').checked) {
        questionTwoC = document.getElementById('optionFiveC').value;
    }
    if (document.getElementById('optionSixC').checked) {
        questionTwoC = document.getElementById('optionSixC').value;
    }
    let questionThreeC = ''; // para definir el valor de la tercera pregunta
    if (document.getElementById('optionSevenC').checked) {
        questionThreeC = document.getElementById('optionSevenC').value;
    }
    if (document.getElementById('optionEightC').checked) {
        questionThreeC = document.getElementById('optionEightC').value;
    }
    if (document.getElementById('optionNineC').checked) {
        questionThreeC = document.getElementById('optionNineC').value;
    }

    let questionOnePointsC = ''; // checkea respuestas correctas
    if (questionOneC === '1') {
        questionOnePointsC = 1;
    }
    else {
        questionOnePointsC = 0;
    }

  let questionTwoPointsC = '';
    if (questionTwoC === '1') {
        questionTwoPointsC = 1;
    }
    else {
        questionTwoPointsC = 0;
    }

    let questionThreePointsC = '';
    if (questionThreeC === '1') {
        questionThreePointsC = 1;
    }
    else {
        questionThreePointsC = 0;
    }
let correctAnswersC = (questionOnePointsC + questionTwoPointsC + questionThreePointsC); // suma puntos

document.getElementById('questionsA').style.display ='none';
document.getElementById('questionsB').style.display ='none';
document.getElementById('questionsC').style.display ='none';
document.getElementById('points').innerHTML = '¡Tu puntaje es de ' + correctAnswersC + '/3 punto(s)!'; // entrega el resultado
document.getElementById('ultimaPantalla').style.display = 'block';
}

  function pantalla2_2() {
    document.getElementById('ultimaPantalla').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'block';
  }
  
  function pantallaFinal() {
    document.getElementById('ultimaPantalla').style.display = 'none';
    document.getElementById('pantallaFinal').style.display = 'block';
  }
  
  function pantalla2(){
    let userName = document.getElementById('nombre').value.toUpperCase();
    document.getElementById('pantalla1').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'block';
    document.getElementById('saludo').innerHTML = 'Hola ' + userName;
  }
  
  function seccionA() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('questionsA').style.display = 'block';
  }
  
  function seccionB() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('questionsB').style.display = 'block';
  }
  
  function seccionC() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('questionsC').style.display = 'block'; 
  }

  /*function clickSendAnswersA() {
      let questionOneA = ''; //  para definir el valor de la primera pregunta
      if (document.getElementById('optionOne').checked) {
          questionOneA = document.getElementById('optionOne').value;
      }
      if (document.getElementById('optionTwo').checked) {
          questionOneA = document.getElementById('optionTwo').value;
      }
      if (document.getElementById('optionThree').checked) {
          questionOneA = document.getElementById('optionThree').value;
      }
      let questionTwoA = ''; // para definir el valor de la segunda pregunta
      if (document.getElementById('optionFour').checked) {
          questionTwoA = document.getElementById('optionFour').value;
      }
      if (document.getElementById('optionFive').checked) {
          questionTwoA = document.getElementById('optionFive').value;
      }
      if (document.getElementById('optionSix').checked) {
          questionTwoA = document.getElementById('optionSix').value;
      }
      let questionThreeA = ''; // para definir el valor de la tercera pregunta
      if (document.getElementById('optionSeven').checked) {
          questionThreeA = document.getElementById('optionSeven').value;
      }
      if (document.getElementById('optionEight').checked) {
          questionThreeA = document.getElementById('optionEight').value;
      }
      if (document.getElementById('optionNine').checked) {
          questionThreeA = document.getElementById('optionNine').value;
      }
  
      let questionOnePointsA = ''; // checkea respuestas correctas
      if (questionOneA === '1') {
          questionOnePointsA = 1;
      }
      else {
          questionOnePointsA = 0;
      }
  
      let questionTwoPointsA = '';
      if (questionTwoA === '1') {
          questionTwoPointsA = 1;
      }
      else {
          questionTwoPointsA = 0;
          console.log('hola');
      }
  
      let questionThreePointsA = '';
      if (questionThreeA === '1') {
          questionThreePointsA = 1;
      }
      else {
          questionThreePointsA = 0;
      }
      let correctAnswersA = questionOnePointsA + questionTwoPointsA + questionThreePointsA; // suma puntos
  
  document.getElementById('questionsA').style.display ='none';
  document.getElementById('questionsB').style.display ='none';
  document.getElementById('questionsC').style.display = 'none'
  document.getElementById('points').innerHTML = '¡Tu puntaje es de ' + correctAnswersA + '/3 punto(s)!'; // entrega el resultado
  document.getElementById('ultimaPantalla').style.display = 'block';
  }
  
  function clickSendAnswersB() {
      let questionOneB = ''; //  para definir el valor de la primera pregunta
      if (document.getElementById('optionOneB').checked) {
          questionOneB = document.getElementById('optionOneB').value;
      }
      if (document.getElementById('optionTwoB').checked) {
          questionOneB = document.getElementById('optionTwoB').value;
      }
      if (document.getElementById('optionThreeB').checked) {
          questionOneB = document.getElementById('optionThreeB').value;
      }
      let questionTwoB = ''; // para definir el valor de la segunda pregunta
      if (document.getElementById('optionFourB').checked) {
          questionTwoB = document.getElementById('optionFourB').value;
      }
      if (document.getElementById('optionFiveB').checked) {
          questionTwoB = document.getElementById('optionFiveB').value;
      }
      if (document.getElementById('optionSixB').checked) {
          questionTwoB = document.getElementById('optionSixB').value;
      }
      let questionThreeB = ''; // para definir el valor de la tercera pregunta
      if (document.getElementById('optionSevenB').checked) {
          questionThreeB = document.getElementById('optionSevenB').value;
      }
      if (document.getElementById('optionEightB').checked) {
          questionThreeB = document.getElementById('optionEightB').value;
      }
      if (document.getElementById('optionNineB').checked) {
          questionThreeB = document.getElementById('optionNineB').value;
      }
  
      let questionOnePointsB = ''; // checkea respuestas correctas
      if (questionOneB === '1') {
          questionOnePointsB = 1;
      }
      else {
          questionOnePointsB = 0;
      }
  
    let questionTwoPointsB = '';
      if (questionTwoB === '1') {
          questionTwoPointsB = 1;
      }
      else {
          questionTwoPointsB = 0;
      }
  
      let questionThreePointsB = '';
      if (questionThreeB === '1') {
          questionThreePointsB = 1;
      }
      else {
          questionThreePointsB = 0;
      }
  let correctAnswersB = (questionOnePointsB + questionTwoPointsB + questionThreePointsB); // suma puntos
  
  document.getElementById('questionsA').style.display ='none';
  document.getElementById('questionsB').style.display ='none';
  document.getElementById('points').innerHTML = '¡Tu puntaje es de ' + correctAnswersB + '/3 punto(s)!'; // entrega el resultado
  document.getElementById('ultimaPantalla').style.display = 'block';
  }*/
  
  function pantalla2_2() {
    document.getElementById('ultimaPantalla').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'block';
  }
  
  function pantallaFinal() {
    document.getElementById('ultimaPantalla').style.display = 'none';
    document.getElementById('pantallaFinal').style.display = 'block';
  }