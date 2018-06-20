var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');

fileInput.addEventListener('change', function () {
    preview.style.background = '';
    if (!fileInput.value) {
        info.innerHTML = 'no file';
        return ;
    }

    var file = fileInput.files[0];
    info.innerHTML = 'file' + file.name + '<br>' +
                    'size' + file.size + '<br>' +
                    'change' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('not image!');
        return ;
    }

   var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    reader.readAsDataURL(file);
});
