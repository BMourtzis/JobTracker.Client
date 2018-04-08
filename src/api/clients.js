import { caller } from "./caller";

var controllerName = "/client";

function getClients() {
  return caller.get(controllerName);
}

function newClient(client) {
  return caller.post(controllerName+"/create", client);
}

export {
  getClients,
  newClient
}
