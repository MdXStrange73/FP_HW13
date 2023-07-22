// Функция для добавления контакта в таблицу
function addContact(firstName, lastName, phone) {
    const table = document.getElementById("contactsTable").getElementsByTagName('tbody')[0];
    const contactTemplate = document.getElementById("contactTemplate");
    const newRow = contactTemplate.content.cloneNode(true);
    newRow.querySelector("td:nth-child(1)").textContent = firstName;
    newRow.querySelector("td:nth-child(2)").textContent = lastName;
    newRow.querySelector("td:nth-child(3)").textContent = phone;
    table.appendChild(newRow);
  }
  
  // Функция для валидации номера телефона (должен содержать только цифры)
  function isValidPhone(phone) {
    return /^\d+$/.test(phone);
  }
  
  // Функция для валидации контактных данных перед добавлением в таблицу
  function validateAndAddContact(event) {
    event.preventDefault();
    const firstName = document.getElementById("firstNameInput").value.trim();
    const lastName = document.getElementById("lastNameInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
  
    if (firstName === "" || lastName === "") {
      displayAlert("Имя и фамилия должны быть заполнены.");
      return;
    }
  
    if (phone === "" || !isValidPhone(phone)) {
      displayAlert("Номер телефона должен содержать только цифры.");
      return;
    }
  
    addContact(firstName, lastName, phone);
    clearInputs();
  }
  
  // Функция для отображения алерта с сообщением об ошибке
  function displayAlert(message) {
    const alertElement = document.createElement("div");
    alertElement.className = "alert";
    alertElement.innerText = message;
    document.getElementById("contactForm").appendChild(alertElement);
    setTimeout(() => alertElement.remove(), 3000);
  }
  
  // Функция для обработки нажатия на кнопку удаления контакта
  function deleteContact(event) {
    if (event.target.classList.contains('deleteBtn')) {
      const row = event.target.closest('tr');
      row.remove();
    }
  }
  
  // Добавляем обработчик для кнопки 'Добавить' и делегирование для кнопки 'Удалить'
  document.getElementById("contactForm").addEventListener("submit", validateAndAddContact);
  document.getElementById("contactsTable").addEventListener("click", deleteContact);