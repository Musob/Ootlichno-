// Mobile menyuni boshqarish
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menyu havolalarini bosganda mobil menyuni yopish
document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Kurs ma'lumotlari
const coursesData = {
    standard: {
        title: "Standart Kurs",
        icon: "fas fa-book",
        duration: "6 oy",
        group: "10-12 kishilik guruh",
        certificate: "Sertifikat",
        price: "450,000 so'm/oy",
        description: `<p>Standart kursimiz rus tilini asoslaridan boshlab mukammal o'rganish uchun mo'ljallangan. Kurs davomida siz grammatika, lug'at, talaffuz va nutq ko'nikmalarini rivojlantirasiz.</p>
                      <p>Darslar tajribali o'qituvchilar tomonidan olib boriladi. Har bir darsda yangi mavzular o'rganasiz va amaliy mashqlar orqali bilimlaringizni mustahamlashtirasiz.</p>
                      <p>Kurs oxirida sertifikat olasiz va rus tilida erkin muloqot qila olasiz. Bu kurs ish joyingizda yoki o'qish joyingizda rus tilidan foydalanish imkoniyatini beradi.</p>`
    },
    premium: {
        title: "Premium Kurs",
        icon: "fas fa-star",
        duration: "4 oy",
        group: "4-6 kishilik guruh",
        certificate: "Sertifikat + Imtihon",
        price: "750,000 so'm/oy",
        description: `<p>Premium kursimiz kichik guruhlarda chuqur o'qitish uchun mo'ljallangan. Bu kursda siz nafaqat rus tilini o'rganasiz, balki madaniyat va an'analar haqida ham bilim olasiz.</p>
                      <p>Darslar yuqori malakali o'qituvchilar tomonidan olib boriladi. Har bir o'quvchiga individual e'tibor beriladi va shaxsiy rivojlanish rejasi tuziladi.</p>
                      <p>Kurs oxirida maxsus imtihon topshirasiz va xalqaro standartlarga mos sertifikat olasiz. Bu sertifikat ish beruvchilar tomonidan yuqori baholanadi.</p>`
    },
    intensive: {
        title: "Tezkor Kurs",
        icon: "fas fa-bolt",
        duration: "2 oy",
        group: "8-10 kishilik guruh",
        certificate: "Sertifikat",
        price: "600,000 so'm/oy",
        description: `<p>Tezkor kursimiz qisqa muddatda rus tilini o'rganishni istaganlar uchun mo'ljallangan. Kurs intensiv dastur bo'lib, kuniga 2-3 soat dars olib boriladi.</p>
                      <p>Darslar amaliyotga yo'naltirilgan bo'lib, eng zarur grammatika qoidalari va lug'at bilan tanishtirasiz. Asosiy e'tibor nutq ko'nikmalarini rivojlantirishga qaratilgan.</p>
                      <p>Kurs oxirida siz kundalik muloqotda rus tilidan foydalana olasiz. Bu kurs tezda rus tilini o'rganishni talab qiladigan ish yoki o'qish imkoniyatlari uchun ideal.</p>`
    },
    women: {
        title: "Ayollar Kursi",
        icon: "fas fa-female",
        duration: "5 oy",
        group: "Faqat ayollar guruhi",
        certificate: "Sertifikat",
        price: "500,000 so'm/oy",
        description: `<p>Ayollar kursimiz faqat ayollar uchun mo'ljallangan maxsus dastur. Bu kursda siz qulay va xavfsiz muhitda rus tilini o'rganasiz.</p>
                      <p>Darslar ayol o'qituvchilar tomonidan olib boriladi va ayollar uchun muhim bo'lgan mavzularga e'tibor qaratiladi. Guruhda qulay va do'stona muhit mavjud.</p>
                      <p>Kurs oxirida siz nafaqat rus tilini o'rganasiz, balki yangi do'stlar ham topasiz. Bu kurs oilaviy ayollar uchun alohida qulay.</p>`
    },
    kids: {
        title: "Bolalar Kursi",
        icon: "fas fa-child",
        duration: "9 oy",
        group: "Yoshga mos guruhlar",
        certificate: "Sertifikat",
        price: "400,000 so'm/oy",
        description: `<p>Bolalar kursimiz 7-15 yoshli bolalar uchun mo'ljallangan. Kurs o'yinlar, qo'shiqlar va interaktiv mashqlar orqali rus tilini o'rgatadi.</p>
                      <p>Darslar bolalar psixologiyasini biladigan o'qituvchilar tomonidan olib boriladi. Har bir dars qiziqarli va o'quvchilarni rag'batlantiruvchi tarzda tashkil etiladi.</p>
                      <p>Kurs oxirida bolalar rus tilida oddiy suhbatlashishni o'rganadi va maktabda rus tilidan foydalana oladi. Bu kurs bolalarning kelajakdagi muvaffaqiyati uchun mustahkam poydevor yaratadi.</p>`
    },
    individual: {
        title: "Intensiv Odinocha",
        icon: "fas fa-user",
        duration: "3 oy",
        group: "1 kishi (individual)",
        certificate: "Sertifikat",
        price: "1,200,000 so'm/oy",
        description: `<p>Intensiv Odinocha kursimiz bir o'quvchi uchun maxsus individual dastur. Bu kursda siz shaxsiy ehtiyojlaringizga moslashtirilgan darslar olasiz.</p>
                      <p>Darslar sizning bilim darajangiz, maqsadlaringiz va o'rganish uslubingizga qarab tuziladi. O'qituvchi to'liq e'tiborni sizga qaratadi va shaxsiy rivojlanishingizni kuzatib boradi.</p>
                      <p>Kurs oxirida siz maksimal natijalarga erishasiz va rus tilini professional darajada o'zlashtirasiz. Bu kurs tez va samarali o'rganishni istaganlar uchun ideal.</p>`
    }
};

