class Formatter {
  //add static methods here

  static capitalize(stg){
    return stg[0].toUpperCase() + (stg.length > 1? stg.slice(1) : "")
  }

  static sanitize(stg){
    return stg.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(stg){
    let reserve = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = stg.split(" ")
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