let a = parseFloat(prompt("Mời bạn nhập vào số a: "));
let b = parseFloat(prompt("Mời bạn nhập vào số b: "));
let operator = prompt("Mời bạn nhập vào các phép tính (+,-,*,/): ");
let result;
switch (operator) {
    case "+":
        result = a + b;
        alert("Kết quả phép tính trên: " + a + "+" + b + "=" + result);
        break;
    case "-":
        result = a - b;
        alert("Kết quả phép tính trên: " + a + "-" + b + "=" + result);
        break;
    case "*":
        result = a * b;
        alert("Kết quả phép tính trên: " + a + "*" + b + "=" + result);
        break;
    case "/":
        if (b === 0) {
            alert("Lỗi: Không thể chia cho 0!");
        } else {
            result = a / b;
            alert("Kết quả phép tính trên:" + a + "/" + b + "=" + result);

        }

        break;
    default:
        alert("Giá trị nhập vào không hợp lệ");


}