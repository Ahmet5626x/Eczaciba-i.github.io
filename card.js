// JavaScript ile ekran görünürlüğünü kontrol etme
const cards = document.querySelectorAll('.card-four');

function checkVisibility() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Kart ekranın %75'lik kısmı içine girmeden resimlerin hiç görünmemesi için kontrol
        if (cardTop < windowHeight * 0.75 && cardBottom > 0) {
            card.classList.add('animate');
        } else {
            card.classList.remove('animate');
        }
    });
}

// İlk kontrolü yapmak için sayfa yüklendiğinde ve scroll olayında sürekli kontrol et
window.addEventListener('DOMContentLoaded', checkVisibility);
window.addEventListener('scroll', checkVisibility);
