module.exports = function toReadable (number) {
  let str = String(number);
    let result = '';
    const units = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (str.length === 3 && number % 100 === 0) {
        result = `${units[number / 100]} hundred`;
    }
    else if (str.length === 3 && number % 100 !== 0) {
        let remainder = number % 100;
        if (remainder < 20) {
            result = `${units[str[0]]} hundred ${units[remainder]}`;
        }
        else if (remainder % 10 === 0) {
            result = `${units[str[0]]} hundred ${tens[str[1] - 1]}`;
        }
        else {
            result = `${units[str[0]]} hundred ${tens[str[1] - 1]} ${units[str[2]]}`;
        }
    }   
    else if (str.length === 2 && (number % 10 !== 0) && number > 20) {
        result = `${tens[str[0]-1]} ${units[number % 10]}`;
    }
    else if (str.length === 2 && (number % 10 === 0)) {
        result = `${tens[str[0]-1]}`
    }
    else if (number < 20) {
        result = `${units[number]}`;
    }
    return result;
}
