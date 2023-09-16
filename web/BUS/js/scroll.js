	class StickyNavigation {

		constructor() {
			this.currentId = null;
			this.currentTab = null;
			this.navigationHeight = 90;
			let self = this;
			$('.gobtn').click(function() { 
				self.onTabClick(event, $(this)); 
			});
			$(window).scroll(() => { this.onScroll(); });
			$(window).resize(() => { this.onResize(); });
		}

		onTabClick(event, element) {
			event.preventDefault();
			let scrollTop = $(element.attr('href')).offset().top - this.navigationHeight + 1;
			$('html, body').animate({ scrollTop: scrollTop }, 600);
		}

		onScroll() {
			this.checkNavigationPosition();
			this.findCurrentTabSelector();
		}

		onResize() {
			if(this.currentId) {
				this.setSliderCss();
			}
		}

		checkNavigationPosition() {
			let offset = $('#Intro').offset().top + $('#Intro').height() - this.navigationHeight;
			if($(window).scrollTop() > offset) {
				$('#navigation').addClass('fix');
			} 
			else {
				$('#navigation').removeClass('fix');
			}
		}

		findCurrentTabSelector(element) {
			let newCurrentId;
			let newCurrentTab;
			let self = this;
			$('.gobtn').each(function() {
				let id = $(this).attr('href');
				let offsetTop = $(id).offset().top - self.navigationHeight;
				let offsetBottom = $(id).offset().top + $(id).height() - self.navigationHeight;
				if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
					newCurrentId = id;
					newCurrentTab = $(this);
				}
			});
			if(this.currentId != newCurrentId || this.currentId === null) {
				this.currentId = newCurrentId;
				this.currentTab = newCurrentTab;
				this.setSliderCss();
			}
		}

		setSliderCss() {
			let width = 0;
			let left = 0;
			if(this.currentTab) {
				width = this.currentTab.css('width');
				left = this.currentTab.offset().left;
			}
			$('.nav-slider').css('width', width);
			$('.nav-slider').css('left', left);
			$('#navigation ul li a').removeClass('active');
			$(this.currentTab).addClass('active');
		}

	}

	new StickyNavigation();  