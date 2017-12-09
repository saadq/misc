# Steps to reproduce hot-reloading issue

1. Install dependencies with `npm install`
2. Run `npm start` and head over to `localhost:3000`
3. If you change the text inside **App.js** or **Home.js**, hot reloading works
3. However, if you change the text inside **Content.js** or **Footer.js**, hot reloading does not work (you need to refresh to see changes).
