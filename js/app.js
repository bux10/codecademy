var main = function () {
    $('#menu').click(function () {
        $('.dropdown-menu').toggle();
    });
    $('.nav-pills li').click(function () {
        $('img').removeClass('highlight');
        $('li').removeClass('active');
        $(this).addClass('active');
        
        var cat = $(this).text();

        switch (cat) {
            case "Kitchens":                
                $('.kit').addClass('highlight');
                break;
            case "Aerials":
                $('.aerial').addClass('highlight');
                break;
            case "Living Rooms":
                $('.lr').addClass('highlight');
                break;
            case "Bedrooms":
                $('.br').addClass('highlight');
                break;
            default:
                $('img').removeClass('highlight');

        }
    });
};

$(document).ready(main);