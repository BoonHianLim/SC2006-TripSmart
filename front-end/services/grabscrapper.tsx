import axios from 'axios';

const API_URL = 'http://localhost:5000/farecheck'; // replace with your API URL

const getGrabFare = async (pickupLocation: string, dropoffLocation: string) => {
  try {
    const response = await axios.get(`${API_URL}?pickup=${pickupLocation}&dropoff=${dropoffLocation}`);
    const data = response.data;
    return data.fare;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getGrabFare;
