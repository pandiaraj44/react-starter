export const LIST_COUNTRY = 'LIST_COUNTRY';

export const getCountryList = () => {
  return {
    type: LIST_COUNTRY,
    list: ['India', 'Australia']
  }
}

export const getCountryList1 = () => {
  return {
    type: LIST_COUNTRY,
    list: ['India1', 'Australia']
  }
}
