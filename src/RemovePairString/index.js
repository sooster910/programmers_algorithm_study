//title:짝지어 제거하기

function solution(s) {

    let stack = [];
    let pointer = 0;
    let peek;
    // if(s.length % 2 != 0){
    //     return answer;
    // } 
     //iterate s문자 길이 만큼.
    while (pointer < s.length) {

        let poppedChar = s[pointer];
        // let poppedChar=reversedStr.pop();
        peek = stack.length !== 0 ? stack[stack.length - 1] : null
           //만약 s의 pointer위치의 값이 stack의 peek과 같다면 stack을 pop한다.  
        if (poppedChar === peek) {
            stack.pop();
        } else { //만약 pop한 값이 스택의 peek과 같지 않으면 
            stack.push(poppedChar); //pop한 값을 문자열에 push 한다. 
        }
        pointer++;
    }
    if (stack.length === 0) {
        answer = 1
    }
    

  

   

 
    return answer;

}

module.exports = {solution}