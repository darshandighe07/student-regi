function submit() {

    let a = document.getElementById("a1").value.trim(); // username
    let b = document.getElementById("a2").value.trim(); // password

    // Validation
    if (a === "" && b === "") {
        alert("Fill the form ❌");
        return;
    }
    if (a === "") {
        alert("Enter your name ❌");
        document.getElementById("a1").style.border = "1px solid red";
        return;
    }
    if (b === "") {
        alert("Enter your password ❌");
        document.getElementById("a2").style.border = "1px solid red";
        return;
    }
    if (b.length < 6) {
        alert("Password must be at least 6 characters ❌");
        document.getElementById("a2").style.border = "1px solid red";
        return;
    }

    let users = JSON.parse(localStorage.getItem("user")) || [];

    // Username + Password match
 let user = users.find(
  (e) => e.name === a && e.password === b
);

if (user) {
  if (user.cource === "FY") {
    alert("Login Successful ✅");
    window.location.href = "fy.html";
  } else if (user.cource === "SY") {
    alert("Login Successful ✅");
    window.location.href = "sy.html";
  } else if (user.cource === "TY") {
    alert("Login Successful ✅");
    window.location.href = "ty.html";
  } else {
    alert("Course is wrong ❌");
  }
} else {
  alert("Name or Password is wrong ❌");
}

}

function f1(s) {
    s.style.border = "1px solid gray";
}
