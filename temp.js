function customFilter(data){
    return data.car && data.rating < 3;
}

//Trigger setFilter function with correct parameters
function updateFilter(){

    var filter = $("#filter-field").val() == "function" ? customFilter : $("#filter-field").val();

    if($("#filter-field").val() == "function" ){
        $("#filter-type").prop("disabled", true);
        $("#filter-value").prop("disabled", true);
    }else{
        $("#filter-type").prop("disabled", false);
        $("#filter-value").prop("disabled", false);
    }

    $("#example-table").tabulator("setFilter", filter, $("#filter-type").val(), $("#filter-value").val());
}

//Update filters on value change
$("#filter-field, #filter-type").change(updateFilter);
$("#filter-value").keyup(updateFilter);

//Clear filters on "Clear Filters" button click
$("#filter-clear").click(function(){
    $("#filter-field").val("");
    $("#filter-type").val("=");
    $("#filter-value").val("");

    $("#example-table").tabulator("clearFilter");
});

//Build Tabulator
$("#example-table").tabulator({
    height:"311px",
    layout:"fitColumns",
    columns:[
        {title:"Name", field:"name", width:200},
        {title:"Progress", field:"progress", formatter:"progress", sorter:"number"},
        {title:"Gender", field:"gender"},
        {title:"Rating", field:"rating", formatter:"star", align:"center", width:100},
        {title:"Favourite Color", field:"col"},
        {title:"Date Of Birth", field:"dob", align:"center", sorter:"date"},
        {title:"Driver", field:"car", align:"center", formatter:"tickCross"},
    ],
});