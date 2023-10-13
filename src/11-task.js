function convertSeconds(seconds) {
    const часы = Math.floor(seconds / 3600);
    seconds %= 3600;
    const минуты = Math.floor(seconds / 60);
    const секунды = seconds % 60;
  
    return Время ; ${часы} ч ${минуты} мин ${секунды} сек;
  }
  
  const секунды = 3665;
  const результат = convertSeconds(секунды);
  
  console.log(результат);