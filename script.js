if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(reg => console.log('Service Worker Registered'))
  .catch(err => console.log('SW Registration Failed:', err));
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
      const postsContainer = document.getElementById('posts');
      posts.forEach(post => {
          const postCard = document.createElement('div');
          postCard.className = 'post-card';
          postCard.innerHTML = `
              <div class="post-title">${post.title}</div>
              <hr class="separator">
              <div class="post-content">${post.body}</div>
              <hr class="separator">
              <div class="post-id">Post ID: ${post.id}</div>
          `;
          postsContainer.appendChild(postCard);
      });
  })
  .catch(error => console.error('Error fetching posts:', error));
