function solution(n) {
    let answer = '';
    
    let restNum = 0;

    while (n > 0) {
        restNum = n % 3;
        n = Math.floor(n / 3);
        if (restNum == 0) {
        n -= 1;
        restNum = 4;
        }
        answer = restNum + answer;//restNum이 먼저 왜냐면 더 큰 단위의 수 이므로 
    }
    console.log(answer)
    return answer;

}

solution(11)