const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const userCommand = prompt("Enter you command:");

if (userCommand === 'print') {
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }

} else if (userCommand === 'verify') {
  const empName = prompt('Please enter an employee name');
  let verify = 'false'
  for(let i=0; i < employeeList.length; i++){
    if (empName === employeeList[i].name){
        verify = 'true';
        break;
     }     
   }
   render(verify);

} else if (userCommand === 'lookup') {
  const empName = prompt('Please enter the employee name: ');
  for (let i=0; i < employeeList.length; i++) {
    if (empName === employeeList[i].name){
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      break;
    }   
  }
 
} else if (userCommand === 'contains') {
  const inputString = prompt('Please enter a string: ');
  for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.includes(inputString)){
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }

} else if (userCommand === 'update') {
  const userName = prompt('Please enter your name:');
  const userField = prompt('Which field do you want to update?');
  const userValue = prompt("Please enter the value:");
  for (let i = 0; i < employeeList.length; i++) {
    if (userName === employeeList[i].name) {
      if (userField === "officeNum") {
        employeeList[i].officeNum = userValue;
      }
      else if (userField === "phoneNum") {
        employeeList[i].phoneNum = userValue;
      }
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }

} else if (userCommand === 'add') {
    const userName = prompt('Please enter your name:');
    const userField = prompt('Please enter your office number:');
    const userValue = prompt("Please enter your phone number:");

    const newUser = {name:userName, officeNum:userField, phoneNum:userValue};
    employeeList.push(newUser);

    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }

} else if (userCommand === 'delete') {
    const userName = prompt('Please enter your name:');
  
    for (let i = 0; i < employeeList.length; i++) {
      if(employeeList[i].name === userName){
        employeeList.splice(i, 1);
        break;
      }       
    }
    for (let i = 0; i < employeeList.length; i++) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
} else if (userCommand === 'sort') {
    let sortedEmployeeList = [];

    for (let i = 0; i < employeeList.length; i++) {
      let index = sortedEmployeeList.length;
      for (let j = 0; j < sortedEmployeeList.length;j++){
        if(employeeList[i].name < sortedEmployeeList[j].name){
          index = j; 
          break;        
        }      
      }
      sortedEmployeeList.splice(index, 0, employeeList[i]);      
     }
    for (let j = 0; j < sortedEmployeeList.length;j++){
    render(sortedEmployeeList[j].name, sortedEmployeeList[j].officeNum, sortedEmployeeList[j].phoneNum);
    }
}

