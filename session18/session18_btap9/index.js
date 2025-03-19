let timeInput = prompt("Nhập thời gian:");
let [hour, minute, second] = timeInput.split(":").map(Number);
let period = "AM";
switch (true) {
    case (hour === 0):
        hour = 12;
        period = "AM";
        break;
    case (hour > 0 && hour < 12):
        period = "AM";
        break;
    case (hour === 12):
        period = "PM";
        break;
    case (hour > 12 && hour <= 23):
        hour -= 12;
        period = "PM";
        break;
}
let time12h = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")} ${period}`;
alert(`${time12h}`);
