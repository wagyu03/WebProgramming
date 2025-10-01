# 5주차 수업내용 (Java script)

   ### 그림에 마우스를 올릴때 사진변경 예시
      <script>
      function over(obj) {
       obj.src = "hello.png"    <<JS 마우스 기능
      }
      function out(obj) {
       obj.src = "hello.png"    <<JS 마우스 기능
      }
      </script>
      <body>
      <img src="hello.png" onmouseover = "over(this)" onmouseout = "out(this)"    << img 테그를 JS기능 하겠다고 알려줌
      </body>
        
