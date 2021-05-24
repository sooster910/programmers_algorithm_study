<details>
  <summary> BruteForce </summary>
  
## 문제

<details>
  <summary> 모의고사 </summary>

### Dictionary
```python
my_dict = {'a': 0, 'b': 1, 'c': 2, 'd': 3}

#길이가 같은 형태에서 key와 value가 있다면, 
#zip() 함수를 사용할 수 있다.    

my_dict = dict(zip('abcd',range(4)))
##{'a': 0, 'b': 1, 'c': 2, 'd': 3}


```
#### 🦸 dictionary 에서 key, value 구하기 
```python
for k,v in my_dict.items():
    print(k,v)
'''
'a',1
'b',2
'c',3

'''
```
리스트 컴프리핸션 
```python
[ k for k,v in my_dict.items()]

#['a', 'b', 'c', 'd', 'e', 'f']

[(k,v) for k,v in my_dict.items()]

#[('a', 0), ('b', 1), ('c', 2), ('d', 3), ('e', 1), ('f', 3)]

```
조건을 추가한 리스트 컴프리 핸션
```python
[k for k,v in my_dict.items() if v>1]

#['c', 'd', 'f']

[(k,v) for k,v in my_dict.items() if v>1]

#[('c', 2), ('d', 3), ('f', 3)]

```

#### 🦸 dictionary 에서 최대값의 key 찾는 방법
 1. 그냥 max를 사용하는 방법
```python
max(my_dict, key=my_dict.get) # 'd'
#my_dict 의  max value 는 3 이고 key는 'd'
```
 2. 리스트컴프리핸션 사용방법
```python
max(my_dict.values())  #딕셔너리의 최대값 출력  'd'
[k for k,v in my_dict() if max(my_dict.values()) == v] #['d'] 
```
#### 🦸 dictionary 에서 최대값이 여러개인 경우, 그 최대값을 가진 key를 찾는 방법
* 최대값이 중복인 경우에, max(my_dict, key = my_dict.get) 를 사용할 경우,
한개만 리턴된다. 리스트 컴프리핸션을 사용하면 모든 최대값이 리턴된다. 
  
```python
my_dict['e'] = 3  # {'a': 0, 'b': 1, 'c': 2, 'd': 3,', 'e':3}
max(my_dict, key = my_dict.get) #'d' d,e모두 3으로 최대값이지만 먼저 마주치는 d를 리턴한다

[k for k,v in my_dict.items() if max(my_dict.values())==v ]
#['d','e']

[(k,v) for k,v in my_dict.items() if max(my_dict.values())==v ]
#[('d', 3), ('f', 3)]

```
리스트 컴프리핸션 
[ for k,v in my_dict.items()]
</details>
  1. A numbere
  2. list
     * With some
     * Sub bullets
    
</details>