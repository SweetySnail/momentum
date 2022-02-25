const covid_newdate = new Date();
const covid_year = covid_newdate.getFullYear();
const covid_month = String(covid_newdate.getMonth() + 1).padStart(2,"0");
const covid_hour = covid_newdate.getHours();
let covid_date;
if(covid_hour < 10 ) {
  covid_date = String(covid_newdate.getDate() - 1).padStart(2,"0");
}
else {
  covid_date = String(covid_newdate.getDate()).padStart(2,"0");
}
const covid_today = `${covid_year}${covid_month}${covid_date}`;

const xhr = new XMLHttpRequest();
const SERVICE_KEY = "ZwFUZGwHqu9C%2BFBi479ESV4VbWfMXiTYRj7LhYQGPs9hA%2BIeo67vjxQwL6RfOTVUHQSuhhqo54o%2Btc1WrXCv9w%3D%3D";
const COVIDAPI_PARAM = `&pageNo=1&numOfRows=10&startCreateDt=${covid_today}&endCreateDt=${covid_today}`;
const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${SERVICE_KEY}${COVIDAPI_PARAM}`;

const covid = document.querySelector("#covid-19");
xhr.open('GET', url);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      const xml = this.responseXML.getElementsByTagName("decideCnt")[0].firstChild.nodeValue;
      covid.innerText = `코로나 확진자: ${xml}명`;
    }
    else {
      covid.innerText = `코로나 확진자: 00명`;
    }
};
xhr.send('');

console.log("COVID-19 Success");