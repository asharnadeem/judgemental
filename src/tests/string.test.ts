import { faker } from "@faker-js/faker";
import { stk } from "..";

describe("stk", () => {
  const alphaStr = faker.random.alpha();
  const alphaBlankStr = faker.lorem.sentence();
  const alphaNumericStr = faker.random.alphaNumeric(10); // min length of 10 to ensure mix of alpha and numeric
  const datetimeStr = faker.date.recent().toISOString();
  const numericStr = faker.random.numeric();
  const specialCharStr = faker.internet.userAgent();

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
      expect(stk.isDatetime(alphaNumericStr)).toEqual(false);
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
});
