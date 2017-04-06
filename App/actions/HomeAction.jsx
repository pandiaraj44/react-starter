export const LOAD_COUNTRY = 'LOAD_COUNTRY';
export const LOAD_COUNTRY_SUCCESS = 'LOAD_COUNTRY_SUCCESS';
export const LOAD_COUNTRY_FAILURE = 'LOAD_COUNTRY_FAILURE';
export const CLEAR_COUNTRY_LIST = 'CLEAR_COUNTRY_LIST';

export const LIST_COUNTRY = 'LIST_COUNTRY';

export const getCountryList = () => {
  return {
    types: [LOAD_COUNTRY, LOAD_COUNTRY_SUCCESS, LOAD_COUNTRY_FAILURE],
    promise: (client) => client.get('/country')
  }
}

export const getCountryList1 = () => {
  return {
    type: LIST_COUNTRY,
    list: ['India1', 'Australia']
  }
}

export const clearCountryList = () => {
  return {
    type: CLEAR_COUNTRY_LIST,
    list: []
  }
}
