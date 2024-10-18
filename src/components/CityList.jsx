/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

// eslint-disable-next-line react/prop-types
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) <Spinner />;
  if (cities.length <= 0)
    <Message message={"Add first city by clicking on the map"} />;
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
