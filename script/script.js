// index

const hamburger = document.getElementById("hamburger");
const navBtnGroup = document.querySelector(".nav-btn-gp");
hamburger.addEventListener("click", () => {
	navBtnGroup.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-btn");
const currentPathArray = window.location.pathname.split('/');
let currentPath;
navLinks.forEach((link) => {
	for (const i of currentPathArray) {
		if (i.includes('.html')) {
			currentPath = i
		}
	}
	if (link.getAttribute("href").includes(currentPath)) {
		link.classList.add("active");
	}
});

// modal
const isFirstVisit = !sessionStorage.getItem("visited");
const welcomeModal = document.getElementById("welcomeModal");
const closeBtn = document.querySelector(".close-btn");

try {
	if (isFirstVisit) {
		welcomeModal.style.display = "block";
		sessionStorage.setItem("visited", "true");
	}
	
	closeBtn.addEventListener("click", () => {
		welcomeModal.style.display = "none";
	});
	
	window.addEventListener("click", (event) => {
		if (event.target === welcomeModal) {
			welcomeModal.style.display = "none";
		}
	});
	
	document.getElementById("emailSignupForm").addEventListener("submit", (event) => {
		event.preventDefault();
		const email = event.target.querySelector("input[type='email']").value;
		console.log("Email for discount signup:", email);
		welcomeModal.style.display = "none";
		alert("Thank you for signing up! A discount will be applied to your first purchase.");
	});
} catch (err) {
	console.log("modal err >>", err)
}


// menu

const menuItems = [
	{
		title: "Espresso",
		description:
			"A concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
		imgSrc: "../images/espresso.jpg",
		price: 9.9,
	},
	{
		title: "Cappuccino",
		description: "A popular espresso-based drink with steamed milk and foam.",
		imgSrc: "../images/cappuccino.jpg",
		price: 11.5,
	},
	{
		title: "Latte",
		description:
			"A smooth espresso drink with steamed milk and a thin layer of foam.",
		imgSrc: "../images/latte.jpg",
		price: 10.5,
	},
	{
		title: "Mocha",
		description:
			"A latte combined with chocolate syrup, topped with whipped cream.",
		imgSrc: "../images/mocha.jpg",
		price: 12.0,
	},
	{
		title: "Americano",
		description:
			"Espresso diluted with hot water, similar strength to drip coffee.",
		imgSrc: "../images/americano.webp",
		price: 8.9,
	},
	{
		title: "Flat White",
		description: "Espresso with microfoam for a smooth and silky texture.",
		imgSrc: "../images/flatwhite.jpg",
		price: 11.0,
	},
	{
		title: "Cold Brew",
		description: "Coffee steeped in cold water for a smooth, low-acid flavor.",
		imgSrc: "../images/coldbrew.jpg",
		price: 10.0,
	},
	{
		title: "Macchiato",
		description:
			"A shot of espresso with a small amount of steamed milk or foam.",
		imgSrc: "../images/macchiato.jpg",
		price: 9.5,
	},
	{
		title: "Iced Coffee",
		description: "Regular brewed coffee served and chilled over ice.",
		imgSrc: "../images/icedcoffee.jpg",
		price: 8.5,
	},
	{
		title: "Chai Latte",
		description: "Spiced black tea combined with steamed milk and sweetener.",
		imgSrc: "../images/chailatte.webp",
		price: 10.8,
	},
	{
		title: "Affogato",
		description: "A scoop of vanilla ice cream topped with a shot of hot espresso.",
		imgSrc: "../images/affogato.jpg",
		price: 13.5,
	},
	{
		title: "Irish Coffee",
		description: "Coffee mixed with Irish whiskey, sugar, and topped with whipped cream.",
		imgSrc: "../images/irishcoffee.jpeg",
		price: 15.0,
	},
];

function createMenuCards() {
	const menuContainer = document.getElementById("menu-container");

	menuItems.forEach((item) => {
		const menuCard = document.createElement("div");
		menuCard.classList.add("menu-card");

		menuCard.innerHTML = `
			<img class="menu-img" src="${item.imgSrc}" alt="${item.title}">
			<h2 class="menu-card-title">${item.title}</h2>
			<p class="menu-card-description">${item.description}</p>
			<div class="price-box">
				<span>Price: ${item.price}$</span>
				<button class="add">
					<i class="fa-solid fa-circle-plus"></i>
				</button>
			</div>
		`;
		menuContainer.appendChild(menuCard);
	});
}
try {
	createMenuCards();
} catch (err) {
	console.log("menu err >>", err)
}


// event
function showRegistrationForm(eventName) {
    document.getElementById('registration-modal').style.display = 'flex';
    document.getElementById('event-name').value = eventName;
}

function closeRegistrationForm() {
    document.getElementById('registration-modal').style.display = 'none';
}

function registerForEvent(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventName = document.getElementById('event-name').value;

    alert(`Thank you, ${name}! You are registered for ${eventName}.`);

    document.getElementById('registration-form').reset();
    closeRegistrationForm();
}

function subscribe(planName) {
    alert(`Thank you for choosing the ${planName}! Your subscription has been activated.`);
}