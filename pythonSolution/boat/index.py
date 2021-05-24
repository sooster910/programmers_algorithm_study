#https://programmers.co.kr/learn/courses/30/lessons/42885#

def solution(people, limit):
    count = 0
    left, right = 0, len(people) - 1
    sorted_people = sorted(people)
    while left <= right:

        if sorted_people[left] + sorted_people[right] > limit:
            count += 1
            right -= 1

        elif sorted_people[left] + sorted_people[right] <= limit:
            count += 1
            left += 1
            right -= 1
        # elif left == right: #마지막에 남은 하나의 원소가 left == right 가 같을 때, 처리를 위해서 넣었지만 프로그래머스에선 그냥 패스가 됐다
        #     count += 1
    return count

solution([70, 50, 80, 50], 100)