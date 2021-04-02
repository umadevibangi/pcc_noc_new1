export default (value = '') => ((parseFloat(value) >= 0 && parseFloat(value) <= 100) || (value === ''))
