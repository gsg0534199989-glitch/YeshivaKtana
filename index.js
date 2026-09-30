// ===================================
// ** 1. ניווט רספונסיבי (תפריט המבורגר) **
// ===================================
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        
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
// ** 2. גלריה דינמית וטעינת תוכן **
// ===================================

// רשימת כל התמונות והסרטונים - פשוט מוסיפים/מעדכנים כאן!
const galleryData = [
  // תמונות
  { type: 'image', src: './assets/images1.JPG', alt: 'תמונה 1' },
  { type: 'image', src: './assets/images2.JPG', alt: 'תמונה 2' },
  { type: 'image', src: './assets/images3.JPG', alt: 'תמונה 3' },
  { type: 'image', src: './assets/images4.JPG', alt: 'תמונה 4' },
  { type: 'image', src: './assets/images5.JPG', alt: 'תמונה 5' },
  { type: 'image', src: './assets/images6.JPG', alt: 'תמונה 6' },
  { type: 'image', src: './assets/images7.JPG', alt: 'תמונה 7' },
  { type: 'image', src: './assets/images8.JPG', alt: 'תמונה 8' },
  { type: 'image', src: './assets/images9.JPG', alt: 'תמונה 9' },
  { type: 'image', src: './assets/images10.JPG', alt: 'תמונה 10' },
  { type: 'image', src: './assets/images11.JPG', alt: 'תמונה 11' },
  { type: 'image', src: './assets/images12.jpeg', alt: 'תמונה 12' },
  { type: 'image', src: './assets/images13.jpeg', alt: 'תמונה 13' },
  { type: 'image', src: './assets/images14.jpeg', alt: 'תמונה 14' },
  { type: 'image', src: './assets/images15.jpg', alt: 'תמונה 15' },
  { type: 'image', src: './assets/images16.jpg', alt: 'תמונה 16' },
  { type: 'image', src: './assets/images17.jpg', alt: 'תמונה 17' },
  { type: 'image', src: './assets/images18.jpg', alt: 'תמונה 18' },
  { type: 'image', src: './assets/images19.jpg', alt: 'תמונה 19' },

  // סרטונים (מופיעים בסוף)
  { type: 'video', src: './assets/video1.mp4' },
  { type: 'video', src: './assets/video2.mp4' },
  { type: 'video', src: './assets/video3.mp4' }
];

let currentIndex = 0;
const itemsPerPage = 6; // כמות הפריטים שנטענים בכל בלוק

function loadNextBatch() {
    const container = document.getElementById('gallery-container');
    const button = document.getElementById("loadMoreButton");
    
    if (!container || !button) return;

    const isEnglish = document.documentElement.lang === 'en';

    // אם הוצגו כבר כל הפריטים - הלחיצה הבאה תאפס ותחזיר למצב ההתחלתי
    if (currentIndex >= galleryData.length) {
        container.innerHTML = '';
        currentIndex = 0;
        loadNextBatch();
        return;
    }

    // טעינת 6 הפריטים הבאים מהרשימה
    const nextItems = galleryData.slice(currentIndex, currentIndex + itemsPerPage);

    nextItems.forEach(item => {
        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || 'תמונה';
            container.appendChild(img);
        } else if (item.type === 'video') {
            const video = document.createElement('video');
            video.src = item.src;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            container.appendChild(video);
        }
    });

    currentIndex += itemsPerPage;

    // עדכון ניסוח הכפתור בצורה פשוטה ואחידה
    if (currentIndex >= galleryData.length) {
        // כשכל הגלריה פתוחה
        button.innerHTML = isEnglish ? "Hide Photos & Videos" : "הסתר תמונות וסרטונים";
    } else {
        // כשיש עוד פריטים בדרך להציג
        button.innerHTML = isEnglish ? "View More Photos & Videos" : "לצפייה בתמונות וסרטונים נוספים";
    }
}

// ===================================
// ** 3. סליידר תמונות רקע (Hero) **
// ===================================
function startBackgroundSlideshow() {
    const images = document.querySelectorAll('.hero-background img');
    let currentIndex = 0; 

    if (images.length === 0) return; 

    function rotateImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    images[0].classList.add('active'); 
    setInterval(rotateImage, 8000); 
}

// ===================================
// ** הפעלה לאחר טעינת הדף **
// ===================================
window.onload = function() {
    setupMobileMenu();
    startBackgroundSlideshow();
    loadNextBatch(); // טעינת 6 הפריטים הראשונים
};