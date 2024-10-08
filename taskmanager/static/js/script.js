document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"},
      yearRange: 25
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initilisation
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);

    // modal initialisation
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  });