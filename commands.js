// Search functionality
const searchInput = document.getElementById('searchInput');
const commandCards = document.querySelectorAll('.command-card');
const categories = document.querySelectorAll('.command-category');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        commandCards.forEach(card => {
            const cmdName = card.querySelector('.cmd-name').textContent.toLowerCase();
            const cmdDesc = card.querySelector('.cmd-desc').textContent.toLowerCase();
            
            if (cmdName.includes(searchTerm) || cmdDesc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Hide empty categories
        categories.forEach(category => {
            const visibleCards = category.querySelectorAll('.command-card[style="display: block;"], .command-card:not([style])');
            if (searchTerm && visibleCards.length === 0) {
                category.style.display = 'none';
            } else {
                category.style.display = 'block';
            }
        });
    });
}

// Category filtering
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Update active button
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Clear search
        if (searchInput) searchInput.value = '';
        
        // Show/hide categories
        if (category === 'all') {
            categories.forEach(cat => {
                cat.style.display = 'block';
            });
            commandCards.forEach(card => {
                card.style.display = 'block';
            });
        } else {
            categories.forEach(cat => {
                const catName = cat.getAttribute('data-category');
                if (catName === category) {
                    cat.style.display = 'block';
                } else {
                    cat.style.display = 'none';
                }
            });
        }
    });
});
