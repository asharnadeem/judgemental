import { z } from "zod";

const cuidSchema = z.string().cuid();
const datetimeSchema = z.string().datetime({ offset: true });
const emailSchema = z.string().email();
const ipSchema = z.string().ip();
const ipv4Schema = z.string().ip({ version: "v4" });
const ipv6Schema = z.string().ip({ version: "v6" });
const ulidSchema = z.string().ulid();
const urlSchema = z.string().url();
const uuidSchema = z.string().uuid();
const whitespaceChars = [
  "\u0009", // horizontal tabulation
  "\u0020", // space
  "\u000A", // line feed
  "\u000B", // vertical tabulation
  "\u000C", // form feed
  "\u000D", // carriage return
  "\u241C", // file separator
  "\u241D", // group separator
  "\u241E", // record separator,
  "\u241F", // unit separator
];

/**
 * Returns a boolean value denoting whether the input string contains any whitespace
 *
 * @example Returns true
 * ```
 * containsWhitespace("foo bar");
 * ```
 * @example Returns false
 * ```
 * containsWhitespace("foo");
 * ```
 */
export function containsWhitespace(str: string): boolean {
  for (const s of str) {
    if (isWhitespace(s)) {
      return true;
    }
  }
  return false;
}

/**
 * Returns a boolean value denoting whether the two input strings are equivalent, ignoring case
 *
 * @example Returns true
 * ```
 * equalsIgnoreCase("foo", "foo");
 * ```
 * @example Returns false
 * ```
 * equalsIgnoreCase("foo", "bar");
 * ```
 */
export function equalsIgnoreCase(str1: string, str2: string) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns a boolean value denoting whether the input string contains only alphabetical characters
 *
 * @example Returns true
 * ```
 * isAlpha("foo");
 * ```
 * @example Returns false
 * ```
 * isAlpha("foo123");
 * ```
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Returns a boolean value denoting whether the input string contains only alphanumeric characters
 *
 * @example Returns true
 * ```
 * isAlphaNumeric("foo123");
 * ```
 * @example Returns false
 * ```
 * isAlphaNumeric("foo@bar");
 * ```
 */
export function isAlphaNumeric(str: string): boolean {
  for (const s of str) {
    if (!isAlpha(s) && !isNumeric(s)) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a boolean value denoting whether the input string is blank (all whitespace)
 *
 * @example Returns true
 * ```
 * isBlank("     ");
 * ```
 * @example Returns false
 * ```
 * isBlank("foo bar");
 * ```
 */
export function isBlank(str: string): boolean {
  for (const s of str) {
    if (!isWhitespace(s)) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a boolean value denoting whether the input string is a valid {@link https://github.com/paralleldrive/cuid | cuid}
 *
 * @example Returns true
 * ```
 * isCuid("clekrsk20000108lb6pcbbh2n");
 * ```
 * @example Returns false
 * ```
 * isCuid("cffb0eda-c519-11ed-afa1-0242ac120002");
 * ```
 */
export function isCuid(str: string): boolean {
  return cuidSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid datetime
 *
 * @example Returns true
 * ```
 * isDatetime("2023-01-01T00:00:00Z");
 * ```
 * @example Returns false
 * ```
 * isDatetime("2023_01_45");
 * ```
 */
export function isDatetime(str: string): boolean {
  return datetimeSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid email string
 *
 * @example Returns true
 * ```
 * isEmail("foo@bar.com");
 * ```
 * @example Returns false
 * ```
 * isEmail("foo.com");
 * ```
 */
export function isEmail(str: string): boolean {
  return emailSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid IP address
 *
 * @example Returns true for a valid IPv4
 * ```
 * isIp("245.108.222.0");
 * ```
 * @example Returns true for a valid IPv6
 * ```
 * isIp("269f:1230:73e3:318d:842b:daab:326d:897b");
 * ```
 * @example Returns false
 * ```
 * isIp("foo123");
 * ```
 *
 */
export function isIp(str: string): boolean {
  return ipSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid IPv4 address
 *
 * @example Returns true
 * ```
 * isIpV4("245.108.222.0");
 * ```
 * @example Returns false
 * ```
 * isIpV4("269f:1230:73e3:318d:842b:daab:326d:897b");
 * ```
 *
 */
export function isIpV4(str: string): boolean {
  return ipv4Schema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid IPv6 address
 *
 * @example Returns true
 * ```
 * isIpV6("269f:1230:73e3:318d:842b:daab:326d:897b");
 * ```
 * @example Returns false
 * ```
 * isIpV6("245.108.222.0");
 * ```
 *
 */
export function isIpV6(str: string): boolean {
  return ipv6Schema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid JSON string
 *
 * @example Returns true
 * ```
 * isJson('{"foo":"bar","baz":123,"qux":false}');
 * ```
 * @example Returns false
 * ```
 * isJson("{foo:bar}");
 * ```
 *
 */
export function isJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Returns a boolean value denoting whether the input string is all lowercase
 *
 * @example Returns true
 * ```
 * isLowercase("foo");
 * ```
 * @example Returns false
 * ```
 * isLowercase("Foo");
 * ```
 *
 */
export function isLowercase(str: string): boolean {
  return str.toLowerCase() === str;
}

/**
 * Returns a boolean value denoting whether the input string is numeric
 *
 * @example Returns true
 * ```
 * isNumeric("123456789");
 * ```
 * @example Returns false
 * ```
 * isNumeric("foo123");
 * ```
 *
 */
export function isNumeric(str: string): boolean {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
}

/**
 * Returns a boolean value denoting whether the input string is a valid {@link https://github.com/ulid/spec | ulid}
 *
 * @example Returns true
 * ```
 * isUlid("01GVRY40B7T37W8V7XE55DRZ3C");
 * ```
 * @example Returns false
 * ```
 * isUlid("7c9f66e7-f6d8-481e-87b8-c4a6d3f57c04");
 * ```
 *
 */
export function isUlid(str: string): boolean {
  return ulidSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is all uppercase
 *
 * @example Returns true
 * ```
 * isUppercase("FOO");
 * ```
 * @example Returns false
 * ```
 * isUppercase("Foo");
 * ```
 *
 */
export function isUppercase(str: string): boolean {
  return str.toUpperCase() === str;
}

/**
 * Returns a boolean value denoting whether the input string is a valid URL
 *
 * @example Returns true
 * ```
 * isUrl("https://foo.com");
 * ```
 * @example Returns false
 * ```
 * isUrl("foo@bar.com");
 * ```
 *
 */
export function isUrl(str: string): boolean {
  return urlSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input string is a valid {@link https://en.wikipedia.org/wiki/Universally_unique_identifier | uuid}
 *
 * @example Returns true
 * ```
 * isUuid("7c9f66e7-f6d8-481e-87b8-c4a6d3f57c04");
 * ```
 * @example Returns false
 * ```
 * isUuid("01GVRY40B7T37W8V7XE55DRZ3C");
 * ```
 *
 */
export function isUuid(str: string): boolean {
  return uuidSchema.safeParse(str).success;
}

/**
 * Returns a boolean value denoting whether the input char (or first index of the input string) is whitespace
 *
 * @example Returns true
 * ```
 * isWhitespace(" ");
 * ```
 * @example Returns true
 * ```
 * isWhitespace(" foo");
 * ```
 * @example Returns false
 * ```
 * isWhitespace("f");
 * ```
 *
 */
export function isWhitespace(str: string): boolean {
  const char = str.charAt(0);
  if (!whitespaceChars.includes(char)) {
    return false;
  }
  return true;
}
