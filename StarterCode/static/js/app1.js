// API extract of sample file 

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// const samples1 = d3.json(url);
// console.log("Sample Data: ", samples1);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    const sampleExtrct = data.samples;
    console.log("Sample extract 1st element: ",sampleExtrct[0]);
    const sampleIndex = sampleExtrct[0];
    console.log("Sample Index: ",sampleIndex);
   
    delete sampleIndex.id;
         console.log("Sample Index del: ",sampleIndex);
         let slicedOtuid = sampleIndex.otu_ids.slice(0, 10);
         let slicedOtuLbl = sampleIndex.otu_labels.slice(0, 10);
         let slicedsmpVal = sampleIndex.sample_values.slice(0, 10);
               console.log(slicedOtuid);
               console.log(slicedOtuLbl);
               console.log(slicedsmpVal);
         
         document.addEventListener('DOMContentLoaded', function(e){
               var   data = [{
                         x: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977],
                         y: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40] }];
                
                var x = d3.scale.linear()
                          .domain([0, d3.max(data)])
                          .range([0,420]);

                         d3.select('.bar')
                            .selectAll('div')
                              .data(data)
                              .enter()
                              .append('div')
                              .classed('bar', true)
                              .style('width', function(d) {return x(d) + "px";})
                              .style('height', data => (data.y *15) + 'px' )
                              .text(function(d) {return d; });
                       })
        // const xScale = d3.scaleBand();
        //         //  .domain(sampleIndex.map((sampleIndex.otu_ids), sampleIndex.sample_values))
        //         //  .rangeRound([0, 250])
        //         //  .padding(0.1);
        // const yScale = d3.scaleLinear().domain([0,15]).range([200,0]);

        // const container = d3.select('div')
        //      .classed('container', true);

        // const bar = container
        //      .selectAll('.bar')
        //      .data(sampleIndex)
        //      .enter()
        //      .append('rect')
        //      .classed('bar', true)
        //      .attr('width', xScale.bandwidth())
        //      .attr('height', data => 200 - yScale(data.otu_ids)  )
        //      .attr('x', data => xScale(data.sample_values))
        //      .attr('y', data => yScale(data.otu_ids));

})

//     // Initializes the page with a default plot
// function init() {
//   data = [{
//     x: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977],
//     y: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40] }];

//   Plotly.newPlot("plot", data);
// }

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   let dataset = dropdownMenu.property("value");

//   // Initialize x and y arrays
//   let x = [];
//   let y = [];

//   if (dataset === 'dataset1') {
//     x = [1, 2, 3, 4, 5];
//     y = [1, 2, 4, 8, 16];
//   }

//   else if (dataset === 'dataset2') {
//     x = [10, 20, 30, 40, 50];
//     y = [1, 10, 100, 1000, 10000];
//   }

//   // Note the extra brackets around 'x' and 'y'
//   Plotly.restyle("plot", "x", [x]);
//   Plotly.restyle("plot", "y", [y]);
// }

// init();           
//     })

  


// const xScale = d3.scaleBand()
//                  .domain(dummyData.map((dataPoint) => dataPoint.region))
//                  .rangeRound([0, 250])
//                  .padding(0.1);
// const yScale = d3.scaleLinear().domain([0,15]).range([200,0]);

// const container = d3.select('svg')
//   .classed('container', true);

// const bar = container
//   .selectAll('.bar')
//   .data(dummyData)
//   .enter()
//   .append('rect')
//   .classed('bar', true)
//   .attr('width', xScale.bandwidth())
//   .attr('height', data => 200 - yScale(data.value)  )
//   .attr('x', data => xScale(data.region))
//   .attr('y', data => yScale(data.value));

// setTimeout(() => {
//     BroadcastChannel.data(dummyData.slice(0,2)).exit();
// })
//