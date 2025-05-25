class ModalHandler {
    constructor() {
        this.modals = new Map();
        this.initModals();
        this.initEventListeners();
    }

    initModals() {
        ['methodologyModal', 'globalOpportunitiesModal', 'businessVocabModal', 'exitPopup']
            .forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (modal) {
                    this.modals.set(modalId, modal);
                }
            });
    }

    handleModal(modalId, action) {
        const modal = this.modals.get(modalId);
        if (modal) {
            modal.style.display = action === 'open' ? 'block' : 'none';
            document.body.style.overflow = action === 'open' ? 'hidden' : 'auto';
        }
    }

    initEventListeners() {
        window.addEventListener('click', (event) => {
            this.modals.forEach((modal, modalId) => {
                if (event.target === modal) {
                    this.handleModal(modalId, 'close');
                }
            });
        });

        document.querySelectorAll('.close-modal, .close-popup').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal, .exit-popup');
                if (modal) {
                    this.handleModal(modal.id, 'close');
                }
            });
        });
    }
}

// Inicializar handler
document.addEventListener('DOMContentLoaded', () => {
    window.modalHandler = new ModalHandler();
});
