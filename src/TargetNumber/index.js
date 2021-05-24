//title:타겟넘버

function solution(numbers, target) {
    
    let sum=0, index=0
    dfs(numbers,target,sum,index)
    console.log(answer)
    return answer;

}
function dfs(numbers, target, sum, index){
    //기저조건 1. index 가 number보다 크거나 같으면 2. target이 sum과같으면
    if(index>= numbers.length){
        if(target === sum) answer++;            
        return
    }
       //+ dfs
       dfs(numbers, target, sum+numbers[index], index+1);
       //-연산 dfs
       dfs(numbers,target,sum-numbers[index],index+1);
    
    
}
var answer = 0;
solution([1, 1, 1, 1], 2)