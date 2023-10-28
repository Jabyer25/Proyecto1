$(document).ready(function() {
    $('#calculadora').submit(function(e) {
        e.preventDefault();
        
        var tiempo = $('#tiempo').val();
        var dinero = $('#dinero').val();

        if(tiempo <= 15){
            var pago = $('#resultado').html('El tiempo de estadía menor a 15 minutos no aplica pago');
            
        }
        if(tiempo >= 15){
            var pago = $('#resultado').html('Pago a realizar: Q7.00');
        }
        if(tiempo >= 60){
            var pago = $('#resultado').html('Pago a realizar: Q10.00');
        }


    });
});
