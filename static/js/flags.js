
var flagData = "https://raw.githubusercontent.com/goldem1217/Flag_Visualizations/master/static/data/combined_data.csv"

// Create function to display flags and country names on button click

function showFlags(tableData){

    const display = d3.select("#flag-area");

    tableData.forEach(function(country){
        display.append("img")
            .attr("src", country.Picture)
            .attr("alt", country.Country)
            .attr("width", "40")
            .attr("height", "25")
            .attr("class", "flag");
    });
    
    };




// Read in CSV 
d3.csv(flagData, function(d) {
    return {
        Country : d["Country"],
        Picture : d["URL"],
        Black : +d["Black"],
        Brown : +d["Brown"],
        Blue : +d["Blue"],
        Green : +d["Green"],
        Maroon : +d["Maroon"],
        Orange : +d["Orange"],
        Pink : +d["Pink"],
        Purple : +d["Purple"],
        Red : +d["Red"],
        White : +d["White"],
        Yellow : +d["Yellow"],


        };
    }).then(function(data) {

        console.log(data[0]);

        showFlags(data);

        // buttons for color filter
        // use .filter() to filter through the data and pull the rows where the color value = 1
        // reset the table
        // run makeTable() with the filtered data

        const blackButton = d3.select("#btn-black");
        const brownButton = d3.select("#btn-brown");
        const blueButton = d3.select("#btn-blue");
        const greenButton = d3.select("#btn-green");
        const maroonButton = d3.select("#btn-maroon");
        const orangeButton = d3.select("#btn-orange");
        const pinkButton = d3.select("#btn-pink");
        const purpleButton = d3.select("#btn-purple");
        const redButton = d3.select("#btn-red");
        const whiteButton = d3.select("#btn-white");
        const yellowButton = d3.select("#btn-yellow");
        const allButton = d3.select("#btn-all");


        blackButton.on("click", function() {

            let filteredData = data.filter(row => row.Black === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        brownButton.on("click", function() {

            let filteredData = data.filter(row => row.Brown === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        blueButton.on("click", function() {

            let filteredData = data.filter(row => row.Blue === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        greenButton.on("click", function() {

            let filteredData = data.filter(row => row.Green === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        maroonButton.on("click", function() {

            let filteredData = data.filter(row => row.Maroon === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        orangeButton.on("click", function() {

            let filteredData = data.filter(row => row.Orange === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        pinkButton.on("click", function() {

            let filteredData = data.filter(row => row.Pink === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        purpleButton.on("click", function() {

            let filteredData = data.filter(row => row.Purple === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        redButton.on("click", function() {

            let filteredData = data.filter(row => row.Red === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        whiteButton.on("click", function() {

            let filteredData = data.filter(row => row.White === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        yellowButton.on("click", function() {

            let filteredData = data.filter(row => row.Yellow === 1);
            
            d3.selectAll("img").classed('flag', true).remove()

            showFlags(filteredData);

        });
        allButton.on("click", function() {
            
            d3.selectAll("img").classed('flag', true).remove()
            
            showFlags(data);

        });

});


