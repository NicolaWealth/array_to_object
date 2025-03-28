![Tests Passing](https://github.com/NicolaWealth/array_to_object/actions/workflows/autoTestMainBadge.yml/badge.svg)
![Code Cov](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fnicolawealth%2Farray_to_object%2Fraw%2Fmain%2Fcodecov/badge.json&query=%24.message&label=Code%20Coverage&color=%24.color)

# Introduction
The `array_to_object` package

# Installation
This package should be installed via npm. You must have npm installed first. The following can be run on the commandline to install the `array_to_object` package with npm:

`npm install @nicolawealth/array_to_object`

# Usage
This package provides functionality to convert a string array into a record object with keys corresponding to the array entries and values of booleans all intially set to true.

# Interface
arrayToObject = (p?: string[]) => 
The package exports the function `arrayToObject(arr)` which takes in an optional string array argument and returns a record as described above. If no value is provided to `arr` or if `arr` is undefined, an empty record will be returned.

# Testing
Tests can be found in `array_to_object.test.ts` located in `array_to_object/src` and should be run with sinon, mocha and nyc.
