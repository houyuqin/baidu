$(function(){
    var $form       = $('form'),
        $user       = $('#user'),
        $phone      = $('#phone'),
        $pwd        = $('#pwd'),
        $code      = $('#code'),
        $getcode    = $('#getcode'),
        $register   = $('#register'),
        $userInfo  = $('#user-info'),
        $phoneInfo = $('#phone-info'),
        $pwdInfo   = $('#pwd-info'),
        $codeInfo  = $('#code-info'),
        $select     = $('#select'),
        num         = 6,
        timer;

  $user.focusout(function(){
      userValidate();
  })

  $phone.focusout(function(){
     phoneValidate();
  })

  $pwd.focusout(function(){
     pwdValidate();
  })

  $code.focusout(function(){
     codeValidate();
  })

   function userValidate(){
     // 用户名仅支持3到16位中英文、数字和下划线
    var reg = /\w{3,16}/;
    if(!reg.test($user.val()) && $user.val() != ''){
      $userInfo.html('用户名不符合格式');
      return false;
    }
    if($user.val() === ''){
      $userInfo.html('用户名不能为空');
      return false;
    }
    $userInfo.html('');
    return true;
  }

  function phoneValidate(){
    var reg = /[1]([3-9])[0-9]{9}/;
    if(!reg.test($phone.val()) && $phone.val() != ''){
      $phoneInfo.html('手机号不符合格式');
      return false;
    }
    if($phone.val() === ''){
      $phoneInfo.html('手机号不能为空');
      return false;
    }
    $phoneInfo.html('');
    return true;
  }

  function pwdValidate(){
    //密码至少包含 数字和英文，长度6-20
    var reg = /(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}/;
    if(!reg.test($pwd.val()) && $pwd.val() != ''){
      $pwdInfo.html('密码不符合格式');
      return false;
    }
    if($pwd.val() === ''){
      $pwdInfo.html('密码不能为空');
      return false;
    }
    $pwdInfo.html('');
    return true;
  }

  function codeValidate(){
    //4位数字
    var reg = /\d{4}/;
    if(!reg.test($code.val()) && $code.val() != ''){
      $codeInfo.html('验证码不符合格式');
      return false;
    }
    if($code.val() === ''){
      $codeInfo.html('验证码不能为空');
      return false;
    }
    $codeInfo.html('');
    return true;
  }

//获取验证码延时6s按钮
  $getcode.click(function(){
    timer = setInterval(function(){
      num--;
      if(num === 0){
        clearInterval(timer);
        num = 6; 
        $getcode.val('获取验证码');
        $codeInfo.html('请求超时，稍后重试');
      }else{
        $getcode.val('获取验证码(' + num + 's)');
      }
    },1000);
  })
    
  //判断是否勾选协议
  $select.click(function(){
    $select.val(1);
    console.log($select.val());
  })  
  $register.click(function(){
    if(!userValidate() || !phoneValidate() || !pwdValidate() || !codeValidate() || $select.val()==0){
       alert('您所填内容不满足注册条件，或未勾选同意协议内容！');
    }else{
    alert('注册成功！')
    }
  })


  })
