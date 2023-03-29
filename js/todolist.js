//todo리스트 만들기
//추가 : 할 일 값을 받아와서 ul의 li로 출력하기
//할일 완료 : 체크를 했을 때, 완료 포시
//하지 않을 때 그 할 일을 삭제

//할일 입력창에 값을 입력하고 sumbit을 했을 때 작성한 할 일을 ul에 li로 추가
let todoform = document.querySelector("#memoform");
todoform.addEventListener("submit", todoadd);
//전역으로 관리할 전체 할 일 갯수와 체크한 일 갯수
let allCount=0;
let checkedCount=0;

//todo를 추가하는 함수
function todoadd(e) {
  e.preventDefault(); //초기화 시켜주기
  //input태그의 값을 가져와서 ul의 li로 추가하기

  //todoform.firstelementchild는 input type:text를 들고옴
  let todovalue = todoform.firstElementChild.value; //그 안에서 입력한 값(value)를 받아 옴
  //li 태그 생성 & ul 태그를 찾아서 추가
  let li = document.createElement("li");
  //li 태그에 체크박스 추가
  let check = document.createElement("input");
  check.type = "checkbox";
  //li 태그에 텍스트노드 추가
  let text = document.createTextNode(todovalue);
  //li 태그에 x 버튼 추가
  let but = document.createElement("button");
  but.innerHTML = "X";
  //시간을 추가하기 위한 span 태그
  let time=document.createElement("span");
  time.innerHTML=getClock(); //clock.js에서 만든 시간 함수를 불러 올 수 있다.
  //li 태그 안에 위 3개를 추가
  li.appendChild(check);
  li.appendChild(text);
  li.appendChild(time); //시간추가
  li.appendChild(but);
  //  document.querySelector("#todolist")=ul. ul에 li를 추가
  document.querySelector("#todolist").appendChild(li);
  //input의 value값을 "" 으로 바꿈 - 입력을 누르고 난 뒤에 값이 남아있지 않게 만듬
    todoform.firstElementChild.value="";
    //할 일이 추가되었다면 갯수를 세알려서 출력 getAllCount()
    //할 일 과 완료한 일 을 출력한 DOM
    let countPrint=document.querySelector("#count");
    countPrint.innerHTML=`할 일 : ${getAllCount()} / 완료한 할 일 ${getCheckedCount()}`;
    //전역변수에 접근해서 Allcount 갯수 증가
    allCount++;
    console.log(allCount);
    //check에 클릭이벤트 추가
    check.addEventListener("click",todocheck);
    //button에 클릭이벤트 추가
    but.addEventListener("click",tododelete);
}
//check에 들어가는 todocheck함수 작성 - 밖에 두어도 안에 접근이 가능하다. 안에 작성한 것을 밖에 적용은 return은 안썼다면 불가능하다.
function todocheck(e){
    //이벤트 객체를 통해서 이벤트가 실행된 태그 찾아서 값 사용
    let check=e.target; //매개변수는 버튼이 되게 된다. 그러므로 타겟 또한 버튼 태그가 된다
    let li=check.parentNode; //li태그에 접근하기 위해서 check(checkbox)의 부모태그로 찾음
    if(check.checked) //체크박스의 체크 유무에 따라 표기차이 생성
    {
        li.style.color="lightgray";
        //체크했을 때 1 추가
        checkedCount++;
    }
    else
    {
        li.style.color="";
        //체크해제했을 때 1 감소
        checkedCount--;
    }
    //할 일 삭제 할 때 갯수를 내려갈 카운트
    
    let countPrint=document.querySelector("#count");
    countPrint.innerHTML=`할 일 : ${getAllCount()} / 완료한 할 일 ${getCheckedCount()}`;
    console.log(checkedCount);
}

//버튼에 클릭 이벤트 추가. X 버튼을 클릭하면 해당 li 삭제 : remove();
function tododelete(e){
    let li=e.target.parentNode; //e.target까지만 하면 button 태그로 접근함. 여기에 부모(상위)태그 접근인 parentNode를 써서 li로 접근함
    //체크가 되어 있는지 확인 (체크가 되어 있다면 -1)
    let checkbox=li.firstElementChild;
    if(checkbox.checked)
    {
        checkedCount--;
    }
    li.remove();
    let countPrint=document.querySelector("#count");
    countPrint.innerHTML=`할 일 : ${getAllCount()} / 완료한 할 일 ${getCheckedCount()}`;
    //전체 할 일의 감소를 위해 allCount의 값을 1씩 감소
    allCount--;
    console.log(allCount);
    console.log(checkedCount);
}

/*
DOM을 사용해서 세알리기
추가,삭제, 체크 할 때 마다 갯수를 확인
함수 만들어서 확인
전체 갯수 확인
*/
function getAllCount(){
    let todolist=document.querySelector("#todolist"); //ul 태그 불러옴
    //console.log(todolist.childElementCount) //ul 태그 안의 태그 갯수 확인
    //return을 통해서 값을 전달
    return todolist.childElementCount;
    //DOM을 가져와서 출력
}

//체크된 DOM 갯수 가져오기
function getCheckedCount(){
    let checkedlist=document.querySelectorAll("#todolist>li>input[type='checkbox']:checked");
    return checkedlist.length;
}