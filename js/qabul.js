document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menyu boshqaruvi
  const menuToggle = document.getElementById("menuToggle");
  const navbar = document.getElementById("navbar");

  if (menuToggle && navbar) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle("active");
      navbar.classList.toggle("active");
    });

    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navbar.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove("active");
        navbar.classList.remove("active");
      }
    });
  }

  // Bootstrap Form Validation (forma xatoliklarini tekshirish)
  const forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".enroll-form");
  const seatsText = document.querySelector(".form-header p");

  if (!form) return;

  // Bo'sh o'rinlar soni
  let seats = 5;

  // Natija xabari uchun element
  const messageBox = document.createElement("div");
  messageBox.style.cssText =
    "display:none;margin-top:15px;padding:12px;border-radius:8px;font-weight:600;text-align:center;";
  form.appendChild(messageBox);

  function showMessage(text, isSuccess) {
    messageBox.textContent = text;
    messageBox.style.display = "block";
    messageBox.style.background = isSuccess ? "#d4edda" : "#f8d7da";
    messageBox.style.color = isSuccess ? "#155724" : "#721c24";
  }

  function updateSeatsText() {
    if (!seatsText) return;
    seatsText.textContent =
      seats > 0
        ? `Atigi ${seats} ta bo'sh o'rin qoldi!`
        : "Afsuski, bo'sh o'rinlar tugadi!";
  }

  form.addEventListener("submit", function (e) {
    // Sahifa qayta yuklanib ketmasligi uchun
    e.preventDefault();

    if (seats > 0) {
      seats--;
      showMessage(
        "Arizangiz qabul qilindi! Yaqin orada siz bilan aloqaga chiqishadi.",
        true,
      );
      updateSeatsText();
      form.reset();
    } else {
      showMessage(
        "So'rov yuborilmadi. Afsuski, bo'sh o'rinlar qolmagan.",
        false,
      );
    }
  });

  updateSeatsText();
});

//////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bootstrapForm");
  if (!form) return;

  // Bo'sh o'rinlar soni
  let seats = 5;

  // Natija xabari uchun element
  const messageBox = document.createElement("div");
  messageBox.className = "col-12";
  messageBox.style.cssText =
    "display:none;padding:12px;border-radius:8px;font-weight:600;text-align:center;";
  form.appendChild(messageBox);

  function showMessage(text, isSuccess) {
    messageBox.textContent = text;
    messageBox.style.display = "block";
    messageBox.style.background = isSuccess ? "#d4edda" : "#f8d7da";
    messageBox.style.color = isSuccess ? "#155724" : "#721c24";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Bootstrap validatsiyasi: barcha maydonlar to'g'ri bo'lishi kerak
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      messageBox.style.display = "none";
      return;
    }

    form.classList.add("was-validated");

    if (seats > 0) {
      seats--;
      showMessage(
        "Arizangiz qabul qilindi! Yaqin orada siz bilan aloqaga chiqishadi.",
        true,
      );
      form.reset();
      form.classList.remove("was-validated");
    } else {
      showMessage(
        "So'rov yuborilmadi. Afsuski, bo'sh o'rinlar qolmagan.",
        false,
      );
    }
  });
});
