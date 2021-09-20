function getDateTime() {
  var date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      hour = date.getHours() + 1,
      minute = date.getMinutes(),
      second = date.getSeconds();
      month = checkTime(month);
      day = checkTime(day);
      hour = checkTime(hour);
      minute = checkTime(minute);
      second = checkTime(second);
   function checkTime(i) {
      if (i < 10) {
              i = "0" + i;
     }
    return i;
  }
  return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}
