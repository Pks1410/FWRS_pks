function filterCards() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.cards');

    cards.forEach(card => {
        const location = card.getAttribute('data-location').toLowerCase();
        if (location.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

const SPREADSHEET_ID = '1kwA2QmGNGh5OXzReTn7KYBa7lwta51qB0bSoe_9zhck';
const API_KEY = 'AIzaSyAEGZEboq-an9Xaq0sQySnHEvt8rLEjG78';
const SHEET_NAME = 'FoodInfo'; // Update with your sheet name

// Fetch data from Google Sheets API
fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const entries = data.values;

        // Create cards for each entry
        entries.forEach(entry => {
            const [food, description, location] = entry;
            const userPosts = document.getElementById('card-lists');
            const postCard = document.createElement('div');
            postCard.className = 'cards';
            postCard.setAttribute('data-location', location);
            postCard.innerHTML = `
                <h6>Food</h6>
                <div class="card-title">
                    <h1>${food}</h1>
                </div>
                <div class="card-desc">
                    <p><b>Description:</b> ${description}</p>
                </div>
                <div class="card-bar">
                    <span></span>
                    <h4>User Name</h4>
                    <i class="fa-solid fa-phone-volume fa-xl" style="color: #0561ff;"></i>
                    <i class="fa-solid fa-location-dot fa-xl" style="color: #0561ff;"></i>
                </div>
            `;
            userPosts.appendChild(postCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));