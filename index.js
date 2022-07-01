class Formatter {
  //add static methods here
  static capitalize(string) {
    const arr = string.split('');
    arr[0] = arr[0].toUpperCase()
    const newString = arr.join(''); 
    return newString; 
  }

  static sanitize(string) {
    const arr = string.split('');
    const regEx =  /^[a-z0-9]+$/i
    const newArr = arr.filter(value => value = regEx || value === '-' || value === `'` || value === ' ')
    const newString = newArr.join('')
  }

  static titleize(string) { 
    const arr = string.split('');
    arr[0] = arr[0].toUpperCase()

  }
}

Formatter.capitalize('alligator')