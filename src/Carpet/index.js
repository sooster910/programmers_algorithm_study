//title: 카펫

function solution(brown, yellow){
    //경우의 수를 구한다.
    //나누어 떨어지는 수 구하기 : 몫과 나머지
    //세로는 3부터 가능 minimum =3 //노란색부분을 감싸야 하므로 적어도 위로+1, 아래로+1 필요.
    let comb = [];
    let totalDimension = brown+yellow;
    for (let i =3; i<= Math.sqrt(totalDimension);i++){
        let width= Math.floor(totalDimension/i);
        let height = i;
        comb.push([width,height]);
    }

    //경우의 수를  iterate하면서,
    for(let combItem of comb){
        //만약 가로 -2 *세로 -2 === yellow와 같다면 리턴
        if(yellow=== ((combItem[0]-2) * (combItem[1]-2))) return combItem;
    }
}

module.exports={solution};