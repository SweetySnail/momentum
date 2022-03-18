const newDate = new Date();
const cur_hour = newDate.getHours();
let covid_today, covid_yesterday;
if(cur_hour < 10) {
  covid_today = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()-1);
  covid_yesterday =  new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()-2);
}
else {
  covid_today = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
  covid_yesterday =  new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()-1);
}
covid_today = String(covid_today.toLocaleDateString()).split('. ');
covid_today = `${covid_today[0]}${covid_today[1].padStart(2,"0")}${covid_today[2].split('.')[0]}`;
covid_yesterday = String(covid_yesterday.toLocaleDateString()).split('. ');
covid_yesterday = `${covid_yesterday[0]}${covid_yesterday[1].padStart(2,"0")}${covid_yesterday[2].split('.')[0]}`;

const COVID_URL = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
const COVID_SERVICE_KEY = "ZwFUZGwHqu9C%2BFBi479ESV4VbWfMXiTYRj7LhYQGPs9hA%2BIeo67vjxQwL6RfOTVUHQSuhhqo54o%2Btc1WrXCv9w%3D%3D";
const COVID_API_PARAM = `&pageNo=1&numOfRows=10&startCreateDt=${covid_yesterday}&endCreateDt=${covid_today}`;
const url = `${COVID_URL}?serviceKey=${COVID_SERVICE_KEY}${COVID_API_PARAM}`;

const covid = document.querySelector("#covid-19");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const item = this.responseXML.getElementsByTagName("item");
      let decideCnt = item[0].getElementsByTagName("decideCnt")[0].firstChild.nodeValue - item[1].getElementsByTagName("decideCnt")[0].firstChild.nodeValue;
      covid.innerText = `금일 확진자: ${decideCnt.toLocaleString()}명`;
    }
    else {
      covid.innerText = `금일 확진자: 00명`;
    }
};
xhr.open('GET', url);
xhr.send('');

console.log("COVID-19 Success");