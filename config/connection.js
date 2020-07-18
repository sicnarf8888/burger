// require mysql npm package
var mysql = require("mysql");
var connection;

// if jaws db is present, connect to jaws db, otherwise connect to local mysql db
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "hgefiprfqg2q7hjv",
		password: "wdemy8qs871mspro",
		database: "qps4udxyl5ucm7t4"
	});
};

// connect to database, throw error if error, otherwise log the connection id
connection.connect(function(err) {
	if (err) {
		console.error("error connecting to database: " + err.stack);
		return;
	}
	console.log("connected to database as id " + connection.threadId);
});

// export connection for use in orm
module.exports = connection;