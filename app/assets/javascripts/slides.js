csm.home = {};

csm.init.home = function(){
	csm.home.slides.setup();
	csm.home.form.setup();
};

csm.home.slides = {data:[],current:0};
csm.home.slides.setup = function(){
	csm.home.slides.data = $("#fma .slide");
	csm.home.slides.reveal(csm.home.slides.current);
};

csm.home.slides.next = function(){
	csm.home.slides.current = (csm.home.slides.current + 1) % csm.home.slides.data.length;
	csm.home.slides.reveal(csm.home.slides.current);
}

csm.home.slides.reveal = function(slidenum){
	var slide = $(csm.home.slides.data[slidenum]);
	var speed = 600;
	var delay = 300;


	slide.find("h5").animate({ top: 0 }, 600, 'easeOutSine');

	slide.find(".slice").each(function(i){
		var $this = $(this);
		setTimeout(function() {
			$this.animate({ bottom: 0 }, speed, 'easeInOutExpo');
		}, delay*i);
	});

	setTimeout(function() {
		csm.home.slides.dissolve(slidenum);
	}, 6000);
};

csm.home.slides.dissolve = function(slidenum){
	$(csm.home.slides.data[slidenum]).find(".slice").animate({ bottom: -380 }, 500, 'easeInExpo');
	$(csm.home.slides.data[slidenum]).find("h5").animate({ top: "100%" }, 500, 'easeInExpo',  function(){
		csm.home.slides.next();
	});
};

