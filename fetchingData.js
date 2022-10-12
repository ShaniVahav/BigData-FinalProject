//*****************************//
//   Initialize the arrays    //
//***************************//
exports.cities = function fetch_cities(){
    let cities_url = 'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=101'
    var citiesArray = []

    // fetch the cities:
    fetch(cities_url)
    .then(res => { return res.json() })
    .then(data => { return data.result.records })
    .then(city => city.forEach(element => { return citiesArray.push(element.שם_ישוב) }))

    return citiesArray
}

exports.holidays = function fetch_holidays(){
    let holidays_url = 'https://holidayapi.com/v1/holidays?pretty&key=6494e84f-c91d-4794-bbf1-abd52c1d760d&country=IL&year=2021'
    var holidaysArray = []

    // fetch the holidays:
    fetch(holidays_url)
    .then(res => { return res.json() })
    .then(data => { return data.holidays })
    .then(city => city.forEach(element => { holidaysArray.push(element.name) }))

    return holidaysArray
}
