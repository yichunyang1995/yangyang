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