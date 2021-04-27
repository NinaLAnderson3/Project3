function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
    url = "https://public.tableau.com/profile/dan.russell.b#!/vizhome/NJreportedcrimeData/NJViolentCrimeStory"

    var viz = new tableau.Viz(containerDiv,url);

}

initViz();