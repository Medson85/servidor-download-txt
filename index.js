//index.js
const app = require('./app');

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`App Express is running!`);
})