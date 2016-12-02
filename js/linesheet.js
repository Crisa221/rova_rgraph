
// The data for the Line chart. Here we use multiple arrays for showing multiple lines.
// Though it can just be an array of numbers to show just one line: var data = [4,8,6,5,8,7,5,6,6];


var CoreTemp = [38,38,38,38,38,38,38,38,38,38];

window.onload = function ()
{
    var bar = new RGraph.Bar({
        id: 'cvs',
        data: CoreTemp,
        options: {
            ymax: 200,
            /*backgroundGridVlines: false,
            backgroundGridBorder: false,
            backgroundGridColor: '#999',*/
            backgroundGrid: false,
            numyticks: 12,
            labels: ['1','2','3','4','5','6','7','8','9','10'],
            hmargin: 30,
            gutterTop: 10,
            gutterLeft: 45,
            gutterRight: 45,
            colors: ['#FFA500'],
            textColor: '#ccc',
            axisColor: '#999',
            numxticks: 0,
            ylabels:false,
            shadowColor: 'black',
            shadowOffsetx: 0,
            shadowOffsety: 0,
            shadowBlur: 15,
            scaleZerostart: true,
            strokestyle: 'rgba(0,0,0,0)',
            textAccessible: true
        }
    });



    var line = new RGraph.Line({
        id: 'cvs',
        data: [
            [140,164,170,179,176,177,180,181,174,172],
            [22,35,36,38,34,36,40,39,32,34],
            [50,40,34,30,33,32,28,27,32,30],
            [38,36,35,36,39,37,38,36,38,37]

        ],
        options: {
            ymax: 190,
            noaxes: false,
            backgroundGrid: false,
            linewidth: 3,
            colors: ['red','blue','green','yellow'],
            yaxispos: 'left',
            axisColor: '#999',
            textColor: '#ccc',
            filledRange: false,
            gutterLeft: 45,
            gutterRight: 45,
            tickmarks: null,
            textAccessible: true,
            key: ['HR','BR','HRV','TORP']
        }
    });





    var combo = new RGraph.CombinedChart([bar, line])
        .draw();

    // Because the combo class turns the line chart labels off,
    // turn them back on
    line.set({
        ylabels: true,
        scaleZerostart: true
    });
    RGraph.redraw();
};
