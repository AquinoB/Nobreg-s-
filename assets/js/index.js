let prevScrollPos = window.scrollY;
const header = document.querySelector("header");

window.onscroll = () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }

  if (prevScrollPos > 600) {
    header.classList.add("no-transparency");
  } else {
    header.classList.remove("no-transparency");
  }

  prevScrollPos = currentScrollPos;
};
