//title:키패드
function solution(numbers, hand) {
    var answer = '';
    //행렬 어떻게 표시하는지.. 인접행렬? 
   const phone= [
               [1,2,3],
               [4,5,6],
               [7,8,9],
               ["*",0,"#"]
               ]
    const dp = { 1:[0,0],2:[0,1],3:[0,2],
               4:[1,0],5:[1,1],6:[1,2],
               7:[2,0],8:[2,1],9:[2,2],
               "*":[3,0],0:[3,1],"#":[3,2]
               }
    
    let left = [1,4,7]
    let right = [3,6,9]
   

    let currentLeft= "*"
    let currentRight="#";
    hand = hand==="left"?"L":"R"
    //좌표만으로 왼쪽인지 오른쪽인지구별하게 하는 방법 ,,,알아보기 
    //예를 들어 phone[]<--첫번째부분에 와야 할 range 설정하는 방법 
    for (let i =0; i<numbers.length; i++){
        
        let position = dp[numbers[i]]
        
        if (left.includes(numbers[i])){
            answer+="L";
            //주의하자 이차배열 access phone[][]
            currentLeft=phone[position[0]][position[1]]
        } else if (right.includes(numbers[i])){
            answer+="R";
            currentRight=phone[position[0]][position[1]]
        }else{
            
            //처음부터 가운데 번호인경우
            if(i ==0){
                //오른손인지 왼손인지 구분해서 
                if(hand==="R"){
                    currentRight=phone[position[0]][position[1]]
                }else{
                    currentLeft=phone[position[0]][position[1]]
                }
                 answer+=hand;
            }else{
            

                const[leftX,leftY] =dp[currentLeft]
                const[rightX,rightY] = dp[currentRight]
                const [x, y] = position

                let diffFromLeft = Math.abs(x-leftX) + Math.abs(y-leftY)
                let diffFromRight = Math.abs(x-rightX) + Math.abs(y-rightY)
                if (diffFromLeft == diffFromRight){
                    answer+=hand

                }else if(diffFromLeft<diffFromRight){
                    answer+="L"
                }else{
                    answer+="R"
                }

            }
           
            
            
        }
        
        
    }
    console.log(answer)
    return answer;
}

// solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left")