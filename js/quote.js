const quote_arr = [
  "훌륭한 사람과 어리석은 사람의 차이는 불과 한 걸음 차이다.",
  "너 자신을 누구에겐가 필요한 존재로 만들어라.",
  "자기 자신을 정복하지 못한 사람은 결코 자유로울 수가 없다.",
  "노력을 이기는 재능은 없고, 노력을 외면하는 결과도 없다.",
  "우리는 딱 한번만 산다. 하지만 똑바로 산다면, 한번이면 충분하다.",
  "길을 아는 것과 그 길을 걷는 것은 다르다.",
  "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
  "매일매일 반복되는 작은 노력이 모여 성공을 이룬다.",
  "성공은 우연히 일어난 일이 아니다.",
  "평범한 것과 비범한 것의 차이는 겨우 한 끗 차이일 뿐이다."
]
const today_quote = document.querySelector("h3#quote");
const quote = quote_arr[Math.floor(Math.random() * quote_arr.length)];

today_quote.innerText = `- ${quote} -`;
console.log("Quote Success");