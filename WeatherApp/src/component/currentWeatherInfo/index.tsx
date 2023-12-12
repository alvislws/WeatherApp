import { WeatherDetails } from "../../types";
import "./index.scss";

interface CurrentWeatherInfoProps {
  currentWeatherInfo: WeatherDetails;
}

const CurrentWeatherInfo = (props: CurrentWeatherInfoProps): JSX.Element => {
  const { currentWeatherInfo } = props;

  return (
    <div className="current-weather-info">
      <p className="header">Today's Weather</p>
      <p className="current-temp">{currentWeatherInfo.current}&deg;</p>
      <span className="min-max-wrapper">
        <p className="desc">H: {currentWeatherInfo.max}&deg;</p>
        <p>L: {currentWeatherInfo.min}&deg;</p>
      </span>
      <span className="timestamp-wrapper">
        <p className="location">{`${currentWeatherInfo.country}, ${currentWeatherInfo.countryCode}`}</p>
        <span className="right-alignment">
          <p className="timestamp">{currentWeatherInfo.dateTimeStamp}</p>
          <p className="humidity">{`Humidity: ${currentWeatherInfo.humidity}`}</p>
          <p className="clouds">Clouds</p>
        </span>
      </span>
    </div>
  );
};

export default CurrentWeatherInfo;
