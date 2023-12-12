import { ChangeEvent, useState } from "react";
import "./index.scss";
import { getWeatherDetails } from "../../api/weatherApi";
import "../../css/icon.scss";
import { useWeatherStore } from "../../store/weatherStore";
import SearchBar from "../../component/searchBar";
import CurrentWeatherInfo from "../../component/currentWeatherInfo";
import WeatherSearchHistory from "../../component/weatherSearchHistory";
import clsx from "clsx";

const DashBoard = (): JSX.Element => {
  const [errormsg, setErrorMsg] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const onInputChange = (e: ChangeEvent<any>) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const {
    setWeatherArr,
    weatherArr,
    setCurrentWeatherInfo,
    currentWeatherInfo,
    deleteWeatherArr,
    darkMode,
    setDarkMode,
  } = useWeatherStore();

  const onFetchRecords = async (input: string) => {
    const res = await getWeatherDetails(searchInput);
    if (typeof res !== "string") {
      setCurrentWeatherInfo(res);
      res.country = input;
      setWeatherArr(res);
      setErrorMsg("");
    } else {
      setErrorMsg("Please enter a valid country or city");
    }
  };

  const onClickDarkToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleSearchOnEnter = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      await onFetchRecords((e.target as HTMLInputElement).value);
    }
  };

  const onClickSearch = async (input: string) => {
    await onFetchRecords(input);
  };

  const onClickDelete = async (id: string) => {
    const updatedArr = weatherArr.filter((value) => value.id !== id);
    deleteWeatherArr(updatedArr);
  };

  return (
    <div className={clsx(!darkMode && "light-mode")}>
      <div className="wrapper">
        <SearchBar
          onInputChange={onInputChange}
          handleSearchOnEnter={handleSearchOnEnter}
          searchInput={searchInput}
          onClickSearch={onClickSearch}
          onClickDarkToggle={onClickDarkToggle}
          darkMode={darkMode}
        />
        {errormsg && <p className="error-msg">{errormsg}</p>}
        <div className="wrapper">
          <span className="ico-sun" />
          <div className="card-wrapper">
            {currentWeatherInfo && (
              <CurrentWeatherInfo currentWeatherInfo={currentWeatherInfo} />
            )}
            <WeatherSearchHistory
              onClickDelete={onClickDelete}
              onClickSearch={onClickSearch}
              weatherArr={weatherArr}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
