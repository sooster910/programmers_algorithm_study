

// function solution(array, commands) {
//     var answer = [];
//     let command=[];
//     let start=0;
//     let end=0;
//     let nthNumber=0;
//     let number=0;
//
//     for (let i= 0; i <commands.length;i++){
//
//         command = commands[i]
//         console.log(command)
//         start = command[0]-1
//         end = command[1]-1
//         nthNumber = command[2]
//
//         number=getNthNumber(array,start,end,nthNumber)
//         answer.push(number)
//     }
//     return answer;
// }
//
//
// function getNthNumber(array,start, end, nthNumber ){
//      const result = []
//      for (let i = start; i <=end;i++){
//          result.push(array[i])
//      }
//      result.sort()
//      return result[nthNumber-1]
//
// }
//
// solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])

function solution(n) {
    var answer = 0;
    let number = n;
    //이진수 변환
    let binary='';
    if(number !==1) {
        while (number>=1){
            let nextN = Math.floor(number/2);

            let remainder = (number%2).toString();

            binary = `${remainder}${binary}`
            number = nextN
        }
    }

    let binaryArr = binary.split('');
    let OriginBinaryCount = (binary.match(/1/g)).length;
    let newBinaryCount;
    let loopCount=0;
    let stack=[]
    console.log(OriginBinaryCount)
    while(true){

        stack=[];
        // 다음 수 로 변환하기
        while(true){
            let firstNum=Number(binaryArr.pop());

            if(!firstNum){
                firstNum = 1;
                binaryArr.push(firstNum);
                binaryArr.push(...stack);
                break
            }
            if(firstNum === 0 ){
                firstNum = 1;
                stack.push(firstNum)
                binaryArr.push(...stack);
                break

            }else{

                firstNum = 0 ;
                stack.push(firstNum)
            }
        }

        loopCount++;
        //1의 개수 찾기
        newBinaryCount = (binaryArr.join().match(/1/g)).length;
        if(OriginBinaryCount === newBinaryCount) break

    }

    return n+loopCount;
}

solution(15)