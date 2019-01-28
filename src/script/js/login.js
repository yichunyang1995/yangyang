! function($) {
    $('.top  ').load('header.html');
    $('.footer').load('footer.html');
    $('.ad .input4').on('click', function() {
        console.log('.ad .input4')
        var $phonedata = $('.ad .input1').val();
        var $password = $('.ad .input2').val();
        $.ajax({
            type: 'post',
            url: 'http://10.31.161.22/study/lianxi/youlewang%20%20project/php/logins.php',
            data: {
                phone: $phonedata,
                pass: $password
            },
        }).done(function(data) {
            if (!data) {
                alert('手机号填写有误');
                $('.ad input2').val('');
            } else {
                addcookie('phone', $phonedata, 10);
                location.href = 'http://10.31.161.22/study/lianxi/youlewang%20%20project/src/tiaozhuan.html'
            }
        })
    })
}(jQuery)