# 2619. array-prototype-last

## javascript

[View Solution](2619-array-prototype-last.js)


```js
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
```
