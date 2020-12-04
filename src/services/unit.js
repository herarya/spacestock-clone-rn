import APIService from '../utils/ApiService';

export const fetchUnitAreas = async () => {
  return await APIService.request({
    url: 'discovery/1.0/area?pin_as_explore=true',
    method: 'GET',
  });
};

export const fetchPopularApartment = async () => {
  return await APIService.request({
    url:
      'discovery/1.0/complex?sort=asc(price)&listing_type=buy&id=5c7f63457e409ee0933b0e52,5c7f63577e409ee0933b0ef8,5c7f63167e409ee0933b0cc0,5c7f63657e409ee0933b0f71,5c7f633f7e409ee0933b0e25,5c7f63137e409ee0933b0ca4,5c7f63127e409ee0933b0c9d,5c7f62fb7e409ee0933b0bd1',
    method: 'GET',
  });
};

export const requestAutocomplete = async (params) => {
  return await APIService.request({
    url: `discovery/${params.unitType}/1.0/autocomplete`,
    method: 'GET',
    params,
  });
};

export const requestUnits = async (params) => {
  let url = 'discovery/1.0/complex';
  if (params.building_type === 'office') {
    url = 'discovery/office/1.0/tower';
  }

  return await APIService.request({
    url: `${url}`,
    method: 'GET',
    params,
  });
};
