! function($) {
    $('.top  ').load('header.html');
    $('.footer').load('footer.html');

    function goods(id, count) {
        //用传入的cookie里面的id与数据库里的id进行匹配，匹配的则在页面渲染出来
        $.ajax({
            url: 'http://10.31.161.22/study/lianxi/youlewang%20%20project/php/cart.php',
            type: 'GET',
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
            $.each(data, function(index, value) {
                if (id == value.id) {
                    var $clonebox = $('.section5:hidden').clone(true, true);
                    $clonebox.find('.list_2').find('img').attr('src', value.url);
                    $clonebox.find('.list_2').find('img').attr('sid', value.id);
                    $clonebox.find('.list_3').find('a').html(value.title);
                    $clonebox.find('.list_5').html(value.price);
                    $clonebox.find('.list_6').find('input').val(count);
                    $clonebox.find('.list_7').find('b').html((value.price * count).toFixed(2));
                    $clonebox.css('display', 'block');
                    $('.goodslist').append($clonebox);
                    total();
                }
            })
        })
    }
    if (getcookie('cookiesid') && getcookie('cookienum')) {
        var arrsid = getcookie('cookiesid').split(',');
        var arrnum = getcookie('cookienum').split(',');
        for (var i = 0; i < arrsid.length; i++) {
            goods(arrsid[i], arrnum[i]);
        }
    }

    function empty() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            $('.empty-cart').hide();
        } else {
            $('.empty-cart').show();
        }
    }
    empty();

    //总价，总商品
    function total() {
        var $sum = 0;
        var $count = 0;
        $('.section5:visible').each(function(index, element) {
            console.log($('.section5:visible'));
            if ($(element).find('.list_1 input').prop('checked')) {
                $sum += parseInt($(element).find('.list_6 input').val());
                $count += parseFloat($(element).find('.list_7 b').html());
            }
            console.log($sum);
            console.log($count);
        });
        $('.section7 .num ').html($sum);
        $('.section7 .price ').html('￥' + $count.toFixed(2));
    }
    //全选
    $('.section6 .list_1 input').on('change', function() {
        $('.section5:visible').find(':checkbox').prop('checked', $(this).prop('checked'));
        $('.section6 .list_1 input').prop('checked', $(this).prop('checked'));
    });

    var $boxs = $('.section5:visible').find(':checkbox');
    //事件委托，委托给给this指向的元素$boxs
    $('.goodslist').on('change', $boxs, function() {
        if ($('.section5:visible').find('input:checkbox').size() == $('.section5:visible').find('input:checked').size()) {
            $('.section6 .list_1 input').prop('checked', true);
        } else {
            $('.section6 .list_1 input').prop('checked', false);
        }
        total();
    })

    //数量的改变-加   
    $('.section5 .plus').on('click', function() {
        var $count = $(this).parents('.section5').find('.list_6 input').val();
        console.log($count);
        $count++;
        if ($count >= 200) {
            $count = 200;
        }
        $(this).parents('.section5').find('.list_6 input').val($count); //赋值回去
        $(this).parents('.section5').find('.list_7 b').html(shop($(this)));
        total(); //重新计算价格总和
        setcookie($(this));
    });

    //改变数量-减
    $('.section5 .minus').on('click', function() {
        var $count = $(this).parents('.section5').find('.list_6 input').val();
        $count--;
        if ($count <= 1) {
            $count = 1;
        }
        $(this).parents('.section5').find('.list_6 input').val($count); //赋值回去
        $(this).parents('.section5').find('.list_7 b').html(shop($(this)));

        total(); //重新计算价格总和
        setcookie($(this));
    });

    //直接输入，数量改变
    $('.section5 .list_6 input').on('input', function() {
        var $reg = /^\d+$/g; //正则
        var $value = parseInt($(this).val());
        if ($reg.test($value)) {
            if ($value >= 200) {
                $(this).val(99);
            } else if ($value <= 0) {
                $(this).val(1);
            } else {
                $(this).val($value);
            }
        } else {
            $(this).val(1)
        }
        $(this).parents('.section5').find()
        total();
        setco0kie($(this));
    });
    //计算数量改变后的单个商品的价格合计
    function shop(obj) {
        var $dj = parseFloat(obj.parents('.section5').find('.list_5').html());
        var $count = parseInt(obj.parents('.section5').find('.list_6 input').val());
        return ($dj * $count).toFixed(2);
    }

    //改变后的数量与点击的id存放在cookie中
    var arrsid = [];
    var arrnum = [];

    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
            arrnum = getcookie('cookienum').split(','); //cookie商品的num
        }
    }

    function setcookie(obj) {
        cookietoarray();
        var $index = obj.parents('.section5').find('img').attr('sid');
        arrnum[$.inArray($index, arrsid)] = obj.parents('.section5').find('.list_6 input').val();
        addcookie('cookienum', arrnum.toString(), 10);
    }

    //删除
    function delgoods(sid, arrsid) {
        var $index = 0;
        $.each(arrsid, function(index, value) {
            if (sid == value) {
                $index = index;
            }
        });
        arrsid.splice($index, 1); //删除索引对应的sid值
        arrnum.splice($index, 1) //删除索引对应的数量值
        addcookie('cookiesid', arrsid.toString(), 10);
        addcookie('cookienum', arrsid.toString(), 10);
    }

    //单个商品的删除(事件委托)
    $('.goodslist').on('click', '.del', function() {
        cookietoarray();
        if (confirm('你确定要从购物车删除该商品吗？')) {
            $(this).parents('.section5').remove();
        }
        delgoods($(this).parents('.section5').find('img').attr('sid'), arrsid);
        total();
    });

    //删除所有的商品
    $('.section6 .a2').on('click', function() {
        cookietoarray();
        if (confirm('你确定要清空当前购物车中所有商品吗？')) {
            $('.section5:visible').each(function() {
                if ($(this).find('input:checkbox').is(':checked')) { //复选框选中
                    $(this).remove();
                    delgoods($(this).find('img').attr('sid'), arrsid);
                }
            })
            total();
        }
    })
}(jQuery)
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
! function($) {
    $('.top  ').load('header.html');
    $('.footer').load('footer.html');
    $('#form1').validate({
            rules: {
                phones: {
                    required: true,
                    minlength: 11,
                    isMobile: true,
                    remote: {
                        url: 'http://10.31.161.22/study/lianxi/youlewang%20%20project/php/registor.php',
                        type: 'post',
                    }
                },
                password: {
                    required: true,
                    rangelength: [6, 20],

                },
                pass: {
                    required: true,
                    equalTo: "#password "
                }
            },
            messages: {
                phones: {
                    required: '手机号不能为空',
                    remote: '用户名已存在',
                    minlength: '请填写正确的手机号码，方便接收订单通知，找回密码等',
                    isMobile: '请正确填写手机号码'
                },
                password: {
                    required: '密码不能为空',
                    rangelength: '建议使用大小写字母、数字和符号两种以上的组合，6-20个字符 '
                },
                pass: {
                    required: '确认密码不能为空',
                    equalTo: "两次密码输入不一致 "
                }
            }
        })
        //手机号码验证  
    jQuery.validator.addMethod("isMobile ", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请正确填写手机号码 ");

    // })

    $.validator.setDefaults({
        /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
        success: function(label) {
            label.text('√').css('color', 'green').addClass('valid');
        }
    });
}(jQuery)