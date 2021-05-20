function solution(s) {
    var answer = 0;
    let minLength = Number.MAX_SAFE_INTEGER; 
    let current="",sGroup="",fGroup="";
    let count=1; 
    let chars=""; //2ab 처럼 바꿀 chars
    let prev="";
    
    if(s.length < 2) return 1;
    // 그룹화를 위해 한 그룹안에 들어갈 개수를 정하는 loop 1그룹당 들어갈 개수는 1부터
    for(let i =1;i<= Math.floor(s.length/2);i++){
        //첫그룹을 초기화한다 나중에 두번째그룹과 비교하기 위해
        prev = s.substring(0, i);
        count = 1 
        
        if(i===8){
            let a  = 8
        }
        //그룹 내의 문자열 접근, 두번째 그룹부터 시작(첫번째 그룹과 비교위해) 

        for(let j=i; j<s.length; j=j+i){
            //j는 매 새로운 그룹의 첫번째 인덱스를 가리킨다
            
            current = s.substring(j,j+i);
            let isCorresponded =  prev.localeCompare(current);
            
            
            if(isCorresponded===0){
                count++;
            }else{
            
                //다르다면 현재 count를 char맨앞에 숫자를 count를 쓴다. 
                chars = count>1? chars+count.toString()+prev: chars+prev;
                count = 1; 
               
            }
            prev = current;
        }
       
            chars = count>1? chars+count.toString()+prev: chars+prev
        

        minLength = Math.min(minLength, chars.length);
        chars ="";//reset chars
    
        // console.log(minLength)
   
    }
    
  
    return minLength;
}

module.exports={solution}