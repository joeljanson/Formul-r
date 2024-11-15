document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Förhindra standardformulärskickning

		// Hämta formuläret och fält
		const phoneInput = document.getElementById("phone");
		const phoneError = document.getElementById("phoneError");
		const phonePattern = /^[0-9]{10}$/; // Exakt 10 siffror

		// Kontrollera telefonnummer
		let isPhoneValid = phonePattern.test(phoneInput.value);
		if (!isPhoneValid) {
			phoneInput.classList.add("invalid");
			phoneError.style.display = "block"; // Visa felmeddelande
		} else {
			phoneInput.classList.remove("invalid");
			phoneError.style.display = "none"; // Dölj felmeddelande
		}

		// Kontrollera om hela formuläret är giltigt
		let isFormValid = this.checkValidity();

		// Förhindra formulärskickning om något inte är giltigt
		if (isFormValid && isPhoneValid) {
			alert("Formuläret är korrekt ifyllt och skickas nu!");
			this.submit(); // Skicka formuläret
		} else {
			alert("Formuläret innehåller fel. Kontrollera och försök igen.");
		}
	});
