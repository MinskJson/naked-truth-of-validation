function initFilePicker() {
    const input = document.querySelector('.form__input--file');
    const placeholder = document.querySelector('.form__file-paceholder');
    const btn = document.querySelector('.form__btn--file');

    function onEnter() {
        this.classList.add('file--drag');
    }

    function onDrag(event) {
        event.preventDefault();
    }

    function onLeave() {
        this.classList.remove('file--drag');
    }

    function renderFile(file) {
        placeholder.innerHTML = '';
        placeholder.appendChild(filePreview(file));
    }

    function onDrop(event) {
        event.preventDefault();
        if (event.dataTransfer.items && event.dataTransfer.items.length) {
            var file = event.dataTransfer.items[0].getAsFile();
            // dummy error
            // input.value = file;
            renderFile(file);
            input.dispatchEvent(new Event('change'));
        }

        this.classList.remove('file--drag');
    }

    function onChange(event) {
        console.log(event);
        if (this.files.length) {
            renderFile(this.files[0]);
        }
    }

    function filePreview(file) {
        var img = document.createElement('img');
        var reader  = new FileReader();
        reader.addEventListener("load", function () {
            img.src = reader.result;
        });

        reader.readAsDataURL(file);
        return img;
    }

    btn.addEventListener('dragenter', onEnter);
    btn.addEventListener('dragleave', onLeave);
    btn.addEventListener('dragover', onDrag);
    btn.addEventListener('drop', onDrop);

    input.addEventListener('change', onChange);

}
