$(document).ready(function() {


// schedule
// https://eventmobi.com/api/events/fstoco2016/sections/141857

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


// speakers
// https://eventmobi.com/api/events/fstoco2016/sections/141859

  $.getJSON("https://eventmobi.com/api/events/fstoco2016/sections/141859",
    function(json) { json.response.items.map(function(obj) {
      $(".speakerBundle").append(
        `<div class="speaker col-md-6">
          <img src="https://s3.amazonaws.com/eventmobi-assets/eventsbyids/11159/people/${obj.image100}" alt="Headshot"/>
          <h3 id="-">${obj.first_name}</h3>
          <h4>${obj.title}&nbsp;at&nbsp;${obj.company_name}</h4>
          <h4><a class="twitter-follow-button" href="${obj.twitter}" data-show-count="false" data-lang="en">${obj.twitter}</a></h4>
          <p>${obj.about}</p>
        </div>`
      );
      window.setTimeout( function() {
        $(".speaker[data-speaker-id='"+obj.id+"']").append(
          `<div class="speakerblock">
            <p>Speaker: <strong>${obj.first_name}</strong></p>
            <p><em>${obj.title}&nbsp;at&nbsp;${obj.company_name}</em></p>
            <p>${obj.about}</p>
          </div>`
        );
      }, 1000);
    });
  });
});
