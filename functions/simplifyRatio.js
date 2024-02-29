// Greatest Common Denominator for height and width ratios of media content
function simplifyRatio(width, height) {
    console.log('Function: simplifyRatio');
    console.log('    width / height: ' + width + '/' + height);
    let gcd = findGCD(width, height);
    return {width: width / gcd, height: height / gcd};
}
function findGCD(a, b) { // Euclidean algorithm for finding GCD
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
  }

export { simplifyRatio };