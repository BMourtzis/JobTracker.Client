import { caller } from "./caller";

let baseControllerName = "client";
let controllerName = "contact";

// function get(clientId, contactId) {

// }

function add(clientId, contacts) {
    caller.post(`${baseControllerName}/${clientId}/${controllerName}/add`, contacts);
}

function update(clientId, contactId, model) {
    caller.put(`${baseControllerName}/${clientId}/${controllerName}/${contactId}/update`, model);
}

function remove(clientId, contactId) {
    caller.delete(`${baseControllerName}/${clientId}/${controllerName}/${contactId}/delete`);
}

export {
    add,
    update,
    remove
};
