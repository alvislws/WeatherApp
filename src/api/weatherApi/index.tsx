import axios from "axios";
import { WeatherDetails } from "../../types";
import { getDateTimeStamp, generateUUID } from "../../utils";

export const getWeatherDetails = async (
  input: string
): Promise<WeatherDetails | string> => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    const mainTemp = res.data.main;
    const dateTimeStamp = getDateTimeStamp();
    const uniqueId = generateUUID();

    return {
      current: Math.trunc(mainTemp.temp).toString(),
      min: Math.trunc(mainTemp.temp_min).toString(),
      max: Math.trunc(mainTemp.temp_max).toString(),
      countryCode: res.data.sys.country,
      dateTimeStamp: dateTimeStamp,
      humidity: `${mainTemp.humidity}%`,
      id: uniqueId,
    };
  } catch (error) {
    return `Error: ${error}`;
  }
};
