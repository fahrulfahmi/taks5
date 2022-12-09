let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    nama: document.getElementById("nama").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    pesan: document.getElementById("pesan").value.trim(),
  };
  let error = {};
  for (data in formData) {
    formData[data] == "" ? (error[data] = true) : (error[data] = false);
  }
  error.nama || error.email || error.phone || error.subject || error.pesan
    ? alert("Semua Inputan Harus Diisi !")
    : sendMail(formData);
});
const emtyInputValue = () => {
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("pesan").value = "";
};
const sendMail = (data) => {
  let body = `Hello my name ${data.nama}, ${data.subject}, ${data.pesan}. I'm very happy if you want to contact me at ${data.phone} / ${data.email}.`;
  window.open(`mailto:myemail@gmail.com?subject=${data.subject}&body=${body}`);
  emtyInputValue();
};
