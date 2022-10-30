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

    function randomDate() {
        let kind_of_day = Math.floor(Math.random() * 7); // 0-2: holiday, 3-5: summer, 6: regular


        if (kind_of_day >= 0 && kind_of_day <= 2)  // it's holiday
        {
            let holiday = Math.floor(Math.random() * holiday_size);  // between 0 to 45
            return holidaysDict[holiday]  // special day
        }

        if (kind_of_day >= 3 && kind_of_day <= 5)  // it's hot day
        {
            if (Math.floor(Math.random() * 2) == 0) {
                start = new Date(2021, 6, 1)
                end = new Date(2021, 7, 31)
            }
            else {
                start = new Date(2022, 6, 1)
                end = new Date(2022, 7, 31)
            }

            var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return date.getFullYear() + '//' + (date.getMonth() + 1) + '//' + date.getDate();
        }

        else {
            // regular day
            start = new Date(2021, 0, 1)
            end = new Date()
            var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        }  
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
     

    let randomSale = `{"CityID": "${_city}", "Date": "${_date}", "City": "${citiesArray[_city]}", "Flavor": "${flavour[_flv]}", "Weight": ${_w}}`;
    return randomSale
}
