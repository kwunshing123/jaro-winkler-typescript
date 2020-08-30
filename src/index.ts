interface Options {
    caseSensitive: boolean; 
}

export default (str1: string, str2: string, options?: Options) : number => {
    // Exit early if either are empty.
    if (str1.length === 0 || str2.length === 0) {
      return 0;
    }

    // Convert to upper if case-sensitive is false.
    if (options && !options.caseSensitive) {
      str1 = str1.toUpperCase();
      str2 = str2.toUpperCase();
    }

    // Exit early if they're an exact match.
    if (str1 === str2) {
      return 1;
    }

    let m = 0;
    let i;
    let j;

    let range = (Math.floor(Math.max(str1.length, str2.length) / 2)) - 1;
    let str1Matches = new Array(str1.length);
    let str2Matches = new Array(str2.length);

    for (i = 0; i < str1.length; i++) {
      let low  = (i >= range) ? i - range : 0;
      let high = (i + range <= (str2.length - 1)) ? (i + range) : (str2.length - 1);

      for (j = low; j <= high; j++) {
        if (!str1Matches[i] && !str2Matches[j] && str1[i] === str2[j]) {
          ++m;
          str1Matches[i] = str2Matches[j] = true;
          break;
        }
      }
    }

    // Exit early if no matches were found.
    if (m === 0) {
      return 0;
    }

    // Count the transpositions.
    let k = 0;
    let numTrans = 0;

    for (i = 0; i < str1.length; i++) {
      if (str1Matches[i]) {
        for (j = k; j < str2.length; j++) {
          if (str2Matches[j]) {
            k = j + 1;
            break;
          }
        }

        if (str1[i] !== str2[j]) {
          ++numTrans;
        }
      }
    }

    let weight = (m / str1.length + m / str2.length + (m - (numTrans / 2)) / m) / 3;
    let l = 0;
    let p = 0.1;

    if (weight > 0.7) {
      while (str1[l] === str2[l] && l < 4) {
        ++l;
      }

      weight = weight + l * p * (1 - weight);
    }

    return weight;
};
