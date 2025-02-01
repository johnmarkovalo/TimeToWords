// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") return "midnight";

  if (time === "12:00") return "midday";

  const [hour, minute] = time.split(":").map(Number);

  const wordsMapper = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five",
    "twenty-six",
    "twenty-seven",
    "twenty-eight",
    "twenty-nine",
  ];

  if (minute === 0) return `${wordsMapper[hour]} o'clock`;
  if (minute === 30) return `half past ${wordsMapper[hour]}`;
  if (minute === 15) return `quarter past ${wordsMapper[hour]}`;
  if (minute === 45) return `quarter to ${wordsMapper[(hour % 12) + 1]}`;

  const hourWord =
    minute <= 30 ? wordsMapper[hour] : wordsMapper[(hour % 12) + 1];
  const minuteWord =
    minute <= 30 ? wordsMapper[minute] : wordsMapper[60 - minute];

  return minute < 30
    ? `${minuteWord} past ${hourWord}`
    : `${minuteWord} to ${hourWord}`;
}

module.exports = { convertTimeToWords };
