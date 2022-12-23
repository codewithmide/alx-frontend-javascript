# 0x02. ES6 classes

`OOP` `JavaScript` `ES6`

|By: Johann Kerbrat, Engineering Manager at Uber Works|
|:--|
|Weight: 1|
|Ongoing second chance project - started Dec 22, 2022 6:00 AM, must end by Dec 24, 2022 6:00 AM|
|An auto review will be launched at the deadline|

![classes](../images/classes.jpeg)
## Resources

**Read or watch:**

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test

## Setup

### Install NodeJS 12.11.x

(in your home directory):

```javascript
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```javascript
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

### Install Jest, Babel, and ESLint

in your project directory:

- Install Jest using: `npm install --save-dev jest`
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

## Configuration files

### `package.json`

### `babel.config.js`

### `.eslintrc.js`

### and…

Don’t forget to run `$ npm install` when you have the `package.json`
