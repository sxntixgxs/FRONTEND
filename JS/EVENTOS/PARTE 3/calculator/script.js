      //memoria ?
      let operationValue = ''
      let currentValue = "";

      //mostrar cada boton
      let resultado = document.getElementById("resultado");
      let suma = document.getElementById("sumar");
      let restar = document.getElementById("restar");
      let multiplicar = document.getElementById("multiplicar");
      let dividir = document.getElementById("dividir");
      let decimal = document.getElementById("decimal");
      let igual = document.getElementById("igual");
      let clear = document.getElementById("clear");
      let cero = document.getElementById("0");
      let uno = document.getElementById("1");
      let dos = document.getElementById("2");
      let tres = document.getElementById("3");
      let cuatro = document.getElementById("4");
      let cinco = document.getElementById("5");
      let seis = document.getElementById("6");
      let siete = document.getElementById("7");
      let ocho = document.getElementById("8");
      let nueve = document.getElementById("9");
      function mostrar(num) {
        if (num !== ".") {
          currentValue += num;
        } else {
          currentValue.includes(num) === false
            ? (currentValue += num)
            : currentValue;
        }
        resultado.value = currentValue;
      }
      function clearf(){
        currentValue = ''
        resultado.value=''
      }
      function almacenarMemoria(coso){
        operationValue = currentValue + coso
        clearf()
      }
      function calcular(){
        if(operationValue!==''&&currentValue!==''){
          let pr=eval(operationValue+currentValue)
          console.log("valor pr"+pr)
          console.log("pr type"+typeof pr)
          pr=String(pr)
          console.log("pr type"+typeof pr)
          clearf()
          currentValue=pr
          resultado.value=currentValue

        }
      }
      function inp(){
        evaresultado.value
      }
      decimal.setAttribute("onclick", "mostrar('.')");
      uno.setAttribute("onclick", "mostrar('1')");
      dos.setAttribute("onclick", "mostrar('2')");
      tres.setAttribute("onclick", "mostrar('3')");
      cuatro.setAttribute("onclick", "mostrar('4')");
      cinco.setAttribute("onclick", "mostrar('5')");
      seis.setAttribute("onclick", "mostrar('6')");
      siete.setAttribute("onclick", "mostrar('7')");
      ocho.setAttribute("onclick", "mostrar('8')");
      nueve.setAttribute("onclick", "mostrar('9')");
      cero.setAttribute("onclick", "mostrar('0')");
      clear.setAttribute("onclick", "clearf()");
      //operaciones
      suma.setAttribute("onclick","almacenarMemoria('+')")
      multiplicar.setAttribute("onclick","almacenarMemoria('*')")
      dividir.setAttribute("onclick","almacenarMemoria('/')")
      restar.setAttribute("onclick","almacenarMemoria('-')")
      igual.setAttribute("onclick","calcular()")