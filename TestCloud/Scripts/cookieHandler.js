function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

function setCookie(name, value, daysMore, hoursMore) {
    let date = new Date();

    if (daysMore) {
        date = date.addDays(daysMore)
    }

    if (hoursMore) {
        date = date.addHours(hoursMore);
    }

    let dateIso = date.toISOString();
    let cookieString = name + '=' + value + '; expires = ' + dateIso + '; path = /';
    console.log(cookieString);

    document.cookie = cookieString;
}

function removeCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
 