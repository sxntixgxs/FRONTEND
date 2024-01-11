// import {suma, PI} from "./ejemplo-2.js"
import * as mod1 from "./ejemplo-1.js"
import {PI as PII} from "./ejemplo-3.js"
import msj from "./mensaje.js";//se le puede cambiar el nombre desde el import sin usar un alias pq es la funcion por default de todo ese programa; solo puede traerse un default en todo el programa
//Imprimira 5
console.log(mod1.suma(3,2));
console.log("PI"+mod1.PI)
console.log("Raiz de 2"+mod1.r2)
console.log("PI con mas digitos: "+PII)
console.log(msj());