//*****************************//
//   Initialize the arrays    //
//***************************//
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
exports.cities = function fetch_cities(){
    let cities_url = 'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=101'
    var citiesDict = {}
    let i = -1
    // fetch the cities:
    fetch(cities_url)
    .then(res => { return res.json() })
    .then(data => { return data.result.records })
        .then(city => city.forEach(
            element => {
                citiesDict[i] = (element.שם_ישוב).substring(0, ((element.שם_ישוב).length)-1)
                i++
            }))
      

    return citiesDict
}

exports.holidays = function fetch_holidays(){
    let holidays_url = 'https://holidayapi.com/v1/holidays?pretty&key=6494e84f-c91d-4794-bbf1-abd52c1d760d&country=IL&year=2021'
    var holidaysArray = {}
    let i=0
    // fetch the holidays:
    fetch(holidays_url)
    .then(res => { return res.json() })
    .then(data => { return data.holidays })
    .then(city => city.forEach(
        element => {
            holidaysArray[i] = element.date
            i++
        }
        ))

    return holidaysArray
}
