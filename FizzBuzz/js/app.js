function fizz() {
    let num1 = prompt("Enter a number: ")
    if (num1 == null) {
        return;
    }
    Number(num1)
    function Buzz() {
        switch (true) {
            case num1 % 5 == 0 && num1 % 3 == 0:
                alert("FizzBuzz")
                fizz()
                break;
            case num1 % 5 == 0:
                alert("Fizz")
                fizz()
                break;
            case num1 % 3 == 0:
                alert("Buzz")
                fizz()
                break;
            default:
                alert("Invalid Value")
                break;
            }
        }
    Buzz()
}
fizz()