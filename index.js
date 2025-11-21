// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time === '0:00') {
    return 'midnight';
  }
  if (time === '12:00') {
    return 'midday';
  }

  const [hoursInput, minutesInput] = time.split(':');
  const hours = parseInt(hoursInput, 10);
  const minutes = parseInt(minutesInput, 10);
  const hoursAsString = convertHoursToWords(hours);
  const minutesAsString = convertHoursToWords(minutes);

  if (Number.isNaN(hours) || Number.isNaN(minutes) || hoursAsString === undefined) {
    return 'invalid time';
  }

  if (minutes > 30) {
    const nextHour = hours + 1;
    const nextHourAsString = convertHoursToWords(nextHour);
    if (nextHourAsString === undefined) {
      return 'invalid time';
    }
    if (minutes === 45) {
      return 'quarter to ' + nextHourAsString;
    }
    const remainingMinutes = 60 - minutes;
    const remainingMinutesAsString = convertMinutesToWords(remainingMinutes);
    if (remainingMinutesAsString === undefined) {
      return 'invalid time';
    }
    return remainingMinutesAsString + ' to ' + nextHourAsString;
  }

  if (minutes === 0) {
    return hoursAsString + " o'clock";
  }
  if (minutes === 15) {
    return 'quarter past ' + hoursAsString;
  }
  if (minutes === 30) {
    return 'half past ' + hoursAsString;
  }
  if (minutes <= 30) {
    if (minutesAsString === undefined) {
      return 'invalid time';
    }
    return minutesAsString + ' past ' + hoursAsString;
  }

  return 'invalid time';
}

function convertMinutesToWords(mins) {
  switch (mins) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
    case 20:
      return 'twenty';
    case 21:
      return 'twenty one';
    case 22:
      return 'twenty two';
    case 23:
      return 'twenty three';
    case 24:
      return 'twenty four';
    case 25:
      return 'twenty five';
    case 26:
      return 'twenty six';
    case 27:
      return 'twenty seven';
    case 28:
      return 'twenty eight';
    case 29:
      return 'twenty nine';
    default:
      return undefined;
  }
}

function convertHoursToWords(hours) {
  switch (hours) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    default:
      return undefined;
  }
}

module.exports = { convertTimeToWords };
