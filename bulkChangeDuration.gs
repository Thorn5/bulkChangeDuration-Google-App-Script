function bulkChangeDuration() {
  // Get the calendar by ID.
  var calendarId = PropertiesService.getScriptProperties().getProperty('CALENDAR_ID');
  // Logger.log('calendarId: ' + calendarId);
  var calendar = CalendarApp.getCalendarById(calendarId);

  // Display the calendar name on the event log.
  // Logger.log('Calendar name: ' + calendar.getName());

  // Get all of the events on the calendar.
  var startDate = new Date("1990-01-01");
  var endDate = new Date("2050-01-01");
  var events = calendar.getEvents(startDate, endDate);
  // Logger.log('No. of Events: ' + events.length);

  // Loop through each event and set the duration to one hour
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    var startTime = event.getStartTime();
    var endTime = new Date(startTime.getTime() + (60 * 60 * 1000));
    
    // Check if the event is part of a series
    if (event.isRecurringEvent()) {
      var series = event.getEventSeries();
      series.setRecurrence(series.getRecurrence(), startTime, endTime);
    } else {
      // Create a new event with the same details and the new duration
      calendar.createEvent(event.getTitle(), startTime, endTime, {
        description: event.getDescription(),
        location: event.getLocation(),
        guests: event.getGuestList().join(','),
        sendInvites: false
      });
      
      // Delete the original event
      event.deleteEvent();
    }
  }
}
