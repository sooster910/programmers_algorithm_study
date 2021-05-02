

function solution(array, commands) {
    var answer = [];
    let command=[];
    let start=0;
    let end=0;
    let nthNumber=0;
    let number=0;
   
    for (let i= 0; i <commands.length;i++){
        
        command = commands[i]
        console.log(command)
        start = command[0]-1
        end = command[1]-1
        nthNumber = command[2]
        
        number=getNthNumber(array,start,end,nthNumber)
        answer.push(number)
    }
    return answer;
}

    
function getNthNumber(array,start, end, nthNumber ){
     const result = []
     for (let i = start; i <=end;i++){
         result.push(array[i])
     }
     result.sort()
     return result[nthNumber-1]    

}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])