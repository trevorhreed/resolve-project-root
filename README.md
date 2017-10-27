# RPR (Resolve Project Root)
> Resolves '~/...' to a project root

This little utility modifies the built-in `path.resolve(...)` function so that you can resolve paths relative to a project root. Because `require(...)` uses `path.resolve(...)`, this also modifies the behvaior of `require(...)`.

## Example

./utils.js
```javascript

module.exports.square = (x) => {
  return x * x;
}
```

./index.js
```javascript
require('rpr')(__dirname);

const custom = require('~/path/file.js');

custom();
```

./path/file.js
```javascript
const { square } = require('~/utils.js');

module.exports = () => {
  console.log( square(2) );  
}
```


## API

### [rpr([directory])](index.js#L3)

 * `directory` **{String}** a path to set as the project directory (Default: `process.cwd()`)
