import { WeatherDetails } from "../../types";
import "./index.scss";

interface WeatherSearchHistoryProps {
  onClickSearch: (string: string) => void;
  onClickDelete: (string: string) => void;
  weatherArr: WeatherDetails[];
}

const WeatherSearchHistory = (
  props: WeatherSearchHistoryProps
): JSX.Element => {
  const { onClickSearch, onClickDelete, weatherArr } = props;

  return (
    <div className="weather-list-wrapper">
      <div className="header"> Search History</div>
      {weatherArr.length === 0 && (
        <div className="no-history">No past search history</div>
      )}
      {weatherArr.reverse().map((info) => (
        <span className="weather-detail-wrapper">
          <div className="loca-timestamp-wrapper">
            <p className="location">{`${info.country}, ${info.countryCode}`}</p>
            <p className="timestamp">{info.dateTimeStamp}</p>
          </div>
          <span className="ico-wrapper">
            <div
              className="circle-ico-wrapper"
              onClick={() => onClickSearch(info.country || "")}
            >
              <div className="ico-search-dark" />
            </div>
            <div
              className="circle-ico-wrapper"
              onClick={() => onClickDelete(info.id)}
            >
              <div className="ico-delete-dark" />
            </div>
          </span>
        </span>
      ))}
    </div>
  );
};

export default WeatherSearchHistory;
