import axios from "axios";

const API_KEY = "a6de0894081a4984f87a9de3f599d126";

const getCityData = async (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export default getCityData;
