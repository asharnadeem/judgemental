import { faker } from "@faker-js/faker";
import { sj } from "../src";

describe("sj", () => {
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
      expect(sj.containsWhitespace(str)).toEqual(true);
    });
    it("is a string that contains only whitespace", () => {
      const str = "     ";
      expect(sj.containsWhitespace(str)).toEqual(true);
    });
    it("is a string that contains no whitespace", () => {
      const str = "foo_bar";
      expect(sj.containsWhitespace(str)).toEqual(false);
    });
    it("is a string that is empty", () => {
      const str = "";
      expect(sj.containsWhitespace(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains whitespace (random)", () => {
      expect(sj.containsWhitespace(alphaBlankStr)).toEqual(true);
    });
    it("is a string that contains no whitespace (random)", () => {
      expect(sj.containsWhitespace(alphaStr)).toEqual(false);
    });
  });

  describe("equalsIgnoreCase", () => {
    it("is two strings that are equal including case", () => {
      const str1 = "foo";
      const str2 = "foo";
      expect(sj.equalsIgnoreCase(str1, str2)).toEqual(true);
    });
    it("is two strings that are equal ignoring case", () => {
      const str1 = "foo";
      const str2 = "FoO";
      expect(sj.equalsIgnoreCase(str1, str2)).toEqual(true);
    });
    it("is two strings that are not equal including case", () => {
      const str1 = "foo";
      const str2 = "bar";
      expect(sj.equalsIgnoreCase(str1, str2)).toEqual(false);
    });
    it("is two strings that are not equal ignoring case", () => {
      const str1 = "foo";
      const str2 = "BaR";
      expect(sj.equalsIgnoreCase(str1, str2)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is two strings that are equal including case (random)", () => {
      expect(sj.equalsIgnoreCase(alphaBlankStr, alphaBlankStr)).toEqual(true);
    });
    it("is two strings that are equal ignoring case (random)", () => {
      expect(sj.equalsIgnoreCase(alphaBlankStr, alphaBlankStr.toUpperCase())).toEqual(true);
    });
    it("is two strings that are not equal (random)", () => {
      expect(sj.equalsIgnoreCase(alphaStr, numericStr)).toEqual(false);
    });
  });

  describe("isAlpha", () => {
    it("is a string that contains only alpha characters (lowercase)", () => {
      const str = "foo";
      expect(sj.isAlpha(str)).toEqual(true);
    });
    it("is a string that contains only alpha characters (uppercase)", () => {
      const str = "FOO";
      expect(sj.isAlpha(str)).toEqual(true);
    });
    it("is a string that contains only alpha characters (ignore case)", () => {
      const str = "fooBarBaz";
      expect(sj.isAlpha(str)).toEqual(true);
    });
    it("is a string that contains only numeric characters", () => {
      const str = "123";
      expect(sj.isAlpha(str)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters", () => {
      const str = "fooBar123";
      expect(sj.isAlpha(str)).toEqual(false);
    });
    it("is a string that contains whitespace", () => {
      const str = "foo bar";
      expect(sj.isAlpha(str)).toEqual(false);
    });
    it("is a string that contains special characters", () => {
      const str = "foo_bar@baz.qux";
      expect(sj.isAlpha(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alpha characters (random)", () => {
      expect(sj.isAlpha(alphaStr)).toEqual(true);
    });
    it("is a string that contains only numeric characters (random)", () => {
      expect(sj.isAlpha(numericStr)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters (random)", () => {
      expect(sj.isAlpha(alphaNumericStr)).toEqual(false);
    });
    it("is a string that contains whitespace (random)", () => {
      expect(sj.isAlpha(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains special characters (random)", () => {
      expect(sj.isAlpha(specialCharStr)).toEqual(false);
    });
  });

  describe("isAlphaNumeric", () => {
    it("is a string that contains only alpha characters", () => {
      const str = "foo";
      expect(sj.isAlphaNumeric(str)).toEqual(true);
    });
    it("is a string that contains only numeric characters", () => {
      const str = "0123456789";
      expect(sj.isAlphaNumeric(str)).toEqual(true);
    });
    it("is a string that contains only alphanumeric characters", () => {
      const str = "fooBar123";
      expect(sj.isAlphaNumeric(str)).toEqual(true);
    });
    it("is a string that contains whitespace", () => {
      const str = "foo bar";
      expect(sj.isAlphaNumeric(str)).toEqual(false);
    });
    it("is a string that contains special characters", () => {
      const str = "foo_bar_123@baz.qux";
      expect(sj.isAlphaNumeric(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alpha characters (random)", () => {
      expect(sj.isAlphaNumeric(alphaStr)).toEqual(true);
    });
    it("is a string that contains only numeric characters (random)", () => {
      expect(sj.isAlphaNumeric(numericStr)).toEqual(true);
    });
    it("is a string that contains only alphanumeric characters (random)", () => {
      expect(sj.isAlphaNumeric(alphaNumericStr)).toEqual(true);
    });
    it("is a string that contains whitespace (random)", () => {
      expect(sj.isAlphaNumeric(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains special characters (random)", () => {
      expect(sj.isAlphaNumeric(specialCharStr)).toEqual(false);
    });
  });

  describe("isBlank", () => {
    it("is a string that is empty", () => {
      const str = "";
      expect(sj.isBlank(str)).toEqual(true);
    });
    it("is a string that contains only whitespace", () => {
      const str = "     ";
      expect(sj.isBlank(str)).toEqual(true);
    });
    it("is a string that contains only whitespace and whitespace chars", () => {
      const str = " \n \v \f";
      expect(sj.isBlank(str)).toEqual(true);
    });
    it("is a string that contains only alphanumeric and whitespace chars", () => {
      const str = "foo1 bar2";
      expect(sj.isBlank(str)).toEqual(false);
    });
    it("is a string that contains all types of chars", () => {
      const str = "Foo1 @ Bar2";
      expect(sj.isBlank(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alphanumeric and whitespace chars (random)", () => {
      expect(sj.isBlank(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains all types of chars", () => {
      expect(sj.isBlank(specialCharStr)).toEqual(false);
    });
  });

  describe("isCuid", () => {
    it("is a string that is a valid cuid (lowercase)", () => {
      const str = "clekrsk20000108lb6pcbbh2n";
      expect(sj.isCuid(str)).toEqual(true);
    });
    it("is a string that is a valid cuid (uppercase) ", () => {
      const str = "CLEKRTI1V000208LB96G2E2KH";
      expect(sj.isCuid(str)).toEqual(true);
    });
    it("is a string that is a valid cuid (ignore case) ", () => {
      const str = "cLeKrU42c000308Lb9a32Au5w";
      expect(sj.isCuid(str)).toEqual(true);
    });
    it("is a string that contains only alphanumeric characters in a non cuid format", () => {
      const str = "foo1bar2";
      expect(sj.isCuid(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only alphanumeric characters in a non cuid format (random)", () => {
      expect(sj.isCuid(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isDatetime", () => {
    it("is a string that is a valid datetime", () => {
      const str = "2023-01-01T00:00:00Z";
      expect(sj.isDatetime(str)).toEqual(true);
    });
    it("is a string that is a valid datetime with arbitrary precision", () => {
      const str = "2020-01-01T00:00:00.123456Z";
      expect(sj.isDatetime(str)).toEqual(true);
    });
    it("is a string that is a valid datetime with offset", () => {
      const str = "2020-01-01T00:00:00.123+02";
      expect(sj.isDatetime(str)).toEqual(true);
    });
    it("is a string that contains alphanumeric characters in a non datetime format", () => {
      const str = "foo1bar2";
      expect(sj.isDatetime(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid datetime (random)", () => {
      expect(sj.isDatetime(datetimeStr)).toEqual(true);
    });
    it("is a string that contains alphanumeric characters in a non datetime format (random)", () => {
      expect(sj.isDatetime(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isEmail", () => {
    it("is a string that is a valid email", () => {
      const str = "foo@bar.com";
      expect(sj.isEmail(str)).toEqual(true);
    });
    it("is a string that is a valid email with numbers", () => {
      const str = "foo.bar123@baz.com";
      expect(sj.isEmail(str)).toEqual(true);
    });
    it("is a string that is not a valid email", () => {
      const str = "foo bar";
      expect(sj.isEmail(str)).toEqual(false);
    });
    it("is a string in URL format that is not a valid email", () => {
      const str = "foo.bar.com";
      expect(sj.isEmail(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid email (random)", () => {
      expect(sj.isEmail(emailStr)).toEqual(true);
    });
    it("is a string that is not a valid email (random)", () => {
      expect(sj.isEmail(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isIp", () => {
    it("is a string that is a valid ip", () => {
      const str = "140.151.183.216";
      expect(sj.isIp(str)).toEqual(true);
    });
    it("is a string that is a valid ipv4", () => {
      const str = "245.108.222.0";
      expect(sj.isIp(str)).toEqual(true);
    });
    it("is a string that is a valid ipv6", () => {
      const str = "269f:1230:73e3:318d:842b:daab:326d:897b";
      expect(sj.isIp(str)).toEqual(true);
    });
    it("is a string that is not a valid ip at all", () => {
      const str = "foo bar";
      expect(sj.isIp(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid ip (random)", () => {
      expect(sj.isIp(ipStr)).toEqual(true);
    });
    it("is a string that is a valid ipv4 (random)", () => {
      expect(sj.isIp(ipV4Str)).toEqual(true);
    });
    it("is a string that is a valid ipv6 (random)", () => {
      expect(sj.isIp(ipV6Str)).toEqual(true);
    });
    it("is a string that is not a valid ip (random)", () => {
      expect(sj.isIp(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isIpV4", () => {
    it("is a string that is a valid ipv4", () => {
      const str = "245.108.222.0";
      expect(sj.isIpV4(str)).toEqual(true);
    });
    it("is a string that is a valid ipv6 but not a valid ipv4", () => {
      const str = "269f:1230:73e3:318d:842b:daab:326d:897b";
      expect(sj.isIpV4(str)).toEqual(false);
    });
    it("is a string that is not a valid ip at all", () => {
      const str = "foo bar";
      expect(sj.isIpV4(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid ipv4 (random)", () => {
      expect(sj.isIpV4(ipV4Str)).toEqual(true);
    });
    it("is a string that is a valid ipv6 but not a valid ipv4 (random)", () => {
      expect(sj.isIpV4(ipV6Str)).toEqual(false);
    });
    it("is a string that is not a valid ipv4 (random)", () => {
      expect(sj.isIpV4(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isIpV6", () => {
    it("is a string that is a valid ipv6", () => {
      const str = "269f:1230:73e3:318d:842b:daab:326d:897b";
      expect(sj.isIpV6(str)).toEqual(true);
    });
    it("is a string that is a valid ipv4 but not a valid ipv6", () => {
      const str = "245.108.222.0";
      expect(sj.isIpV6(str)).toEqual(false);
    });
    it("is a string that is not a valid ip at all", () => {
      const str = "foo bar";
      expect(sj.isIpV6(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid ipv6 (random)", () => {
      expect(sj.isIpV6(ipV4Str)).toEqual(false);
    });
    it("is a string that is a valid ipv4 but not a valid ipv6 (random)", () => {
      expect(sj.isIpV6(ipV6Str)).toEqual(true);
    });
    it("is a string that is not a valid ipv6 (random)", () => {
      expect(sj.isIpV6(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isJson", () => {
    it("is a string that is a valid json", () => {
      const str = '{"foo":"bar","baz":"qux"}';
      expect(sj.isJson(str)).toEqual(true);
    });
    it("is a string that is a valid json with multiple data types", () => {
      const str = '{"foo":"bar","baz":123,"qux":false}';
      expect(sj.isJson(str)).toEqual(true);
    });
    it("is a string that is a valid json with nested objects", () => {
      const str = '{"foo": "bar","baz":{"qux":123}}';
      expect(sj.isJson(str)).toEqual(true);
    });
    it("is a string in that is not a valid json", () => {
      const str = "{foo:bar}";
      expect(sj.isJson(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid json (random)", () => {
      expect(sj.isJson(jsonStr)).toEqual(true);
    });
    it("is a string that is not a valid json (random)", () => {
      expect(sj.isJson(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isNumeric", () => {
    it("is a string that contains only numeric characters", () => {
      const str = "123456789";
      expect(sj.isNumeric(str)).toEqual(true);
    });
    it("is a string that contains only alpha characters", () => {
      const str = "foo";
      expect(sj.isNumeric(str)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters", () => {
      const str = "fooBar123";
      expect(sj.isNumeric(str)).toEqual(false);
    });
    it("is a string that contains whitespace", () => {
      const str = "123 456";
      expect(sj.isNumeric(str)).toEqual(false);
    });
    it("is a string that contains only numeric and special characters", () => {
      const str = "123@456";
      expect(sj.isNumeric(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that contains only numeric characters (random)", () => {
      expect(sj.isNumeric(numericStr)).toEqual(true);
    });
    it("is a string that contains only alpha characters (random)", () => {
      expect(sj.isNumeric(alphaStr)).toEqual(false);
    });
    it("is a string that contains only alphanumeric characters (random)", () => {
      expect(sj.isNumeric(alphaNumericStr)).toEqual(false);
    });
    it("is a string that contains whitespace (random)", () => {
      expect(sj.isNumeric(alphaBlankStr)).toEqual(false);
    });
    it("is a string that contains special characters (random)", () => {
      expect(sj.isNumeric(specialCharStr)).toEqual(false);
    });
  });

  describe("isUlid", () => {
    it("is a string that is a valid ulid", () => {
      const str = "01GVRY40B7T37W8V7XE55DRZ3C";
      expect(sj.isUlid(str)).toEqual(true);
    });
    it("is a string that is a valid ulid (2)", () => {
      const str = "01GVRY7VARSV097NQMMMA4JVTM";
      expect(sj.isUlid(str)).toEqual(true);
    });
    it("is a string that is a valid uuid that is not a valid ulid", () => {
      const str = "7c9f66e7-f6d8-481e-87b8-c4a6d3f57c04";
      expect(sj.isUlid(str)).toEqual(false);
    });
    it("is a string that is not a valid ulid", () => {
      const str = "foo bar";
      expect(sj.isUlid(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is not a valid uuid (random)", () => {
      expect(sj.isUuid(uuidChar)).toEqual(true);
      expect(sj.isUlid(uuidChar)).toEqual(false);
    });
  });

  describe("isUrl", () => {
    it("is a string that is a valid url", () => {
      const str = "https://www.foo.com";
      expect(sj.isUrl(str)).toEqual(true);
    });
    it("is a string that is a valid url with numbers", () => {
      const str = "https://www.foo123.com";
      expect(sj.isUrl(str)).toEqual(true);
    });
    it("is a string that is a valid email that is not a valid url", () => {
      const str = "foo@bar.com";
      expect(sj.isUrl(str)).toEqual(false);
    });
    it("is a string that is not a valid url", () => {
      const str = "foo bar";
      expect(sj.isUrl(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid url (random)", () => {
      expect(sj.isUrl(urlChar)).toEqual(true);
    });
    it("is a string that is not a valid url (random)", () => {
      expect(sj.isUrl(alphaNumericStr)).toEqual(false);
    });
  });

  describe("isUuid", () => {
    it("is a string that is a valid uuid version 1", () => {
      const str = "cffb0eda-c519-11ed-afa1-0242ac120002";
      expect(sj.isUuid(str)).toEqual(true);
    });
    it("is a string that is a valid uuid version 4", () => {
      const str = "9debacb0-1727-461b-87ce-5b8a08dd2bfe";
      expect(sj.isUuid(str)).toEqual(true);
    });
    it("is a string that is a valid guid that is also a valid uuid", () => {
      const str = "7c9f66e7-f6d8-481e-87b8-c4a6d3f57c04";
      expect(sj.isUuid(str)).toEqual(true);
    });
    it("is a string that is not a valid uuid", () => {
      const str = "foo bar";
      expect(sj.isUuid(str)).toEqual(false);
    });
    /*
        tests using random strings
     */
    it("is a string that is a valid uuid (random)", () => {
      expect(sj.isUuid(uuidChar)).toEqual(true);
    });
    it("is a string that is not a valid uuid (random)", () => {
      expect(sj.isUuid(alphaNumericStr)).toEqual(false);
    });
  });
});
