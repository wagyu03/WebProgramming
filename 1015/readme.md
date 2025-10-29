7장. 자바스크립트 코어 객체와 배열
1. 객체 개념
자바스크립트 객체

객체는 프로퍼티(속성) 와 메소드(함수) 로 구성된 데이터의 집합이다.

현실 세계의 사물을 표현하거나, 데이터와 동작을 하나의 단위로 묶는 데 사용된다.

자바스크립트 객체의 유형
구분	설명	예시
내장 객체 (Core Object)	자바스크립트에서 기본적으로 제공하는 객체	Array, String, Date, Math 등
브라우저 객체 (BOM)	브라우저 환경에서 제공되는 객체	window, navigator, screen 등
문서 객체 (DOM)	HTML 문서를 객체로 표현	document
사용자 정의 객체	프로그래머가 직접 생성	let obj = {} 등
2. 코어 객체 다루기
대표적인 코어 객체

Object

Array

Date

String

Math

new 키워드로 객체 생성
let obj = new Object();
let arr = new Array();
let str = new String("Hello");
let date = new Date();

객체 접근

점 표기법(dot notation): object.property

대괄호 표기법(bracket notation): object["property"]

let person = { name: "홍길동", age: 25 };
console.log(person.name);       // 홍길동
console.log(person["age"]);     // 25

3. 배열과 Array
배열 만드는 방법

대괄호([]) 사용

new Array() 사용

let fruits = ["apple", "banana", "cherry"];

배열 크기와 원소 추가
let arr = [];
arr[0] = "a";
arr[1] = "b";
arr.push("c"); // push 메소드로 추가

Array로 배열 만들기
let nums = new Array(1, 2, 3, 4);
let emptySlots = new Array(5);  // 길이 5, 비어 있는 배열
let empty = new Array();        // 빈 배열

배열의 원소 개수 (length 프로퍼티)
let arr = [10, 20, 30];
console.log(arr.length); // 3

배열의 특징

배열은 Array 객체이다.

배열의 인덱스는 문자열로 저장된다.

length 프로퍼티로 길이를 관리한다.

여러 타입의 데이터를 함께 저장할 수 있다.

let mixed = [1, "hello", true, {a:1}, [1,2]];

Array 객체의 주요 메소드

push(), pop(), shift(), unshift()

splice(), slice()

indexOf(), forEach(), map(), filter(), reduce()

4. Date
날짜와 시간을 다루는 객체
let now = new Date();
console.log(now.toLocaleString());

5. String
String 객체

문자열을 다루는 객체.

문자열은 immutable(불변) 이다 — 수정 시 새 문자열이 생성된다.

문자열 길이
let str = "Hello";
console.log(str.length); // 5

문자 접근
console.log(str[1]); // 'e'

주요 String 메소드
메소드	설명
charAt()	특정 인덱스의 문자 반환
indexOf()	부분 문자열의 시작 위치 반환
substring()	문자열의 일부분 반환
toUpperCase() / toLowerCase()	대소문자 변환
split()	구분자로 나눠 배열 반환
trim()	앞뒤 공백 제거
String 활용 예시
"abc" === "abc"  // true
"Hello" + " " + "World"; // 문자열 연결

let text = "JavaScript";
console.log(text.indexOf("Script")); // 4
console.log(text.substring(0, 4));   // Java

let msg = "Hi";
msg = msg.replace("Hi", "Hello");    // "Hello"

"hello".toUpperCase();               // "HELLO"
"HELLO".toLowerCase();               // "hello"

"apple,banana,cherry".split(",");    // ["apple","banana","cherry"]
"   hello   ".trim();                // "hello"

let s = "ABC";
console.log(s.charAt(1));            // B

6. Math
난수 발생
console.log(Math.random()); // 0 이상 1 미만 난수

7. 사용자 객체 만들기
new Object()로 객체 만들기
let user = new Object();
user.name = "홍길동";
user.age = 25;
console.log(user.name);

메소드 추가
user.sayHello = function() {
  console.log("안녕하세요!");
};
user.sayHello();

리터럴 표기법으로 객체 만들기
let person = {
  name: "이몽룡",
  age: 20,
  hello: function() {
    console.log("안녕!");
  }
};

프로토타입과 사용자 정의 객체
프로토타입 함수 정의
function Student(name, age) {
  this.name = name;
  this.age = age;
}

new로 객체 생성
let s1 = new Student("홍길동", 21);
console.log(s1.name); // 홍길동
