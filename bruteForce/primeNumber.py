'''
input: "17" |output: 3
-----------
input:"011" |output:2

'''
from itertools import permutations
import math


def isPrime(n):
    if n < 2:
        return False
    # make sure range rf
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True


def solution(numbers):
    answer = 0
    noDuplicatedPerm = []
    for i in range(1, len(numbers) + 1):
        perms = set(permutations(numbers, i))

        for perm in set(perms):
            str_perm = ''.join(perm)
            int_perm = int(str_perm)
            noDuplicatedPerm.append(int_perm)

    noDuplicatedPerm = list(set(noDuplicatedPerm))

    for i in noDuplicatedPerm:
        if isPrime(i):
            answer += 1
        else:
            continue

    return answer