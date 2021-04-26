# from itertools import combinations

# def solution(number, k):
    

#     #combinations
#     combs = list(combinations((number), len(number)-k))
    
#     answer = 0 #initialize max val
    
#     for comb in combs:
#          str_comb=''.join(map(str,comb))
#          int_comb =int(str_comb)
#          answer =  max(answer, int_comb)

#     return str(answer
# def solution(number, k):
#     length = len(number) - k
#     answer = []
#     end = len(number) - (length-1)
#     while len(answer) != length:
#         temp = "0"
#         for i in range(len(number[0:end])):
#             if number[i] > temp:
#                 temp = number[i]
#                 p = i
#                 if number[i] == "9":
#                     break
#         if temp == "0":
#             p = 0
#         answer.append(temp)
#         number = number[p+1:]
#         end = len(number) - (length - 1 -len(answer))

#     answer = ''.join(answer)
#     return answer

#==========================================================


# def solution(number, k):
    
#     answer_len = len(number)-k
#     min_boundary_idx = 0
#     max_boundary_idx = 0
#     answer= []
#     number=[int(i) for i in number]
    
#     # 자릿수 만큼 iterate - 쉽게 1부터 시작 
#     for nth in range(1, answer_len+1):
#         max_boundary_idx = (len(number)-1) - (answer_len - nth)
#         max_num = [0,0]  #새로운 자릿수마다 max_num 초기화{index:value}
        
#         #최대값구하기 
#         for i in range(min_boundary_idx, max_boundary_idx+1):
#                 if number[i] > max_num[1]:
#                    max_num[0] = i
#                    max_num[1] = number[i]
                  
#         answer.append(max_num[1]) 
#         min_boundary_idx = max_num[0]+1
        
#     for num in answer:
#         print(num, end="")
    
#     return answer


#=========================================================
def solution(number, k):
    answer=""
    start= 0
    maxidx = 0
    maxNum = None
    # arr=[int(i) for i in number]
    
    for i in range(0, len(number)-k):
       
        maxNum = number[start] #새로 시작하는 첫 index 의 값 
        maxidx = start
        
        for j in range(start, (i+k)+1):
            if number[j] == "9":
                maxNum = number[j]
                maxidx = j
                continue    
            if maxNum <number[j]:
                maxNum = number[j]
                maxidx = j
            
            
                
        start = maxidx+1
        answer+=str(maxNum)  
        
    # for (int i = 0; i<temp.size(); i++)
    # 	answer += temp[i];

    return answer


# solution("1024",1)
# solution("1231234",3)
# solution("70532", 2)
solution("1924",2)