import { faker } from "@faker-js/faker";
import * as stk from "../src";

describe("stk", () => {
  const alphaStr = faker.random.alpha();
  const alphaBlankStr = faker.lorem.sentence();
  const alphaNumericStr = faker.random.alphaNumeric(10); // min length of 10 to ensure mix of alpha and numeric
  const datetimeStr = faker.date.recent().toISOString();
  const emailStr = faker.internet.email();
  const ipStr = faker.internet.ip();
  const ipV4Str = faker.internet.ipv4();
  const ipV6Str = faker.internet.ipv6();
  const jsonStr = faker.datatype.json();
  const numericStr = faker.random.numeric();
  const specialCharStr = faker.internet.userAgent();
  const urlChar = faker.internet.url();
  const uuidChar = faker.datatype.uuid();

  describe("containsWhitespace", () => {
    it("is a string that contains whitespace", () => {
      const str = "foo bar";
      expect(stk.containsWhitespace(str)).toEqual(true);
    });
    it("is a string that contains only whitespace", () => {
      const str = "     ";
      expect(stk.containsWhitespace(str)).toEqual(true);
    });
    it("is a string that contains no whitespace", () => {
      const str = "foo_bar";
      expect(stk.containsWhitespace(str)).toEqual(false);
    });
    it("is a string that is empty", () => {
      const str = "";
      expect(stk.containsWhitespace(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains whitespace (random)", () => {
      expect(stk.containsWhitespace(alphaBlankStr)).toEqual(true);
    });
    it("is a string that contains no whitespace (random)", () => {
      expect(stk.containsWhitespace(alphaStr)).toEqual(false);
    });
  });

  describe("equalsIgnoreCase", () => {
    it("is two strings that are equal including case", () => {
      const str1 = "foo";
      const str2 = "foo";
      expect(stk.equalsIgnoreCase(str1, str2)).toEqual(true);
    });
    it("is two strings that are equal ignoring case", () => {
      const str1 = "foo";
      const str2 = "FoO";
      expect(stk.equalsIgnoreCase(str1, str2)).toEqual(true);
    });
    it("is two strings that are not equal including case", () => {
      const str1 = "foo";
      const str2 = "bar";
      expect(stk.equalsIgnoreCase(str1, str2)).toEqual(false);
    });
    it("is two strings that are not equal ignoring case", () => {
      const str1 = "foo";
      const str2 = "BaR";
      expect(stk.equalsIgnoreCase(str1, str2)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is two strings that are equal including case (random)", () => {
      expect(stk.equalsIgnoreCase(alphaBlankStr, alphaBlankStr)).toEqual(true);
    });
    it("is two strings that are equal ignoring case (random)", () => {
      expect(stk.equalsIgnoreCase(alphaBlankStr, alphaBlankStr.toUpperCase())).toEqual(true);
    });
    it("is two strings that are not equal (random)", () => {
      expect(stk.equalsIgnoreCase(alphaStr, numericStr)).toEqual(false);
    });
  });

  describe("isAlpha", () => {
    it("is a string that contains only alpha characters (lowercase)", () => {
      const str = "foo";
      expect(stk.isAlpha(str)).toEqual(true);
    });
    it("is a string that contains only alpha characters (uppercase)", () => {
      const str = "FOO";
      expect(stk.isAlpha(str)).toEqual(true);
    });
    it("is a string that contains only alpha characters (ignore case)", () => {
      const str = "fooBarBaz";
      expect(stk.isAlpha(str)).toEqual(true);
    });
    it("is a string that contains only numeric characters", () => {
      const str = "123";
      expect(stk.isAlpha(str)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters", () => {
      const str = "fooBar123";
      expect(stk.isAlpha(str)).toEqual(false);
    });
    it("is a string that contains whitespace", () => {
      const str = "foo bar";
      expect(stk.isAlpha(str)).toEqual(false);
    });
    it("is a string that contains special characters", () => {
      const str = "foo_bar@baz.qux";
      expect(stk.isAlpha(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alpha characters (random)", () => {
      expect(stk.isAlpha(alphaStr)).toEqual(true);
    });
    it("is a string that contains only numeric characters (random)", () => {
      expect(stk.isAlpha(numericStr)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters (random)", () => {
      expect(stk.isAlpha(alphaNumericStr)).toEqual(false);
    });
    it("is a string that contains whitespace (random)", () => {
      expect(stk.isAlpha(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains special characters (random)", () => {
      expect(stk.isAlpha(specialCharStr)).toEqual(false);
    });
  });

  describe("isAlphaNumeric", () => {
    it("is a string that contains only alpha characters", () => {
      const str = "foo";
      expect(stk.isAlphaNumeric(str)).toEqual(true);
    });
    it("is a string that contains only numeric characters", () => {
      const str = "0123456789";
      expect(stk.isAlphaNumeric(str)).toEqual(true);
    });
    it("is a string that contains only alphanumeric characters", () => {
      const str = "fooBar123";
      expect(stk.isAlphaNumeric(str)).toEqual(true);
    });
    it("is a string that contains whitespace", () => {
      const str = "foo bar";
      expect(stk.isAlphaNumeric(str)).toEqual(false);
    });
    it("is a string that contains special characters", () => {
      const str = "foo_bar_123@baz.qux";
      expect(stk.isAlphaNumeric(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alpha characters (random)", () => {
      expect(stk.isAlphaNumeric(alphaStr)).toEqual(true);
    });
    it("is a string that contains only numeric characters (random)", () => {
      expect(stk.isAlphaNumeric(numericStr)).toEqual(true);
    });
    it("is a string that contains only alphanumeric characters (random)", () => {
      expect(stk.isAlphaNumeric(alphaNumericStr)).toEqual(true);
    });
    it("is a string that contains whitespace (random)", () => {
      expect(stk.isAlphaNumeric(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains special characters (random)", () => {
      expect(stk.isAlphaNumeric(specialCharStr)).toEqual(false);
    });
  });

  describe("isBlank", () => {
    it("is a string that is empty", () => {
      const str = "";
      expect(stk.isBlank(str)).toEqual(true);
    });
    it("is a string that contains only whitespace", () => {
      const str = "     ";
      expect(stk.isBlank(str)).toEqual(true);
    });
    it("is a string that contains only whitespace and whitespace chars", () => {
      const str = " \n \v \f";
      expect(stk.isBlank(str)).toEqual(true);
    });
    it("is a string that contains only alphanumeric and whitespace chars", () => {
      const str = "foo1 bar2";
      expect(stk.isBlank(str)).toEqual(false);
    });
    it("is a string that contains all types of chars", () => {
      const str = "Foo1 @ Bar2";
      expect(stk.isBlank(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alphanumeric and whitespace chars (random)", () => {
      expect(stk.isBlank(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains all types of chars", () => {
      expect(stk.isBlank(specialCharStr)).toEqual(false);
    });
  });

  describe("isCuid", () => {
    it("is a string that is a valid cuid (lowercase)", () => {
      const str = "clekrsk20000108lb6pcbbh2n";
      expect(stk.isCuid(str)).toEqual(true);
    });
    it("is a string that is a valid cuid (uppercase) ", () => {
      const str = "CLEKRTI1V000208LB96G2E2KH";
      expect(stk.isCuid(str)).toEqual(true);
    });
    it("is a string that is a valid cuid (ignore case) ", () => {
      const str = "cLeKrU42c000308Lb9a32Au5w";
      expect(stk.isCuid(str)).toEqual(true);
    });
    it("is a string that contains only alphanumeric characters in a non cuid format", () => {
      const str = "foo1bar2";
      expect(stk.isCuid(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alphanumeric characters in a non cuid format (random)", () => {
      expect(stk.isCuid(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isDatetime", () => {
    it("is a string that is a valid datetime", () => {
      const str = "2023-01-01T00:00:00Z";
      expect(stk.isDatetime(str)).toEqual(true);
    });
    it("is a string that is a valid datetime with arbitrary precision", () => {
      const str = "2020-01-01T00:00:00.123456Z";
      expect(stk.isDatetime(str)).toEqual(true);
    });
    it("is a string that is a valid datetime with offset", () => {
      const str = "2020-01-01T00:00:00.123+02";
      expect(stk.isDatetime(str)).toEqual(true);
    });
    it("is a string that contains alphanumeric characters in a non datetime format", () => {
      const str = "foo1bar2";
      expect(stk.isDatetime(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid datetime (random)", () => {
      expect(stk.isDatetime(datetimeStr)).toEqual(true);
    });
    it("is a string that contains alphanumeric characters in a non datetime format (random)", () => {
      expect(stk.isDatetime(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isEmail", () => {
    it("is a string that is a valid email", () => {
      const str = "foo@bar.com";
      expect(stk.isEmail(str)).toEqual(true);
    });
    it("is a string that is a valid email with numbers", () => {
      const str = "foo.bar123@baz.com";
      expect(stk.isEmail(str)).toEqual(true);
    });
    it("is a string that is not a valid email", () => {
      const str = "foo bar";
      expect(stk.isEmail(str)).toEqual(false);
    });
    it("is a string in URL format that is not a valid email", () => {
      const str = "foo.bar.com";
      expect(stk.isEmail(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid email (random)", () => {
      expect(stk.isEmail(emailStr)).toEqual(true);
    });
    it("is a string that is not a valid email (random)", () => {
      expect(stk.isEmail(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isIp", () => {
    it("is a string that is a valid ip", () => {
      const str = "140.151.183.216";
      expect(stk.isIp(str)).toEqual(true);
    });
    it("is a string that is a valid ipv4", () => {
      const str = "245.108.222.0";
      expect(stk.isIp(str)).toEqual(true);
    });
    it("is a string that is a valid ipv6", () => {
      const str = "269f:1230:73e3:318d:842b:daab:326d:897b";
      expect(stk.isIp(str)).toEqual(true);
    });
    it("is a string that is not a valid ip at all", () => {
      const str = "foo bar";
      expect(stk.isIp(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid ip (random)", () => {
      console.log(ipStr);
      expect(stk.isIp(ipStr)).toEqual(true);
    });
    it("is a string that is a valid ipv4 (random)", () => {
      expect(stk.isIp(ipV4Str)).toEqual(true);
    });
    it("is a string that is a valid ipv6 (random)", () => {
      expect(stk.isIp(ipV6Str)).toEqual(true);
    });
    it("is a string that is not a valid ip (random)", () => {
      expect(stk.isIp(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isIpV4", () => {
    it("is a string that is a valid ipv4", () => {
      const str = "245.108.222.0";
      expect(stk.isIpV4(str)).toEqual(true);
    });
    it("is a string that is a valid ipv6 but not a valid ipv4", () => {
      const str = "269f:1230:73e3:318d:842b:daab:326d:897b";
      expect(stk.isIpV4(str)).toEqual(false);
    });
    it("is a string that is not a valid ip at all", () => {
      const str = "foo bar";
      expect(stk.isIpV4(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid ipv4 (random)", () => {
      expect(stk.isIpV4(ipV4Str)).toEqual(true);
    });
    it("is a string that is a valid ipv6 but not a valid ipv4 (random)", () => {
      expect(stk.isIpV4(ipV6Str)).toEqual(false);
    });
    it("is a string that is not a valid ipv4 (random)", () => {
      expect(stk.isIpV4(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isIpV6", () => {
    it("is a string that is a valid ipv6", () => {
      const str = "269f:1230:73e3:318d:842b:daab:326d:897b";
      expect(stk.isIpV6(str)).toEqual(true);
    });
    it("is a string that is a valid ipv4 but not a valid ipv6", () => {
      const str = "245.108.222.0";
      expect(stk.isIpV6(str)).toEqual(false);
    });
    it("is a string that is not a valid ip at all", () => {
      const str = "foo bar";
      expect(stk.isIpV6(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid ipv6 (random)", () => {
      expect(stk.isIpV6(ipV4Str)).toEqual(false);
    });
    it("is a string that is a valid ipv4 but not a valid ipv6 (random)", () => {
      expect(stk.isIpV6(ipV6Str)).toEqual(true);
    });
    it("is a string that is not a valid ipv6 (random)", () => {
      expect(stk.isIpV6(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isJson", () => {
    it("is a string that is a valid json", () => {
      const str = '{"foo":"bar","baz":"qux"}';
      expect(stk.isJson(str)).toEqual(true);
    });
    it("is a string that is a valid json with multiple data types", () => {
      const str = '{"foo":"bar","baz":123, "qux":false}';
      expect(stk.isJson(str)).toEqual(true);
    });
    it("is a string that is a valid json with nested objects", () => {
      const str = '{"foo": "bar","baz":{"qux":123}}';
      expect(stk.isJson(str)).toEqual(true);
    });
    it("is a string in that is not a valid json", () => {
      const str = "{foo:bar}";
      expect(stk.isJson(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid json (random)", () => {
      expect(stk.isJson(jsonStr)).toEqual(true);
    });
    it("is a string that is not a valid json (random)", () => {
      expect(stk.isJson(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isNumeric", () => {
    it("is a string that contains only numeric characters", () => {
      const str = "123456789";
      expect(stk.isNumeric(str)).toEqual(true);
    });
    it("is a string that contains only alpha characters", () => {
      const str = "foo";
      expect(stk.isNumeric(str)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters", () => {
      const str = "fooBar123";
      expect(stk.isNumeric(str)).toEqual(false);
    });
    it("is a string that contains whitespace", () => {
      const str = "123 456";
      expect(stk.isNumeric(str)).toEqual(false);
    });
    it("is a string that contains only numeric and special characters", () => {
      const str = "123@456";
      expect(stk.isNumeric(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only numeric characters (random)", () => {
      expect(stk.isNumeric(numericStr)).toEqual(true);
    });
    it("is a string that contains only alpha characters (random)", () => {
      expect(stk.isNumeric(alphaStr)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters (random)", () => {
      expect(stk.isNumeric(alphaNumericStr)).toEqual(false);
    });
    it("is a string that contains whitespace (random)", () => {
      expect(stk.isNumeric(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains special characters (random)", () => {
      expect(stk.isNumeric(specialCharStr)).toEqual(false);
    });
  });

  describe("isUlid", () => {
    it("is a string that is a valid ulid", () => {
      const str = "01GVRY40B7T37W8V7XE55DRZ3C";
      expect(stk.isUlid(str)).toEqual(true);
    });
    it("is a string that is a valid ulid (2)", () => {
      const str = "01GVRY7VARSV097NQMMMA4JVTM";
      expect(stk.isUlid(str)).toEqual(true);
    });
    it("is a string that is a valid uuid that is not a valid ulid", () => {
      const str = "7c9f66e7-f6d8-481e-87b8-c4a6d3f57c04";
      expect(stk.isUlid(str)).toEqual(false);
    });
    it("is a string that is not a valid ulid", () => {
      const str = "foo bar";
      expect(stk.isUlid(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is not a valid uuid (random)", () => {
      expect(stk.isUuid(uuidChar)).toEqual(true);
      expect(stk.isUlid(uuidChar)).toEqual(false);
    });
  });

  describe("isUrl", () => {
    it("is a string that is a valid url", () => {
      const str = "https://www.foo.com";
      expect(stk.isUrl(str)).toEqual(true);
    });
    it("is a string that is a valid url with numbers", () => {
      const str = "https://www.foo123.com";
      expect(stk.isUrl(str)).toEqual(true);
    });
    it("is a string that is a valid email that is not a valid url", () => {
      const str = "foo@bar.com";
      expect(stk.isUrl(str)).toEqual(false);
    });
    it("is a string that is not a valid url", () => {
      const str = "foo bar";
      expect(stk.isUrl(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid url (random)", () => {
      expect(stk.isUrl(urlChar)).toEqual(true);
    });
    it("is a string that is not a valid url (random)", () => {
      expect(stk.isUrl(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isUuid", () => {
    it("is a string that is a valid uuid version 1", () => {
      const str = "cffb0eda-c519-11ed-afa1-0242ac120002";
      expect(stk.isUuid(str)).toEqual(true);
    });
    it("is a string that is a valid uuid version 4", () => {
      const str = "9debacb0-1727-461b-87ce-5b8a08dd2bfe";
      expect(stk.isUuid(str)).toEqual(true);
    });
    it("is a string that is a valid guid that is also a valid uuid", () => {
      const str = "7c9f66e7-f6d8-481e-87b8-c4a6d3f57c04";
      expect(stk.isUuid(str)).toEqual(true);
    });
    it("is a string that is not a valid uuid", () => {
      const str = "foo bar";
      expect(stk.isUuid(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid uuid (random)", () => {
      expect(stk.isUuid(uuidChar)).toEqual(true);
    });
    it("is a string that is not a valid uuid (random)", () => {
      expect(stk.isUuid(alphaNumericStr)).toEqual(false);
    });
  });
});
