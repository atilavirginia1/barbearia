let corte = localStorage.getItem('corte');

$("li").click(function () {
    corte = $(this).attr("id");
    localStorage.setItem('corte', corte);
});

if (corte != null) {
    if (corte == 'cabelo') {
        $('#tipocorte').val("1").change();
    } else if (corte == 'barba') {
        $('#tipocorte').val("0").change();
    } else {
        $('#tipocorte').val("2").change();
    }
}

function enviado(){
    alert("Marcação realizada com sucesso!")
}