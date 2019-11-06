class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^\w\s-']+/g, '');
  }

  static titleize(string) {
    const excluded = [
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from',
      'the',
    ];
    let newStringArr = (
      string[0].toUpperCase() + string.slice(1).toLowerCase()
    ).split(' ');

    return newStringArr
      .map(word => {
        if (excluded.includes(word)) return word;
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
}
