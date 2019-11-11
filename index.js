class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0][0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = sentence.split(' ')
    let newWords = words.map(word => {
      if (!exception.includes(word)) {
        return this.capitalize(word)
      } else {
        return word
      }
    })
    newWords[0] = this.capitalize(words[0])
    return newWords.join(' ')
  }
}

//   static titleize(stg){
//     let reserve = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
//     let words = stg.split(" ")
//     let newWords = words.map(word => {
//       if(!reserve.includes(word)){
//          return this.capitalize(word)
//       }else{
//         return word
//       }
//     })

//     newWords[0] = this.capitalize(words[0])
//     return newWords.join(" ")
//   }
// }






  // static titleize(sentence) {
  //   let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  //   let words = sentence.split(' ')
  //   let newWords = words.map(function(word){
  //     if (!exception.includes(word)) {
  //       return capitalize(word)
  //     } else {
  //       return word
  //     }
  //   }, this)
  //   newWords[0] = this.capitalize(words[0])
  //   return newWords.join(' ')
  // }