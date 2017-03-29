export const LIST_COUNTRY = 'LIST_COUNTRY';

export const getCountryList = () => {
  return {
    type: LIST_COUNTRY,
    list: ['India', 'Australia']
  }
}
