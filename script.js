async function copyToClipBoard() {
  const schedule = document.getElementById('schedule').value;
  await navigator.clipboard.writeText(schedule);
  alert("スケジュールをコピーしました。\n調整さんの「候補日程」に貼り付けてください。");
  window.location = 'https://chouseisan.com/'
}
document.getElementById('copy').onclick = copyToClipBoard;