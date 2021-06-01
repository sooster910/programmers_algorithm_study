# 짝지어 제거하기

문제 link : https://programmers.co.kr/learn/courses/30/lessons/12973#qna

### 접근법  
✅ 이 문제의 접근 방법은 카카오 문제인 인형뽑기과 유사한 스택접근법으로 가능 

✅ 주어진 문자열의 길이가 1,000,000 이므로 O(n)내에서 끝내야 했었고,   reverse()한 후 pop()을 했을 땐, 효율성 테스트 2번에서 시간초과가 남.  

✅  index로 접근 

✅  주어진 ```s[index]```와 현재 stack의 peek  와 비교하여 같다면 stack 으로부터  pop한다. 

