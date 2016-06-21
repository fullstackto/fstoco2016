$(document).ready(function() {

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
