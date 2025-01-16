let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
// Set the test text
document.getElementById("inputText").value = testText;

// Reset results and timer
document.getElementById("output").innerHTML = "";
startTime = new Date().getTime();

// Change button text and functionality
var button = document.getElementById("btn");
button.innerHTML = "End Test";
button.onclick = endTest;
        }

 function endTest() {
            endTime = new Date().getTime();

            // تعطيل إدخال المستخدم
            document.getElementById("userInput").readOnly = true;

            // حساب الوقت المنقضي وعدد الكلمات في الدقيقة (WPM)
            var timeElapsed = (endTime - startTime) / 1000; // بالثواني
            var userTypedText = document.getElementById("userInput").value;

            // تقسيم النص باستخدام regex لحساب الكلمات بشكل صحيح
            var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !== "";
            }).length;

            var wpm = 0; // القيمة الافتراضية

            if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }

            // عرض النتائج
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = "<h2>نتائج اختبار الكتابة:</h2>" +
                "<p>عدد الكلمات المكتوبة: " + typedWords + "</p>" +
                "<p>الوقت المنقضي: " + timeElapsed.toFixed(2) + " ثواني</p>" +
                "<p>عدد الكلمات في الدقيقة (WPM): " + wpm + "</p>";

            // إعادة تعيين الزر
            var button = document.getElementById("btn");
            button.innerHTML = "بدء الاختبار";
            button.onclick = startTest;
        }

