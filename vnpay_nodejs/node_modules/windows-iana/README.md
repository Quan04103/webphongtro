windows-iana
---

[![Build Status](https://travis-ci.org/rubenillodo/windows-iana.svg?branch=master)](https://travis-ci.org/rubenillodo/windows-iana)
[![Coverage Status](https://coveralls.io/repos/github/rubenillodo/windows-iana/badge.svg)](https://coveralls.io/github/rubenillodo/windows-iana)

This library exports two functions to help convert from Windows time zones to IANA time zones (based on [this mapping definition](https://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml)).

# Installation

Add the dependency to your project with `npm install --save windows-iana` or `yarn add windows-iana`.

# Usage

The library exports `findIana()`, which will return an array of possible IANA time zones, or `findOneIana()`, which will return just one string.

## `findOneIana()`

```
import { findOneIana } from "windows-iana";

const result = findOneIana("Romance Standard Time");
console.log(result); // "Europe/Paris"
```

You may also pass the territory code as a second parameter (have a look again at the [mapping by unicode.org](https://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml) for more details).

```
import { findOneIana } from "windows-iana";

const result = findOneIana("Romance Standard Time", "ES");
console.log(result); // "Europe/Madrid"
```

## `findIana()`

```
import { findIana } from "windows-iana";

const result = findIana("Romance Standard Time");
console.log(result); // ["Europe/Paris"]
```

You may also pass the territory code to `findIana()`.

```
import { findIana } from "windows-iana";

const result = findIana("Romance Standard Time", "ES");
console.log(result); // ["Europe/Madrid", "Africa/Ceuta"]
```

## `findWindows()`

```
import { findWindows } from "windows-iana";

const result = findIana("America/New_York");
console.log(result); // Eastern Standard Time
```

There is no territory code for this function because all IANA names map to exactly one territory.
