# react-starter
A starter kit for the react boilerplate application. It uses WebPack, Babel 6 for supporting es5,es6,es7 standards.

# How I see
**1.  To support es6, es7 standards of javascript I have used a Babel loader, preset.**
```
"dependencies": {
    "babel-polyfill": "^6.23.0",
    "babel-runtime": "^6.23.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  },
  "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.1",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.2.2",
    "babel-preset-es2015": "^6.24.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-0": "^6.22.0",
    "webpack": "^2.3.1"
  },

```

**2.  For building the bundle(to support react js in html) I have used a Webpack.**
```
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [
      {
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: APP_DIR,
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        }
      },
    ]
  },
};

```

**3. All the react related files are in JSX format.**
```
App.jsx

import React from 'react';
import {render} from 'react-dom';

export default class App extends React.Component {

  //Arrow functions
  handleClick= (e) => {
    welcome();
  }

  render() {
    return(
      <div className={"demo-app"} onClick={this.handleClick}>
        <h1>Demo App</h1>
      </div>
    );
  }
}
```


**4. I have added the www folder which contains regular javascript and css ie third-party libraries(bootstrap, material css, ...). It also supports the es6, es7 standards.**

```
index.js
//Es6 function syntax
welcome = () => {
  alert('Welcome');
}
//Normal function syntax
function hello(){
  alert('hi');
}

index.css
.demo-app{
  background-color: pink
}

```

**5. To build**
run npm scripts

"scripts": {
    "start": "webpack -d --watch",
    "build": "webpack -p"
  }

example) npm start

**6. The step5 will create the bundle.js. Now we need to access it inside our index.html**

```
<html>
  <head>
    <meta charset="utf-8">
    <title>React.js using NPM, Babel6 and Webpack</title>
    <link rel="stylesheet" type="text/css" href="www/css/index.css">
  </head>
  <body>
    <div id="app" />
    <script src="/www/js/index.js" type="text/javascript"></script>
    <script src="/build/bundle.js" type="text/javascript"></script>
  </body>
</html>
```
