let imagenUrl = '';
$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'drbzc9dz2', api_key: '775983319571366'});

    // Upload button
    let uploadButton = $('#file-upload');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'drbzc9dz2', upload_preset: 'examen_1', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
            console.log(id);
            imagenUrl = 'https://res.cloudinary.com/drbzc9dz2/image/upload/' + id;
            console.log(imagenUrl);
            document.querySelector('#pokefoto').src = imagenUrl;
            // cambiarFoto(imagenUrl);
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}