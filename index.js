console.log("Website loaded successfully");
function showMore() {
    // קבל את האלמנט של התמונות הנסתרות (המיכל עם ה-ID: moreImages)
    var hiddenDiv = document.getElementById("moreImages");
    
    // קבל את האלמנט של הכפתור
    var button = document.getElementById("loadMoreButton");
    
    // בדוק את המצב הנוכחי של האלמנט הנסתר (display: none הוא המצב המוסתר)
    if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
        // אם מוסתר: שנה ל-flex כדי שיופיע כגלריה 
        hiddenDiv.style.display = "flex";
        // שנה את טקסט הכפתור
        button.innerHTML = "הסתר תמונות נוספות";
    } else {
        // אם מוצג: שנה חזרה ל-none כדי להסתיר
        hiddenDiv.style.display = "none";
        // שנה את טקסט הכפתור בחזרה
        button.innerHTML = "לצפייה ב-6 תמונות נוספות";
    }
}