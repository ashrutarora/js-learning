// Promises

// 1) Defining & Consuming Separately
const promiseOne = new Promise((resolve, reject) => {
  // Do an Async task
  setTimeout(() => {
    console.log("Async Task 1");

    resolve();
  }, 1000);
});

// .then() is connected to resolve
promiseOne.then(() => {
  console.log("Async 1 Resolved");
});

// 2) Defining & Consuming directly
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 Resolved");
});

// 3) Passing data in Resolve
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      username: "Ashrut",
      email: "ashrut@gmail.com",
    });
  }, 1000);
});

// Promise Consume
promiseThree.then((user) => {
  console.log(user);
});

console.log();

// 4) Resolve and Reject both
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "Shlok",
        email: "shlok@gmail.com",
      });
    } else {
      reject("Error: Shlok Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either Resolved or Rejected");
  });

// 5) Using async await for Promise

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
        username: "Alok",
        email: "alok@gmail.com",
      });
    } else {
      reject("Error: Alok Went Wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

