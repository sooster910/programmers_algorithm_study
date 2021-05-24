#title:체육복

def solution(n, lost, reserve):
    answer = 0
    # studentNum = [1] * (n + 1)
    studentNum = [1] * (30)
    current_training_student = n - len(lost)
    # 도둑맞은걸 어떻게.. 표현하나..
    for i in lost:
        studentNum[i] -= 1
    for i in reserve:
        studentNum[i] += 1



    # check if reverse index is range of lost of +-1
    for i in range(1, n + 1):

        if i-1 > 0 and i+1 <= n and studentNum[i] == 0:
            if studentNum[i - 1] >= 2:
                studentNum[i] += 1
                studentNum[i - 1] -= 1
                continue
            elif studentNum[i + 1] >= 2:
                studentNum[i] += 1
                studentNum[i + 1] -= 1

    for i in range(1, n + 1):
        if studentNum[i] >= 1:
            answer += 1
    print(answer)
    return answer

solution(3, [1,2,3], [2])