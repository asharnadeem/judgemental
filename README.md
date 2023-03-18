# tool-kit

Type-safe utility library for boolean checks on assorted data types

[![License](https://img.shields.io/badge/license-apache_2.0-green.svg)](https://opensource.org/licenses/Apache-2.0)
[![Issues](https://img.shields.io/github/issues/asharnadeem/tool-kit)](https://github.com/asharnadeem/tool-kit/issues)
[![Build Status](https://github.com/asharnadeem/tool-kit/actions/workflows/build.yml/badge.svg)](https://github.com/asharnadeem/tool-kit/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/asharnadeem/tool-kit/branch/main/graph/badge.svg?token=AVIQP2EFWK)](https://codecov.io/gh/asharnadeem/tool-kit)

## Overview

tool-kit is a library inspired by [Apache Commons Lang3](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/) which aims to provide a rich, comprehensive set of utility functions centered around but not limited to primitive data types. It aims to be a one stop shop for helper utilities needed to make day to day development seamless and help developers write lean, concise, and elegant code.

### How do you install the library ?

`npm install tool-kit`

### How do you use the library

```
import { stk } from "tool-kit";

const myEmail = "foo@bar.com"
const isValidEmail = stk.isEmail(myEmail) // true

const myBirthday = "19900101"
const isValidBirthday = stk.isDatetime(myBirthday) // false

// and so on ...
```
