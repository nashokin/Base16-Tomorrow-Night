// AuthHandler.js

/*
 * Functions
 */
module.exports.login = (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;
	return connectToDatabase()
	  .then(() =>
		login(JSON.parse(event.body))
	  )
	  .then(session => ({
		statusCode: 200,
		body: JSON.stringify(session)
	  }))
	  .catch(err => ({
		statusCode: err.statusCode || 500,
		headers: { 'Content-Type': 'text/plain' },
		body: { stack: err.stack, message: err.message }
	  }));
  };
