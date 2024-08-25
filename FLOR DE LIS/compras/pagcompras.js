document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoriteButtons.forEach(button => {
        const flowerCard = button.closest('.flower-card');
        const flowerName = flowerCard.querySelector('h3').textContent;
        const flowerPrice = flowerCard.querySelector('.price').textContent;

        // Check if the item is already in favorites
        if (favorites.some(f => f.name === flowerName)) {
            button.firstElementChild.src = 'heart-icon.png';
        } else {
            button.firstElementChild.src = 'heart-outline.png';
        }

        button.addEventListener('click', () => {
            const favoriteItem = { name: flowerName, price: flowerPrice };

            if (!favorites.some(f => f.name === flowerName)) {
                favorites.push(favoriteItem);
                button.firstElementChild.src = "heart-icon.png";
            } else {
                favorites = favorites.filter(f => f.name !== flowerName);
                button.firstElementChild.src = 'heart-outline.png';
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
});

