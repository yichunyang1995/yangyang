! function($) {
    $('.top  ').load('header.html');
    $('.footer').load('footer.html');
    /*轮播图部分*/
    var $ulList = $('.picture ul li');
    var $imgList = $('.picture .images');
    var $picture = $('.picture');
    var $olList = $('.picture ol');
    console.log($olList);
    $ulList.on('mouseover', function() {
            //移入原点切换
            $(this).addClass('active').siblings().removeClass('active');
            //图片切换
            $imgList.eq($(this).index()).animate({ opacity: 1 }, 500).
            siblings('.picture .images ').animate({ opacity: 0 }, 500);
            //右边小图片切换
            $olList.eq($(this).index()).animate({ opacity: 1 }, 500).
            siblings('.picture ol').animate({ opacity: 0 }, 500);
        })
        //定时器部分
    var $count = 0;
    var $time = null;
    //封装函数
    function right() {
        $count++;
        if ($count > $ulList.length - 1) {
            $count = 0;
        }
        $ulList.eq($count).addClass('active').siblings().removeClass('active');
        // console.log($ulList.eq('$count'));
        $imgList.eq($count).animate({ opacity: 1 }, 500).
        siblings('.picture .images ').animate({ opacity: 0 }, 500);

        $olList.eq($count).animate({ opacity: 1 }, 500).
        siblings('.picture ol').animate({ opacity: 0 }, 500);
    }
    $time = setInterval(function() {
        right();
    }, 3000);
    //鼠标移入，定时器清除
    $picture.on('mouseover', function() {
            clearInterval($time);
        })
        //鼠标移除，定时器加上
    $picture.on('mouseout', function() {
        $time = setInterval(function() {
            right();
        }, 3000);
    })
}(jQuery)


! function($) {
    //tab切换
    var $btns = $('.section_2 .list1 h4');
    var $uls = $('.section_2 .content ul ');
    console.log($uls);
    $btns.on('mouseover', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $uls.eq($(this).index()).show().siblings('.section_2 .content ul').hide();
    })

}(jQuery)

! function($) {
    /*楼层跳转*/
    //显示，隐藏楼层导航
    $(window).on('scroll', function() {
            var $top = $(window).scrollTop();
            if ($top > 700) {
                $('.louti').show();
            } else {
                $('.louti').hide();
            }

            $('.louceng').each(function(index, element) {
                var $loucengtop = $(element).offset().top + 200;
                console.log($loucengtop);
                if ($loucengtop > $top) {
                    $('.louti a').removeClass('active');
                    $('.louti a').eq(index).addClass('active'); //满足的添加类
                    return false; //终止此次循环。
                }
            });

        })
        //导航控制对应楼层
    $('.louti a').not('.last').on('click', function() {
            console.log($('.louti a'));
            $(this).addClass('active').siblings().removeClass('active');
            var $tops = $('.louceng').eq($(this).index()).offset().top;
            $('html,body').animate({
                scrollTop: $tops,
            });
        })
        //返回顶部
    $('.last').on('click', function() {
        $('html,body').animate({
            scrollTop: 0,
        })
    })
}(jQuery)

! function($) {
    /*幻灯片切换*/
    var $qindex = 0;
    var $index = 0;
    $('.ol1 li').on('mouseover', function(ev) {
        $index = $(this).index();
        picswitch(ev);
        $qindex = $index; //下一次操作，当前的索引变成前一次的索引。
    });
    //封装函数
    function picswitch(ev) {
        $('.ol1 li').eq($index).addClass('active').siblings('li').removeClass('active');
        if ($qindex == 2 && $index == 0) {
            if (ev.target.nodeName == 'LI') {
                $('.hd img').eq($qindex).animate({
                    left: 370
                });

                $('.hd img').eq($index).css('left', '-370px').animate({
                    left: 0
                });
            }
        } else if ($qindex == 0 && $index == 2) {
            if (ev.target.nodeName == 'LI') {
                $('.hd img').eq($qindex).animate({
                    left: -370
                });
                $('.hd img').eq($index).css('left', '370px').animate({
                    left: 0
                });
            }
        } else if ($index > $qindex) { //从右往左，元素一定要在右边
            $('.hd img').eq($qindex).animate({
                left: -370
            });

            $('.hd img').eq($index).css('left', '370px').animate({
                left: 0
            });
        } else if ($index < $qindex) { //从左往右，元素一定要在左边
            $('.hd img').eq($qindex).animate({
                left: 370
            });

            $('.hd img').eq($index).css('left', '-370px').animate({
                left: 0
            });
        }
    }
}(jQuery)


