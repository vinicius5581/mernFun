To start the project you need a database (mongodb) and you should add a folder named `config` to the root of the project and inside it, create a file `keys.js` with the following content:

```javascript
module.exports = {
  mondoDB: {
    mongoURI: "mongodb://<username>:<password>@<serverURI>/<databasename>"
  }
};
```
