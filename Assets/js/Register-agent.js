const registerBtn = document.querySelector(".register-btn");
const containerDiv = document.querySelector(".main-container-div");

function registerAgent() {
  console.log(containerDiv.children);
  while (containerDiv.firstChild) {
    containerDiv.firstChild.remove();
  }
  displayRegisterForm();
}

function displayRegisterForm() {
  const cardDiv = document.createElement("div");
  cardDiv.className =
    "card col-md-7 border-0 shadow p-3 mb-5 bg-white rounded mx-auto";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body ml-4 mr-4";

  const h4Title = document.createElement("h4");
  h4Title.className = "card-title mt-2 mb-5";
  h4Title.textContent = "Sign Up";

  const formDiv = document.createElement("form");

  // name input form
  const nameInputDiv = document.createElement("div");
  nameInputDiv.className = "mb-3 name-input-div";

  const nameLabel = document.createElement("label");
  nameLabel.className = "form-label";
  nameLabel.textContent = "Full Name";

  const nameInput = document.createElement("input");
  nameInput.className = "form-control";
  nameInput.placeholder = "Full Name...";

  // email input form
  const emailInputDiv = document.createElement("div");
  emailInputDiv.className = "mb-3 email-input-div";

  const emailLabel = document.createElement("label");
  emailLabel.className = "form-label";
  emailLabel.textContent = "Email Address";

  const emailInput = document.createElement("input");
  emailInput.className = "form-control";
  emailInput.type = "email";
  emailInput.placeholder = "Email...";

  // username input form
  const usernameInputDiv = document.createElement("div");
  usernameInputDiv.className = "mb-3 username-input-div";

  const usernameLabel = document.createElement("label");
  usernameLabel.className = "form-label";
  usernameLabel.textContent = "User Name";

  const usernameInput = document.createElement("input");
  usernameInput.className = "form-control";
  usernameInput.placeholder = "User Name...";

  // password input form
  const passwordInputDiv = document.createElement("div");
  passwordInputDiv.className = "mb-3 password-input-div";

  const passwordLabel = document.createElement("label");
  passwordLabel.className = "form-label";
  passwordLabel.textContent = "Password";

  const passwordInput = document.createElement("input");
  passwordInput.className = "form-control";
  passwordInput.placeholder = "Repeat Password...";
  passwordInput.type = "password";

  const passwordLabel2 = document.createElement("label");
  passwordLabel2.className = "form-label";
  passwordLabel2.textContent = "Repeat Password";

  const passwordInput2 = document.createElement("input");
  passwordInput2.className = "form-control";
  passwordInput2.placeholder = "Repeat Password...";
  passwordInput2.type = "password";

  // office Address input form
  const officeAddressInputDiv = document.createElement("div");
  officeAddressInputDiv.className = "mb-3 officeAddress-input-div";

  const officeAddressLabel = document.createElement("label");
  officeAddressLabel.className = "form-label";
  officeAddressLabel.textContent = "Office Address";

  const officeAddressInput = document.createElement("input");
  officeAddressInput.className = "form-control";
  officeAddressInput.placeholder = "1st floor, friendship building, bole...";

  // Mobile Number input form
  const mobileNumberInputDiv = document.createElement("div");
  mobileNumberInputDiv.className = "mb-3 mobileNumber-input-div";

  const mobileNumberLabel = document.createElement("label");
  mobileNumberLabel.className = "form-label";
  mobileNumberLabel.textContent = "Mobile Number";

  const mobileNumberInput = document.createElement("input");
  mobileNumberInput.className = "form-control";
  mobileNumberInput.placeholder = "+251 91 122 3344...";

  // Office Phone Number input form
  const officePhoneNumberInputDiv = document.createElement("div");
  officePhoneNumberInputDiv.className = "mb-3 mobileNumber-input-div";

  const officePhoneNumberLabel = document.createElement("label");
  officePhoneNumberLabel.className = "form-label";
  officePhoneNumberLabel.textContent = "Office Phone Number";

  const officePhoneNumberInput = document.createElement("input");
  officePhoneNumberInput.className = "form-control";
  officePhoneNumberInput.placeholder = "+251 11 551 0000...";

  // Facebook uri input form
  const facebookURIInputDiv = document.createElement("div");
  facebookURIInputDiv.className = "mb-3 mobileNumber-input-div";

  const facebookURILabel = document.createElement("label");
  facebookURILabel.className = "form-label";
  facebookURILabel.textContent = "Facebook URI";

  const facebookURIInput = document.createElement("input");
  facebookURIInput.className = "form-control";
  facebookURIInput.placeholder = "https://www.facebook.com/username...";

  // Telegram uri input form
  const telegramURIInputDiv = document.createElement("div");
  telegramURIInputDiv.className = "mb-3 mobileNumber-input-div";

  const telegramURILabel = document.createElement("label");
  telegramURILabel.className = "form-label";
  telegramURILabel.textContent = "Telegram URI";

  const telegramURIInput = document.createElement("input");
  telegramURIInput.className = "form-control";
  telegramURIInput.placeholder = "https://t.me/username...";

  // Register Button form
  const RegisterButtonDiv = document.createElement("div");
  RegisterButtonDiv.className = "container-fluid";
  const registerButton = document.createElement("button");
  registerButton.className = "btn btn-primary btn-lg";
  registerButton.textContent = "Register";
  //   registerButton.style = "width: 100%; height: 30px";

  cardBody.appendChild(h4Title);

  nameInputDiv.appendChild(nameLabel);
  nameInputDiv.appendChild(nameInput);
  formDiv.appendChild(nameInputDiv);

  emailInputDiv.appendChild(emailLabel);
  emailInputDiv.appendChild(emailInput);
  formDiv.appendChild(emailInputDiv);

  usernameInputDiv.appendChild(usernameLabel);
  usernameInputDiv.appendChild(usernameInput);
  formDiv.appendChild(usernameInputDiv);

  passwordInputDiv.appendChild(passwordLabel);
  passwordInputDiv.appendChild(passwordInput);
  passwordInputDiv.appendChild(passwordLabel2);
  passwordInputDiv.appendChild(passwordInput2);
  formDiv.appendChild(passwordInputDiv);

  officeAddressInputDiv.appendChild(officeAddressLabel);
  officeAddressInputDiv.appendChild(officeAddressInput);
  formDiv.appendChild(officeAddressInputDiv);

  mobileNumberInputDiv.appendChild(mobileNumberLabel);
  mobileNumberInputDiv.appendChild(mobileNumberInput);
  formDiv.appendChild(mobileNumberInputDiv);

  officePhoneNumberInputDiv.appendChild(officePhoneNumberLabel);
  officePhoneNumberInputDiv.appendChild(officePhoneNumberInput);
  formDiv.appendChild(officePhoneNumberInputDiv);

  facebookURIInputDiv.appendChild(facebookURILabel);
  facebookURIInputDiv.appendChild(facebookURIInput);
  formDiv.appendChild(facebookURIInputDiv);

  telegramURIInputDiv.appendChild(telegramURILabel);
  telegramURIInputDiv.appendChild(telegramURIInput);
  formDiv.appendChild(telegramURIInputDiv);

  RegisterButtonDiv.appendChild(registerButton);
  formDiv.appendChild(RegisterButtonDiv);

  cardBody.appendChild(formDiv);
  cardDiv.appendChild(cardBody);
  containerDiv.appendChild(cardDiv);
  console.log("herer");
}

registerBtn.addEventListener("click", registerAgent);

// <div class="card  border-0 shadow p-3 mb-5 bg-white rounded mx-auto " id="incard">
//             <div class="card-body" id="contcard">
//                 <h4 class="card-title mt-2">Log in</h4>
//                 <h6 class="card-subtitle mt-3 mb-3 text-muted">dont an account? <a href="#">sign up here</a></h6>
//                 <form>
//                     <div class="mb-3">
//                         <label for="exampleInputEmail1" class="form-label">User name</label>
//                         <input type="email" class="form-control" placeholder="USERNAME">

//                     </div>
//                     <div class="mb-3">
//                         <label for="exampleInputPassword1" class="form-label">Password</label>
//                         <input type="password" class="form-control" placeholder="PASSWORD">
//                     </div>
//                     <div class="mb-3 form-check">

//                         <input type="checkbox" class="form-check-input" id="exampleCheck1">
//                         <label class="form-check-label" for="exampleCheck1">Remeber me </label>
//                         <p style="float: right;"><a href="#">Lost passored?</a></p>
//                     </div>
//                     <div class="container-fluid" id="sumitbtn">
//                         <button type="submit" class="btn btn-primary " style="width: 100%;">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>