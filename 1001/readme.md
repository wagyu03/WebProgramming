
# 📘 6장 자바스크립트 기초 요약

## 🎯 학습 목표
- 자바스크립트의 기본 구조, 데이터 타입, 변수, 연산자, 조건문, 반복문, 함수 이해

---

## 🧩 자바스크립트 개요
- **1995년 넷스케이프 개발**, 브라우저에 최초 탑재  
- **HTML에 내장**되는 **인터프리터형 스크립트 언어**  
- **C언어 문법 기반**, 단순하고 배우기 쉬움  

---

## 💡 자바스크립트의 역할
1. 사용자 입력 및 계산 처리  
2. HTML·CSS 동적 제어  
3. 브라우저 제어 (창, 히스토리 등)  
4. 서버와 통신  
5. 웹앱 기능 (캔버스, 스토리지, 위치정보 등)

---

## 🧾 코드 삽입 방법
1. **HTML 이벤트 속성**  
   ```html
   <img onmouseover="..." onmouseout="...">
<script> 태그 내부

<script> ... </script>


외부 파일로 작성

<script src="file.js"></script>


URL 내 코드 삽입

<a href="javascript:alert('Hi!')">클릭</a>

🖨️ 출력 & 입력

출력:

document.write("내용");


입력 다이얼로그:

prompt("메시지", "기본값");
confirm("확인하시겠습니까?");
alert("알림 메시지");

🏷️ 변수 & 상수

선언 방법

var x = 10;   // 함수 단위 범위
let y = 20;   // 블록 단위 범위 (재선언 불가)
const z = 30; // 상수 (값 변경 불가)


변수 특징

타입 선언 없음 (동적 타입)

전역 / 지역 / 블록 변수 존재

🔢 데이터 & 리터럴

자료형: 숫자, 문자열, 논리형(true/false), null, 객체

문자열: "" 또는 '' 사용

let str = "그녀는 \"누구세요\"라고 말했다";


진수 표현:

8진수 : 0

16진수 : 0x

➕ 연산자 요약
종류	예시	설명
산술	+ - * / %	사칙연산
대입	=, +=, -=	값 대입
비교	==, !=, >, <, >=, <=	true/false 반환
논리	`&&,	
조건	조건 ? A : B	삼항 연산
비트	`&,	, ^, ~, <<, >>`
문자열	"a" + "b"	연결 및 사전순 비교
🧠 조건문
if (조건) {
  ...
} else if (조건2) {
  ...
} else {
  ...
}


switch 문

switch(value) {
  case "A": ...; break;
  case "B": ...; break;
  default: ...;
}

🔁 반복문

for 문

for(let i=0; i<10; i++) { ... }


while 문

while(조건) { ... }


do-while 문

do { ... } while(조건);


제어문

break → 반복 종료

continue → 다음 반복으로 이동

🧮 함수
function add(a, b) {
  return a + b;
}

let sum = add(3, 5);


전역 함수

eval("2+3");          // 코드 실행
parseInt("32");       // 문자열 → 정수
isNaN("abc");         // 숫자 아님 → true

📚 예제 요약

이미지 변경 (onmouseover)

document.write() 출력

prompt()로 점수 입력 후 학점 계산

break, continue 제어

함수로 구구단 출력
