// import { type } from "os";

class Formatter {
//add static methods here
  static capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ']+/g, '');
  }

  static titleize(str) {
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let arr = str.split(' ');
    let titleized = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || !lowerCaseWords.includes(arr[i])) {
        titleized.push(this.capitalize(arr[i]));
      } else {
        titleized.push(arr[i]);
      }
    }
    return titleized.join(' ');
  }
}