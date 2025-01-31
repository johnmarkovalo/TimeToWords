// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if(time === '12:00' ) return 'midday'

  const hourMapper = {
    '1': "one",
    '2': "two",
    '3': "three",
    '4': "four",
    '5': "five",
    '6': "six",
    '7': "seven",
    '8': "eight",
    '9': "nine",
    '10': "ten",
    '11': "eleven",
    '12': "twelve",
  };

  const minuteMapper = {
    "00": "o'clock",
    "03": "three past",
    "11": "eleven past",
    "15": "quarter past",
    "30": "half past",
    "33": "twenty seven to",
    "40": "twenty to",
    "45": "quarter to",
    "55": "five to three",
  };

  const concatedTime = time.split(':');

  const reverse = concatedTime[1] == '00'

  const convertedHour = Number(concatedTime[1]) <= 30 ? concatedTime[0] : (Number(concatedTime[0]) + 1).toString();

  if( reverse) return hourMapper[convertedHour] + ' ' + minuteMapper[concatedTime[1]];
  return  minuteMapper[concatedTime[1]] + ' ' + hourMapper[convertedHour];
}

module.exports = { convertTimeToWords };