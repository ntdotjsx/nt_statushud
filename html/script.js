$(document).ready(function () {
    window.addEventListener('message', function (event) {
        var data = event.data;

        $("#id").html('ID : ' + data.id);

        if (data.food <= 20) {
            $('#hunger-Box').css('animation', 'animo 1s linear infinite');
        } else if (data.food > 21) {
            $('#hunger-Box').css('animation', 'animo-stop')
        }

        if (data.health <= 20) {
            $('#health').css('animation', 'animo 1s linear infinite');
        } else if (data.health > 21) {
            $('#health').css('animation', 'animo-stop')
        }

        if (data.health <= 0) {
            $("#container").hide();
			$("#container").css("transition", "0.5s");
        } else if (data.health > 0) {
        	$("#container").show();
			$("#container").css("transition", "0.5s");
        }

        if (data.food) {
            $("#hunger").css("background", "linear-gradient(1turn, #ffc400, #ffa600 " + data.food + "%" + ", transparent 0%)");
        } else if (data.food <= 0) {
            $("#hunger").css("background", "conic-gradient(rgb(140 175 229), rgb(0 149 255) 50%, transparent 0%)" + "0" + "%" + ", transparent 0%)");
        }

        if (data.stress >= 80) {
            $('#stress-Box').css('animation', 'animo 1s linear infinite');
        } else if (data.stress < 80) {
            $('#stress-Box').css('animation', 'animo-stop')
        }

        if (data.stress) {
            $("#stress").css("background", "linear-gradient(1turn, #ffc400, #ffa600 " + data.stress + "%" + ", transparent 0%)");
        } else if (data.stress <= 0) {
            $("#stress").css("background", "conic-gradient(rgb(140 175 229), rgb(0 149 255) 50%, transparent 0%)" + "0" + "%" + ", transparent 0%)");
        }

        if (data.dive) {
            if (data.dive > 99) {
                $("#dive-box").hide();
            } else if (data.dive < 99) {
                $("#dive-box").show();
                $("#dive").css("background", "linear-gradient(1turn, #ffc400, #ffa600 " + data.dive + "%" + ", transparent 0%)");
            }
        }

        if (data.health) {
            $('#health-text').text((data.health));
            if (data.health > 20) {
                $("#health").css("width", data.health + "%");
            } else if (data.health <= 20) {
                $("#health").css("width", data.health + "%");
            }
        }

        if (data.armor == 0) {
            $("#armor").hide();
            $("#armor-text").hide();
        } else if (data.armor > 1) {
            $("#armor").show();
            $("#armor-text").show();
            $('#armor-text').text((data.armor));
            $("#armor").css("width", data.armor + "%");
        }
        // data.stamina
        if (data.stamina >= 80) {
        }else if (data.stamina >= 40) {
            $(".sm i").css("color", "#fff");
        }else if (data.stamina >= 20) {
            $(".sm i").css("color", "#ffbb00");
            $(".sm i").css('animation', 'animo-stop')
        } else if (data.stamina >= 10) {
            $(".sm i").css("color", "#ff0000");
            $(".sm i").css('animation', 'animo 1s linear infinite');
        }
    })
})
