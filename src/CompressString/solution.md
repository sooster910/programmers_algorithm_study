# 문자열 압축 (카카오) 

문제 link : https://programmers.co.kr/learn/courses/30/lessons/60057 

### 접근법  

✅  Math.min(문자열을 1개로 나눴을 때 문자열.length, 문자열을 2개로 나눴을 때.length, 문자열을 3개로 나눴을 때 .... 문장열을 (문자열/2)개로 나눴을 때.length) 

✅  나의 풀이는 완전 탐색으로 접근.

✅ 문자열의 length가 1개 일 때, 리턴해야 하는 수는 1임을 고려.

