// main.js — students will add JavaScript here as features are built

// Video Modal functionality
(function() {
    const modal = document.getElementById('video-modal');
    const openBtn = document.getElementById('open-modal-btn');
    const closeBtn = document.getElementById('modal-close-btn');
    const videoFrame = document.getElementById('video-frame');

    // YouTube video URL (placeholder - replace with actual video ID)
    const VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';

    function openModal() {
        modal.classList.add('active');
        videoFrame.src = VIDEO_URL;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = '';
    }

    if (openBtn) {
        openBtn.addEventListener('click', openModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
