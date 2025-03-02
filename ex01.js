
let year = prompt("Nhập năm bất kì")

if((year % 4 === 0) && (year % 100 !== 0 )){
    alert("Đây là năm nhuận: ");
} else if(( year % 100 ===0) && (year % 400 ===0)){
    alert("Đây là năm nhuận");
} else{
    alert("Đây không phải là năm nhuận")
}
/* cáck khác
function isLeapYear(year){
    if ((year %4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return true;
 }  else {
   return false;
}
 } */


