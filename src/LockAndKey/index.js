//title: 자물쇠와 열쇠
function solution(key,lock){
    let twistDirection=[0,1,2,3];
    let index = 0;
    let isOpened=false;
    let twistedKey;
    let lockLength = lock.length;
    let keyLength = key.length;
    //확장할 row, column 
    let extendedRow = lockLength + 2*(key.length-1);
    
    let extendedArr = Array.from(Array(extendedRow), () => Array(extendedRow).fill(0));
    // 확장한 이차원 배열에 lock 배열 가운데 넣기 
    for(let i =0; i<lock.length;i++){
        for(let j =0;j<lock.length;j++){
            extendedArr[key.length-1+i][key.length-1+j]=lock[i][j];
        }
    }
    console.log(extendedArr)


    while(twistDirection[index]<twistDirection.length){
        //회전 
        
        twistedKey=index===0? rotateDegree(key) :rotateDegree(twistedKey);
      

        //하나씩 대입해보기 
        for(let i =0; i<extendedArr.length; i++){
            for(let j=0;j<extendedArr.length;j++){
                //key와 lock맞는지 확인 
                if(i===2 && j===0){
                    let a = "hihi"
                  
                }
                let sumOfkeyAndLock=checkMatch(i,j,twistedKey,extendedArr)
               
              
                isOpened=checkAllOne(sumOfkeyAndLock,lockLength,keyLength)
                if(isOpened){
                    console.log(isOpened)
                    return isOpened;
                }
            }
        }
        
      
       
       
        // for (let i=0; i<lock.length;i++){
        //     for (let j=0;j<lock.length;j++){
        //         let isOpened=moveBy(i,j,numOfLock,lock,twistedKey);
        //         if(isOpened){
        //             console.log(isOpened)
        //             return isOpened
        //         }
        //     }
        // }

        index++;
        
    }
    console.log(isOpened)
    return isOpened;

}

function checkAllOne(extendedArr,lockLength,keyLength){
    
    for(let i =0; i<lockLength;i++){
        for(let j =0;j<lockLength;j++){
            if (extendedArr[keyLength-1+i][keyLength-1+j]!==1){
                return false;
            }
        }
    }
    return true;
}

function checkMatch(startX,startY,twistedKey,extendedArr){
    let deepCopyExtendedArr = JSON.parse(JSON.stringify(extendedArr))
    // let newArr = Array.from(Array(twistedKey.length), () => Array(twistedKey.length).fill(0));
    let nx,ny=0
    for(let i =0; i<twistedKey.length; i++){
        for(let j=0;j<twistedKey.length;j++){
            nx = startX +i;
            ny = startY + j;
            if(nx <extendedArr.length && ny <extendedArr.length){
                deepCopyExtendedArr[nx][ny]=extendedArr[nx][ny] + twistedKey[i][j]; 
                // 실수가 많다. nx와 ny자리를 바꿔줘야 한다. 
            }
        }
    }
    return deepCopyExtendedArr;
}

function rotateDegree(key){
    let dp= Array.from(Array(key.length), () => Array(key.length).fill(false));
    for(let i =0; i< key.length;i++){
        for (let j=key.length-1;j >=0; j--){
           dp[i][(key.length-1)-j] =key[j][i]
        }
    }
    return dp;
}

// solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],
//     [[1, 1, 1], [1, 1, 0], [1, 0, 1]])

solution([[1, 0], [0, 0]],[[1, 1, 1], [0, 1, 1], [1, 1, 1]])
