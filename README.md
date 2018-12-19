# SmartBool

[![npm Version](https://img.shields.io/npm/v/@mighty-justice/smart-bool.svg)](https://www.npmjs.com/package/@mighty-justice/smart-bool) [![Build Status](https://travis-ci.org/mighty-justice/smart-bool.svg?branch=master)](https://travis-ci.org/mighty-justice/smart-bool) [![Coverage Status](https://coveralls.io/repos/github/mighty-justice/smart-bool/badge.svg?branch=master)](https://coveralls.io/github/mighty-justice/smart-bool?branch=master)

## Installation
#### dependencies
```
"mobx": ">=5.8"
```
#### npm
`npm install --save-dev @mighty-justice/smart-bool`

#### yarn
`yarn add --dev @mighty-justice/smart-bool`

### Helpers
```ts
get isTrue // Value
set(value: boolean) // Sets new value
setTrue() // Sets value to true
setFalse() // Sets value to false
toggle() // Toggles value
until(promise) // Waits for promise, then sets value to true and returns promise
saving(label: string) // Returns label is false, 'Saving...' if true. Useful for buttons.
```

### Usage

```typescript jsx
import React, { Component } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import SmartBool from '@mighty-justice/smart-bool';

@observer
class Autofac extends Component<{}> {
  private isLoading = SmartBool(true);
  private isMilkPizzled = SmartBool(); // Defaults to false

  constructor (props: {}) {
    super(props);
    this.waitForTrain();
  }

  private async waitForTrain () {
    //  this.isLoading.isTrue == true;
    //  this.isMilkPizzled.isTrue == false;

    // Sets bool to true until a promise returns.
    const request = axios.get('/train/');
    // this.isLoading.isTrue == true;
    const response = await this.isLoading.until(request);
    // this.isLoading.isTrue == false;

    // Simple setter
    this.isMilkPizzled.set(true);

    // Helper method useful for JSX props
    this.isMilkPizzled.setTrue();
  }

  public render () {
    return (
      <div>
        <p>Waiting for train: {this.isLoading.isTrue}</p>
        <p>Claiming is pizzled: {this.isMilkPizzled.isTrue}</p>
      </div>
    )
  }
}
```
