// import { fetch_cities, fetch_holidays } from './fetchingData.mjs'
const _fetch = require('./fetchingData.js')
//*************//
//   Arrays   //
//***********//

var citiesArray = _fetch.cities()
var holidaysArray = _fetch.holidays()


//*************************************//
//   Produce random sales for Kafka   //
//***********************************//

exports.sale = function Sale()
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
        return Math.floor(Math.random() * 5);
    }
    var _flv = randomFlavour()

    /* Random Weight */
    function randomWeight() {
        kg = Math.floor(Math.random() * 5);
        g = Math.floor(Math.random() * 10);
        return kg+(g/10)
    }
    var _w = randomWeight()

    return randomSale = `Date: ${_date}, City: ${citiesArray[_city]}, Flavour: ${flavour[_flv]}, Weight: ${_w}`;
}
