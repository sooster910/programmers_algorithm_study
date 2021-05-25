//title:다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    let sec = 0
    let bridge = Array.from({ length: bridge_length }, () => 0);
    let copyTrucks = truck_weights.slice().reverse();
    let afterBridge = [];
    let sumOfWeights = 0;

    while (true) {
        //기저조건: copyTruck.length ===0 이고  afterBridge.length === truck_weights.length===0//break 
        if (copyTrucks.length === 0) {
            if (afterBridge.length === truck_weights.length) {
                break;
            }
        }

        if (sec !== 0) {
            //bridge에 있는 원소를 한칸씩 움직인다.
            moveForward(bridge)
        }
        //첫번째 트럭과 현재 브릿지에 존재하는 트럭의 합이 주어진 weight보다 작은가
        sumOfWeights = currentBridgeTruckWeight(bridge);
        //만약 작거나 같다면,  
        if (copyTrucks[copyTrucks.length - 1] + sumOfWeights <= weight) {
            //첫번째트럭을 bridge에 push 한다.
            bridge[bridge.length - 1] = copyTrucks.pop();

        }
        sec++;
    }

    function currentBridgeTruckWeight(bridge) {
        let sum = 0;
        let left = 0;
        let right = bridge.length - 1;
        while (true) {
            if (left === right) {
                sum += bridge[right];
                break
            } else if (left > right) {
                break
            }
            sum += (bridge[left] + bridge[right])
            left++;
            right--;
        }

        return sum;
    }
    function moveForward() {
        for (let i = 0; i < bridge.length; i++) {
            //한칸씩 움직일 때 만약 bridge[0] 원소가 0이 아니라면 ,
            if (i === 0) {
                if (bridge[0] !== 0) {
                    //afterBridge에 push한다.
                    afterBridge.push(bridge[0]);
                    bridge[0] = 0;
                }
            } else if (i > 0) {
                bridge[i - 1] = bridge[i];
                bridge[i] = 0;
            } else if (bridge[i] === 0) {
                break
            }

        }
    }

    return sec;
}


solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1])


//나의 첫 로직
// function solution(bridge_length, weight, truck_weights) {
//     var answer = 0;
//     let sec=0
//     let bridge= Array.from({length:bridge_length},()=>0);
//     let copyTrucks = truck_weights.slice().reverse();
//     let afterBridge=[];
//     let sumOfWeights=0;


//     while(true){

//         //기저조건: copyTruck.length ===0 이고  afterBridge.length === truck_weights.length===0//break 
//         if(copyTrucks.length===0){
//             if(afterBridge.length === truck_weights.length){
//                 break;
//             }
//         }

//         if(sec !==0){
//                 //bridge에 있는 원소를 한칸씩 움직인다.
//                 moveForward(bridge)
//               }
//          //첫번째 트럭과 현재 브릿지에 존재하는 트럭의 합이 주어진 weight보다 작은가
//         sumOfWeights=currentBridgeTruckWeight(bridge);
//         if(copyTrucks[copyTrucks.length-1] + sumOfWeights <=weight){
//              //만약 작거나 같다면,  

//              //첫번째트럭을 bridge에 push 한다.
//             bridge[bridge.length-1]=copyTrucks.pop();

//         }
//         else{  //만약 크다면,
//                 //한칸씩 움직인 후, 
//                 if(copyTrucks[copyTrucks.length-1] + sumOfWeights <=weight && bridge[bridge.length-1]===0){
//                     //첫번째트럭을 bridge에 push 한다.
//                     bridge[bridge.length-1]=copyTrucks.pop();
//                 }
//         }
//         sec++;
//     }

//     function currentBridgeTruckWeight(bridge){
//         let sum = 0;
//         let left = 0; 
//         let right = bridge.length -1; 
//         while (true) { 
//             if(left === right){
//                 sum+=bridge[right];
//                 break
//             }else if(left>right){
//                 break
//             }
//             sum+=(bridge[left] + bridge[right])  
//                 left++; 
//                 right--; 
//         } 

//         return sum;
//     }
//     function moveForward(){
//         for(let i =0; i<bridge.length;i++){
//           //한칸씩 움직일 때 만약 bridge[0] 원소가 0이 아니라면 ,
//           if(i === 0 ){
//             if(bridge[0] !== 0){
//                  //afterBridge에 push한다.
//                 afterBridge.push(bridge[0]);
//                 bridge[0]=0;
//                 }
//             }else if(i > 0 ){
//                 bridge[i-1] = bridge[i];
//                 bridge[i]=0;
//             }else if(bridge[i]===0){
//                 break
//             }

//         }
//     }

//     return sec;
// }
