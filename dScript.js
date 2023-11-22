let postId = 1; // Unique identifier for each post

    function openModal() {
        document.getElementById('userModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('userModal').style.display = 'none';
    }

    function submitPost(event) {
        event.preventDefault();

        const food = document.getElementById('postTitle').value;
        const description = document.getElementById('postContent').value;
        const location = document.getElementById('postCity').value;

        const data = {
            values: [[food, description, location]]
        };

        fetch('https://sheets.googleapis.com/v4/spreadsheets/1kwA2QmGNGh5OXzReTn7KYBa7lwta51qB0bSoe_9zhck/values/FoodInfo!A1:C1:append?valueInputOption=RAW', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Data written successfully:', result);
            // You can perform additional actions or provide user feedback here
        })
        .catch(error => {
            console.error('Error writing data:', error);
            // Handle errors and provide user feedback
        });
        // Display the user post in a card
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

        // Increment the post ID for uniqueness
        postId++;

        // Close the modal
        closeModal();
    }