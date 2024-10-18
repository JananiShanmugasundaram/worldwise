/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";
import Spinner from "../components/Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

import { useCities } from "../contexts/CitiesContext";

// eslint-disable-next-line react/prop-types
function CountryList() {
  const { cities, isLoading } = useCities();
  const countries = cities.reduce((acc, city) => {
    if (!acc?.map((city) => city.country).includes(city?.country))
      return [
        ...acc,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return acc;
  }, []);
  if (isLoading) <Spinner />;
  if (countries.length <= 0)
    <Message message={"Add first country by clicking on the map"} />;
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