// Modal oynani boshqarish
const modal = document.getElementById('courseModal');
const closeModal = document.querySelector('.close-modal');
const btnDetails = document.querySelectorAll('.btn-details');

// Batafsil tugmalariga hodisa qo'shish
btnDetails.forEach(button => {
    button.addEventListener('click', () => {
        const courseId = button.getAttribute('data-course');
        openCourseModal(courseId);
    });
});

// Modal oynani ochish
function openCourseModal(courseId) {
    const course = coursesData[courseId];
    
    if (course) {
        document.getElementById('modal-icon').className = course.icon;
        document.getElementById('modal-title').textContent = course.title;
        document.getElementById('modal-duration').textContent = course.duration;
        document.getElementById('modal-group').textContent = course.group;
        document.getElementById('modal-certificate').textContent = course.certificate;
        document.getElementById('modal-price').textContent = course.price;
        document.getElementById('modal-full-description').innerHTML = course.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Modal oynani yopish
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Tashqariga bosganda modal oynani yopish
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Esc tugmasi bosilganda modal oynani yopish
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Scroll animatsiyalari
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Animatsiya qo'shish uchun elementlarni kuzatish
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.course-card, .teacher-card, .story-card, .achievement-item');
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Kurs kartalariga hover effekti
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('featured')) {
                card.style.transform = 'translateY(0)';
            } else {
                card.style.transform = 'scale(1.05) translateY(-10px)';
            }
        });
    });
});

// Form yuborish
const contactForm = document.querySelector('#registration-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form ma'lumotlarini olish
        const name = contactForm.querySelector('input[type="text"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const course = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Bu yerda ma'lumotlarni serverga yuborish kodini qo'shishingiz mumkin
        // Hozircha faqat console ga chiqaramiz
        console.log({
            name,
            phone,
            course,
            message
        });
        
        // Muvaffaqiyatli yuborilganidan so'ng formani tozalash
        contactForm.reset();
        
        // Foydalanuvchiga xabar berish
        alert('Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz! Tez orada siz bilan bog\'lanamiz.');
    });
}

// Yuklash animatsiyasi
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Silliq scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effekti
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Telefon raqamini formati
const phoneInput = document.querySelector('input[type="tel"]');
if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '+998 ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
    });
}