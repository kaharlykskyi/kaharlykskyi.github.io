
function dateChecker(events) {
    var days = $('.D').toArray();
    days.forEach(function (e) {
        events.forEach(function (p) {
             ($(e).attr('data-date') === p.date) ? e.childNodes['1'].innerHTML = "<i class='ui red circular label' data-date='" + $(e).attr("data-date") + "' data-tooltip='"  + p.title + "' data-position='bottom center'>1</i>" : '';
        });
    });
}

function getModalView(date) {
    events.forEach(function (e) {
        if (date === e.date) {
            $('.event-title').text(e.title);
            $('.event-date').text(e.date);
            $('.event-description').text(e.description);
            var participants = '';
            e.participants.forEach(function (p) {
                participants += '<div class="item"><a class="ui tiny image"><img class="ui avatar image" src="' + p.avatar + '"></a><div class="content"><a class="header participant-name">' + p.name + '</a><div class="description"><p><a href="' + p.url + '" target="_blank">Facebook</a></p></div></div></div>';
                $('.ui.items').html(participants);
            });
        }
    });
}
