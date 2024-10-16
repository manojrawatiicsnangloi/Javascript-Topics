const num = parseInt(prompt("Enter Some Number"));

document.write("<h1> Pattern 1 </h1>");
for (let i = 1; i <= num; i++) {
  for (let j = 0; j < num; j++) {
    document.write("*");
  }
  document.write("<br>");
}


// Print the tringle
document.write("<h1>Right Angled Triangle Pattern </h1>");
for (let i = 1; i <= num; i++) {
  for (let j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br>");
}

// Print The invert triangle of star
document.write("<h1> Ulta Triangle Pattern </h1>");
for (let i = 1; i <= num; i++) {
  for (let j = num; j >=i; j--) {
    document.write("*");
  }
  document.write("<br>");
}

// Multiplication Table Till Given Number
document.write("<h1>Multiplication Table Till Given Number</h1>");

for(let i = 1; i <= num; i++){
    document.write(`<h3>Multiplication Table of ${i}</h3>`);
    for(let j = 1; j <= 10; j++){
        document.write(`${i} * ${j} = ${i * j} <br>`);
    }
    document.write("<br><br>");
}
