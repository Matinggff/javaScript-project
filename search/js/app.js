import { users } from './users.js';


  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('results');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(user => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    });
    displayResults(filteredUsers);
  });

  function displayResults(users) {
    resultsContainer.innerHTML = '';
    if (users.length === 0) {
      resultsContainer.innerHTML = '<p>No users found.</p>';
      return;
    }

    users.forEach(user => {
      const userElement = document.createElement('div');
      userElement.classList.add('user');
      userElement.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
      `;
      resultsContainer.appendChild(userElement);
    });
  }
