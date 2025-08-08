// Hero banner disappears on scroll
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  hero.style.display = window.scrollY > 50 ? 'none' : 'flex';
});

// Example: Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

// Fetch GitHub info
fetch('https://api.github.com/users/bryanzhao08')
  .then(res => res.json())
  .then(data => console.log('GitHub:', data));

// Contact click logs
document.querySelectorAll('.contacts a').forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Opening ${link.href}`);
  });
});
