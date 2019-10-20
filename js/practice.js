//table.json
//chart.json

var urlList = ["../json/motor.json"];

$(document).ready(function(){
  for (var i = 0, len = data.length; i < len; ++i) {
    loadData(urlList[i]);
  }
})

function loadData(dataURL){
  //ajax request
  $.ajax({
    method: "GET",
    url: urlList,
    dataType: "json",
    success: parseData
  });
  //onSuccess parseData(data);
}

function parseData(){
  /*if data[0]"table" == "table1" {
    //parse data table
    buildTable();
  }

  if data[0]"chart" == "charts" {
    //parse chart data
    buildCharts();
  }*/
}

function buildCharts(){

}

function buildTable(){

}
