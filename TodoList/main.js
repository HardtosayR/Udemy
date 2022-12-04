alert("Welcome! 许超");
const data = [];
while (true) {
  choice = prompt("Your command?");
  if (choice === "new") {
    let li = prompt("Add a new todo:");
    let userComfirm = prompt(
      `Are you sure to add "${li}" in your todo list?(y/n)`
    );
    if (userComfirm === "y") {
      data.push(li);
      alert("Comfirmed!");
    } else {
      alert("Canceled!");
    }
  } else if (choice === "list") {
    console.log(">>>>>>>>>>>>>>>>>>>");
    for (let i = 0; i < data.length; i++) {
      console.log(`#${i + 1}:${data[i]}`);
    }
  } else if (choice === "delete") {
    console.log(">>>>>>>>>>>>>>>>>>>");
    for (let i = 0; i < data.length; i++) {
      console.log(`#${i + 1}:${data[i]}`);
    }
    let indexOfData = parseInt(prompt("Enter todo number to delete it:"));
    if (indexOfData > 0 && indexOfData <= data.length) {
      let userComfirm = prompt(
        `Sure to delete "#${indexOfData}:${data[indexOfData - 1]}" record?(y/n)`
      );
      if (userComfirm === "y") {
        data.splice(indexOfData - 1, 1);
        alert("Comfirmed!");
      } else {
        alert("Canceled!");
      }
    } else {
      alert("Invalid nubmer!");
    }
  } else if (choice === "quit") {
    break;
  } else {
    alert("Invalid option! Try again!");
  }
}
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
alert("Your have quitted!");
console.log(`>>>There are ${data.length} records<<<`);
