const persona = {
    nombre: 'Dani',
    edad: 30,
    esTrabajador : true,
    familia : ["Miguel","Maria"],
    direccion : {
        calle : "Calle de la piruleta",
        numero : 13,
        ciudad : "Barcelona"
    },
    caminar : function(){console.log(this.nombre+'Estoy caminando')
    }
};
console.log(persona)//accedo al objeto
console.log(persona.nombre)//accedo a una propiedad
persona.caminar();//accedo a una accion
persona.nombre="Daniela";
console.log(persona.nombre)

const cadPersona = JSON.stringify(persona);
console.log(cadPersona)

const objPer = JSON.parse(cadPersona);
console.log(objPer);