let count = 0; // Initialize count to 0
function increaseCount() {
  count++; // زيادة العدد بمقدار 1
  displayCount(); // عرض العدد
  checkCountValue(); // التحقق من قيمة العدد وعرض الرسائل
}
function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // عرض العدد في HTML
}
function checkCountValue() {
  if (count === 10) {
    alert("لقد حصل منشورك على إنستغرام على 10 متابعين! مبروك!");
  } else if (count === 20) {
    alert("لقد حصل منشورك على إنستغرام على 20 متابعين! استمر في ذلك!");
  }
}