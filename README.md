# deep-chain

`deep-chain` is a helper function that makes it easier to read properties from deeply nested data structures.
It operates in a safe way, meaning that it doesn't throw errors at all, even when reading property from `null` or `undefined` entry. Additionally, it allows to find certain array element by specifying an optional predicate function or matching object.  
See [Usage](https://github.com/onwd/deep-chain#usage) section for more details.

## Installation

```bash
$ npm install deep-chain
```

## Usage

Consider the following example. We have a `bookstore` that sells many `books` and each book has a single `author`.

```js
import { deep } from 'deep-chain';

const bookstore = {
  books: [
    {
      id: 1,
      title: 'Romeo and Juliet',
      author: {
        id: 1,
        name: 'William Shakespeare'
      }
    },
    {
      id: 2,
      title: 'The Double',
      author: {
        id: 2,
        name: 'Fyodor Dostoevsky'
      }
    },
    {
      id: 3,
      title: 'Fahrenheit 451',
      author: {
        id: 3,
        name: 'Ray Bradbury'
      }
    }
  ]
};

// Allows to read nested property.
deep(bookstore).books[1].author.name.retrieve(); // -> 'Fyodor Dostoevsky'

// Does not throw when reading from non-existent properties.
deep(bookstore).books[100].author.name.retrieve(); // -> undefined

// Allows to find array element by matching object.
deep(bookstore).books({ id: 3 }).name.retrieve(); // -> 'Fahrenheit 451'

// Allows to find array element by predicate function.
deep(bookstore)
  .books((book) => book.author.name === 'William Shakespeare')
  .name
  .retrieve(); // -> 'Romeo and Juliet'
```

## Retrieving properties with reserved names

Currently these property names are reserved and return functions to perform certain action:
- get
- retrieve
- filter
- find

These functions don't have `retrieve` method at the moment, therefore it's not possible to retrieve a property with reserved name using this short syntax:

```js
import { deep } from 'deep-chain';

const nestedObject = {
  test: {
    get:      1,
    retrieve: 2,
    filter:   3,
    find:     4
  }
};

deep(nestedObject).test.get.retrieve();      // -> Will throw TypeError
deep(nestedObject).test.retrieve.retrieve(); // -> Will throw TypeError
deep(nestedObject).test.filter.retrieve();   // -> Will throw TypeError
deep(nestedObject).test.find.retrieve();     // -> Will throw TypeError
```

However, you can retrieve them by using `get` method like that:

```js
deep(nestedObject).test.get('get').retrieve();      // -> 1
deep(nestedObject).test.get('retrieve').retrieve(); // -> 2
deep(nestedObject).test.get('filter').retrieve();   // -> 3
deep(nestedObject).test.get('find').retrieve();     // -> 4
```
