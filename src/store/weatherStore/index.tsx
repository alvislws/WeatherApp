import { create } from "zustand";
import { WeatherDetails } from "../../types";
import { persist, devtools } from "zustand/middleware";

interface WeatherStore {
  weatherArr: WeatherDetails[] | [];
  setWeatherArr: (obj: WeatherDetails) => void;
  deleteWeatherArr: (obj: WeatherDetails[]) => void;
  currentWeatherInfo?: WeatherDetails;
  setCurrentWeatherInfo: (obj: WeatherDetails) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const useWeatherStore = create<WeatherStore>()(
  devtools(
    persist(
      (set, get) => ({
        currentWeatherInfo: undefined,
        setCurrentWeatherInfo: (obj) => set({ currentWeatherInfo: obj }),
        weatherArr: [],
        setWeatherArr: (obj) => set({ weatherArr: [obj, ...get().weatherArr] }),
        deleteWeatherArr: (arr) => set({ weatherArr: arr }),
        darkMode: true,
        setDarkMode: (val) => set({ darkMode: val }),
      }),
      {
        name: "weather-app-data",
      }
    )
  )
);
