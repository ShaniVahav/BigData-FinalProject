const _fetch = require('./fetchingData.js')
//*************//
//   Arrays   //
//***********//
exports.cities = function cities() { return _fetch.cities() }
exports.holidays = function holidays() { return _fetch.holidays() }



//*************************************//
//   Produce random sales for Kafka   //
//***********************************//

exports.sale = function Sale(citiesArray, holidaysDict)
{
    /* Random Date */
    let holiday_size = Object.keys(holidaysDict).length;
    end = new Date()

    function randomDate() {
        let holiday = Math.floor(Math.random() * holiday_size);  // between 0 to 45
        
        // if random a "regular number (date)" so random a date from all the year
        if (holiday == 16 || holiday == 17 || holiday == 18 || holiday == 21 || holiday == 46)
        {
            // regular day
            start = new Date(2021, 0, 1) 
            var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return date.getFullYear()+'/'+(date.getMonth()+1)+'/' + date.getDate() +" "+ (date.getDay()+1);
        }

        return holidaysDict[holiday]  // special day
    }
    var _date = randomDate();

//*******************************************************************************************************************//

    /* Random City */
    let city_size = Object.keys(citiesArray).length;
    big_cities = ['4', '10', '28', '29', '38', '45', '63', '84', '88', '91']

    function randomCity() {
        let i = Math.floor(Math.random() * 3);  // if 0 or 1 -> big city, if 2 -> small city

        // random a big city
        if (i == 0 || i == 1) {
            let bigCity_index = Math.floor(Math.random() * big_cities.length);
            let bigCity_id = big_cities[bigCity_index]

            return bigCity_id
        }

        let city_id = Math.floor(Math.random() * city_size);
        return city_id

    }
    var _city = randomCity()
    
//*******************************************************************************************************************//

    /* Random Flavour */
    var flavour = ['chocolate', 'vanilla', 'oreo', 'strawberry', 'berries']
    function randomFlavour() {
        return Math.floor(Math.random() * 5);
    }
    var _flv = randomFlavour()

//*******************************************************************************************************************//

    /* Random Weight */
    function randomWeight() {
        kg = Math.floor(Math.random() * 5) + 1;
        return kg
    }
    var _w = randomWeight()
     

    let randomSale = `CityID: "${_city}", Date: "${_date}", City: "${citiesArray[_city]}", Flavour: "${flavour[_flv]}", Weight: ${_w}`;
    return randomSale
}
