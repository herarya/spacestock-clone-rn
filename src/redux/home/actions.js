import {defineAction} from 'redux-define';
import {APP_NAME_SPACE, CLEAR, FAILURE, REQUEST, SUCCESS} from '../root-state';

export const UNIT = defineAction('UNIT', [], APP_NAME_SPACE);

export const GET_UNIT_AREA = UNIT.defineAction(
  'GET_UNIT_AREA',
  [REQUEST, SUCCESS, FAILURE],
  UNIT,
);

export const getUnitAreas = () => ({
  type: GET_UNIT_AREA.REQUEST,
});

export const GET_APARTMENT_POPULAR = UNIT.defineAction(
  'GET_APARTMENT_POPULAR',
  [REQUEST, SUCCESS, FAILURE],
  UNIT,
);

export const getApartmentPopular = () => ({
  type: GET_APARTMENT_POPULAR.REQUEST,
});

export const GET_AUTOCOMPLETE = UNIT.defineAction(
  'GET_AUTOCOMPLETE',
  [REQUEST, SUCCESS, FAILURE, CLEAR],
  UNIT,
);

export const fetchAutoComplete = (params) => ({
  type: GET_AUTOCOMPLETE.REQUEST,
  params,
});

export const clearAutoComplete = () => ({
  type: GET_AUTOCOMPLETE.CLEAR,
});


export const GET_UNITS = UNIT.defineAction(
  'GET_UNITS',
  [REQUEST, SUCCESS, FAILURE],
  UNIT,
);

export const fetchUnits = (params) => ({
  type: GET_UNITS.REQUEST,
  params,
});