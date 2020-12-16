// const sequence = prompt("Please input a sequence of numbers (a,b,c,d...)");

// const arr = sequence.split(",");

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + Number(arr[i]);
// }

// arr.forEach(function (item, index) {
//   console.log(index, item);
// });

// for (let item of arr) {
//   console.log(item);
// }

// console.log(`Sum = ${sum}`);

// const arr = [1, 6, 9, -10, 20];

// let userInput = Number(prompt("Please input your number:"));
// let foundIndex = -1;

// arr.forEach(function (item, index) {
//   if (userInput == item) {
//     foundIndex = index;
//     return;
//   }
// });

// if (foundIndex == -1) {
//   console.log(`${userInput} is NOT found in my array`);
// } else {
//   console.log(`${userInput} is FOUND in my array at index ${foundIndex}`);
// }

let arr = [1, 2, 3, 4, 5];

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length - 1]);

// arr[0] = arr[0] + 10;
// console.log(arr);

// console.log(arr);
// Create
// Thêm phần tử mới vào cuối mảng
// arr.push(100);
// console.log(arr);
// // Thêm phần tử mới vào đầu mảng
// arr.unshift(200);
// console.log(arr);

// // Delete
// // Xoá phần tử cuối cùng của mảng
// arr.pop();
// console.log(arr);
// // Xoá phần tử đầu tiên của mảng
// arr.shift();
// console.log(arr);

// Object - Đối tượng (dictionary)

const person = {
  name: "Peter", // property
  age: 19,
  sex: "male",
  single: true,
  hobbies: ["Listen to music", "Reading books"],
};

// key: value

// console.log(person);

// C,R,U,D (Create/Read/Update/Delete)

// Read

// console.log(person.name);
// console.log(person.age);

// Update

// person.name = "Tony";
// console.log(person);

// Create

// person.hairColor = "yellow";
// console.log(person);

// Delete

// delete person.hairColor;
// console.log(person);

// Read all

// for (let key in person) {
//   console.log(key, person[key]);
//   // person.key === person["key"]
//   // person["name"]
//   // person["age"]
//   // ...
// }
// console.log(person["name"]);

//

const phoneList = [
  {
    name: "Peter",
    phone: "0973712332",
  },
  {
    name: "Tony",
    phone: "0985124544",
  },
  {
    name: "Steve",
    phone: "0982453612",
  },
];

// Exercise 1
// Cho người dùng nhập vào 5 chữ cái (C/R/U/D/E)
// C - Hỏi người dùng tên mới muốn nhập vào
//   - Hỏi người dùng phone mới muốn nhập vào
//   - Thêm contact mới gồm tên và phone vừa nhập vào trong mảng phoneList
//   - In ra toàn bộ contact trong mảng phoneList theo dạng (name - phone)
// R - In ra toàn bộ contact trong mảng phoneList theo dạng (name - phone)
// U - Hỏi người dùng tên của contact cần update - Tìm kiếm theo tên vừa hỏi
//   - Nếu không tìm thấy => In ra (NOT FOUND)
//   - Nếu tìm thầy => Hỏi người dùng phone mới muốn update
//   - Sau khi update => In ra toàn bộ contact trong phoneList (name - phone)
// D - Hỏi người dùng tên của contact cần update - Tìm kiếm theo tên vừa hỏi
//   - Nếu không tìm thấy => In ra (NOT FOUND)
//   - Nếu tìm thầy => Xoá contact có name vừa nhập vào ra khỏi phoneList
//   - Sau khi xoá => In ra toàn bộ contact trong phoneList (name - phone)
// Exercise 2
// Ứng dụng vòng lặp while, Cho chương trình chạy vô tận cho đến khi nào
// người dùng nhập vào chữ E => Thoát khỏi chương trình

while (true) {
  const userInput = prompt("Please input C/R/U/D/E");

  if (userInput === "c") {
    // Logic tạo mới
    let newName = prompt("Please input new name:");
    let newPhone = prompt("Please input new phone");
    let newContact = {
      name: newName,
      phone: newPhone,
    };
    phoneList.push(newContact);
    // Logic in toàn bộ contact ra theo dạng (name - phone)
    // phoneList là 1 mảng gồm các {}
    // Chạy vòng lặp qua mảng phoneList
    for (let contact of phoneList) {
      // Lấy ra được toàn bộ contact{}
      // {}.name - {}.phone
      console.log(`${contact.name} - ${contact.phone}`);
    }
  } else if (userInput === "r") {
    // Logic in toàn bộ
    for (let contact of phoneList) {
      // Lấy ra được toàn bộ contact{}
      // {}.name - {}.phone
      console.log(`${contact.name} - ${contact.phone}`);
    }
  } else if (userInput === "u") {
    // Logic update
    // Cho người dùng nhập vào tên tìm kiếm
    let search = prompt("Find by name:");
    let foundIndex = -1;
    phoneList.forEach(function (item, index) {
      if (search === item.name) {
        foundIndex = index;
        return;
      }
    });

    if (foundIndex < 0) {
      console.log("NOT FOUND");
    } else {
      let updatePhone = prompt("Please input update phone number");
      phoneList[foundIndex].phone = updatePhone;
      for (let contact of phoneList) {
        console.log(`${contact.name} - ${contact.phone}`);
      }
    }
  } else if (userInput === "d") {
    // Logic delete
    // Cho người dùng nhập vào tên tìm kiếm
    let search = prompt("Find by name:");
    let foundIndex = -1;
    phoneList.forEach(function (item, index) {
      if (search === item.name) {
        foundIndex = index;
        return;
      }
    });

    if (foundIndex < 0) {
      console.log("NOT FOUND");
    } else {
      phoneList.splice(foundIndex, 1);
      for (let contact of phoneList) {
        console.log(`${contact.name} - ${contact.phone}`);
      }
    }
  } else if (userInput === "e") {
    break;
  } else {
    // Các trường hợp còn lại
    console.log("Invalid command");
  }
}
