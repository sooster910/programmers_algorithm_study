//title : 올바른 괄호

//solution1 :
function solution1(s){
    if(s.indexOf("(") > s.indexOf(")"))
        return false;

    if(str.match(/[(]/g).length != str.match(/[)]/g).length)
        return false;
    return true;
}
/*=================================================================*/

function solution2(s){
        let stack=[];
        for( let char of s){
            if(char === "("){
                stack.push(char);
            }else{
                if(stack.length){
                    stack.pop()
                }else{
                    return false;
                }
            }
        }

        if(stack.length) return false

        return answer;

}


