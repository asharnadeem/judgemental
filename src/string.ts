import { z } from "zod";

const cuidSchema = z.string().cuid();
const datetimeSchema = z.string().datetime({ offset: true });
const emailSchema = z.string().email();
const urlSchema = z.string().url();
const uuidSchema = z.string().uuid();

/**
 * checks if string is a valid cuid
 *
 * @example
 * // returns true
 * "cjld2cjxh0000qzrmn831i7rn"
 * "cle6c54co000408mj0pfaa54o"
 *
 * @example
 * // returns false
 * "foo"
 * ""
 *
 * @param str - the input string
 * @returns returns a boolean denoting whether or not `str` is a valid cuid
 */
export function isCuid(str: string): boolean {
  return cuidSchema.safeParse(str).success;
}

/**
 * checks if string is a valid datetime
 *
 * @example
 * // returns true
 *
 * @example
 * // returns false

 *
 * @param str - the input string
 * @returns returns a boolean denoting whether or not `str` is a valid datetime
 */
export function isDatetime(str: string): boolean {
  return datetimeSchema.safeParse(str).success;
}

/**
 * checks if string is a valid email
 *
 * @example
 * // returns true
 * "foo@bar.com"
 * "foo.bar@baz.qux.com"
 *
 * @example
 * // returns false
 * "foo.com"
 * "foo.bar.com"
 * ""
 *
 * @param str - the input string
 * @returns returns a boolean denoting whether or not `str` is a valid email
 */
export function isEmail(str: string): boolean {
  return emailSchema.safeParse(str).success;
}

/**
 * checks if string is a valid url
 *
 * @example
 * // returns true
 * "https://www.foo.com"
 * "http://www.foo.com"
 * "www.foo.com"
 * "foo.com"
 * "foo.bar.com"
 *
 * @example
 * // returns false
 * "foo"
 * "123"
 * ""
 *
 * @param str - the input string
 * @returns returns a boolean denoting whether or not `str` is a valid url
 */
export function isUrl(str: string): boolean {
  return urlSchema.safeParse(str).success;
}

/**
 * checks if string is a valid uuid
 *
 * @example
 * // returns true
 * "f5d46a31-5f8d-4f17-864f-70f796263a34"
 * "b8720428-ad8e-11ed-afa1-0242ac120002"
 *
 * @example
 * // returns false
 * "123-456"
 * "foo-bar"
 * "foo"
 * ""
 *
 * @param str - the input string
 * @returns returns a boolean denoting whether or not `str` is a valid uuid
 */
export function isUuid(str: string): boolean {
  return uuidSchema.safeParse(str).success;
}
