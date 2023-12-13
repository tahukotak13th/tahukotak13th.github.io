const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const bolehBtn = document.querySelector(".boleh-btn");
const ndaBtn = document.querySelector(".nda-btn");

bolehBtn.addEventListener("click", () => {
	question.innerHtml = "terima kasihh,lewat dana aja yaa";
	gif.src =
	"images.jpeg";
});

ndaBtn.addEventListener("mouseover",() => {
	const ndaBtnRect = ndaBtn.getBoundingClientRect();
	const maxX = window.innerWidth - ndaBtnRect.width;
	const maxY = window.innerHeigth - ndaBtnRect.Heigth;

	const randomX = Math.floor(Math.random() * maxX );
	const randomY = Math.floor(Math.random() * maxY);

	ndaBtn.style.left = randomX + "px";
	ndaBtn.style.top = randomY + "px";
});