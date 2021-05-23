let target=document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JavaScript", "Learn to Ruby"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split(""); // 랜덤으로뽑아진 문자열의 배열을 다시 각각의 쪼개진 문자 배열로 넣어라(문자1개씩 넣는다)

function dynamic(randomArr) {
	if(randomArr.length > 0) {
		target.textContent += randomArr.shift();
		setTimeout(function() {
			dynamic(randomArr);
		}, 80);
	}
}

dynamic(selectStringArr);

console.log(selectString);
console.log(selectStringArr);

// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); //blink함수를 0.5초에 한번씩 호출