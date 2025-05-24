<!/ Menu Mobile /!>
<script>
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
</script>

<! Menu hamburger !>
<script>
  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }
</script>

<! Compteurs animés !>
<script>
  const counters = document.querySelectorAll('.counter');
  let started = false;

  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const increment = target / 200;

      const updateCount = () => {
        const current = +counter.innerText;
        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  window.addEventListener('scroll', () => {
    const section = document.getElementById('counters');
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger && !started) {
      startCounting();
      started = true;
    }
  });
</script>