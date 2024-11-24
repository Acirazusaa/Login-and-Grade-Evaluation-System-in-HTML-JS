let username, password, role;

function login() {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role:");

  if (!username || !password || !role) {
    alert("Input should not be empty.");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
    }
  }
}

function calculateAverage(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  average = Math.round(average);
  console.log("Average:", average);

  if (average <= 74) {
    console.log(`Hello, ${role}, your average is ${average}. The letter equivalent is F`);
  } else if (average >= 85 && average <= 89) {
    console.log(`Hello, ${role}, your average is ${average}. The letter equivalent is B`);
  } else if (average >= 90 && average <= 95) {
    console.log(`Hello, ${role}, your average is ${average}. The letter equivalent is A`);
  } else if (average > 96) {
    console.log(`Hello, ${role}, your average is ${average}. The letter equivalent is A+`);
  }
}

// Example usage
login();
calculateAverage(75, 85, 96, 99);