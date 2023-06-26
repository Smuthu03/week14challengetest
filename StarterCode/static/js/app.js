// API extract of sample file 

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';
//Design variables
var width = 800;
var height = 400;
var barWidth = width / 275;



//const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

d3.json(url).then(function(data) {
    //Data variables
	const sampleExtrct = data.samples;
	const sampleIndex = sampleExtrct[0];
  
 
  delete sampleIndex.id;
    
let slicedOtuid = sampleIndex.otu_ids.slice(0, 10).reverse();
let slicedOtuLbl = sampleIndex.otu_labels.slice(0, 10);
let slicedsmpVal = sampleIndex.sample_values.slice(0, 10).reverse();

      // console.log(slicedOtuid);
      // console.log(slicedOtuLbl);
      // console.log(slicedsmpVal);
   // Bar chart    
   var smplVal = slicedsmpVal;
    console.log("sampleValue: ", smplVal);
    var smpVluMx = d3.max(smplVal);
    var otuId = slicedOtuid;
    console.log("OTUID: ", otuId.length );
    let otu_id1 = [];

    // Loop through the array of ratings
    for (let i =0; i < otuId.length; i++) {
   
      row = "OTU_" + otuId[i];
  
      otu_id1.push(row);
    }
    console.log("OTUID: ", otu_id1);

    let trace1 = {
      x: smplVal,
      y: otu_id1,
      text: slicedOtuLbl,
      type: 'bar',
      orientation: 'h'
      
    };
    
    let chartdata = [trace1];

    let layout = {
         title: "A Plotly bar plot"
        };

Plotly.newPlot("bar", chartdata, layout);


   // Bubble Chart
   let Otuid = sampleIndex.otu_ids;
   let OtuLbl = sampleIndex.otu_labels;
   let smpVal = sampleIndex.sample_values;
 
   var trace2 = {
    x: Otuid,
    y: smpVal,
    text: OtuLbl,
    mode: 'markers',
    marker: {
      color:  Otuid,
      size: (smpVal),
      opacity: [1, 0.8, 0.6, 0.4],
      size: smpVal
    }
  };
  
  var bubChart = [trace2];
  
  var layout1 = {
    title: 'Bubble Chart',
    showlegend: false,
    height: 600,
    width: 1000
  };
  
  Plotly.newPlot('bubble', bubChart, layout1);

// Display the sample metadata, i.e., an individual's demographic information.
const metadataExtrct = data.metadata;
// metaextarr = [];
// metaValId= [];
//        metaValeth = [];
//        metaValGen = [];
//        metaValage = [];
//        metaValLoc = [];
//        metaValBbt = [];
//        metaValWreq = [];
const metadataArray = []; // Empty array to load the values
     
   for (let i = 0; i < metadataExtrct.length; i++) {
       const sampleMetadata = metadataExtrct[i];
       let metaValId = sampleMetadata.id;
       let metaValeth = sampleMetadata.ethnicity;
       let metaValGen = sampleMetadata.gender;
       let metaValage = sampleMetadata.age;
       let metaValLoc = sampleMetadata.location;
       let metaValBbt = sampleMetadata.bbtype;
       let metaValWreq = sampleMetadata.wfreq;
       
      //  console.log("ID: ", metaValId);
      //  console.log("Eth: ", metaValeth);
      //  console.log("Gen: ", metaValGen);
      //  console.log("Age: ", metaValage);
      //  console.log("Loc: ", metaValLoc);
      //  console.log("Bbt: ", metaValBbt);
      //  console.log("Wre: ", metaValWreq);
      //  console.log("Metadata Array:", metadataArray);

       // Push values into the metadataArray
         metadataArray.push({
           id: metaValId,
           ethnicity: metaValeth,
           gender: metaValGen,
           age: metaValage,
           location: metaValLoc,
           bbtype: metaValBbt,
           wfreq: metaValWreq
         });
       }


  console.log("Metadata: ",metadataExtrct);
const sampleMetadata = metadataExtrct[0];
   
// Dropdown selection 
let idDropdwn = d3.select(".well").text();
console.log("text1 says: ", idDropdwn);

let idVal = [940,941,943,944,945,946,947,948,949,950,952,953,954,955,956,958,959,960,961,962,963,964,966,967,968,969,970,971,
  972,973,974,975,978,1233,1234,1235,1236,1237,1238,1242,1243,1246,1253,1254,1258,1259,1260,1264,1265,1273,1275,
  1276,1277,1278,1279,1280,1281,1282,1283,1284,1285,1286,1287,1288,1289,1290,1291,1292,1293,1294,1295,1296,1297,
  1298,1308,1309,1310,1374,1415,1439,1441,1443,1486,1487,1489,1490,1491,1494,1495,1497,1499,1500,1501,1502,1503,
  1504,1505,1506,1507,1508,1510,1511,1512,1513,1514,1515,1516,1517,1518,1519,1521,1524,1526,1527,1530,1531,1532,1533,
  1534,1535,1536,1537,1539,1540,1541,1542,1543,1544,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,1557,
  1558,1561,1562,1563,1564,1572,1573,1574,1576,1577,1581,1601];
//const idVal = sampleMetadata.id;

 //  On change to the DOM, call getData()
 document.getElementById("selDataset").innerHTML = `
 <select id="selDataset" onchange="optionChanged(this.value)">
    ${idVal.map(option => `<option>${option}</option>`).join("")};
 </select>`;


 // Display each key-value pair from the metadata JSON object somewhere on the page.

 if ("selDataset" == 940); {
    var metaStr = sampleMetadata;

    var  metaStr = JSON.stringify(metaStr, null, '\t');

    console.log("non-stringify:", metaStr);

    document.getElementById("sample-metadata").innerHTML = 
        `<div id="sample-metadata" class="panel-body"> </div> ${metaStr}`;
 }
   elseif ("selDataset" == this.value); { 
 const newmeta = metadataArray.find(e => e.id === idVal);
      console.log(newmeta);

   document.getElementById("sample-metadata").innerHTML = 
   `<div id="sample-metadata" class="panel-body"> </div> ${newmeta}`;
        }
}); 
