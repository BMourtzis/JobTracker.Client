import { caller } from "./caller";

let controllerName = "/client";

function getClients() {
  return caller.get(controllerName);
}

function newClient(client) {
  return caller.post(`${controllerName}/create`, client);
}

function updateClient(client) {
  return caller.put(`${controllerName}/${client.id}/update`, client);
}

function enableClient(id) {
  return caller.put(`${controllerName}/${id}/enable`);
}

function disableClient(id) {
  return caller.put(`${controllerName}/${id}/disable`);
}

export {
  getClients,
  newClient,
  updateClient,
  enableClient,
  disableClient
};
