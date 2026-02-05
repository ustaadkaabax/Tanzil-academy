document.addEventListener("DOMContentLoaded", () => {
    // year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // mobile menu toggle
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    function setOpen(open) {
        if (!mobileMenu || !menuIcon) return;
        mobileMenu.classList.toggle("hidden", !open);
        menuIcon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }

    if (menuBtn && mobileMenu) {
        let open = false;
        menuBtn.addEventListener("click", () => {
            open = !open;
            setOpen(open);
        });

        // close when clicking any link in mobile menu
        mobileMenu.querySelectorAll("a").forEach((a) => {
            a.addEventListener("click", () => {
                open = false;
                setOpen(open);
            });
        });
    }
});
