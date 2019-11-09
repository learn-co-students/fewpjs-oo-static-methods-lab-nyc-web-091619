class Formatter {
  //add static methods here

  
  // capitalize
  // ✓ is a static method
  // ✓ uppercases the first letter in a String
  static capitalize(string){
    return string[0].toUpperCase() + (string.length > 1? string.slice(1) : "")
  }


  // sanitize
  //   ✓ is a static method
  //   ✓ removes non-alphanumeric characters except for dash, single quote and space
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }


  // titleize
  // ✓ is a static method
  // ✓ capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  // ✓ always capitalizes the first word
  static titleize(string){
    let reserve = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = string.split(" ")
    let newWords = words.map(word => {
      if(!reserve.includes(word)){
         return this.capitalize(word)
      }else{
        return word
      }
    })

    newWords[0] = this.capitalize(words[0])
    return newWords.join(" ")
  }

}