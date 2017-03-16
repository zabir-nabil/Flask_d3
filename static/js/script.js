//Getting data from table and visualize it 
$(document).ready(function() {

    var len = 0;

    var component_groups = [];
    var component_names = [];
    var component_counts = [];


    // Getting Sensor Name 
    $(".cn").each(function() {
        component_names.push($(this).text());
    });

    // Getting sensor value
    $(".cc").each(function() {
        component_counts.push($(this).text());
    });

    // Getting time in hour
    $(".cg").each(function() {
        component_groups.push($(this).text());
    });

    len = component_names.length;

    // Data array 
    var component_data = [];

    // Adding data in the array 
    for (var i = 0; i < len; i++) {
        component_data.push({
            "component_count": +component_counts[i],
            "component_name": component_names[i],
            "component_group": component_groups[i]
        });
    }

    // instantiate d3plus
    var visualization = d3plus.viz()
        .container("#viz") // container DIV to hold the visualization
        .data(component_data) // data to use with the visualization
        .type("bubbles") // visualization type
        .id(["component_group", "component_name"]) // nesting keys
        .depth(1) // 0-based depth
        .size("component_count") // key name to size bubbles
        .color("component_group") // color by each group
        .draw(); // finally, draw the visualization!

});