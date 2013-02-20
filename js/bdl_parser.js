
var floors, spaces, polygons, vectorCount, currentFloor;

/**
 * Parser for Building Description Language (BDL) Format
 *
 * Reference:
 * http://doe2.com/DOE2/
 * http://doe2.com/download/DOE-22/DOE22Vol2-Dictionary.pdf
 **/
function BDLParser(data) {
    // init vars
    floors = [];
    spaces = [];
    polygons = [];
    vectorCount = 0;
    currentFloor;

    // Normalize newlines, remove blank lines and remove comments
    data = data.replace(/\r\n/gm, '\n');
    data = data.replace(/^\s*\n/gm, '');
    data = data.replace(/^\$.*$\n/gm, '');

    // Split data into stanza at the BDL ".." delimiters
    var stanzas = data.split(/\s*\.\.\n/);
    $.each(stanzas, function(index, value) {
        if (value !== '' ) parseStanza(value);
    });

    return { 'building': {'floors': floors, 'spaces': spaces, 'polygons': polygons, 'vectorCount': vectorCount }};
}

function parseStanza(stanza) {
    var stanzaLines = stanza.split(/\n/);
    var stanzaHead = stanzaLines.shift().split(/=/);
    var stanzaName = $.trim(stanzaHead[0]);
    var stanzaType = $.trim(stanzaHead[1]);

    // All we want to deal with are Floors, Spaces and Polygons for this prototype.
    // :TODO: If Site and Building Data were defined, we could grab lat/long and show on a Google map.
    switch(stanzaType) {
        case "FLOOR":
            parseFloor(stanzaName, stanzaLines);
            break;
        case "SPACE":
            parseSpace(stanzaName, stanzaLines);
            break;
        case "POLYGON":
            parsePolygon(stanzaName, stanzaLines);
            break;
        default:
            // Nothing
    }
}

function parseFloor(name, lines) {
    // console.log("Floor " + name + "\n");
    var floor = new Floor(name);
    var attributes = parseAttributes(lines);
    floor.z = attributes["Z"];

    floors.push(floor);
    currentFloor = floor;
}

function parseSpace(name, lines) {
    // console.log("Space " + name + "\n");
    var space = new Space(name);
    var attributes = parseAttributes(lines);
    var associated_polygon = attributes["POLYGON"];

    if (associated_polygon !== undefined && polygons[associated_polygon] !== undefined) {
        space.polygon = polygons[associated_polygon];
    }

    spaces.push(space);
    currentFloor.spaces.push(space);
}

function parsePolygon(name, lines) {
    //console.log("Poly " + name + "\n");
    var polygon = new Polygon;
    polygon.name = name;

    var attributes = parseAttributes(lines);
    var vector;
    $.each(attributes, function(index, value) {
        vector = parseVector(value);
        vectorCount++;
        polygon.vectors.push(vector);
    });
    polygons[name] = polygon;
}

function parseAttributes(lines) {
    var attributes = {};
    $.each(lines, function(index, value) {
        parsedLines = value.split(/=/);
        attr_key = $.trim(parsedLines[0]);
        attr_value = $.trim(parsedLines[1]);
        attributes[attr_key] = attr_value;
        // console.log(attr_key + " -> " + attr_value + "\n");
    });
    return attributes;
}

function parseVector(data) {
    // Example: ( 160.104, 69.7029 )
    var parsedData = data.match(/^\( (\d.*), (\d.*) \)$/);
    return new Vector(parsedData[1], parsedData[2]);
}


// Objects
function Floor(name) {
  this.name = name;
  this.z = 0;
  this.spaces = [];
}

function Space(name) {
  this.name = name;
  this.polygon;
  this.spaces = [];
}

function Polygon(name) {
  this.name = name;
  this.vectors = [];
}

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
