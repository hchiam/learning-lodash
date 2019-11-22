# Learning Lodash

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Note: Lodash is is a superset of [Underscore](https://github.com/hchiam/learning-underscore), so Lodash should be able to [run everything that Underscore can](https://github.com/hchiam/learning-underscore/blob/master/index.js), just [`require('lodash')`](https://github.com/hchiam/learning-lodash/blob/master/index.js) instead.

Tutorial: <https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d>

Lodash GitHub repo: <https://github.com/lodash/lodash#lodash>

Lodash API docs: <https://lodash.com/docs/>

## Setup

```bash
npm install -g npm
npm install --save lodash
```

```js
var _ = require('lodash');
// or
var _ = require('lodash/core');
// or
var array = require('lodash/array');
```

## 10 useful functions to know

(According to [this Medium article](https://medium.com/voobans-tech-stories/10-lodash-functions-everyone-should-know-334b372aec5d):)

**[`_.cloneDeep(`value`)`](https://lodash.com/docs/#cloneDeep)**

**[`_.times(`n, [iteratee=_.identity]`)`](https://lodash.com/docs/#times)**

**[`_.find(`collection, [predicate=_.identity], [fromIndex=0]`)`](https://lodash.com/docs/#find)**

**[`_.sortedUniq(`array`)`](https://lodash.com/docs/#sortedUniq)**

**[`_.debounce(`func, [wait=0], [options={}]`)`](https://lodash.com/docs/#debounce)**

**[`_.reduce(`collection, [iteratee=_.identity], [accumulator]`)`](https://lodash.com/docs/#reduce)** (Note: also works on objects!)

[`_.keyBy(`collection, [iteratee=_.identity]`)`](https://lodash.com/docs/#keyBy)

[`_.get(`object, path, [defaultValue]`)`](https://lodash.com/docs/#get)

[`_.set(`object, path, value`)`](https://lodash.com/docs/#set)

[`_.assign(`object, [sources]`)`](https://lodash.com/docs/#assign)

[`_.deburr(`[string='']`)`](https://lodash.com/docs/#deburr)
