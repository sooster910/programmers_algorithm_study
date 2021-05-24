import heapq
def solution(answers):
    answer = []
    a_student_answer = [1, 2, 3, 4, 5]
    b_student_answer = [2, 1, 2, 3, 2, 4, 2, 5]
    c_student_answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    a_student_result = findCorrespondAnswer(answers, a_student_answer)
    b_student_result = findCorrespondAnswer(answers, b_student_answer)
    c_student_result = findCorrespondAnswer(answers, c_student_answer)

    # map = [(a_student_result,1), (b_student_result,2),(c_student_result,3)]
    queue = []
    map = {1: a_student_result , 2:b_student_result, 3:c_student_result}

    answer=[ k for k,v in map.items() if v>0 and max(map.values())==v ]

    # sort() becuase map is unordered data structure
    if len(answer) > 1:
        answer.sort()
    # #우선순위 큐(heap) 사용
    # for item in map :
    #     if item[0]>=1:
    #         heapq.heappush(queue, (-item[0],item[1]))
    #
    # while queue:
    #     answer_count, student_number =heapq.heappop(queue)
    #
    #     answer.append(student_number)
    #
    # answer.sort()
    print(answer)
    return answer


def findCorrespondAnswer(answers, student_answer):
    count = 0
    i = 0
    a = 0
    while i < len(answers):

        if i == len(student_answer):
            a = 0
        if answers[i] == student_answer[a]:
            count += 1
        i+=1
        a+=1
    return count

solution([1])