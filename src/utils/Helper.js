/* eslint-disable prettier/prettier */
export const getLowerPriceApartment = (summaries) => {
  let prices = [];
  for (const key in summaries) {
    if (summaries.hasOwnProperty(key)) {
      const element = summaries[key];
      prices.push(element?.pricing_summary?.lowest_prices);
    }
  }
  const lowerPrice = prices.length > 0 ? prices.sort((a, b) => a - b)[0] : 0;
  return lowerPrice;
};

export const getUnitAvailApartment = (summaries) => {
    let unitAvailability = 0;
    for (const key in summaries) {
      if (summaries.hasOwnProperty(key)) {
        const element = summaries[key];
        unitAvailability += element.unit_availability;
      }
    }
    return unitAvailability;
};
export const formatPriceCompact = price => {
  var si = [
    {value: 1, symbol: ''},
    {value: 1e3, symbol: 'Ribu'},
    {value: 1e6, symbol: 'Juta'},
    {value: 1e9, symbol: 'Milyar'},
    {value: 1e12, symbol: 'T'},
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (price >= si[i].value) {
      break;
    }
  }
  return (price / si[i].value).toFixed(1).replace(rx, '$1') + si[i].symbol;
};
