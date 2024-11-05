function checkLogin(event) {
    event.preventDefault();
    const loginID = document.getElementById("loginID").value;
    const password = document.getElementById("password").value;

    if (loginID === "2301050141" && password === "123456") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Incorrect login ID or password.");
    }
}
