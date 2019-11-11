class Formatter {
  //add static methods here
  // ok! 🙌🏼

  static capitalize(string){
    // take the single character [charAt()] located at array index
    // of [0], change it toUpperCase(), and concat(add) the
    // return from the .slice(1) method used on "string", where 
    // the 1 is 'start' parameter for slice.  It indicates from
    // where the new copy should start duplicating from, returning
    // from position [1] ('second character') to the end of the 
    // 'string' array.
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  //  Write a method static sanitize that takes in a string and 
  //  removes all non-alphanumeric characters except for dashes, 
  //  single quotes and spaces.

  static sanitize(string) {
    // clean up characters by using regexp to search for 
    // characters that are not included in this:
    // (/[^\w\s '-]/gi) - regexp syntax is: '/pattern/modifiers;'
    //  '^' = negatation - means search for characters NOT in the brackets []
    // '\w' = any word character a-z, A-Z, 0-9, including the _ character
    // '\s' = is a metacharacter that represents any whitespace character,
    //        including space, tab, carriage return, new line, vertical tab or
    //        form-feed
    //  '- = represent single quote and dash
    // 'gi' modifiers after the closing / / represents g = global match, all 
    //        matches not just the first, and i = case-insensitive matching
    //
    //  replace matches with ''
    return string.replace(/[^\w\s '-]/gi, '')
  }

  static titleize(string) {
    // create a set of words to skip titleizing of
    const dontTitleize = new Set(["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"])
    // split the string given as an argument on every space ' '
    const splitString = string.split(' ')
    // create an empty array to hold the return array values
    const titleizedString = [];

    // push in the first word capitalized, every time.  Use charAt(0) to grab the character 
    // at the [0] index and capitalize it with toUpperCase().  Then make a copy of the rest
    // of the string using slice and concatenate it to the capitalized first letter.
    titleizedString.push(splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1));

    // loop through the rest of the Array, starting at index [1] because we took care of the 
    // first word above.  First check if its a member of the set of do-not-capitalize words
    // if so, just push it right in.  If not, then capitalize 1st letter and concatenate the 
    // rest of of the word
    for (let i = 1; i < splitString.length; i++) {
      if (dontTitleize.has(splitString[i])) {
        titleizedString.push(splitString[i])
      } 
      else {
        titleizedString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
      }
    }
    // join and add spaces ' ' and return to caller.
    return titleizedString.join(' ');
  }
}