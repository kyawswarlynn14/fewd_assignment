fetch("/pages/navbar.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("navbar").innerHTML = data;
        const hamburger = document.getElementById("hamburger");
        const navBtnGroup = document.querySelector(".nav-btn-gp");

        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-btn');
		navLinks.forEach(link => {
			if (link.getAttribute('href') === currentPath) {
				link.classList.add('active');
			}
		});

        hamburger.addEventListener("click", () => {
            navBtnGroup.classList.toggle('show')
        });
	});

fetch("/pages/footer.html")
	.then((response) => response.text())
	.then((data) => {
		document.getElementById("footer").innerHTML = data;
	});
