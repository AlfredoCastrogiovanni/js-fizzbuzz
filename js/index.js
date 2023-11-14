
const output = document.getElementById("output");

for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");

    if (i % 3 == 0 && i % 5 == 0) {
        li.textContent = "FizzBuzz";
        li.className = "li-gold text-bold";
    } else if (i % 3 == 0) {
        li.textContent = "Fizz";
        li.className = "li-green text-bold";
    } else if (i % 5 == 0) {
        li.textContent = "Buzz";
        li.className = "li-blue text-bold";
    } else {
        li.textContent = i;
    }

    output.append(li);
}