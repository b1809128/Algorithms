const sides = (literal, ...expression) => {
    const [chieuDai, chieuRong] = expression;
    let s1 = (chieuRong + Math.sqrt(Math.pow(chieuRong, 2) - 16 * chieuDai)) / 4;
    let s2 = (chieuRong - Math.sqrt(Math.pow(chieuRong, 2) - 16 * chieuDai)) / 4;
    return [s1, s2].sort();
  };