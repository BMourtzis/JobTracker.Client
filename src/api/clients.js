import { caller } from "./caller";

var controllerName = "/client";

function getClients() {
  return caller.get(controllerName);
}

export {
  getClients
}
