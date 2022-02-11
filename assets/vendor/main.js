
        $("#project-draft").click(function(){

            $(".project-draft").toggleClass("hide");
  
          });

          $(".sidepanel-dd").click(function(){

                $(".sidepanel-dd-ul").slideToggle();

          });

    

          var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})