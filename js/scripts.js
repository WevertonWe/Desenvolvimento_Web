$(function(){
    //Aqui vai todo nosso código de javascript.
    $('nav.mobile').click(function(){
        //O que vai acontecer quando clicarmos na nav.mobile
        var listaMenu = $('nav.mobile ul');
        //Abrir menu através do fadein
        /*
        if(listaMenu.is(':hidden') == true){
            listaMenu.fadeIn();
        }
        else{    
            listaMenu.fadeOut();
        }
        */

        //Abrir ou fechar o menu!
        // listaMenu.slideToggle();


        //Abrir ou fechar sem efeitos
        /*
        if(listaMenu.is(':hidden') == true){
            listaMenu.show();
            // listaMenu.css('display','block');
        }
        else{    
            listaMenu.hide();
            // listaMenu.css('display','none');
        }
        */

        if(listaMenu.is(':hidden') == true){

            // var icone = $('.botao-menu-mobile i');
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-x')
            listaMenu.slideToggle();

        }
        else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fa-x');
            icone.addClass('fa-bars');    
            listaMenu.slideToggle();
        }

        //fa-solid fa-bars
        //<i class="fa-solid fa-x"></i>
    
    });

    if($('target').length > 0){
        var elemento = '#'+$('target').attr('target');
        var divScroll = $(elemento).offset().top;
        $('html,body').animate({'scrollTop':divScroll},2000);
        
    }


    carregarDinamico();
    function carregarDinamico(){
        $('[realtime]').click(function(){
            var pagina = $(this).attr('realtime');
            $('.container-principal').hide();
            $('.container-principal').load(INCLUDE_PATH+'pages/'+pagina+'.php');

            setTimeout(function(){
                initialize();
            },1000);

            $('.container-principal').fadeIn(1000);
            
            return false;
        })
    }

    
})