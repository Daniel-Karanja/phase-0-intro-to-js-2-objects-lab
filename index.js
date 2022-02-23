// Write your solution in this file!\\document

var employee = {
  name: "",
  streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let obj = { ...employee };
  obj[key] = value;
  return [employee, obj];
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
}

function deleteFromEmployeeByKey(employee, key) {
  delete employee[key];
}
