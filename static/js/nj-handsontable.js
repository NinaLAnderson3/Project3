var idSelect = d3.select("#selDataset");
var table = d3.select("#example");

function resetData() {

    // ----------------------------------
    // CLEAR THE DATA
    // ----------------------------------
    table.html("");
  
  }; // close resetData()



function init() {
// reset any previous table
    resetData();
    // get the first dataset name from the list
    var  firstData= idSelect.property("value")
    d3.select('#table-label')
    .text('Dataset: ' + firstData);
    var api = "api/data_pop_filter";
    // display filter-able table
    tableFilter(api);

}

function tableFilter(api){
    d3.csv(api).then(function(data, err) {
        if (err) throw err;

        var arr = [];
        for (i = 0 ; i < Object.values(data).length-1; i ++) {
            singleArr = Object.values(data[i]);
            arr.push(singleArr);
        }


        var container = document.getElementById('example');
        var hot =new Handsontable(container, {
        data: JSON.parse(JSON.stringify(arr)),
        // columns: Object.keys(data[0]),
        rowHeaders: true,
        colHeaders: true,
        // columns: ["county_name", "agency", "orinumber", "population"],
        filters: true,
        dropdownMenu: true,
        stretchH: 'all',
        autoWrapRow: true,
        height: 600,
        licenseKey: 'non-commercial-and-evaluation'
        }).updateSettings({
            colHeaders: Object.keys(data[0])
        });
    });
}
init();

// -------------------------------------------------
function optionChanged(data) {

    // reset the data
    resetData();
    d3.select('#table-label')
    .text('Dataset: ');
  
    // get the first dataset name from the list
    var firstData= data;
    
    d3.select('#table-label')
    .text('Dataset: ' + firstData);
  
    if (firstData === "NJ Crime"){
      var api = "api/data_crime_filter";
      tableFilter(api);
    } else if (firstData === "NJ Tax"){
      var api = "api/data_tax_filter";
      tableFilter(api);
    } else if (firstData === "NJ Poverty"){
        var api = "api/data_pov_filter";
        tableFilter(api);
    } else if (firstData === "NJ Crime Detail"){
        var api = "api/data_crime_det_filter";
        tableFilter(api);
    } else if (firstData === "NJ School"){
        var api = "api/data_school_filter";
        tableFilter(api);
    } else {
        var api = "api/data_pop_filter";
        tableFilter(api);
    }
  
  }; // close optionChanged function