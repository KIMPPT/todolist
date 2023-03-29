//시계 값이 실시간으로 변함
//현재 시간을 들고와도 자동으로 값이 변하지 않음
//date() 로 현재 시간을 받아옴
//값을 새로 받아오면 바뀜 > new Date() 값을 새로 할당
//1초마다 new Date()의 값을 할당
//타이머 함수인 interval() 사용
let clock=document.querySelector("#clock");
//숫자를 date()를 통해 값 수정
//타이머 함수의 콜백함수로 사용하기 위해 함수로 작성
function getClock(){
    let date=new Date(); //생성자로 호출할 경우 새로운 Date 객체 반환
    let hour=String(date.getHours()).padStart(2,"0");
    let minute=String(date.getMinutes()).padStart(2,"0");
    let second=String(date.getSeconds()).padStart(2,"0");
    //String.padStart(n,k) : string(문자열) 길이가 n보다 작을 경우 문자열의 왼쪽에서부터 k(문자)를 넣는 함수
    //n은 길이, k는 빈 자리에 들어갈 문자. 숫자는 들어갈 수 없다(입력할려고 해도 함수가 안나옴)
    //clock에 현재 시간 출력
    clock.innerHTML=`${hour}:${minute}:${second}`;
    //return 을 통해 시간을 문자열로 돌려 줄 수 있다.
    //return 값을 이용해서 clock.innerHTML=getClock();
    return `${hour}:${minute}:${second}`;
    //따로 만들면서 밑에를 고친 이유는 return 값이 생겼고 이 값을 받아오는 경우를 생각하면서 만든 것이다.
    //그렇다고 return 값을 만들었다고 밑에도 고칠 이유는 없다. 이미 위에서 clock.innerHTML을 만들어 놓았기 때문에 받아도 상관없다.
    //위의 innerHTML이 없다면 기존 식을 쓸 수 없다. 왜냐하면 innerHTML이 없으니 clock 안에 들어가는 html텍스트가 없기 때문이다.                                                                                                                                                                                                                                                                                                                                                                                  
}

//타이머 함수(interval)을 사용해서 1초마다 시간을 받아오게 작성
//setInterval(함수,delay시간[ms단위]). new Date() 부터 innerHTML까지 function으로 묶어주면 된다.
setInterval(function(){
    clock.innerHTML=getClock();
},1000);
/*setInterval(getClock,1000);*/
//타이머는 무조건 1초 뒤에 실행하기 때문에 화면에 바로 출력하기 위한 함수 호출
clock.innerHTML=getClock();
/*getClock();*/