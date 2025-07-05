$(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
        $('[data-bs-toggle="popover"]').popover();
        $('.carousel').carousel({
          interval: 3000
        })

        $('#contacto').on('show.bs.modal', function (event) {
          console.log('Modal se está ejecutando');
          $('#contactoBtn').removeClass('btn-outline-success');
          $('#contactoBtn').addClass('btn-success');
          $('#contactoBtn').prop('disabled', true);
        });
        $('#contacto').on('shown.bs.modal', function (event) {
          console.log('Modal se ha mostrado');
        });
        $('#contacto').on('hide.bs.modal', function (event) {
          console.log('Modal se ha oculta');
        });
        $('#contacto').on('hidden.bs.modal', function (event) {
          console.log('Modal se ha ocultado');
          $('#contactoBtn').prop('disabled', false);
        });
      });