let connection;

const lenny = [
  "Lets flip some tables",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
  "( ͡° ͜ʖ ͡°)",
  "(╯°□°)╯︵ ┻━┻",
];

const anifun = function(ani) {
  let timer = 100;
  for (let still of ani) {
    setTimeout(() => {
      connection.write(`Say: ${still}`);
    }, timer);
    timer += 150;
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  switch (key) {
  case "w":
    connection.write("Move: up");
    break;
  case "s":
    connection.write("Move: down");
    break;
  case "a":
    connection.write("Move: left");
    break;
  case "d":
    connection.write("Move: right");
    break;
  case "h":
    connection.write("Say: How do you do?");
    break;
  case "g":
    connection.write("Say: Gogogogo!");
    break;
  case "e":
    connection.write("Say: gg ez no re");
    break;
  case "j":
    anifun(lenny);
    break;
  case "\u0003":
    process.exit();
  }
};

module.exports = setupInput;






// if (key === "w") {
//   connection.write("Move: up");
// }
// if (key === "s") {
//   connection.write("Move: down");
// }
// if (key === "a") {
//   connection.write("Move: left");
// }
// if (key === "d") {
//   connection.write("Move: right");
// }
// if (key === "h") {
//   connection.write("Say: How do you do?");
// }
// if (key === "g") {
//   connection.write("Say: Gogogogo!");
// }
// if (key === "e") {
//   connection.write("Say: gg ez no re");
// }
// if (key === "\u0003") {
//   process.exit();
// }