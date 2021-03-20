$(document).ready(function () {
    $('#ieNotificationModal').on('show.bs.modal',
        function (event) {
            var relatedTarget = $(event.relatedTarget);
            var message = relatedTarget.data("message");
            
            var modal = $(this);
            modal.find(".modal-body #message").html(message);
        });
});
