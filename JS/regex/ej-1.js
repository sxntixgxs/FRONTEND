const regex = /lo/g;
const regex2 = new RegExp("lo","g")
const text = "hello world"
const matches = text.match(regex);
console.log(matches);//output["lo"]

const matches2 = text.match(regex2);
console.log(matches2)