let usename = prompt("Nhập tên đăng nhập");

if (usename === "ADMIN") {
    let password = prompt("Nhập mật khẩu");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }

} else if (usename === null) {
    alert("Cancelled");
} else {
    alert("I Don't know you");
}

