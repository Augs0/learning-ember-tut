import { helper } from '@ember/component/helper';

export default helper(function currency(params, hash = {}) {
  const [number] = params;
  const { sign = '£' } = hash;
  const pounds = Math.floor(number);
  let pennies = Math.floor(number * 100 % 100);
  if (pennies.toString().length === 1) {
    pennies = '0' + pennies;
  }
  return `${sign}${pounds}.${pennies}`;
});
