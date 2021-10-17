let scrollThing = document.querySelector(".scroll-circle");
var height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", (e) => {
  console.log(
    200 *
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight))
  );
  scrollThing.style.top = `${
    window.innerHeight *
    0.4 *
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight))
  }px`;
});
