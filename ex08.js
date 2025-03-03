let date = parseInt(prompt("Nhập ngày sinh:"));
let month = parseInt(prompt("Nhập tháng sinh:"));
//alert(checkCapricorn(date, month));

switch (month) {
    case 1:
        if (date <= 19) {
            alert("Thuộc cung Ma kết ");
        } else if (date >= 20) {
            alert("Thuộc cung Bảo bình");
        }
        break;

    case 2:
        if (date <= 18) {
            alert("Thuộc cung Bảo bình ");
        } else if (date >= 19) {
            alert("Thuộc cung Song ngư ");
        }
        break;
    case 3:
        if (date <= 20) {
            alert("Thuộc cung Song ngư ");
        } else if (date >= 21) {
            alert("Thuộc cung Bạch dương");
        }
        break;
    case 4:
        if (date <= 19) {
            alert("Thuộc cung Bạch dương");
        } else if (date >= 20) {
            alert("Thuộc cung Kim ngư ");
        }
        break;
    case 5:
        if (date <= 20) {
            alert("Thuộc cung Kim ngư");
        } else if (date >= 21) {
            alert("Thuộc cung Song tử ");
        }
        break;
    case 6:
        if (date <= 21) {
            alert("Thuộc cung Song tử ");
        } else if (date >= 22) {
            alert("Thuộc cung Cự giải ");
        }
        break;
    case 7:
        if (date <= 21) {
            alert("Thuộc cung Cự giải ");
        } else if (date >= 22) {
            alert("Thuộc cung Sư tử ");
        }
        break;
    case 8:
        if (date <= 22) {
            alert("Thuộc cung  Sư tử");
        } else if (date >= 23) {
            alert("Thuộc cung  Xử nử ");
        }
        break;
    case 9:
        if (date <= 22) {
            alert("Thuộc cung Xử nữ");
        } else if (date >= 23) {
            alert("Thuộc cung Thiên bình");
        }
        break;
    case 10:
        if (date <= 22) {
            alert("Thuộc cung Thiên bình ");
        } else if (date >= 23) {
            alert("Thuộc cung  Thiên yết");
        }
        break;
    case 11:
        if (date <= 21) {
            alert("Thuộc cung  Thiên yết ");
        } else if (date >= 22) {
            alert("Thuộc cung Nhân mã ");
        }
        break;
    case 12:
        if (date <= 21) {
            alert("Thuộc cung Nhân mã ");
        } else if (date >= 22) {
            alert("Thuộc cung Ma kết ");
        }
        break;
    default:
        alert("Giá trị nhập vào không hợp lệ")











}