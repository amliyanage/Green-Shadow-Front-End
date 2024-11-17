import { login } from "../service/UserService.js";

$(".cssbuttons-io-button").click(function () {
  const email = $(".email-input").val();
  const password = $(".password-input").val();

  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
    types: [
      {
        type: "warning",
        background: "orange",
        icon: {
          className: "material-icons",
          tagName: "i",
          text: "warning",
        },
      },
    ],
  });

  if ($("#checkbox").prop("checked")) {
    login(email, password)
      .then((response) => {
        const token = response.token;
        saveCookie("authToken", token, 3600);
        window.location = "/pages/Dashboard.html";
      })
      .catch((error) => {
        notyf.error("Invalid email or password.");
      });
  } else {
    notyf.error("Please accept the terms and conditions.");
  }
});

function saveCookie(name, value, maxAge) {
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; Secure; HttpOnly; SameSite=Strict`;
    console.log("Token saved as cookie:", document.cookie);
}
