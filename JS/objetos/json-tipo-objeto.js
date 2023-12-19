const obj = {
    "empleados" : [
        {//se pone todo entre comillas pq es JSON
            "nombre":"Juan Perez",
            "apellido":"Lopez",
            // "nombreCompleto":function(){
            //     return this.nombre + " " + this.apellido
            // }
        },
        {
            "nombre":"Ana",
            "apellido":"Gonzalez",
        //     "nombreCompleto":function(){
        //         return this.nombre + " " + this.apellido
            
        // }
        },
        {
            "nombre":"Pedro",
            "apellido":"Sanchez",
        //     "nombreCompleto":function(){
        //         return this.nombre+" " + this.apellido
        // }
    }
    ],
    "nombreCompleto":function(pos){
        return this.empleados[pos].nombre + " " + this.empleados[pos].apellido
    }
}

console.log(obj.empleados[2].apellido)
console.log(obj.nombreCompleto())
console.log(obj.empleados.length)