function displayDateTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    var timeOfDay;
    if (hours < 12) {
        timeOfDay = 'утра';
    } else if (hours < 18) {
        timeOfDay = 'дня';
    } else {
        timeOfDay = 'вечера';
    }
    var greeting = 'Доброго ' + timeOfDay + '!';
    var dateTimeString = 'Сегодня ' + currentDate.toLocaleDateString() + ', время ' + hours + ':' + minutes;
    document.getElementById('greeting').innerText = greeting;
    document.getElementById('datetime').innerText = dateTimeString;
}

window.onload = function() {
    displayDateTime();
};