import { z } from 'zod';

const cuidSchema = z.string().cuid();
const datetimeSchema = z.string().datetime({ offset: true });
const emailSchema = z.string().email();
const urlSchema = z.string().url();
const uuidSchema = z.string().uuid();
const whitespaceChars = [
  '\u0009', // horizontal tabulation
  '\u0020', // space
  '\u000A', // line feed
  '\u000B', // vertical tabulation
  '\u000C', // form feed
  '\u000D', // carriage return
  '\u241C', // file separator
  '\u241D', // group separator
  '\u241E', // record separator,
  '\u241F', // unit separator
];

export function containsWhitespace(str: string): boolean {
  for (const s of str) {
    if (isWhitespace(s)) {
      return true;
    }
  }
  return false;
}

export function equalsIgnoreCase(str1: string, str2: string) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

export function isAlphaNumeric(str: string): boolean {
  for (const s of str) {
    if (!isAlpha(s) && !isNumeric) {
      return false;
    }
  }
  return true;
}

export function isBlank(str: string): boolean {
  for (const s of str) {
    if (!isWhitespace(s)) {
      return false;
    }
  }
  return true;
}

export function isCuid(str: string): boolean {
  return cuidSchema.safeParse(str).success;
}

export function isDatetime(str: string): boolean {
  return datetimeSchema.safeParse(str).success;
}

export function isEmail(str: string): boolean {
  return emailSchema.safeParse(str).success;
}

export function isJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (_) {
    return false;
  }
}

export function isNumeric(str: string): boolean {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
}

export function isUrl(str: string): boolean {
  return urlSchema.safeParse(str).success;
}

export function isUuid(str: string): boolean {
  return uuidSchema.safeParse(str).success;
}

export function isWhitespace(str: string): boolean {
  const char = str.charAt(0);
  if (!whitespaceChars.includes(char)) {
    return false;
  }
  return true;
}
