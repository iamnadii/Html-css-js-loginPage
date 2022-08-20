const btn = document.querySelector(".btn");
const mainDiv = document.querySelector("#input-feild");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;
  const pass = document.getElementById("passInput").value;
  const newTag = document.createElement("p");
  newTag.className = "alert-msg";
  if (email === "" && pass === "") {
    newTag.textContent = `Email and Password both feilds are empty`;
  } else if (email === "") {
    newTag.textContent = `Email feild is empty`;
  } else if (pass === "") {
    newTag.textContent = `Password feild is empty`;
  } else if (email && pass) {
    alert("Login Successfully");
    location.reload();
  }
  mainDiv.prepend(newTag);
  const alertMsg = () => {
    location.reload();
  };
  setTimeout(alertMsg, 1000);
});
