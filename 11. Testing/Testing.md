# 테스팅 면접 준비

### 주로 나오는 테스팅 질문 종류 4가지

1. 일상생활에서 접하는 물건을 테스트하라(ex: 펜, 클립)
2. 소프트웨어 하나를 테스트하라
3. 주어진 함수 하나를 테스트하라
4. 발생한 이유에 대한 해결책을 찾아내라

## 면접관이 평가하는 것

- 큰 그림을 이해하고 있는가: 테스트 케이스 간 우선순위를 적절히 매길 수 있는기?

- 퍼즐 조각을 제대로 맞추는 방법을 아는가: 소프트웨어의 동작부터 각 소프트웨어가 더 큰 소프트웨어로 어떻게 합쳐지는지 이해하고있는가?

- 조직화: 시스템을 구조적 나눈 뒤 테스트를 만들어 가는가? (사진 촬영 / 이미지 관리 / 설정 등의 범주)

- 실용성: 실행가능 한 테스트 계획을 세울 수 있는가?

## 실제 세계에서 객체 테스트하기

접근법

1. 사용자는 누구인가? 사용목적은 무엇인가?

2. 어떤 유스케이스가 있는가?

3. 한계 조건은?

4. 스트레스 조건과 장애 조건은?

5. 테스트는 어떻게 수행할 것인가?

## 소프트웨어 테스팅

실제 세계의 객체를 테스트하는 거랑 유사한데 거기에 성능 테스트를 더 많이 강조한다.

핵심 두 가지

- 수작업 테스트 vs. 자동화된 테스트: 컴퓨터가 잘하는 문제가 있고 인간의 인지능력이 필요한 문제가 있음

- 블랙박스 테스트 vs. 화이트박스 테스트: 소프트웨어 내부를 어디까지 들여다 볼 수 있느냐

접근법

1. 블랙박스냐 화이트박스냐 아니면 둘 다냐

2. 사용자는? 왜 사용하지?

3. 어떤 유스케이스가 있는가?

4. 한계 조건은?

5. 스트레스 조건과 장애 조건은?

6. 테스트는 어떻게 수행할 것인가?

## 함수 테스트

가장 쉬움.

에를 들어 sort(int[] array)를 테스트하라고 할 때

1. 테스트 케이스 정의
   - 정상적인 케이스
   - 극단적인 케이스: 빈 배열, 아주 큰 배열
   - 널 입력, 잘못된 입력
   - 특수한 입력: 이미 정렬된 배열, 역순으로 정렬된 배열
2. 예상되는 결과 정의

3. 테스트 코드 작성

## 문제 해결에 관한 문제

접근법

1. 시나리오 이해: 상황을 이해하기 위해 질문을 많이 던지기

2. 문제를 쪼개기: 각 과정을 나열하기

3. 구체적이고 관리 가능한 테스트 생성
