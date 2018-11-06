const total = 360 / (12 * 60)
const total_min = 6
var start_h = 1

const hours = 12
const ticks = 5
const totaltime = hours*ticks;
const curr_step = 360 / totaltime

$(function() {
    updateTime()
    clock = $('#clock');
    var interval = setInterval(updateTime,1000);   
    make_timelines(clock)
});

function updateTime(){
    var now = new Date();
    var hours_interval = (now.getHours()*60 + now.getMinutes()) * total - 90
    var mins_interval = total_min * now.getMinutes() + 90
    $(".min-arrow").css({
        transform: 'rotate('+ hours_interval +'deg)'
    });
    $(".arrow").css({
        transform: 'rotate('+ mins_interval +'deg)'
    });
}

function make_timelines(parent){
    for (var i = 0; i < totaltime; i++) {
        deg = i * curr_step + 120
        console.log(deg)
        if (i%ticks == 0 ){
            $('<div>').attr({class: "time-hours-wide", 'data-content': start_h})
                .css({transform: "rotate("+deg+"deg)"}).appendTo(parent);
                start_h+=1;
                console.log(deg+"wow")
        }
        else
            $('<div>').attr({class: "time-hours"})
                .css({transform: "rotate("+deg+"deg)"}).appendTo(parent);
    }
}