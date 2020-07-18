
var flagData = "https://raw.githubusercontent.com/goldem1217/Flag_Visualizations/master/static/data/combined_data.csv"

// Function to make table for data display

function makeTable(tableData){
    const tbody = d3.select("#data-tbody");
    
    tableData.forEach(function(country) {
        const row = tbody.append("tr");

        Object.entries(country).forEach(function([key, value]) {
            const cell = row.append("td");
            cell.text(value);
        
        });
                    
    });

};

// Read in CSV 
// Put data in HTML table
// Create button functions to filter data in HTML table

d3.csv(flagData, function(d) {
    return {
        Country : d["Country"],
        Region : d["Region"],
        Population : +d["Population"],
        Area : +d["Area (sq. mi.)"],
        GDP : +d["GDP ($ per capita)"],
        Black : +d["Black"],
        Blue : +d["Blue"],
        Brown : +d["Brown"],
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

        makeTable(data)

        // dropdown for color filter
        // use .filter() to filter through the data and pull the rows where the color value = 1
        // reset the table
        // run makeTable() with the filtered data

        const colorDrop = d3.select("#color-choice")

        // data filter function
        // I would like to find a more concise way of making this work.
        colorDrop.on("change", function() {

            let selection = colorDrop.node().value;

            console.log(selection);

            if (selection == "Black"){   
                let filteredData = data.filter(row => row.Black === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Blue"){   
                let filteredData = data.filter(row => row.Blue === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Brown"){   
                let filteredData = data.filter(row => row.Brown === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Green"){   
                let filteredData = data.filter(row => row.Green === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Maroon"){   
                let filteredData = data.filter(row => row.Maroon === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Orange"){   
                let filteredData = data.filter(row => row.Orange === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Pink"){   
                let filteredData = data.filter(row => row.Pink === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Purple"){   
                let filteredData = data.filter(row => row.Purple === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Red"){   
                let filteredData = data.filter(row => row.Red === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "White"){   
                let filteredData = data.filter(row => row.White === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else if (selection == "Yellow"){   
                let filteredData = data.filter(row => row.Yellow === 1);
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(filteredData);
            }
            else {
                d3.selectAll("tr").selectAll("td").remove()
                makeTable(data);
            };



        });

});


