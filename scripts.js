    var clicks = 0;
    function plusOne() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    function minusOne() {
        clicks += -1;
        document.getElementById("clicks").innerHTML = clicks;
    };
