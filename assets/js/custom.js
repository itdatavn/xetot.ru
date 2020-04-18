$(document).ready(function(){
    new WOW().init();
    jQuery('#mobile-menu').mmenu();
    //menu profile toggle
    $('.menu-profile>a').click(function(){
        $('.dropdown-xt').toggle('slow');
    });
    $('.menu-notify>a').click(function(){
        $('.dropdown-notify').toggle('slow');
    });
    //Range Price SLider
    $(function() {
        $( "#slider-range" ).slider({
          animate: true,
                range: true,
                min: 0,
                max: 1000000000,
                step: 10000,
                values: [ 0, 500000000 ],
          slide: function( event, ui ) {
            $( "#amount" ).val(ui.values[ 0 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " đến " + ui.values[ 1 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
          }
        });
        $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " đến " + $( "#slider-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    //Popup Search Filter//
    $('#xt-loc').click(function () {       
        $.fancybox.open({
            src  : '#popup-filter',
            type : 'inline',
            touch: false,
            opts : {
                afterShow : function( instance, current ) {
                    // console.info( 'done!' );
                }
            }
        });
    });
    //Home Main Slider
    $('.main-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:7000,
        // autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    //Home Brand Slider
    $('.owl-brand-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:7000,
        // autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    /*product-gallery*/
    var slider = new MasterSlider();     
    slider.control('arrows');  
    slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
    slider.control('thumblist' , {autohide:false ,dir:'v',type:'tabs', align:'left', margin: 0, space:8, width:101, height:62, hideUnder:550});
 
    slider.setup('masterslider' , {
        width:770,
        height:446,
        space:0,
        view:'wave'
    });
    //Product Tab Content
    $('#info-tab a').click(function (e) {
        e.preventDefault();        
        var targetId = $(this).attr('data-href');        
        $('#info-tab .active').removeClass('show active');
        $(this).parent('li').addClass('show active');        
        $('#info-tab-content .tab-pane').removeClass('active');
        $(targetId).addClass('show active');        
    });
    //Post Tab Content
    $('#post-tab a').click(function (e) {
        e.preventDefault();        
        var targetId = $(this).attr('data-href');        
        $('#post-tab .active').removeClass('show active');
        $(this).parent('li').addClass('show active');        
        $('#post-tab-content .tab-pane').removeClass('active');
        $(targetId).addClass('show active');        
    });
    //Category Tab Content
    $('#category-tab a').click(function (e) {
        e.preventDefault();        
        var targetId = $(this).attr('data-href');        
        $('#category-tab .active').removeClass('show active');
        $(this).parent('li').addClass('show active');        
        $('#category-tab-content .tab-pane').removeClass('active');
        $(targetId).addClass('show active');        
    });
    //Profile Page Tab
    $('#profile-tab a').click(function (e) {
        e.preventDefault();        
        var targetId = $(this).attr('data-href');        
        $('#profile-tab .active').removeClass('show active');
        $(this).parent('li').addClass('show active');        
        $('#profile-tab-content .tab-pane').removeClass('active');
        $(targetId).addClass('show active');        
    });   
    //Notify Tab
    $('#notify-tab a').click(function (e) {
        e.preventDefault();        
        var targetId = $(this).attr('data-href');        
        $('#notify-tab .active').removeClass('show active');
        $(this).parent('li').addClass('show active');        
        $('#notify-tab-content .tab-pane').removeClass('active');
        $(targetId).addClass('show active');        
    });           
});

