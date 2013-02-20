
function setupFileDropper(drop_zone_element_name) {
    // Setup the drag-and-drop listeners.
    var dropZone = document.getElementById(drop_zone_element_name);
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // Just grab the first file for this prototype
    var f = files[0];

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            file_data = e.target.result;

            parseBDLFileData(file_data);

            var output = [];
            output.push('<li><strong>', decodeURIComponent(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
            document.getElementById('filename').innerHTML = '<ul>' + output.join('') + '</ul>';
        }
    })(f);

    // Read in the image file as a data URL.
    reader.readAsText(f);
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}
