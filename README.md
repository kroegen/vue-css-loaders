# vue-css-loaders
A simple library with few css loaders for vue.js. Supports IE11!
The loaders had been taken from https://loading.io/css

## Project setup
```
npm i vue-css-loaders --save
```

### Usage
```
import Loader from 'vue-css-loaders';
...
components: { Loader },
...
<loader :color="color" :loaderType="'spinner'" />
```

### Props
* color      - String(default: grey). It can be rgba, hex, etc.
* loaderType - String

### Loader types
* default
* dual-ring
* ellipsis
* roller
* spinner

### Todo
1. Size property
2. More spinner types
3. Normal readme
