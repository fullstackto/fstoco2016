$(document).ready(function() {
  var dayDiv, session,
  tracks = {0 : 'General',
              186304: 'FullStack',
              186305: 'DevOps',
              186306: 'FrontEnd',
              186307: 'BackEnd',
              186308: 'UX',
              186309: 'ProMan',
              186310: 'ProDev',
              186311: 'Creative',
              186312: 'IoT'};
  
    $.getJSON("https://eventmobi.com/api/events/fstoco2016/sections/141857",
      function(json) { json.response.items.map(function(obj) {
        dayDiv = (obj.date=="2016-10-17")?'.day1':'.day2';
          $(dayDiv+' .sessions-holder').append(
            `<div class="session-card ${tracks[obj.group_ids[0] || 0]}">
               <span class="title">${obj.topic}</span>
               <span class="room">${obj.location[0].name?(isNaN(obj.location[0].name)?obj.location[0].name:'Room '+obj.location[0].name):obj.location}</span>
               <span class="time">${obj.display_start_time} - ${obj.display_end_time}</span>
               <span class="clickmore">Click to show/hide abstract</span>
               <span class="abstract">${obj.description}</span>
             </div>`
          );
        });
        $(".session-card").on("click", function(e){
          $(e.currentTarget).find("span.abstract").toggle();
          $(e.currentTarget).toggleClass("open");
        });
      });
}); 
  
  
//../141857.json
//http://eventmobi.com/api/events/fstoco2016/sections/141857