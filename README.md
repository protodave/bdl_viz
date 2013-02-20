bdl_viz
=======

Building Description Language (BDL) Parser and WebGL 3D Visualizer.

bdl_viz is a web application that parses a given BDL formatted file to extract Floors, Spaces and Polygons/Vectors that define the building's 3D geometry. That 3D data is then used to construct an interactive 3D WebGL model using the [three.js](http://mrdoob.github.com/three.js/) library.

BDL is format used by [DOE-2](http://doe2.com/DOE2/), a widely used freeware building energy analysis program that can predict the energy use and cost for all types of buildings. DOE-2 uses a description of the building layout, constructions, usage, conditioning systems (lighting, HVAC, etc.) and utility rates provided by the user, along with weather data, to perform an hourly simulation of the building and to estimate utility bills. 

Reference:
 * http://doe2.com/DOE2/
 * http://doe2.com/download/DOE-22/DOE22Vol2-Dictionary.pdf


![screenshot](./bdl_viz_screencap.jpg?raw=true)
