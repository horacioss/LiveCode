
import React, {useState, useEffect} from "react";

import './App.css';

import {getData} from "./getData";

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    
    const getUserData = async () => {
      
      const users = await getData();
      
      setData(users);

    };

    getUserData()  


  }, [data])


  const sortBy = (name) => {  
    return data.sort((x, y) => x.location[name].localeCompare(y.location[name]));   
  }



  return (
    <div className="App">

      <input type='text'/>
      <table> 
        <th>
          <tr>
            <td onClick={()=>setData(sortBy('city'))} >City</td>
            <td onClick={()=>sortBy('state')}>State</td>
            <td onClick={()=>sortBy('country')}>Country</td>
            <td onClick={()=>sortBy('postcode')}>PostCode</td>
            <td onClick={()=>sortBy('city')}>Number</td>
            <td onClick={()=>sortBy('city')}>Name</td>
            <td onClick={()=>sortBy('city')}>Latitude</td>
            <td onClick={()=>sortBy('city')}>Longitude</td>
          </tr>
        </th>
        <tbody>
          {
            data?.map((el, i) => {
              return  (
                <tr  key={i}>
                     <td>{el.location.city}</td>
                     <td>{el.location.state}</td>
                     <td>{el.location.country}</td>
                     <td>{el.location.postcode}</td>
                     <td>{el.location.street.number}</td>
                     <td>{el.location.street.name}</td>
                     <td>{el.location.coordinates.latitude}</td>
                    <td>{el.location.coordinates.longitude}</td>
                 </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
