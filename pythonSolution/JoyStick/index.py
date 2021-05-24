#title: 조이스틱
def solution(name):
    change = [min(ord(i)- ord('A'),ord('Z')-ord(i)+1) for i in name]
    
    idx = 0
    
    answer = 0
    
    while True:
        answer= answer+change[idx]
        change[idx] = 0
        if sum(change) == 0:
            print(answer)
            return answer
        #좌우 이동방향을 정하기 
        
        left, right = 1,1
        
        while change[idx-left]==0:
            left+=1
        while change[idx+right] == 0:
            right+=1
            
        #위치 인덱스 조정
        
        answer += left if left<right else right
        idx += -left if left<right else right 
    
    print(answer)
        
solution('ZZZ')