import axios from 'axios';
import { CountryType } from './types';
import { useEffect, useState } from 'react';

function App(){
    const [countries, setCountries] = useState<CountryType[]>([]);

    const getCountries = async() => {
        try{
        const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all");
        setCountries(data);            
      }
        catch{console.log("api xetasi");}
    };
    useEffect(()=> {
        getCountries()
    }, []);
    console.log({countries});

return <div>
    {countries.map(country =>{
        return <p> {country.name.common} - {country.capital}</p>
    })}
</div>

}
export default App;         