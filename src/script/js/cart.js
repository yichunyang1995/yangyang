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