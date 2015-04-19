$(document).on("ready",function(){
// 	// Get context with jQuery - using jQuery's .get() method.
// var ctx = document.getElementById("myChart").getContext("2d");
// // This will get the first returned node in the jQuery collection.

// var myBarChart = new Chart(ctx).Bar(data, options);

// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First dataset",
//             fillColor: "rgba(220,220,220,0.5)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40]
//         },
//         {
//             label: "My Second dataset",
//             fillColor: "rgba(151,187,205,0.5)",
//             strokeColor: "rgba(151,187,205,0.8)",
//             highlightFill: "rgba(151,187,205,0.75)",
//             highlightStroke: "rgba(151,187,205,1)",
//             data: [28, 48, 40, 19, 86, 27, 90]
//         }
//     ]
// };
 // bar chart data
            var barData = {
                labels : ["2009-10","2010-11","2011-12","2012-13","2013-14","2014-15"],
                datasets : [
                    {
                        fillColor : "#00009C",
                        strokeColor : "#00009C",
                        data : [35,32,27,30,26,31]
                    },
                    {
                        fillColor : "red",
                        strokeColor : "red",
                        data : [5,5,7,6,9,4]
                    }
                ]
            }
            // get bar chart canvas
            var income = document.getElementById("income").getContext("2d");
            // draw bar chart
            new Chart(income).Bar(barData);
})
