export function isToday(date: Date): boolean {
  date = new Date(date);
  const now = new Date();

  return (
    now.getDate() === date.getDate() &&
    now.getMonth() === date.getMonth() &&
    now.getFullYear() === date.getFullYear()
  );
}

export function isYesterday(date: Date): boolean {
  date = new Date(date);
  const now = new Date();
  const yesterday = now;
  yesterday.setDate(now.getDate() - 1);

  return (
    yesterday.getDate() === date.getDate() &&
    yesterday.getMonth() === date.getMonth() &&
    yesterday.getFullYear() === date.getFullYear()
  );
}

// Make a fuzzy time

const minute = 60,
  hour = minute * 60,
  day = hour * 24,
  week = day * 7;

export function fromNow(date: Date): string {
  date = new Date(date);
  const now = new Date();
  const delta = Math.round((now.getTime() - date.getTime()) / 1000);

  let fuzzy = '';

  if (delta < 30) {
    fuzzy = 'justo ahora';
  } else if (delta < minute) {
    fuzzy = `hace ${delta} segundos`;
  } else if (delta < 2 * minute) {
    fuzzy = 'un minuto';
  } else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' min';
  } else if (Math.floor(delta / hour) == 1) {
    fuzzy = 'hace una hora';
  } else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' h';
  } else {
    fuzzy = Math.floor(delta / day) + ' d';
  }

  return fuzzy;
}

export function difference(date1: Date, date2: Date): number {
  const m = (date1.getMilliseconds() - date2.getMilliseconds()) / 1000;
  return Math.floor(m / day);
}
