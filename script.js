let name = "Alex";
let number_of_schet = 7777;
let balance = 10000;

let inputName = prompt("Введите ваше имя:");

switch (inputName) {
    case name:
        let inputAccount = parseInt(prompt("Введите номер счета:"));

        switch (inputAccount) {
            case number_of_schet:
                let snyat = parseInt(prompt(`Сколько хотите снять? (до ${balance}):`));

                switch (true) {
                    case (snyat > balance):
                        alert("Недостаточно средств");
                        break;
                    case (snyat <= balance):
                        balance -= snyat;
                        alert(`Вы успешно сняли ${snyat}. Остаток на счете: ${balance}`);
                        break;
                }
                break;
            default:
                alert("Пользователь не найден: Неправильный номер счета");
        }
        break;
    default:
        alert("Пользователь не найден: Неправильное имя");
}

