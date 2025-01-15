function sendEmail() {
	const name = encodeURIComponent(document.getElementById("name").value);
	const email = encodeURIComponent(document.getElementById("email").value);
	const message = encodeURIComponent(document.getElementById("message").value);

	const mailtoLink = `mailto:mikitabesau@gmail.com?subject=Message%20from%20${name}&body=Email for contact:%20${email}%0A%0AMessage:%0A${message}`;

	window.location.href = mailtoLink;
}