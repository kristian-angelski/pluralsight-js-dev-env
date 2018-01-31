import './index.css';

import numeral from 'numeral';

const bookValue = numeral(500).format('$0,0.00');
console.log(`I would pay ${bookValue} for this awesome book!`); // eslint-disable-line no-console
