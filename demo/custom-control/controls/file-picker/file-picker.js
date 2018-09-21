function initFilePicker() {
  const input = document.querySelector('.form__input--file');
  const placeholder = document.querySelector('.form__file-paceholder');

  function onDrag(event) {
    console.log(event);
  };

  function onChange(event) {
    placeholder.innerHTML = this.value;
    console.log(event);
  }

  input.addEventListener('dragenter', onDrag, false);
  input.addEventListener('dragleave', onDrag, false);
  input.addEventListener('dragover', onDrag, false);
  input.addEventListener('drop', onDrag, false);

  input.addEventListener('change', onChange);

}
