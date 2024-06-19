function fizzBuzz() {
    let num1 = prompt("Enter a number: ")
    if (num1 == null) {
        return;
    }
    Number(num1)
    function checkNumber() {
        switch (true) {
            case num1 % 5 == 0 && num1 % 3 == 0:
                alert("FizzBuzz")
                fizzBuzz()
                break;
            case num1 % 5 == 0:
                alert("Fizz")
                fizzBuzz()
                break;
            case num1 % 3 == 0:
                alert("Buzz")
                fizzBuzz()
                break;
            default:
                alert("Invalid Value")
                break;
            }
        }
    checkNumber()
}
fizzBuzz()
