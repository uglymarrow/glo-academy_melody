$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var floorPath =  $(".home-image path");
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    var menuButton = $(".menu-button");
    var navbarPanel = $(".navbar-panel");

    menuButton.on("click", function () {
        navbarPanel.toggle("slow");
    });

    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    floorPath.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);

    counterUp.on("click", function (){
        if (currentFloor < 17) {
            currentFloor++;
            var usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor="${usCurrentFloor}"]`).toggleClass("current-floor");
        }
    });

    counterDown.on("click", function (){
        if (currentFloor > 1) {
            currentFloor--;
            var usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor="${usCurrentFloor}"]`).toggleClass("current-floor");
        }
    });

    function toggleModal() {
        modal.toggleClass("is-open");
    }

    // counterDown.on("click", function (){
    //     currentFloor--;
    //     var usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    //     $(".counter").text(usCurrentFloor);
    // });
});