! function($) {
    //中间幻灯片
    var $qindex = 0;
    var $index = 0;
    $('.ol2 li').on('mouseover', function(ev) {
        $index = $(this).index();
        pic(ev);
        $qindex = $index; //下一次操作，当前的索引变成前一次的索引。
    });
    //封装函数
    function pic(ev) {
        $('.ol2 li').eq($index).addClass('active').siblings('li').removeClass('active');
        if ($qindex == 1 && $index == 0) {
            if (ev.target.nodeName == 'LI') {
                $('.hd2 img').eq($qindex).animate({
                    left: 370
                });

                $('.hd2 img').eq($index).css('left', '-370px').animate({
                    left: 0
                });
            }
        } else if ($qindex == 0 && $index == 1) {
            if (ev.target.nodeName == 'LI') {
                $('.hd2 img').eq($qindex).animate({
                    left: -370
                });
                $('.hd2 img').eq($index).css('left', '370px').animate({
                    left: 0
                });
            }
        } else if ($index > $qindex) { //从右往左
            $('.hd2 img').eq($qindex).animate({
                left: -370
            });

            $('.hd2 img').eq($index).css('left', '370px').animate({
                left: 0
            });
        } else if ($index < $qindex) { //从左往右
            $('.hd2 img').eq($qindex).animate({
                left: 370
            });

            $('.hd2 img').eq($index).css('left', '-370px').animate({
                left: 0
            });
        }
    }
}(jQuery)

! function() {
    /*拼接数据*/
    $.ajax({
        url: 'http://10.31.161.22/study/lianxi/youlewang%20%20project/php/index1.php',
        dataType: 'json'
    }).done(function(data) {

        console.log(data);
        var $str = '<ul>';
        $.each(data, function(index, value) {
            $str += `
               <li >
               <a href='http://10.31.161.22/study/lianxi/youlewang%20%20project/src/details.html?sid=${value.id}'   >
                   <img class='image lazy'  data-original="${value.url}"> </a>
               <p class="p1">
                   <a href="" >${value.title}</a>
               </p>
               <p class="p2">
                   <span>￥${value.price}</span>
               </p>
               <p class="p3">
                   <a class="a1">${value.store}</a>
                   <a rel="nofollow" class="a2" >${value.place}</a>
               </p>
           </li>
        `;
        })
        $str += '</ul>';
        $('.main_content').html($str);
        lazy();
    });

    // 封装懒加载
    function lazy() {
        $("img.lazy").lazyload({
            effect: "slideDown"
        });
    }
}(jQuery)

console.log($('.header_search .input'));
! function($) {
    $('.header_search .input').on('input', function() {
        $.ajax({
            url: 'http://search.ule.com/api/suggest.action?callback=jsonp1&query=' + $('.header_search .input').val() + '&_=1542894443270',
            // type: post,
            dataType: 'jsonp',
            jsonp: "callback",
            jsonpCallback: 'jsonp1'
        }).done(function(data) {
            console.log(data);
            var $str = '';
            $.each(data, function(index, value) {
                $str += `
                <li><a href="http://search.ule.com/search.do?uspm=1.1.103_O99_P1.102.${index}.1&srcid=searchkeyword_ ${index} &keywords=${index}"></a>${index} </li>
                `
            })
            console.log($str);
            $('.header_search .input ul').html($str);
        })

        // console.log($str);
        // console.log($('.header_search .input ul').html($str));
    })
}(jQuery)