// Write your solution in this file!

// instantiate 'employees' as an empty Object; like Arrays, use 'const' as the containers themselves only contain references to the data, i think
const employee = {};


/* NON-DESTRUCTIVE - need to create clone (new instance) of original Object, mutate the new Object and return the clone.
function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}
OR (USE SPREAD OPERATOR)
function nondestructivelyUpdateObject(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}
}   */
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
} //fin


/* DESTRUCTIVE - Using dot notation or bracket notation
function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value; // Why are we using bracket notation here?
  return obj;
}   */
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;      // MUTATES 'employee' Object
    return employee;
} // fin


/* NON-DESTRUCTIVE - need to create clone (new instance) of original Object, mutate the new Object and return the clone.
function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}
OR (USE SPREAD OPERATOR)
function nondestructivelyUpdateObject(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}
}   */
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

/* DESTRUCTIVE - Using dot notation or bracket notation
function destructivelyUpdateObject(obj, key, value) {
  obj[key] = value; // Why are we using bracket notation here?
  return obj;
}   */
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
