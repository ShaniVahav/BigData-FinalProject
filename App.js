// inspire from: https://www.youtube.com/watch?v=hzLDsxPGctY
import React, { Component } from 'react';

class App extends Component {
 // let holidays_url = 'https://holidayapi.com/v1/holidays?pretty&key=6494e84f-c91d-4794-bbf1-abd52c1d760d&country=IL&year=2021'
  // let cities_url = 'https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=101'

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,  // the data still not loaded
    }
  }

  
  componentDidMount() {
    // consume the data
    fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=101')
      .then(res => res.json())  // convert to JSON
      .then(json => {
        this.setState({
          isLoaded: true, // the data has been loaded
          items: json, 
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if(!isLoaded){
      return <div>Loading ...</div>
    } 
    else{
        return (
        <div className="App">
          <ul>
            {
              items.result.records.map(item => (
                 <li key={item._id}> 
                     City: {item.שם_ישוב}
                 </li>
            ))};
          </ul>
        </div>
      );
    }
    
  }

}
export default App