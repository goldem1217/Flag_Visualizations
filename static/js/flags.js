
var flagData = "https://raw.githubusercontent.com/goldem1217/Flag_Visualizations/master/static/data/combined_data.csv"

// Create function to display flags and country names on button click

function showFlags(tableData){

    const display = d3.select("#flag-area");

    tableData.forEach(function(country){
        console.log(country.Picture);
        display.append("img")
            .attr("src", country.Picture)
            .attr("width", "30")
            .attr("height", "20");
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

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Black === inputValue);
            
            console.log(filteredData);

            showFlags(filteredData);

        });
        brownButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Brown === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        blueButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Blue === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        greenButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Green === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        maroonButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Maroon === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        orangeButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Orange === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        pinkButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Pink === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        purpleButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Purple === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        redButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Red === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        whiteButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.White === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        yellowButton.on("click", function() {

            let inputValue = 1;

            console.log(inputValue);

            let filteredData = data.filter(row => row.Yellow === inputValue);
            
            console.log(filteredData);

            d3.selectAll("tr").selectAll("td").remove()

            makeTable(filteredData);

        });
        allButton.on("click", function() {
            
            d3.selectAll("tr").selectAll("td").remove()

            makeTable(data);

        });

});


