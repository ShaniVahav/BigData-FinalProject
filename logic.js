const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const _axios = (...args) =>
  import('axios').then(({ default: axios }) => _axios(...args));
// axios
//********************************************//
//   Initialize the array with 100 cities    //
//******************************************//
var file = 'cities.txt';
const fs = require('fs');
fs.readFile('cities.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    var fileArray = data.split(/\r\n|\n/);
})

//*************************************//
//   Produce random sales for Kafka   //
//***********************************//

/* Random Date */
// inspire from: https://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
function randomDate(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.getDate()+'/'+(date.getMonth()+1)+'/' +date.getFullYear() +" "+ (date.getDay()+1);
  }
  const d = randomDate(new Date(2021, 0, 1), new Date());
  // console.log(d);

//  const holidays_url = 'https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=3448439&M=on&s=on';
//  async function getData(){
//     // const response = await fetch(holidays_url);
//     const response = await axios.get(holidays_url);
//     const data = await response.json();  // convert the data to json format
//     console.log(data);
//  }

//  getData();

 async function getWeather(lat,lon)
{
    const params = {
        appid : 'fc72ac8663a15a5fad6f1e5f8d866337',
        lat : lat,
        lon : lon
    }
    writeToDb("api.openweathermap")
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather',{params})
        return[response.data]
    }
    catch (err)
    {
        console.log("error at get weather")
    }
}

getWeather(12,12);

// fetch()
//     .then(res => {
//         if(res.ok){
//             console.log('SUCCESS');
//         }
//             else{
//                 console.log('NOT SUCCESS');
//             }
//         })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))