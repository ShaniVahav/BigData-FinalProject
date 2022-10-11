const fs = require('fs')

holidays_url = 'https://holidayapi.com/v1/holidays?pretty&key=6494e84f-c91d-4794-bbf1-abd52c1d760d&country=IL&year=2021'
cities_url = 'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=101'


/* If one of the file.txt is exist so delete them */
if(fs.existsSync('Cities.txt'))
{
  fs.unlinkSync('Cities.txt')
}

if(fs.existsSync('Holidays.txt'))
{
  fs.unlinkSync('Holidays.txt')
}

/* Load the data through API into .txt file */
// fetch the cities:
fetch(cities_url)
  .then(res => { return res.json() })
  .then(data => { return data.result.records })
  .then(city => city.forEach(element => {
    fs.writeFile('Cities.txt', element.שם_ישוב + '\n', { flag: 'a+' }, err => {
      if(err){
        console.err
        return
      }
    })
  }))

// fetch the holidays:
fetch(holidays_url)
  .then(res => { return res.json() })
  .then(data => { return data.holidays })
  .then(city => city.forEach(element => {
    fs.writeFile('Holidays.txt', element.name + '\n', { flag: 'a+' }, err => {
      if(err){
        console.err
        return
      }
    })
  }))

  /* Read the data from .txt files to arrays */
var citiesArray = []
var holidaysArray = []

fs.readFile('Cities.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
  citiesArray = data.split(/\r\n|\n/)
  })

fs.readFile('Holidays.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
  holidaysArray = data.split(/\r\n|\n/);
  })
  
console.log(citiesArray)
console.log(holidaysArray)