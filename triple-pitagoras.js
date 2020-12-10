// El siguiente codigo busca el triple de pitagoras del numero que se le adjunte como argumento, si bien es un codigo que consume muchos recursos, sirve como preambulo para buscar el triplepitagoras
// deseado, posee un big o n^2 algo para nada optimo


const triplePitagoras = (number = 1000) => {            
    for(let a = 1; a < number - 1; a++){
      for(let b = a; b < number; b++){
        c = Math.sqrt(a * a + b * b);
        if(c % 1 === 0){
          console.log(a, b, c);
        }
      }
    }
  }
  
triplePitagoras(1000)


// La pregunta aclara, cual es el rango mas pequeño para buscar el numero 1000 ...

// El rango mas pequeño seria entre 100 - 200, ambos al cuadrado son incluso mayores a 1000 pero utilizando refactorizacion y multiplicacion podemos llegar al calculo

// Aclaro la funcion de arriba no calcula entre los rangos que indique, calcula desde el 1 ... n , por eso no es nada optimo dicha funcion, solo para
// aprendizaje y aclarar el problema de la triple pitagora