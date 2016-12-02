RGraph.AJAX.get('http://localhost/prova_chartjs/datadb.php?json', function(data){

    var HR = [];
    var BR = [];
    var HRV = [];
    var CoreTemp = [];
    var sec = [];

    for (var i in data){
        HR.push(data[i].HR);
        BR.push(data[i].BR);
        HRV.push(data[i].HRV);
        CoreTemp.push(data[i].CoreTemp);
        sec.push(data[i].sec);
    }



    var line = new RGraph.Line({
        id: 'HRrepo',
        data: HR,
        options: {
            numxticks: 0,
            numyticks: 0,
            backgroundGrid: false,
            colors: ['black'],
            linewidth: 5,
            hmargin: 5,
            ylabels: false,
            shadow: false,
            tickmarks: null
        }
    }).draw();

});