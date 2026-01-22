// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect - tambah shadow saat scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
});

// Animasi fade-in saat scroll ke section
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observasi semua section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animasi untuk card produk saat hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Highlight paket premium
const premiumPaket = document.querySelector('.paket.premium');
if (premiumPaket) {
    premiumPaket.style.transition = 'transform 0.3s ease';
    
    setInterval(() => {
        premiumPaket.style.transform = 'scale(1.05)';
        setTimeout(() => {
            premiumPaket.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
}

// ============ TOMBOL-TOMBOL PESAN ============

// Fungsi untuk buat pesan WhatsApp
function pesanWhatsApp(menu = '') {
    let message = 'Halo, saya mau pesan es coklat!';
    if (menu) {
        message = `Halo, saya mau pesan ${menu}!`;
    }
    const waNumber = '6283173639955';
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
}


document.querySelectorAll('.card').forEach(card => {
    const productName = card.querySelector('h3').textContent;
    
    const btnPesan = document.createElement('button');
    btnPesan.className = 'btn-pesan-card';
    btnPesan.textContent = '🛒 Pesan';
    btnPesan.style.cssText = `
        margin-top: 15px;
        padding: 10px 20px;
        background: #6f4e37;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        width: 100%;
    `;
    
    btnPesan.addEventListener('mouseenter', function() {
        this.style.background = '#8b6347';
        this.style.transform = 'scale(1.05)';
    });
    
    btnPesan.addEventListener('mouseleave', function() {
        this.style.background = '#6f4e37';
        this.style.transform = 'scale(1)';
    });
    
    btnPesan.addEventListener('click', () => {
        pesanWhatsApp(productName);
        showToast(`Membuka WhatsApp untuk ${productName}...`);
    });
    
    card.appendChild(btnPesan);
});


document.querySelectorAll('.paket').forEach(paket => {
    const paketName = paket.querySelector('h3').textContent;
    
    const btnPaket = document.createElement('button');
    btnPaket.className = 'btn-pesan-paket';
    btnPaket.textContent = '💬 Pesan Paket';
    btnPaket.style.cssText = `
        margin-top: 15px;
        padding: 12px 25px;
        background: #d4a574;
        color: #2c1810;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 700;
        transition: all 0.3s ease;
    `;
    
    btnPaket.addEventListener('mouseenter', function() {
        this.style.background = '#e8c4a0';
        this.style.transform = 'translateY(-3px)';
    });
    
    btnPaket.addEventListener('mouseleave', function() {
        this.style.background = '#d4a574';
        this.style.transform = 'translateY(0)';
    });
    
    btnPaket.addEventListener('click', () => {
        pesanWhatsApp(`Paket ${paketName}`);
        showToast(`Membuka WhatsApp untuk Paket ${paketName}...`);
    });
    
    paket.appendChild(btnPaket);
});


const kontakSection = document.querySelector('.kontak');
if (kontakSection) {
    const waButton = document.createElement('a');
    waButton.href = 'https://wa.me/6283173639955?text=Halo, saya mau pesan es coklat!';
    waButton.className = 'btn-primary';
    waButton.textContent = '💬 Chat WhatsApp';
    waButton.style.cssText = `
        display: inline-block;
        margin-top: 20px;
        padding: 15px 40px;
        background: #25D366;
        color: white;
        text-decoration: none;
        border-radius: 30px;
        font-weight: 700;
        transition: all 0.3s ease;
    `;
    waButton.target = '_blank';
    
    waButton.addEventListener('mouseenter', function() {
        this.style.background = '#20ba5a';
        this.style.transform = 'scale(1.05)';
    });
    
    waButton.addEventListener('mouseleave', function() {
        this.style.background = '#25D366';
        this.style.transform = 'scale(1)';
    });
    
    kontakSection.appendChild(waButton);
    
    
    const mapButton = document.createElement('a');
    mapButton.href = 'https://maps.google.com/?q=Bundaran+Kris';
    mapButton.className = 'btn-secondary';
    mapButton.textContent = '📍 Lihat Lokasi';
    mapButton.style.cssText = `
        display: inline-block;
        margin-top: 20px;
        margin-left: 15px;
        padding: 15px 40px;
        background: #4285F4;
        color: white;
        text-decoration: none;
        border-radius: 30px;
        font-weight: 700;
        transition: all 0.3s ease;
    `;
    mapButton.target = '_blank';
    
    mapButton.addEventListener('mouseenter', function() {
        this.style.background = '#357ae8';
        this.style.transform = 'scale(1.05)';
    });
    
    mapButton.addEventListener('mouseleave', function() {
        this.style.background = '#4285F4';
        this.style.transform = 'scale(1)';
    });
    
    kontakSection.appendChild(mapButton);
}


const floatingWA = document.createElement('a');
floatingWA.href = 'https://wa.me/6283173639955?text=Halo, saya mau pesan es coklat!';
floatingWA.target = '_blank';
floatingWA.innerHTML = '💬';
floatingWA.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #25D366;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    z-index: 1000;
    text-decoration: none;
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
`;

floatingWA.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
});

floatingWA.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
});

document.body.appendChild(floatingWA);


function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});


function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: #6f4e37;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;
document.head.appendChild(style);
