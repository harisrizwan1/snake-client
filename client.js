const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '172.28.156.116',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("We're in, chief");
    conn.write("Name: HR");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;