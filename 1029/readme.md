
# 📗 자바스크립트 8장 & 9장 요약 — HTML DOM과 이벤트 처리

---

## 🎯 학습 목표
1. HTML DOM의 필요성과 구조 이해  
2. DOM 객체를 이용한 HTML 제어 및 동적 구성  
3. 이벤트 리스너를 통한 사용자 상호작용 처리  

---

## 🧩 1. HTML DOM(Document Object Model)

- HTML 태그마다 **DOM 객체**가 생성되어 브라우저가 화면을 그릴 때 사용됨  
- DOM은 **트리 구조(Tree)**로 구성되며, 각 노드는 HTML 요소를 의미

### DOM 트리 구조 예시
```
document
 └── html
     ├── head
     └── body
         ├── p
         ├── form
         └── span
```

### 주요 특징
- 루트 객체는 **document**
- 각 HTML 태그는 **DOM 객체로 변환**
- 부모-자식 관계로 연결되어 계층적 구조 형성

---

## 🧱 2. DOM 객체 구성 요소

| 구성 요소 | 설명 |
|------------|------|
| **Property** | HTML 태그 속성을 반영 |
| **Method** | DOM 객체 제어용 함수 |
| **Collection** | 자식 노드들의 집합 |
| **Event Listener** | 이벤트 처리기 등록 |
| **Style** | CSS3 스타일 정보 |

```html
<p id="firstP" style="color:blue" onclick="this.style.color='teal'">
이것은 <span style="color:red">문장입니다.</span>
</p>
```

---

## 🎨 3. DOM 객체 제어

### DOM 객체 찾기
```js
document.getElementById("myId");
document.getElementsByTagName("p");
document.getElementsByClassName("plain");
```

### 스타일 동적 변경
```js
let span = document.getElementById("mySpan");
span.style.color = "green";
span.style.fontSize = "30px";
span.style.border = "3px dotted magenta";
```

### 콘텐츠 변경 (innerHTML)
```js
let p = document.getElementById("firstP");
p.innerHTML = "나의 <img src='puppy.png'> 강아지";
```

### this 키워드 활용
```html
<button onclick="this.style.backgroundColor='orange'">클릭</button>
```

---

## 📄 4. document 객체

| 주요 프로퍼티 | 설명 |
|----------------|------|
| location | 현재 문서의 URL |
| URL | 전체 URL 문자열 |
| title | 문서 제목 |
| domain | 도메인 이름 |
| lastModified | 마지막 수정 시각 |
| activeElement | 현재 포커스된 요소 |

> **document는 DOM 트리의 루트 역할**을 하며 모든 태그 접근의 출발점이다.

---

## 🧮 5. DOM 트리 조작

### 요소 추가
```js
let newDIV = document.createElement("div");
newDIV.innerHTML = "새로 생성된 DIV입니다.";
document.body.appendChild(newDIV);
```

### 요소 삭제
```js
let target = document.getElementById("myDiv");
target.parentElement.removeChild(target);
```

### 예제 — 동적 DIV 생성/삭제
```js
function createDIV() {
  let newDIV = document.createElement("div");
  newDIV.innerHTML = "새로 생성된 DIV입니다.";
  newDIV.onclick = function() {
    this.parentElement.removeChild(this);
  };
  document.body.appendChild(newDIV);
}
```

---

## 🧠 6. 이벤트(Event) 개념

- **이벤트(Event):** 사용자 행위(클릭, 입력 등) 발생 시 브라우저가 전달하는 신호  
- 이벤트를 처리하기 위해 **이벤트 리스너(Event Listener)** 사용

### 이벤트 처리 방식 3가지
| 방식 | 예시 | 특징 |
|------|------|------|
| HTML 태그 내 삽입형 | `<button onclick="fn()">` | 간단하지만 유지보수 어려움 |
| DOM 프로퍼티 방식 | `btn.onclick = fn;` | 중복 등록 불가 |
| addEventListener | `btn.addEventListener("click", fn);` | 표준적이고 다중 등록 가능 |

---

## ⚙️ 7. 주요 이벤트 리스너

| 이벤트 종류 | 설명 |
|--------------|------|
| **onclick** | 클릭 시 |
| **onmouseover** | 마우스 올릴 때 |
| **onkeydown / onkeyup** | 키보드 입력 |
| **onload / onunload** | 페이지 로드 및 종료 시 |
| **onchange / oninput** | 입력 값 변경 시 |
| **onfocus / onblur** | 포커스 얻거나 잃을 때 |

---

## 🎮 8. 이벤트 객체(Event Object)

- 이벤트 발생 시, 브라우저가 자동으로 이벤트 객체를 생성하여 리스너에 전달
- 주요 프로퍼티:
  - `type`: 이벤트 종류
  - `target`: 이벤트 발생 요소
  - `clientX`, `clientY`: 마우스 좌표
  - `key`: 입력된 키 값

```js
btn.onclick = function(e) {
  console.log(e.type, e.target);
};
```

---

## 🔁 9. 이벤트 흐름(Event Flow)

- **캡처링 → 타깃 → 버블링 단계**로 이벤트가 전달됨
- `addEventListener(type, listener, useCapture)`로 흐름 제어 가능

```js
div.addEventListener("click", handler, true);  // 캡처링 단계
div.addEventListener("click", handler, false); // 버블링 단계
```

---

## 🧩 핵심 요약

| 구분 | 핵심 포인트 |
|------|-------------|
| **DOM** | HTML 문서를 객체 트리로 관리 |
| **document 객체** | DOM 트리의 루트, 태그 접근 시작점 |
| **innerHTML** | HTML 콘텐츠 수정 |
| **this** | 현재 객체 자신을 가리킴 |
| **이벤트 리스너** | 사용자 행위에 반응하는 함수 |
| **addEventListener()** | 표준 이벤트 처리 방식 |

---

> 💡 **결론:**  
> DOM 조작과 이벤트 처리는 자바스크립트의 상호작용 핵심이며,  
> 동적 웹 페이지의 기반을 형성한다.
