//버튼을 눌렸을 때 환영인사 출력
//form의 submit를 눌렸을 때 input의 값이 h1 태그에 할당

//id를 통해 직접 접근
//submit을 눌렸을 때(이벤트)-form에 이벤트
//input 값이 h1 태그에 할당(실행할 함수)
let loginform = document.querySelector("#loginform"); //id이름이 loginform 인 태그(form)에 접근
loginform.addEventListener("submit", onlogin); //해당 태그의 submit를 할 시 onlogin 함수 실행
//로그인 시 발생할 함수
function onlogin(event) {
  //submit 이벤트는 새로고침 이벤트가 들어가있다.
  event.preventDefault();
  //값을 들고올 input 태그 가져옴-value
  let loginid = document.querySelector("#loginid");
  //값을 넣어줄 h1 태그 가져옴-innerHTML
  let greeting = document.querySelector("#greeting");
  //h1태그의 텍스트 뒤에 text타입인 input에 입력한 값을 추가함
  greeting.innerHTML = `환영합니다. ${loginid.value}님`;
  //화면에 글자를 보여주기 위해 클래스 제거 
  greeting.classList.remove("hidden");
  //할일 입력창과 할일 리스트 보이게 하기 위해 클래스 제거
  document.querySelector("#memoform").classList.remove("hidden");
  document.querySelector("#todolist").classList.remove("hidden");
  //로그인 창을 보이지 않기 위한 hidden class 추가
  loginform.classList.add("hidden");
  //위 2개는 css 에서 class이름이 hidden인 경우 style:none을 적용한 것을 이용해 활용했음
}
