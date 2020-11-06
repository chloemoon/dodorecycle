$(function() {
	const $attend = $('article > div > a.btn_attend');
	const $check = $('.popup > .attend_popup > .check > a ');
	const $complete = $('.popup > .attend_popup > .complete');
	const $question = $('.popup > .attend_popup > p > a ');
	const $guide = $('.popup > .attend_popup > .guide');


	// 로그인화면 
	setTimeout(function(){
		$('.login_bg').slideDown(1000);
	},8000);



	// home

	$('.charac_section>.point_charac>.square_sell>a').on('click', function(){
		$('.charac_select').show();
	});
	$('.charac_section>.point_charac>a').on('click', function(){
		$('.charac_select').show();
	});
	$('.charac_select>.charac_select_inner>.close > a').on('click', function(){
		$('.charac_select').hide();
	});

	// 캐릭터선택
	const $turtle = $('.charac_select>.charac_select_inner>.charac_wrp>.ani>a:nth-child(1)');
	const $bird = $('.charac_select>.charac_select_inner>.charac_wrp>.ani>a:nth-child(2)');

	$turtle.on('click', function(){
		$('.charac_select').hide();
		$('.charac_section>.point_charac>.square_sell').hide();
		$('.charac_section>.point_charac>a').hide();
		$('.charac_section>.point_charac>.point_charac_complete.turtle').show();
		$('.charac_section>.point_desc.on').show();
		$('.charac_section>.point_charac>.point_charac_complete.bird').hide();
	});
	$bird.on('click', function(){
		$('.charac_select').hide();
		$('.charac_section>.point_charac>.square_sell').hide();
		$('.charac_section>.point_charac>a').hide();
		$('.charac_section>.point_charac>.point_charac_complete.bird').show();
		$('.charac_section>.point_charac>.point_charac_complete.turtle').hide();
		$('.charac_section>.point_desc.on').show();
	});

	

	// 캐릭터변경
	$('.charac_section>.point_charac>.point_charac_complete.turtle').on('click', function(){
		$('.charac_select').show();
	});
	$('.charac_section>.point_charac>.point_charac_complete.bird').on('click', function(){
		$('.charac_select').show();
	});

	//home 키 눌렀을때 
	// $('.footer_nav > li:nth-child(3)').on('click', function(){
	// 	$('.charac_select').hide();
	// 	$('.charac_section>.point_charac>.square_sell').hide();
	// 	$('.charac_section>.point_charac>a').hide();
	// 	$('.charac_section>.point_charac>.point_charac_complete.turtle').show();
	// 	$('.charac_section>.point_desc.on').show();
	// 	$('.sec_search').hide();
	// 	$('.market').hide();
	// });

	// point섹션
	$attend.on('click', function() {
		$('.popup').show();
		$('.box').css({
			opacity: '0'
		});
	});
	$check.on('click', function() {
		$complete.show();
		$('.popup > .attend_popup').css({
			backgroundSize: 'contain',
			backgroundImage: 'url(./images/attendance2.png)'
		});
	});
	$complete.on('click', function() {
		$('.popup').hide();
		$('.box').css({
			opacity: '1'
		});
		$('.box > a').text('100 Points').css({
			width: '150',
			marginLeft: '-75px'
		});
		$('.point ').text('100/1000 Point');
	});
	$question.on('click', function() {
		$guide.show();
	});

	// 퀴즈

	$('.quiz').on('click', function() {
		$('.popup_quiz').show();
		$('.box').css({
			opacity: '0'
		});
	});

	$('.popup_quiz >.popup_quiz_inner > .close > a').on('click', function() {
		$('.popup_quiz').hide();
		$('.box').css({
			opacity: '1'
		});
	});

	const $answer = $('.popup_quiz>.popup_quiz_inner>div');
	const $point = $('.popup_quiz>.popup_quiz_inner>div.getPoint');
	const $quizImg = $('.popup_quiz>.popup_quiz_inner>img');
	$answer.on('click', function() {
		nowIdx = $answer.index(this);
		if (nowIdx > 0) {
			$answer
				.eq(nowIdx)
				.addClass('wrong')
				.siblings()
				.removeClass('wrong')
				.removeClass('rightAnswer');
			$quizImg.attr({
				src: './images/bananax.png'
			});
			$point.hide();
		} else {
			$answer.eq(nowIdx).addClass('rightAnswer').siblings().removeClass('wrong');
			$quizImg.attr({
				src: './images/bananao.png'
			});
			$point.show();
			$('.box').css({
				opacity: '0'
			});
		}

		$point.on('click', function() {
			$('.popup_quiz').hide();
			$('.box > a').text('200 Points').css({
				width: '150',
				marginLeft: '-75px'
			});
			$('.point ').text('200/1000 Point');
		});
	});

	// Gain Points

	$('.gain').on('click', function() {
		$('.gain_point').show();
		$('.box').css({
			opacity: '0'
		});
	});
	$('.gain_point > .gain_point_inner > .close').on('click', function() {
		$('.gain_point').hide();
		$('.box').css({
			opacity: '1'
		});
	});
	const $subject = $('.gain_point > .gain_point_inner > .subject');
	const $subject1 = $('.gain_point > .gain_point_inner > .subject:nth-of-type(1)');
	const $subject2 = $('.gain_point > .gain_point_inner > .subject:nth-of-type(2)');
	const $subject3 = $('.gain_point > .gain_point_inner > .subject:nth-of-type(3)');
	const $dropdown = $('.gain_point > .challenge > .dropdown > .dropdown_tit > li > a ');
	const $dropdown_list = $('.gain_point > .challenge > .dropdown > .dropdown_tit > ol');
	const $heart = $('.gain_point > .challenge > .calendarbox > .cbox-wrapper .heart > a');
	$dropdown.on('click', function() {
		$dropdown_list.slideToggle();
	});

	$subject1.on('click', function() {
		$subject.hide();
		$('.gain_point > .challenge ').show();
	});

	$heart.on('click', function() {
		nowIdx = $heart.index(this);
		$heart.eq(nowIdx).toggleClass('on');
	});

	// prev next
	// 배열
	let i = 1;
	let cboxIdx = [-303, -655, -1010, -1365];
	const $cbox = $('.gain_point > .challenge > .calendarbox > .cbox-wrapper > .cbox-inner');
	const $prev = $('.gain_point .prev > a');
	const $next = $('.gain_point .next > a');
	const $monthChal = $('.gain_point > .challenge > .chal_sub > p');
	const $challenge = $('.gain_point .challenge_wrt');
	const $done = $('.wrt_newpost>.wrt_inner>.wrt_done');
	const moveFn = function() {
		$cbox.stop().animate(
			{
				left: cboxIdx[i]
			},
			300
		);
	};
	$prev.on('click', function() {
		if (i > 0) {
			i--;
		}
		moveFn();
		$monthChal.eq(i).addClass('on').fadeIn(400).siblings().removeClass('on');
	});
	$next.on('click', function() {
		if (i < 4) {
			i++;
		}
		moveFn();
		$monthChal.eq(i).addClass('on').fadeIn(400).siblings().removeClass('on');
	});

	$challenge.on('click', function() {
		$('.wrt_newpost').show();
	});
	$('.wrt_newpost > .wrt_inner > .wrt_clse > a').on('click', function(){
		$('.wrt_newpost').hide();
	});
	$done.on('click', function() {
		$('.wrt_newpost').hide();
		$('.gain_point .challenge_wrt').hide();
		$('.gain_point .challenge_wrt.done').css({
			display: 'block'
		});
	});
	$('.gain_point .challenge_wrt.done').on('click', function() {
		$('.gain_point > .challenge').hide();
		$subject.show();
		$('.wrt_newpost').hide();
	});

	//tumbler

	$subject2.on('click', function() {
		$subject.hide();
		$('.gain_point > .tumbler ').show();
	});

	// prev next
	// 배열
	let k = 1;
	let tboxIdx = [-300, -655, -1010, -1365];
	const $tbox = $('.gain_point > .tumbler .calendarbox > .cbox-wrapper > .cbox-inner');
	const $t_prev = $('.gain_point .tbl_prev > a ');
	const $t_next = $('.gain_point .tbl_next > a');
	const tmoveFn = function() {
		$tbox.stop().animate(
			{
				left: tboxIdx[k]
			},
			300
		);
	};
	$t_prev.on('click', function() {
		if (k > 0) {
			k--;
		}
		tmoveFn();
	});
	$t_next.on('click', function() {
		if (k < 4) {
			k++;
		}
		tmoveFn();
	});
	const $t_dropdown = $('.gain_point > .tumbler .tlr_dropdown > .tlr_dropdown_tit > li > a ');
	const $t_dropdown_list = $('.gain_point > .tumbler .tlr_dropdown > .tlr_dropdown_tit > ol');
	$t_dropdown.on('click', function() {
		$t_dropdown_list.slideToggle();
	});
	let s = 6;
	$('.gain_point .getstamp > a').on('click', function() {
		if (s < 9) {
			s++;
			$('.gain_point .photobox10 > a:nth-of-type(' + s + ')').append(
				'<img src="./images/stamp10.png" alt="#">'
			);
		} else if ((s = 9)) {
			$('.gain_point .getstamp').hide();
			$('.gain_point .getstamp.complete').css({
				display: 'block'
			});
		}
		$('.gain_point .getstamp.complete > a').on('click', function() {
			$('.gain_point > .tumbler').hide();
			$subject.show();
		});
	});

	// share with your friends
	const $s_dropdown = $('.gain_point > .share .shr_dropdown > .shr_dropdown_tit > li > a');
	const $s_dropdown_list = $('.gain_point > .share .shr_dropdown > .shr_dropdown_tit > ol ');
	const $share_btn = $('.gain_point > .share .shr_btn > a ');
	const $select = $('.gain_point > .share .shr_search_inner > .shr_div > a');
	const $checkbtn = $('.gain_point > .share .shr_search_inner > .shr_div > a > span');

	$subject3.on('click', function() {
		$subject.hide();
		$('.gain_point > .share ').show();
	});
	$s_dropdown.on('click', function() {
		$s_dropdown_list.slideToggle();
	});

	$share_btn.on('click', function() {
		$('.gain_point > .share').hide();
		$subject.show();
	});

	$select.on('click', function() {
		nowIdx = $select.index(this);
		$checkbtn.eq(nowIdx).toggleClass('checked');
	});

	// redeem points
	$('.redeem').on('click', function() {
		$('.redeem_pop').show();
		$('.box').css({
			opacity: '0'
		});
	});
	$('.redeem_pop > .redeem_pop_inner > .rd_clse > a').on('click', function() {
		$('.redeem_pop').hide();
		$('.box').css({
			opacity: '1'
		});
	});

	//footer-My point
	$('.footer_nav > li:nth-child(2)').on('click', function() {
		$('section').animate({ scrollTop: 0 });
		$('.redeem_pop').hide();
		$('.gain_point').hide();
		$('.popup_quiz').hide();
		$('.popup').hide();
		$('.box').css({
			opacity: '1'
		});
		$('.sec_search').hide();
	});


	// footer-search
	$('.footer_nav > li:nth-child(1)').on('click', function(){
		$('.box').css({
			opacity: '1'
		});
		$('.market').hide();
		$('.popup').hide();
		$('.popup_quiz').hide();
		$('.gain_point').hide();
		$('.redeem_pop').hide();
		$('.sec_search').slideToggle().animate({scrollTop: 0},100);
	});

	$('.sec_search>.sec_search_inner>.para>.src_box>a').jrumble({
        
		x: 0,
	
		y: 0,
	
		rotation: 5
	
	});
	$('.sec_search>.sec_search_inner>.para>.src_box>a').on({
		mouseover:function(){
			$(this).trigger('startRumble');
		},
		mouseout:function(){
			$(this).trigger('stopRumble');
		}

	});

	// footer-sharing
	$('.footer_nav > li:nth-child(4)').on('click', function(){
		$('.box').css({
			opacity: '1'
		});
		$('.sec_search').hide();
		$('.popup').hide();
		$('.popup_quiz').hide();
		$('.gain_point').hide();
		$('.redeem_pop').hide();
		$('.market').slideToggle().animate({scrollTop: 0},100);
	});
});
