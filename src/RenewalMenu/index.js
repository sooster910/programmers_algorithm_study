//title:메뉴 리뉴얼
function getKeyByValue( map, i, maxArray){
    let answer = [];

    for(let [key,value] of map.entries()){
        if( value >1 && value === maxArray[i] ) answer.push(key); //중복된 오더는 최소 2개이상
    }
    return answer;
}

function getCombination(order,num){
    //order 의 조합을 구한다
    let isUsed = Array.from({length:order.length},()=>false);
    let temp = Array.from({length:num},()=>null);
    let combArray =[];
    DFS(0,0);

    function DFS(index,start){
        if(index === num){
            combArray.push(temp.join(""));
            return
        }
        for(let i =start; i<order.length; i++){
            if(isUsed[i]) continue;
            isUsed[i]= true;
            temp[index] = order[i];
            DFS(index+1,i+1);
            isUsed[i]=false;
        }
    }
    return combArray;
}

function solution(orders, course) {
    let answer = [];
    let mapArr = [];
    let map;
    //TODO: 전체 order를 순회하면서,
    for(let i = 0; i<orders.length; i++){
        //TODO: 각 오더마다 course개수 만큼 주문받은 조합을 구한다.
        for(let j =0; j<course.length; j++){

            let sortedOrder = orders[i].split('').sort();
            let combArr = getCombination(sortedOrder, course[j]);

            // TODO:각 코스메뉴마다 각각의 조합을 count 하기 위해 map[코스메뉴 index]에 할당한다.
            if(!mapArr.length || mapArr[j] === undefined){ //mapArray에 코스메뉴 map이 없다
                mapArr[j] = new Map();
            }

            map = mapArr[j];

            for (let comb of combArr){
                if(!map.has(comb)){  // 메뉴의 조합이 map에 없다면 새로 할당
                    map.set(comb,1)
                }else{
                    //있다면, 현재 있는 값에 +1
                    map.set(comb, map.get(comb)+1);
                }
            }
        }
    }

    //순회가 끝났다면 모든 코스메뉴 맵에서 최대 오더 개수만 걸러낸다.
    const maxArray = mapArr.map((map)=>{
        return Math.max(...map.values());
    });

    // 최대 오더개수를 가진 모든 오더 품목을 찾는다.
    for(let i in mapArr){
        let maxOrder=getKeyByValue(mapArr[i],i,maxArray);
        answer.push(...maxOrder);
    }

    return answer.sort();
}
