function animateAndDisappearImage(
  element,
  width,
  left,
  top,
  transitionDuration,
  delayBeforeDisappear,
  disapper
) {
  element.style.transition = `width ${transitionDuration}s, left ${transitionDuration}s, top ${transitionDuration}s`;
  setTimeout(() => {
    Object.assign(element.style, { width, left, top });
    setTimeout(
      () => (element.style.opacity = disapper ? 0 : 1),
      delayBeforeDisappear * 1000
    );
  }, transitionDuration * 1000);
}

function animateAndDisappearImageB(
  element,
  width,
  left,
  bottom,
  transitionDuration,
  delayBeforeDisappear,
  disapper
) {
  element.style.transition = `width ${transitionDuration}s, left ${transitionDuration}s, bottom ${transitionDuration}s`;
  setTimeout(() => {
    Object.assign(element.style, { width, left, bottom });
    setTimeout(
      () => (element.style.opacity = disapper ? 0 : 1),
      delayBeforeDisappear * 1000
    );
  }, transitionDuration * 1000);
}

function fadeInAfterDelay(element, fDuration) {
  let opacity = 0;
  const duration = 1000; // Duration in milliseconds
  const increment = 0.01; // Incremental change in opacity

  setTimeout(() => {
    element.classList.remove("hidden");
    const interval = setInterval(() => {
      opacity += increment;
      element.style.opacity = opacity;

      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, duration * increment);
  }, fDuration * 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector("#logo");
  const greet = document.querySelector("#greet");
  const char_1 = document.querySelector("#char_1");

  const kajolImage = document.querySelector("#kajol_ing");
  const headings = document.querySelector(".headings");
  const up = document.querySelector("#up");
  // const lower = document.querySelector("#lower");
  animateAndDisappearImage(up, "80%", "-50px", "-50px", 4, 1, 0);
  animateAndDisappearImageB(lower,'100%', '0px', '0px', 4, 1,0);

  fadeInAfterDelay(headings, 3);
  fadeInAfterDelay(kajolImage, 3);
  animateAndDisappearImage(logo, "120px", "80px", "35px", 2, 2, 0.1);
  animateAndDisappearImage(greet, "120px", "0px", "0px", 2, 2, 0.1);
  animateAndDisappearImage(char_1, "180px", "20%", "70%", 2, 0, 0);
});
