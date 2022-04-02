function insertQuietTimeSchedule() {
  const schedule = getQuietTimeSchedule();
  document.getElementById('schedule').textContent = schedule;
}

function getQuietTimeSchedule() {
  // In the form of 'mm/dd(a)'
  const nextSunday = formatDate(getNextSunday());

  const times = ['14:00~15:00', '15:00~16:00', '16:00~17:00', '17:00~18:00', '18:00~19:00', '19:00~20:00', '20:00~21:00'];
  let schedule = '';
  times.forEach((time) => {
    schedule = schedule + nextSunday + time + '\n';
  });
  /*
  eg.
  '4/3(日) 14:00~15:00\n'
  '4/3(日) 15:00~16:00\n'
  '...'
  */
  return schedule;
}

/** @type {date}  */
function getNextSunday() {
  const today = new Date();
  const daysToSunday = 7 - today.getDay();
  today.setDate(today.getDate() + daysToSunday);
  const nextSunday = today;
  return nextSunday;
}

/** @type {string}  */
function formatDate(date) {
  const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][date.getDay()];
  // convert to mm/dd(a)
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}(${dayOfWeekStr})`;
  return formattedDate;
}

async function copyToClipBoard() {
  const schedule = document.getElementById('schedule').value;
  await navigator.clipboard.writeText(schedule);
  alert("スケジュールをコピーしました。\n調整さんの「候補日程」に貼り付けてください。");
  window.location = 'https://chouseisan.com/'
}
document.getElementById('copy').onclick = copyToClipBoard;
window.onload = insertQuietTimeSchedule;