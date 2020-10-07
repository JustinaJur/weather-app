import axios from "axios";

const API_KEY = "d1611a45987a47dfa73a3b2b26c5a93f";

const getCityData = async (latitude, longitude) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export default getCityData;
