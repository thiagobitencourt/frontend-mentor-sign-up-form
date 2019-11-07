window.addEventListener("load", function() {
  const form = document.getElementsByTagName("form")[0];
  form.addEventListener("submit", submitForm, false);

  function submitForm(event) {
    form.classList.add("submitted");
    const formFields = [form.firstname, form.lastname, form.email, form.password];
    if (formFields.some(isFormFieldNotValid)) {
      event.preventDefault();
    };
  }

  function isFormFieldNotValid(formField) {
    return !formField.checkValidity();
  }
});
