document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('#btn');
    const modal = document.querySelector('#modal');
    const closeBtn = document.querySelector('#close-modal');
    const acceptBtn = document.querySelector('#accept-btn');

    function openModal() {
        modal.classList.add('modal-active');
    }

    function closeModal() {
        modal.classList.remove('modal-active');
    }

    function accept(){
        alert('You have accepted the terms and conditions');
        closeModal();

    }

    btn.addEventListener('click', openModal);
    acceptBtn.addEventListener('click', accept);
    closeBtn.addEventListener('click', closeModal);
})