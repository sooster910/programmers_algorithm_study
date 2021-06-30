// function solution(number, k) {
//     let maxNum = 0;
//     const selectedNum = number.length - k;
//     let temp = Array.from({length:selectedNum},()=>0);
//     DFS(0,0);
//     // 조합을 구한다.
//     function DFS(index, start){
//
//         if(index === selectedNum ){
//             //max비교
//
//             maxNum = Number(temp.join('')) > maxNum? Number(temp.join('')) :maxNum;
//             return
//         }else{
//             for(let i=start; i<number.length;i++){
//                 temp[index] = number[i];
//                 DFS(index+1,i+1);
//
//             }
//         }
//     }
//
//     //조합을 구하면서 max도 같이 구한다,
//
//
//     return maxNum;
// }
//
// solution("1924",2)

function solution(number, k ){
    const stack=[];
    let answer = '';

    for(let i =0;i<number.length;i++){
        const el = number[i];

        while(k>0&& stack[stack.length-1]<el){
            stack.pop();
            k--;

        }
        stack.push(el);

    }

    stack.splice(stack.length-k,k)//왜필요한지 모르겠음
    answer = stack.join('');
    return answer;
}
solution("1231234",3)


