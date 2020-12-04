const size = {
  h1: 38,
  h2: 34,
  h3: 24,
  h4: 17,
};
const weight = {
  light: '200',
  normal: '400',
  bold: '700',
};
const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: size.h3,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: size.h4,
  },
};

export default {
  size,
  style,
  weight,
};
