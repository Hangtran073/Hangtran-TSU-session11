let i;
let j;
for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        console.log(i + "*" + j + "=" + i * j);
        document.write(i + "*" + j + "=" + i * j + "<br>")
    }
    console.log("------------");
    document.write("-----------" + "<br>");
}