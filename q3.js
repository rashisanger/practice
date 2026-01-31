function modify(arr){
    return arr.map(num=>{
        if(num%2==0){
            return num*num;
        }else{
            return num;
        }
    });
}
const arr=[2,3,4,5,6];
const ans=modify(arr);
console.log("Original array:",arr);
console.log("Modified array:",ans);