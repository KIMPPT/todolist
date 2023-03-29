//body의 이미지가 새로고침 할때마다 변경
//이미지가 새로고침 할때마다 변경 = body를 새로 부를때마다 바뀜-새로고침할때마다 js호출
//이미지 여러개, 랜덤으로 변경(Math.random(),정수값을 사요하기 위해 원하는 횟수 곱합, 소수 부분은 버림)
//랜덤한 문자열을 사용하기 위해 배열과 함께 사용
//이미지를 배열에 넣어둠
let images=["0.jpg","1.jpg","2.jpg"]; 
//난수로 숫자를 뽑아와 정수로 만들어 배열에 넣기 위해 만듬
let randomindex=Math.floor(Math.random()*images.length);
/*랜덤 뒤에 곱하는 수를 고정하면 이미지가 추가되거나 삭제 되었을 때 수동으로 조절해야 한다.
때문에 자동으로 조절하기 위해 배열의 길이를 넣어준다.*/
let body=document.querySelector("body"); //body태그에 접근하기 위한 변수 추가
body.style.backgroundImage=`url(/0320/todolist/image/${images[randomindex]})`;
//배경 이미지를 위 images배열의 randomindex(정수)로 받아와 해당 인덱스의 이미지를 불러냄
body.style.backgroundSize="cover"; //이미지 크기가 안맞는 경우 cover로 꽉 채우기