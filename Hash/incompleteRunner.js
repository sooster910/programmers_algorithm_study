// //정확성 10%
// function solution(participant, completion) {
 
//     const mapTable = new Map();

//     for (let i= 0; i < participant.length;i++){
//         if (!mapTable.get(participant[i])){
//             mapTable.set(participant[i],1)                 
//         }else{
            
//             mapTable.set(completion[i], mapTable.get(completion[i])+1)
//         }
        
//     }
//     for (let i =0; i<completion.length;i++){
//         if (mapTable.get(completion[i])!=0){
//             num = mapTable.get(completion[i])
//             mapTable.set(completion[i], num-1)
//         }
       
//     }
    
//     for (let [key, value] of mapTable) {
//         if (value != 0){
//             return key
//         }
//     }
// }

//solved ps 100%

function solution(participant, completion) {
 
    const sortedParticipant = participant.sort();
    const sortedCompletion = completion.sort();

    for(let i = 0; i <sortedParticipant.length;i++){
        if (sortedParticipant[i]!==sortedCompletion[i]){
            return sortedParticipant[i]
        }
    }

 
}
solution(["mislav", "stanko", "mislav", "ana"],["stanko", "mislav", "mislav"])