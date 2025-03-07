import { CountryType } from "../types"

type ICountryProps = {
    country: CountryType
};

const Country: React.FC<ICountryProps> = (props) => {
return(
    <div>
        {props.country.capital}
    </div>
)
}
export default Country;