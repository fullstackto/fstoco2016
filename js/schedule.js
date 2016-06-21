$(document).ready(function() {
var dayDiv, session,
tracks = {0 : 'General', 186304: 'FullStack', 186305: 'DevOps', 186306: 'FrontEnd', 186307: 'BackEnd', 186308: 'UX', 186309: 'ProMan', 186310: 'ProDev',186311: 'Creative', 186312: 'IoT'};

$.getJSON("https://eventmobi.com/api/events/fstoco2016/sections/141857",
  function(json) { json.response.items.map(function(obj) {
    dayDiv = (obj.date=="2016-10-17")?'.day1':'.day2';
      $(dayDiv+' .sessions-holder').append(
        `<div class="session-card ${tracks[obj.group_ids[0] || 0]}">
           <div class="title">${obj.topic}</div>
           <div class="room">${obj.location[0].name?(isNaN(obj.location[0].name)?obj.location[0].name:'Room '+obj.location[0].name):obj.location}</div>
           <div class="time">${obj.display_start_time}&nbsp;-&nbsp;${obj.display_end_time}</div>
           <div class="clickmore">Click to show/hide abstract</div>
           <div class="abstract">${obj.description}
            <div class="speaker" data-speaker-id="${obj.speaker_ids[0]}"></div>
           </div>
         </div>`
      );
    });
    $(".session-card").on("click", function(e){
      $(e.currentTarget).find(".abstract").toggle();
      $(e.currentTarget).toggleClass("open");
    });
  });
});
