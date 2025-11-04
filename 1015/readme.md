# 📘 자바스크립트 7장 요약 — 코어 객체와 배열

## 🎯 학습 목표
1. 객체의 기본 개념 이해  
2. 자바스크립트 코어 객체 활용 (Date, String, Math, Array 등)  
3. 배열 생성 및 활용법 이해  
4. 사용자 정의 객체 및 프로토타입 개념 익히기

---

## 🧩 1. 객체의 기본 개념
- 현실 세계의 사물을 표현 (사람, 자동차 등)
- **객체 = 속성(Property) + 메소드(Method)**
```js
let account = {
  owner: "황기태",
  balance: 35000,
  deposit: function() {...},
  withdraw: function() {...}
};
```

---

## 🧱 2. 자바스크립트 객체의 종류
| 구분 | 설명 |
|------|------|
| **코어 객체** | JS 기본 내장 객체 (Array, Date, String, Math 등) |
| **DOM 객체** | HTML 태그를 객체화 (문서 구조 제어) |
| **BOM 객체** | 브라우저 제어용 객체 (window, location 등) |

---

## 📅 3. Date 객체
```js
let now = new Date();
now.getFullYear();  // 연도
now.getMonth() + 1; // 월
now.getDate();      // 일
```
- 시간 계산 및 비교 가능
- `getHours(), getMinutes(), getSeconds()` 등 제공

---

## 🔤 4. String 객체
- 문자열은 **수정 불가능 (immutable)**
- 주요 메소드:
  - `charAt()`, `concat()`, `indexOf()`, `slice()`, `substr()`, `replace()`, `trim()`, `split()`
```js
let str = "Boys and Girls";
str.replace("and", "or"); // "Boys or Girls"
```

---

## ➗ 5. Math 객체
- 수학 계산용 내장 객체 (new 없이 사용)
- 주요 메소드:
  - `Math.sqrt(x)`, `Math.pow(x, y)`, `Math.random()`, `Math.floor()`
```js
Math.floor(Math.random() * 10); // 0~9 난수
```

---

## 📚 6. 배열 (Array)
- 여러 값을 하나로 묶는 자료구조
- 생성 방법:
```js
let arr1 = [10, 20, 30];        // 리터럴
let arr2 = new Array(10, 20, 30); // 생성자
```
- **length 프로퍼티**로 크기 확인 및 변경 가능  
- 다양한 메소드: `concat()`, `join()`, `reverse()`, `slice()`, `sort()`, `toString()`

---

## 🧠 7. 사용자 정의 객체
- **1️⃣ new Object() 방식**
```js
let acc = new Object();
acc.owner = "황기태";
acc.deposit = function(m) { this.balance += m; };
```

- **2️⃣ 리터럴 방식**
```js
let acc = {
  owner: "황기태",
  balance: 35000,
  deposit(m) { this.balance += m; }
};
```

- **3️⃣ 프로토타입(생성자 함수) 방식**
```js
function Account(owner, code, balance) {
  this.owner = owner;
  this.code = code;
  this.balance = balance;
  this.deposit = function(m) { this.balance += m; };
}
let myAcc = new Account("이재문", "222", 10000);
```

---

## 🧩 핵심 요약
| 항목 | 핵심 포인트 |
|------|--------------|
| 객체 | 속성과 메소드의 집합 |
| 배열 | 자료형이 달라도 저장 가능 |
| String | 불변(immutable) 객체 |
| Date | 시간/날짜 관리용 객체 |
| Math | 수학 계산용 유틸리티 |
| 사용자 객체 | 직접 정의 가능 (Object, 리터럴, 프로토타입)|

---

> 📘 **결론:**  
> 자바스크립트의 코어 객체들은 프로그램의 기본 구조를 이루는 핵심 요소로,  
> 실제 개발 시 데이터 처리와 화면 제어에 모두 필수적으로 사용된다.
