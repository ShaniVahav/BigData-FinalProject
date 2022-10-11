//********************************************//
//   Initialize the array with 100 cities    //
//******************************************//
const fs = require('fs')

holidays_url = 'https://holidayapi.com/v1/holidays?pretty&key=6494e84f-c91d-4794-bbf1-abd52c1d760d&country=IL&year=2021'
cities_url = 'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=101'


/* Load the data through API into .txt file */
var citiesArray = []
var holidaysArray = []


function create_Arrays()
{
    // fetch the cities:
    fetch(cities_url)
    .then(res => { return res.json() })
    .then(data => { return data.result.records })
    .then(city => city.forEach(element => { return citiesArray.push(element.שם_ישוב) }))

    // fetch the holidays:
    fetch(holidays_url)
    .then(res => { return res.json() })
    .then(data => { return data.holidays })
    .then(city => city.forEach(element => { holidaysArray.push(element.name) }))
}
create_Arrays()

setTimeout(Sale, 1000)


//*************************************//
//   Produce random sales for Kafka   //
//***********************************//

function Sale()
{
    /* Random Date */
    function randomDate() {
        start = new Date(2021, 0, 1)
        end = new Date()
        var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.getDate()+'/'+(date.getMonth()+1)+'/' +date.getFullYear() +" "+ (date.getDay()+1);
    }
    var _date = randomDate();

    /* Random City */
    function randomCity() {
        return Math.floor(Math.random() * 101) + 1;
    }
    var _city = randomCity()

    /* Random Flavour */
    var flavour = ['chocolate', 'vanilla', 'oreo', 'strawberry', 'berries']
    function randomFlavour() {
        return Math.floor(Math.random() * 5) + 0;
    }
    var _flv = randomFlavour()

    /* Random Weight */
    function randomWeight() {
        kg = Math.floor(Math.random() * 5) + 0;
        g = Math.floor(Math.random() * 1001) + 100;
        return kg+(g/100)
    }
    var _w = randomWeight()

    randomSale = `Date: ${_date}, City: ${citiesArray[_city]}, Flavour: ${flavour[_flv]}, Weight: ${_w}`;
    console.log(randomSale)
}
