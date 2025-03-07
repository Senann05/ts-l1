import axios from 'axios';
import { CountryType } from './types';
import { useEffect, useState } from 'react';
import Country from "./countries/Country"
import Loading from './countries/Loading';

function App(){
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getCountries = async() => {
        try{
            setLoading(true);
        const { data } = await axios.get<CountryType[]>("https://restcountries.com/v3.1/all");
        setCountries(data);            
      }
        catch{console.log("api xetasi");}
     finally {
        setLoading(false);
    }};
    useEffect(()=> {
        getCountries()
    }, []);
    console.log({countries});

return <div>
    <Loading loading={loading}>
    {countries.map(country =>{
       return <Country country ={country} />
    })}</Loading>
</div>

}
export default App;         