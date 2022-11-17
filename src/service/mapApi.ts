import axios from 'axios';
import { IJob, ILocation } from '../models/models';

const API_KEY: string = process.env.REACT_APP_API_KEY as string;

const fetchPlaceWithErrorHandling = async (url: string): Promise<string> => {
  try {
    const response = await axios.get(url);
    return response.data.results[0].formatted_address;
  } catch (error) {
    return 'Not found';
  }
};

export const mapApi = async (items: IJob[]) => {
  const locations = items.map((item: { location: ILocation }) => item.location);
  const promises = locations.map(location => {
    const response = fetchPlaceWithErrorHandling(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`
    );
    return response;
  });

  const addresses = await Promise.all(promises);
  for (let i = 0; i < items.length; i += 1) {
    for (let j = 0; j < addresses.length; j += 1) {
      items[i].city = addresses[j];
    }
  }
  return items;
};
