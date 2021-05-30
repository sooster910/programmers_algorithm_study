//title:크레인 인형뽑기 게임

function solution(board, moves) {
   
    const newBoard = Array.from({ length: board.length }, () => []);
    let stack = [];
    let count = 0;
    //preprocessing 
    for (let i = 0; i < board.length; i++) {
        for (let j = 1; j <= board.length; j++) {
            newBoard[i].push(board[board.length - j][i])
        }
    }

    let selectedToy;
    //순회한다 moves 
    for (let move of moves) {
        //move 행에서 pop 을 한다. 만약 0 이면, 0 이 아닐 때까지 pop을 한다.
        while (true) {
            selectedToy = newBoard[move - 1].pop();
            if (selectedToy !== 0) {
                break;
            }
        }

        //pop한 값과 현재 스택에 있는 peek과 비교한다.
        let stackPeek = stack.length !== 0 ? stack[stack.length - 1] : null;

        if (selectedToy === stackPeek) {
            //만약 둘의 값이 같다면 peek은 pop된다. 그리고 count+=2 를 한다.
            stack.pop();
            count += 2;
        } else {
            //!중요 selectedToy가 undefined 가 아닐 경우에만 stack에 넣는다
            if (selectedToy !== undefined) {
                stack.push(selectedToy)
            }
        }
    }
    //moves 순회가 끝날 때까지 같은 작업을 반복한다.
    //moves 순회가 끝나면 count를 return 한다.
    return count

}

module.exports={solution}