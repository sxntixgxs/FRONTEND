const doTask = (iterations) => {
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
    return {
    error: true,
    iter: i+1,
    message: "Se ha sacado un 6"
    
    };
    }
    }
    return {
    error: false,
    value: numbers
    };
    }
    console.log( doTask(10) );

    // ==============
const doTaskCopy = (iterations) =>{
    const numbers = [];
    for (let i = 0; i < iterations; i++){
        const number = 1 + Math.floor(Math.random()*6);
        numbers.push(number);
        if(number===6){
            timeout = setTimeout(() => {
                return {
                    error:true,
                    iter:i+1,
                    message:"Se ha sacado un 6"
                }
            }, 1500);
        }
    }if(!timeout){
        return {
            error:false,
            value:numbers
        }
    }

}
