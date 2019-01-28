! function($) {
    $('.top  ').load('header.html');
    $('.footer').load('footer.html');
    var id = location.search.substring(1).split('=')[1];
    $.ajax({
        url: 'http://10.31.161.22/study/lianxi/youlewang%20%20project/php/details.php',
        dataType: 'json',
        data: {
            sid: id,
        }
    }).done(function(data) {
        // console.log(data); //拿到后端匹配的数据
        //进行拼接
        $('.st img').attr('sid', data.id);
        $('.st img ').attr('src', data.url);
        $('.bf .bt').attr('src', data.url);
        var urldata = (data.urls).split(',');
        $('.list .img0 ').attr('src', data.url);
        $('.list .img1').attr('src', urldata[0]);
        $('.list .img2').attr('src', urldata[1]);
        $('.content h2').html(data.title);
        $('.num').html(data.price);
    });
    var arrsid = []; //商品的id
    var arrnum = []; //商品的数量
    //提前获取cookie里面id和num
    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');
            arrnum = getcookie('cookienum').split(',');
        }
    }
    $('.buy .a2').on('click', function() { //点击加入购物车按钮。
        //判断当前的商品sid是否存在购物车(cookie)
        //判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较
        //获取当前的按钮对应的商品的sid
        // var $sid = $(this).parents('.goodsinfo').find('.loadimg').attr('sid');
        var $sid = $('.st img').attr('sid');
        console.log($sid);
        cookietoarray();
        if ($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加 
            var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val());
            console.log($('#count'));
            arrnum[$.inArray($sid, arrsid)] = num;
            addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
        } else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
            arrsid.push($sid); //将当前的id存入数组
            addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
            arrnum.push($('#count').val());
            addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
        }
    });
    //放大镜
    var $scale = $('.scale'),
        $st = $('.st'),
        $sf = $('.sf'),
        $bf = $('.bf'),
        $bt = $('.bt'),
        $oul = $('.select .list ul'),
        $oli = $('.select .list ul li');
    $st.hover(function() { //out
        $sf.css({
            visibility: 'visible'
        });
        $bf.css({
            visibility: 'visible'
        });
        // 放大镜的宽高
        var sfwidth = $st.width() * $bf.width() / $bt.width();
        var sfheight = $st.height() * $bf.height() / $bt.height();

        console.log(sfwidth);
        console.log(sfheight);
        $sf.width(sfwidth);
        $sf.height(sfheight);
        // 移动放大镜
        $st.on('mousemove', function(ev) {
            var ev = ev || window.event;
            var l = ev.pageX - $scale.offset().left - sfwidth / 2,
                t = ev.pageY - $scale.offset().top - sfheight / 2;
            if (l < 0) {
                l = 0;
            } else if (l >= $st.width() - sfwidth) {
                l = $st.width() - sfwidth;
            }
            if (t < 0) {
                t = 0;
            } else if (t >= $st.height() - sfheight) {
                t = $st.height() - sfheight;
            }
            $sf.css({
                left: l,
                top: t
            });
            // 比例
            var bili = $bf.width() / $sf.width();
            $bt.css({
                left: -l * bili,
                top: -t * bili
            });
        });
    }, function() { //over
        $sf.css('visibility', 'hidden');
        $bf.css('visibility', 'hidden');
    });
    // ul的宽
    var liwidth = $($oli[0]).outerWidth();
    $oul.width(liwidth * $oli.length);
    // 交换src
    $oli.each(function(index, element) {
        $(element).on('mouseover', function() {
            var url = $(this).find('img').attr('src');
            $st.children('img').attr('src', url);
            $bt.attr('src', url);
        });
    });

}(jQuery)