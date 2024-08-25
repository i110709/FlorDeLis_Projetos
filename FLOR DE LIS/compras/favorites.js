document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(favorite => {
        const li = document.createElement('li');
        li.textContent = `${favorite.name} - ${favorite.price}`;
        favoritesList.appendChild(li);
    });
});
