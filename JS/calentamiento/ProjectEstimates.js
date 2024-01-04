function projectEstimates(size,projectCosts,target){
    let parejasCreadas=[]
    let output=0
    for(i=0;i<size;i++){
        pareja=[projectCosts[i],projectCosts[i+1]]
        parejasCreadas.push(pareja)
        if(target===Math.abs(pareja[0]-pareja[1])){
            output+=1
        }
    }
    console.log("output: ",output)
    console.log(parejasCreadas)
}
let size=5;
let projectCosts=[1,5,3,4,2]
let target=2;
projectEstimates(size,projectCosts,target)
//revisar y hacer con forEach para que recorra todos los elementos hagan un recorrido
// ----

function costProjects(arr,tar,len){
    let n_target = 0;
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            let dif = Math.abs(arr[i]-arr[j])
            if(dif==tar){
                n_target++;
            }
        }   
    }
}
//esta es la solucionb analizarla!