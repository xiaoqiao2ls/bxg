    //
	// NProgress.start();
    //
	// NProgress.done();
    //
	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
	
	if(!$.cookie('PHPSESSID') && location.pathname != '/login'){
		location.href = 'login';
	}


/*	//调用模板引擎模板
	var htmlStr = template('tq_aside_avatar',JSON.parse($.cookie('tcInfo')));
	$('.aside > .profile').html(htmlStr);*/
	//因为登录界面不需要模板引擎，所有将登录界面排除掉
	if(location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login'){
		//调用模板引擎模板
		var htmlStr = template('tq_aside_avatar',JSON.parse($.cookie('tcInfo')));
		$('.aside > .profile').html(htmlStr);
	}