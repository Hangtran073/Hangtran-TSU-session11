
let weight = parseFloat(prompt("Cân nặng(kg)"));
let height = parseFloat(prompt("Chiều cao(m)"));
let bmi = (weight / (height ** 2))
switch (true) {
    case bmi < 18.5:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Cân nặng thấp (gầy)");
        break;
    case bmi >= 18.5 && bmi <= 24.9:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Cân nặng bình thường");
        break;
    case bmi >= 25:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Thừa cân");
        break;
    case bmi > 25 && bmi <= 29.9:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Tiền béo phì");
        break;
    case bmi >= 30 && bmi <= 34.9:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Béo phì độ 1");
        break;
    case bmi >= 35 && bmi <= 39.9:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Béo phì độ 2");
        break;
    case bmi >= 40:
        alert(bmi.toFixed(2) + "(kg/m**2): " + "Béo phì độ 3");
        break;
    default:
        alert("Giá trị không hợp lệ");

}

