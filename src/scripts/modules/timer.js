export class OfferTimer {
    constructor() {
        this.offer = document.querySelector('.special-offer');
        this.initTimer();
    }

    initTimer() {
        const nextOfferTime = localStorage.getItem('nextOfferTime');
        const endTime = localStorage.getItem('timerEndTime');
        const now = new Date().getTime();

        if (nextOfferTime && now < parseInt(nextOfferTime)) {
            this.showExpiredOffer();
        } else if (endTime && now < parseInt(endTime)) {
            const remainingTime = Math.floor((parseInt(endTime) - now) / 1000);
            this.startTimer(remainingTime);
        } else {
            this.resetOffer();
        }
    }

    startTimer(duration) {
        let timer = duration;
        const countdown = setInterval(() => {
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;
            
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            if (--timer < 0) {
                clearInterval(countdown);
                this.handleExpiredOffer();
            }
        }, 1000);

        const endTime = new Date().getTime() + (duration * 1000);
        localStorage.setItem('timerEndTime', endTime);
    }

    handleExpiredOffer() {
        this.showExpiredOffer();
        const nextTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('nextOfferTime', nextTime);
    }

    showExpiredOffer() {
        this.offer.classList.add('expired');
        this.offer.innerHTML = `
            <div class="offer-expired">
                <i class="fas fa-clock"></i>
                <h3>Oferta Expirada</h3>
                <p>Entre em contato para outras promoções!</p>
            </div>
        `;
    }

    resetOffer() {
        this.offer.classList.remove('expired');
        this.offer.innerHTML = `
            <div class="offer-badge">
                <i class="fas fa-percentage"></i>
                <span>10% OFF</span>
            </div>
            <h3>Oferta Especial</h3>
            <div class="timer-container">
                <span id="minutes">00</span>:<span id="seconds">00</span>
            </div>
        `;
        this.startTimer(10 * 60); // 10 minutes
    }
}
