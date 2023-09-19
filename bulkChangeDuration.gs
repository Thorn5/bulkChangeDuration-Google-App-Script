function bulkChangeDuration() {
  // Get the calendar by ID.
  var calendar = CalendarApp.getCalendarById(112233);

  // Display the calendar name on the event log.
  // Logger.log('Calendar name: ' + calendar.getName());
  // logged: Calendar name: Garbage Pickup - Working

  // Get all of the events on the calendar.
  var startDate = new Date("1990-01-01");
  var endDate = new Date("2050-01-01");
  var events = calendar.getEvents(startDate, endDate);
  // Logger.log('No. of Events: ' + events.length);
  // Logged: No. of Events: 150

  // // log 2nd event:
  // var event2 = events[1]
  // Logger.log('Event title: ' + event2.getTitle());
  // Logger.log('Event start time: ' + event2.getStartTime());
  // Logger.log('Event end time: ' + event2.getEndTime());

  for (var i = 0; i < events.length; i++) {
    var event = events[i]
    // Display each event on the event log.
    // Logger.log('Event title: ' + event.getTitle());
    // Logger.log('Event start time: ' + event.getStartTime());
    // Logger.log('Event end time: ' + event.getEndTime());

    // set every event to a duration of 1 hour
    //! Broken!
    // event.setEndTime(new Date(event.getStartTime().getTime() + 3600000));
    // event.update();
  }
}
