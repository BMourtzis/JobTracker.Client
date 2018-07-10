import { caller } from "./caller";

let controllerName = "/client";

function get() {
  return caller.get(controllerName);
}

function create(client) {
  return caller.post(`${controllerName}/create`, client);
}

function update(client) {
  return caller.put(`${controllerName}/${client.id}/update`, client);
}

function remove(id) {
  return caller.put(`${controllerName}/${id}/delete`);
}

function enable(id) {
  return caller.put(`${controllerName}/${id}/enable`);
}

function disable(id) {
  return caller.put(`${controllerName}/${id}/disable`);
}

export {
  get,
  create,
  update,
  remove,
  enable,
  disable
};
