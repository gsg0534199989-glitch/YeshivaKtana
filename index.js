// ===================================
// ** 1. ניווט רספונסיבי (תפריט המבורגר) **
// ===================================
function setupMobileMenu() {
    // קבל את כפתור ההמבורגר ואת התפריט
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // הוסף או הסר את class 'active' כדי להציג/להסתיר את התפריט
            mainNav.classList.toggle('active');
        });
        
        // סגור את התפריט בלחיצה על קישור (כדי שלא ישאר פתוח)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
}

// ===================================
// ** 2. טעינת תוכן גלריה נוסף **
// ===================================
function loadNextBatch() {
    var hiddenGroups = document.querySelectorAll('.hidden-group');
    var button = document.getElementById("loadMoreButton");
    var nextGroup = null;
    
    function getButtonText(step) {
        return button.getAttribute('data-' + step);
    }
    
    var visibleGroupsCount = Array.from(hiddenGroups).filter(group => group.style.display === "flex").length;

    // **מצב 3: הסתר הכל (כאשר לחצו על הכפתור והכל כבר מוצג)**
    if (visibleGroupsCount === hiddenGroups.length) {
        hiddenGroups.forEach(group => {
            group.style.display = "none";
        });
        button.innerHTML = getButtonText('step1'); // חזור לטקסט ההתחלתי
        return; 
    }

    // **מצב 1/2: חשיפת הקבוצה הבאה**
    for (var i = 0; i < hiddenGroups.length; i++) {
        if (hiddenGroups[i].style.display === "none" || hiddenGroups[i].style.display === "") {
            nextGroup = hiddenGroups[i];
            nextGroup.style.display = "flex";
            
            // עדכון הכפתור למצב הבא
            if (i === 0) {
                // אם חשיפה ראשונה (תמונות נוספות), הטקסט הבא הוא "צפייה בסרטונים"
                button.innerHTML = getButtonText('step2'); 
            } else if (i === 1) {
                // אם חשיפה שנייה (סרטונים), הטקסט הבא הוא "הסתר הכל"
                button.innerHTML = getButtonText('step3-hide');
            }
            break; 
        }
    }
}

// ===================================
// ** 3. סליידר תמונות רקע (Hero) **
// ===================================
function startBackgroundSlideshow() {
    const images = document.querySelectorAll('.hero-background img');
    let currentIndex = 0; 

    if (images.length === 0) {
        return; 
    }

    function rotateImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length; // לולאה אינסופית
        images[currentIndex].classList.add('active');
    }

    // ודא שהתמונה הראשונה פעילה בהתחלה
    images[0].classList.add('active'); 

    // הפעל את הפונקציה כל 8000 מילישניות (8 שניות)
    const slideshowInterval = setInterval(rotateImage, 8000); 
}

// ===================================
// ** הפעלה לאחר טעינת הדף **
// ===================================
window.onload = function() {
    setupMobileMenu();
    startBackgroundSlideshow();
};