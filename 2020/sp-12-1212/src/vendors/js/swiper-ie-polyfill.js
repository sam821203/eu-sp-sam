// swiper 6.0.0 up polyfill to IE11
Number.isNaN = Number.isNaN || function(value) {
  return typeof value === 'number' && isNaN(value);
}