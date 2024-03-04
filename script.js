const generateCaptcha = () => {
  const captcha = Math.random().toString(36).slice(2, 8).toUpperCase();
  document.getElementById("captcha").textContent = captcha;
};

generateCaptcha();

document.getElementById("captcha-button").addEventListener("click", () => {
  generateCaptcha();
});

document.querySelector("form").addEventListener("submit", (e) => {
  const captchaInput = document.getElementById("captcha-input");
  if (captchaInput.value !== document.getElementById("captcha").textContent) {
    e.preventDefault();
    alert("Please enter the correct CAPTCHA code.");
    generateCaptcha();
    captchaInput.value = "";
  }
});
