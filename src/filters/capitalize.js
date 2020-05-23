const capitalizeString = {}

function upperFirstWord (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
}

capitalizeString.install = function (Vue) {
  Vue.filter('capitalize', (val) => {
    return upperFirstWord(val)
  })
}

export default capitalizeString