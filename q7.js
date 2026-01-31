function counter(){
    let count=0;
    return {
        increment:function(){
            count++;
            return count;
        }
    };
}
const c=counter();
console.loge(counter.increment());
console.loge(counter.increment());
console.loge(counter.increment());