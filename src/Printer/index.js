//title:프린터
function solution(priorities, location) {
    let newArr = priorities.map((priority,i)=> [priority,i])
    let count = 0;
    while(true){
        let firstEle = newArr.shift();
        //let max = getMax(newArr,0); //시간초과
        if(newArr.filter((priority) => priority[0] > firstEle[0]).length > 0 ) {   
            newArr.push(firstEle)
        }else{
            // 맨앞의 문서의 우선순위보다 높은 문서가 없다면
            count++;
            if(firstEle[1] === location){
                break
            }
        }       
    }    
    return count;
}

//시간초과 getMax
function getMax(arr,idx){
    return Math.max.apply(null, arr.map(item=> item[idx]))
}

module.exports={solution};