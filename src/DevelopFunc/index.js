//title:기능개발
function solution(progresses, speeds) {
    var answer = [];
    let diff=[];
    let days=0
    let count =0;
    for(let i =progresses.length-1;i>=0; i--){
        days=Math.ceil((100-progresses[i])/speeds[i]);
        diff.push(days);
    }
    
    let lastDeploy=diff[diff.length-1] ;
    while(true){
        if(diff.length===0 && count>0) {
            answer.push(count);
            break
        } 
        if(diff[diff.length-1]<=lastDeploy){
            diff.pop();
            count++;
        }else{
            answer.push(count);
            count = 0;
            lastDeploy= diff.pop();
            count++;
        }
    }
    return answer;
}

module.export={solution}