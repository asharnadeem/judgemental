# judgemental

Type-safe utility library for boolean checks on assorted data types

[![License](https://img.shields.io/badge/license-apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)
[![Issues](https://img.shields.io/github/issues/asharnadeem/judgemental)](https://github.com/asharnadeem/judgemental/issues)
[![Build Status](https://github.com/asharnadeem/judgemental/actions/workflows/build.yml/badge.svg)](https://github.com/asharnadeem/judgemental/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/asharnadeem/judgemental/branch/main/graph/badge.svg?token=AVIQP2EFWK)](https://codecov.io/gh/asharnadeem/judgemental)
[![npm](https://img.shields.io/npm/v/react)](https://www.npmjs.com/package/judgemental)

## Overview

judgemental is a library inspired by [Apache Commons Lang3](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/) which aims to provide a rich, comprehensive set of utility functions centered around but not limited to primitive data types. It aims to be a one stop shop for helper utilities needed to make day to day development seamless and help developers write lean, concise, and elegant code.

### How do you install the library ?

```
npm i judgemental
```

### How do you use the library

```
// sj: string judge
import { sj } from "judgemental";

// returns true
const myEmail = "foo@bar.com"
const isValidEmail = sj.isEmail(myEmail)

// returns false
const myBirthday = "19900101"
const isValidBirthday = sj.isDatetime(myBirthday)

// and so on ...
```

### Methods

#### String

- containsWhitespace
- equalsIgnoreCase
- isAlpha
- isAlphaNumeric
- isBlank
- isCuid
- isDatetime
- isEmail
- isIp
- isIpV4
- isIpV6
- isJson
- isLowercase
- isNumeric
- isUlid
- isUppercase
- isUrl
- isUuid
- isWhitespace
