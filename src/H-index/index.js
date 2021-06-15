//title: H-Index
function solution(citations) {

    let sortedCitations = citations.sort((a,b)=>a-b);
    let h_index =1;
    let max_h_index = 0;

    while(h_index<=sortedCitations.length){
        let count = 0;

        for(let citation of sortedCitations){
            //만약 citation이 h_index 이상 인용되었으면 count
            if(citation >=h_index) count++;
            if(count >=h_index){ //인용된 횟수(h_index)를 만족하는 인용된 논문의 개수가 h_index를 만족한다면
                max_h_index = count>max_h_index?count:max_h_index;
                break
            }
        }
        h_index++;
    }
    return max_h_index;
}

module.exports={solution};