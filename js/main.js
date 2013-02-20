
$(document).ready(function() {
    setupFileDropper("dropzone");
}); // End $(document).ready


function parseBDLFileData(file_data) {
    var building_data = BDLParser(file_data);
    show_data(building_data.building);
    show_details(building_data.building);
    display_building(building_data.building);
}

function show_details(data) {
    $("#details").css('display','block');
    $("#floors").text(Object.keys(data.floors).length);
    $("#spaces").text(Object.keys(data.spaces).length);
    $("#polygons").text(Object.keys(data.polygons).length);
    $("#vectors").text(data.vectorCount);
}

function show_data(data) {
    $("#data").text("");

    var floors = data.floors;
    if (floors.length) {
        for (var i = 0; i < floors.length; i++) {
            $("#data").append(floors[i].name + "\n");
            for (var j = 0; j < floors[i].spaces.length; j++) {
                $("#data").append("\t" + floors[i].spaces[j].name + " [Vectors: " + floors[i].spaces[j].polygon.vectors.length + "]\n");
            }
        }
    } else {
        $("#data").html('<span class="error">Unable to Parse File</span>');
    }
}