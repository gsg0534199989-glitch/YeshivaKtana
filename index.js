function loadNextBatch() {
    var hiddenGroups = document.querySelectorAll('.hidden-group');
    var button = document.getElementById("loadMoreButton");
    var nextGroup = null;
    var nextGroupIndex = -1;

    // פונקציה לקריאת הטקסט הנכון מהכפתור
    function getButtonText(step) {
        // קוראים את הנתונים ישירות מהכפתור (data-step1, data-step2, data-done, data-step3-hide)
        return button.getAttribute('data-' + step);
    }
    
    // --- איתור המצב הנוכחי ---
    
    // בדיקה: האם כל הקבוצות מוצגות כרגע?
    var allVisible = true;
    hiddenGroups.forEach(group => {
        // בודקים אם יש קבוצה שעדיין מוסתרת
        if (group.style.display === "none" || group.style.display === "") {
            allVisible = false;
        }
    });

    // 1. **מצב הסתרה (Hide All):** אם הכל מוצג כרגע (All Visible) 
    // ולחצו שוב, צריך להחזיר למצב התחלתי.
    if (allVisible) {
        
        // נסתיר את כל הקבוצות הנסתרות
        hiddenGroups.forEach(group => {
            group.style.display = "none";
        });
        
        // נחזיר את הכפתור למצב ההתחלתי (טקסט שלב 1)
        button.innerHTML = getButtonText('step1');
        button.style.cursor = "pointer";
        return; // סיימנו את הפעולה
    }


    // 2. **מצב חשיפה (Reveal Next):** אם עדיין לא הכל מוצג, נמשיך לחשוף
    
    // מצא את הקבוצה הנסתרת הראשונה שעדיין לא הוצגה
    for (var i = 0; i < hiddenGroups.length; i++) {
        if (hiddenGroups[i].style.display === "none" || hiddenGroups[i].style.display === "") {
            nextGroup = hiddenGroups[i];
            nextGroupIndex = i;
            break; 
        }
    }

    if (nextGroup) {
        // 3. הצג את הקבוצה שנמצאה
        nextGroup.style.display = "flex";

        // 4. עדכן את טקסט הכפתור בהתאם
        
        // אם הצגנו את התמונות (אינדקס 0): נכין את הכפתור לחשיפת הסרטונים (שלב 2)
<<<<<<< HEAD
        // if (nextGroupIndex === 0) {
        //     button.innerHTML = getButtonText('step2');
=======
        if (nextGroupIndex === 0) {
            button.innerHTML = getButtonText('step2');
>>>>>>> c86226c2e382e1316ceeaba6c6029d542419bd76

        // אם הצגנו את הסרטונים (אינדקס 1, והיא הקבוצה האחרונה):
        // נשנה את הטקסט ל"הסתר הכל" (שלב 3)
        } else if (nextGroupIndex === 1) {
            button.innerHTML = getButtonText('step3-hide');
            button.style.cursor = "pointer"; // לוודא שהכפתור לחיץ
        }
    } 
    // אין צורך ב-else נוסף, כי המצב של "הכל מוצג" מטופל כבר למעלה.
<<<<<<< HEAD
//}
=======
}
>>>>>>> c86226c2e382e1316ceeaba6c6029d542419bd76
// **הפונקציה הזו נשארת זהה לגרסה שרק החליפה תמונות**

function startBackgroundSlideshow() {
    // קבל את כל התמונות בתוך המיכל
    const images = document.querySelectorAll('.hero-background img');
    let currentIndex = 0; 

    if (images.length === 0) {
        return; 
    }

    function rotateImage() {
        // 1. הסתר את התמונה הנוכחית
        images[currentIndex].classList.remove('active');

        // 2. קדם את האינדקס
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // 3. הצג את התמונה החדשה
        images[currentIndex].classList.add('active');
    }

    // הפעל את הפונקציה כל 8000 מילישניות (8 שניות)
    const slideshowInterval = setInterval(rotateImage, 8000); 
}

// ודא שהקוד הזה מופעל לאחר טעינת הדף
window.onload = startBackgroundSlideshow;