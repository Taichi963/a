{
    const h4s = document.querySelectorAll('.click-text');
    h4s.forEach(h4 => {
        h4.addEventListener('click', () => {
        h4.parentNode.classList.toggle('appear');
    });
  });
}