let arr = [];
function submit() {
  let a = document.getElementById("text").value;
  let b = document.getElementById("num").value;
  let c = document.getElementById("email").value;
  let d = document.getElementById("selecter").value;

  if (a === "" && b === "" && c === "" && d === "") {
    alert("Fill The form");
    document.getElementById("text").style.border = "1px solid red";
    document.getElementById("num").style.border = "1px solid red";
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("selecter").style.border = "1px solid red";
  } else if (a.trim() === "") {
    alert("Enter your name");
    document.getElementById("text").style.border = "1px solid red";
  } else if (b === "") {
    alert("Enter your Mobile number");
    document.getElementById("num").style.border = "1px solid red";
  } else if (b.length !== 10) {
    alert("Enter your currect Mobile number");
    document.getElementById("num").style.border = "1px solid red";
  } else if (c.trim() === "") {
    alert("Enter your strong password");
    document.getElementById("email").style.border = "1px solid red";
  } else if (c.length <= 6) {
    alert("Enter your strong password");
    document.getElementById("email").style.border = "1px solid red";
  } else if (d === "") {
    alert("Choose The your Cource");
    document.getElementById("selecter").style.border = "1px solid red";
  } else {
    alert("Login Successful ");
    let user = {
      name: a,
      mobile: b,
      password: c,
      cource: d,
    };
    arr.push(user);
    localStorage.setItem("user", JSON.stringify(arr));
    window.location.href="class.html"
  }
}

function remove(input) {
  input.style.border = "1px solid gray";
}
