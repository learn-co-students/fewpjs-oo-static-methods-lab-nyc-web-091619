class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    const noGo = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    let arrayOfStrings = this.capitalize(string).split(" ")

    return arrayOfStrings.map((word) => {
      if (noGo.includes(word)){
        return word
      } else {
        return this.capitalize(word)
      }    
    }).join(" ")
  }
}