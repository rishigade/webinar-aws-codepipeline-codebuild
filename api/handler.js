const greet = require("./greet");

module.exports.sayHello = (event, context, callback) => {

  const greeting = greet.sayHello();

  const response = {
    body: JSON.stringify({
      message: greeting,
    }),
    headers: {
    "Access-Control-Allow-Origin": "*",
  },
    statusCode: 200,
  };

  callback(null, response);
};
