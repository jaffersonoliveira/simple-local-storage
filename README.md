# Simple Local Storage

Simple Local Storage is a JavaScript module that provides a straightforward alternative to async storage. This module simplifies the process of storing and retrieving data locally in your web or mobile applications. It is particularly useful for projects using frameworks like React Native or Expo.

## Installation

You can install Simple Local Storage via npm or yarn:

```bash
npm install @jafferson/simple-local-storage
# or
yarn add @jafferson/simple-local-storage
```

## Usage

Here's a quick example of how to use Simple Local Storage in your JavaScript or TypeScript project:

```javascript
import SimpleLocalStorage from '@jafferson/simple-local-storage';

// Initialize the storage
const storage = new SimpleLocalStorage();

// Store data
storage.setItem('myKey', 'myValue');

// Retrieve data
const myValue = storage.getItem('myKey');
console.log(myValue); // 'myValue'

// Remove data
storage.removeItem('myKey');

// get all keys
const allKeys = storage.getAllKeys();
allKeys.forEach(key => { storage.removeItem(key) }) //remove all keys
```

## API

### `setItem(key: string, value: any): void`

Stores the specified value under the given key.

### `getItem(key: string): string | null`

Retrieves the value associated with the specified key.

### `removeItem(key: string): void`

Removes the item associated with the specified key.

### `getAllKeys(): string[]`

get all keys from the storage.


## Issues

If you encounter any issues or have suggestions for improvements, please report them on [GitHub Issues](https://github.com/jaffersonoliveira/simple-local-storage/issues).

## License

Simple Local Storage is released under the MIT License.

## Author

- Jafferson Oliveira
- Email: jaffersonadm@hotmail.com

## Acknowledgments

This project relies on the [expo-file-system](https://www.npmjs.com/package/expo-file-system) library.

## More Information

For more information and detailed examples, visit the [GitHub repository](https://github.com/jaffersonoliveira/simple-local-storage).

---

Thank you for using Simple Local Storage! We hope it simplifies your data storage needs in your projects. If you find it helpful, please consider giving it a star on GitHub.
