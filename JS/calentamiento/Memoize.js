//inputs fname actions values
//sobre eso trabajar depende a la funcion
function sum(actions,values){
    //verificar que posiciones de valuyes estan vacias para saber que esas posiciones son getCallCount y no call
    let output = []
    let count=0
    let pairs=[]
    let countCall=0
    values.forEach(element => {
        count+=1
        if(element.length!==0){
            suma=element[0]+element[1]
            pareja=[element[0],element[1]]
            pairs.push(pareja)
            output.push(suma)
            //para hacer el countCall debo verificar que no haya ocurrido antes;
            pairs.forEach(element => {
                let uniquePairs = new Set(pairs.map(pair => pair.join(',')));
                countCall = uniquePairs.size;
                output.push(countCall);
            });
        }else{
            output.push(countCall)
        }
    });
    console.log(output)
}
let actions = ["call","call","call","getCallCount","call","getCallCount"]
let values = [[2],[3],[2],[],[3],[]]
sum(actions,values)