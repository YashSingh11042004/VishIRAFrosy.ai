document.querySelector('.explore-btn').addEventListener('click', () => {
	window.scrollTo({
	    top: document.querySelector('#about').offsetTop,
	    behavior: 'smooth'
	});
      });
      
      const form = document.getElementById('contact-form');
      form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
      
	if (name && email && message) {
	    alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
	    form.reset();
	} else {
	    alert('Please fill in all fields.');
	}
      });
      
      // Navbar scroll effect
      window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	if (window.scrollY > 50) {
	    navbar.classList.add('scrolled');
	} else {
	    navbar.classList.remove('scrolled');
	}
      });
      