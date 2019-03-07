window.onload = function () {

	var arrowEl = document.querySelector("#head .headMain > .arrow");

	var liNodes = document.querySelectorAll("#head .headMain > .nav > .list > li");

	var upNodes = document.querySelectorAll("#head .headMain > .nav > .list > li .up");

	var firstLiNode = liNodes[0];

	var firstUpNode = firstLiNode.querySelector(".up");

	var head = document.querySelector("#head");
	var content = document.querySelector("#content");
	//获取内容区所有的li元素
	var cLiNodes = document.querySelectorAll("#content >.list > li");
	var cList = document.querySelector("#content .list");

	var home2LiNodes = document.querySelectorAll("#content >.list > .home .home2 > li");
	var home1LiNodes = document.querySelectorAll("#content >.list > .home .home1 > li");
	var home1 = document.querySelector("#content >.list > .home .home1 ");

	var aboutUls = document.querySelectorAll("#content >.list > .about .about3 >.item > ul");

	//获取左边小圆点的li标签
	// var dotLis = document.querySelectorAll("#content > .dot > li");

	// var team3 = document.querySelector("#content>.list>.team .team3");
	// var team3Ul = document.querySelector("#content >.list > .team .team3 ul");
	// var team3Lis = document.querySelectorAll("#content >.list > .team .team3 ul > li");

	//同步当前屏的索引  
	var now = 0;
	var timer = 0;

	//上一屏
	var preIndex = 0;



	var mask = document.querySelector("#mask");
	var line = document.querySelector("#mask .line");
	var mians = document.querySelectorAll("#mask div");

	//开机动画
	loadingAn();
	function loadingAn() {
		var arr = ['bg1.jpg', 'bg2.jpg', 'bg3.png', 'bg4.png', 'bg5.png', 'about1.png', 'about2.png', 'about3.png', 'about4.png','greenLine.png'];
		var flag = 0;
		for (var i = 0; i < arr.length; i++) {
			var img = new Image();
			img.src = "img/" + arr[i];
			img.onload = function () {
				flag++;
				line.style.width = flag / arr.length * 100 + "%";

			}
		}
		line.addEventListener("transitionend", function () {
			if (flag === arr.length) {
				for (var i = 0; i < mians.length; i++) {
					mians[i].style.height = 0 + "px";
				}
				this.style.display = "none";
			}
		})

		mians[0].addEventListener("transitionend", function () {
			mask.remove();
			// audio.play();
			home3D();
		})
	}

	//音频
	// music.onclick = function () {
	// 	if (audio.paused) {
	// 		audio.play();
	// 		music.style.background = "url(img/musicon.gif)";
	// 	} else {
	// 		audio.pause(); music.style.background = "url(img/musicoff.gif)";
	// 	}
	// }

	//出入场  开始
	var anArr = [
		{
			inAn: function () {
				var home1 = document.querySelector("#content >.list > .home .home1");
				var home2 = document.querySelector("#content >.list > .home .home2");

				home1.style.transform = "translateY(0px)";
				home2.style.transform = "translateY(0px)";

				home1.style.opacity = 1;
				home2.style.opacity = 1;
			},
			outAn: function () {
				var home1 = document.querySelector("#content >.list > .home .home1");
				var home2 = document.querySelector("#content >.list > .home .home2");

				home1.style.transform = "translateY(-400px)";
				home2.style.transform = "translateY(100px)";

				home1.style.opacity = 0;
				home2.style.opacity = 0;
			}
		},
		{
			inAn: function () {
				var plane1 = document.querySelector("#content .course .plane1");
				var plane2 = document.querySelector("#content .course .plane2");
				var plane3 = document.querySelector("#content .course .plane3");
				var coursebox = document.querySelector(".coursebox");

				plane1.style.transform = "translate(0px,0px)";
				plane2.style.transform = "translate(0px,0px)";
				plane3.style.transform = "translate(0px,0px)";
				coursebox.style.transform = "translateX(0px)";
			},
			outAn: function () {
				var plane1 = document.querySelector("#content .course .plane1");
				var plane2 = document.querySelector("#content .course .plane2");
				var plane3 = document.querySelector("#content .course .plane3");
				var coursebox = document.querySelector(".coursebox");

				plane1.style.transform = "translate(-200px,-200px)";
				plane2.style.transform = "translate(-200px,200px)";
				plane3.style.transform = "translate(200px,-200px)";
				coursebox.style.transform = "translateX(200px)";
			}
		},
		{
			inAn: function () {
				var pencel1 = document.querySelector("#content .works .pencel1");
				var pencel2 = document.querySelector("#content .works .pencel2");
				var pencel3 = document.querySelector("#content .works .pencel3");
				var smallwork = document.querySelector(".smallwork");

				pencel1.style.transform = "translateY(0px)";
				pencel2.style.transform = "translateY(0px)";
				pencel3.style.transform = "translateY(0px)";
				smallwork.style.transform = "translateY(0px)";
			},
			outAn: function () {
				var pencel1 = document.querySelector("#content .works .pencel1");
				var pencel2 = document.querySelector("#content .works .pencel2");
				var pencel3 = document.querySelector("#content .works .pencel3");
				var smallwork = document.querySelector(".smallwork");

				pencel1.style.transform = "translateY(-200px)";
				pencel2.style.transform = "translateY(200px)";
				pencel3.style.transform = "translateY(200px)";
				smallwork.style.transform = "translateY(-200px)";
			}
		},
		{
			inAn: function () {
				var Rect1 = document.querySelector("#content >.list > .about .about3 >.item:nth-child(1)");
				var Rect2 = document.querySelector("#content >.list > .about .about3 >.item:nth-child(2)");

				Rect1.style.transform = "rotate(0deg)";
				Rect2.style.transform = "rotate(0deg)";
			},
			outAn: function () {
				var Rect1 = document.querySelector("#content >.list > .about .about3 >.item:nth-child(1)");
				var Rect2 = document.querySelector("#content >.list > .about .about3 >.item:nth-child(2)");

				Rect1.style.transform = "rotate(35deg)";
				Rect2.style.transform = "rotate(-35deg)";
			}
		},
		{
			inAn: function () {
				var Rect1 = document.querySelector("#content >.list > .team .team1");
				var Rect2 = document.querySelector("#content >.list > .team .team2");

				Rect1.style.transform = "translateX(0px)";
				Rect2.style.transform = "translateX(0px)";
			},
			outAn: function () {
				var Rect1 = document.querySelector("#content >.list > .team .team1");
				var Rect2 = document.querySelector("#content >.list > .team .team2");

				Rect1.style.transform = "translateX(-200px)";
				Rect2.style.transform = "translateX(200px)";
			}
		}
	]
	for (var i = 0; i < anArr.length; i++) {
		anArr[i]["outAn"]();
	}
	setTimeout(function () {
		anArr[0].inAn();
	}, 2000)



	//出入场  结束

	//第五屏气泡效果  开始


	//第五屏气泡效果  结束

	//第四屏图片的炸裂效果  开始
	picBoom();
	function picBoom() {
		for (var i = 0; i < aboutUls.length; i++) {
			change(aboutUls[i]);
		}
		function change(UL) {
			var src = UL.dataset.src;
			var w = UL.offsetWidth / 2;//li标签的宽度是ul标签的宽度的二分之一
			var h = UL.offsetHeight / 2;//li标签的高度是ul标签的高度的二分之一
			for (var i = 0; i < 4; i++) {
				//在HTMI创建li标签和img标签
				var liNode = document.createElement("li");
				liNode.style.width = w + "px";
				liNode.style.height = h + "px";
				var imgNode = document.createElement("img");

				/*about1.jpg与about3.jpg的位置偏移量   以第一个li的位置为主     把li标签分成四块
				1.left:0             top:0                            第一个li(从左往右)
				2.left:-w(向左偏移)   top:0                            第二个li 
				3.left:0             top:-h(向上偏移)    第三个li
				4.left:-w(向左偏移)   top:-h(向上偏移)    第四个li
				*/
				imgNode.style.left = -(i % 2) * w + "px";
				imgNode.style.top = -Math.floor(i / 2) * h + "px";

				imgNode.src = src;
				//调用上述创建的标签
				liNode.appendChild(imgNode);
				UL.appendChild(liNode);
			}

			UL.onmouseenter = function () {
				/*原来的
				1.left:0             top:0                            
				2.left:-w(向左偏移)   top:0                            
				3.left:0             top:-h(向上偏移)    
				4.left:-w(向左偏移)   top:-h(向上偏移)    
				 */

				/*
				 1.left:0             top:h
				 2.left:-2w           top:0
				 3.left:w             top:-h
				 4.left:-w            top:-2h
				 
				 var arrLeft = [0,-2,1,-1]
				 var arrTop = [1,0,-1,-2]
				 */
				var imgNodes = this.querySelectorAll("li > img");
				imgNodes[0].style.top = h + "px";
				imgNodes[1].style.left = -2 * w + "px";
				imgNodes[2].style.left = w + "px";
				imgNodes[3].style.top = -2 * h + "px";
			}

			UL.onmouseleave = function () {
				var imgNodes = this.querySelectorAll("li > img");
				imgNodes[0].style.top = 0 + "px";
				imgNodes[1].style.left = -w + "px";
				imgNodes[2].style.left = 0 + "px";
				imgNodes[3].style.top = -h + "px";
			}
		}
	}
	//第四屏图片的炸裂效果  结束


	//第一屏3D效果   开始
	var oldIndex = 0;
	var timer3D = 0;
	var autoIndex = 0;
	//home3D();
	function home3D() {
		for (var i = 0; i < home2LiNodes.length; i++) {//手动轮播
			home2LiNodes[i].index = i;
			home2LiNodes[i].onclick = function () {
				clearInterval(timer3D);
				for (var i = 0; i < home2LiNodes.length; i++) {//小圆点的动作
					home2LiNodes[i].classList.remove("active");
				}
				this.classList.add("active");

				//从左往右   当前索引>上一次索引     最终为了显示rightShow
				if (this.index > oldIndex) {

					home1LiNodes[this.index].classList.remove("rightHide");
					home1LiNodes[this.index].classList.remove("leftHide");
					home1LiNodes[this.index].classList.remove("leftShow");
					home1LiNodes[this.index].classList.add("rightShow");

					home1LiNodes[oldIndex].classList.remove("rightHide");
					home1LiNodes[oldIndex].classList.remove("rightShow");
					home1LiNodes[oldIndex].classList.remove("leftShow");
					home1LiNodes[oldIndex].classList.add("leftHide");
				}
				//从右往左   当前索引<上一次索引    最终为了显示leftShow
				if (this.index < oldIndex) {
					home1LiNodes[this.index].classList.remove("rightHide");
					home1LiNodes[this.index].classList.remove("leftHide");
					home1LiNodes[this.index].classList.remove("rightShow");
					home1LiNodes[this.index].classList.add("leftShow");


					home1LiNodes[oldIndex].classList.remove("leftHide");
					home1LiNodes[oldIndex].classList.remove("rightShow");
					home1LiNodes[oldIndex].classList.remove("leftShow");
					home1LiNodes[oldIndex].classList.add("rightHide");
				}

				oldIndex = this.index;
				autoIndex = this.index;
				//重新开启自动轮播
				/*move();*/
			}
		}

		//从左向右自动轮播
		move();
		function move() {
			clearInterval(timer3D);
			//定时器的调用(同步)  定时器回调函数的执行(异步)
			timer3D = setInterval(function () {//循环定时器

				autoIndex++;

				//无缝
				if (autoIndex == home1LiNodes.length) {
					autoIndex = 0;
				}

				for (var i = 0; i < home2LiNodes.length; i++) {
					home2LiNodes[i].classList.remove("active");
				}
				home2LiNodes[autoIndex].classList.add("active");

				home1LiNodes[autoIndex].classList.remove("rightHide");
				home1LiNodes[autoIndex].classList.remove("leftHide");
				home1LiNodes[autoIndex].classList.remove("leftShow");
				home1LiNodes[autoIndex].classList.add("rightShow");


				home1LiNodes[oldIndex].classList.remove("rightHide");
				home1LiNodes[oldIndex].classList.remove("rightShow");
				home1LiNodes[oldIndex].classList.remove("leftShow");
				home1LiNodes[oldIndex].classList.add("leftHide");

				//自动轮播与手动轮播的同步!!!
				oldIndex = autoIndex;
			}, 2000);
		}

		home1.onmouseenter = function () {
			//debugger
			clearInterval(timer3D);
		}
		home1.onmouseleave = function () {
			move();
		}
	}
	//第一屏3D效果   结束


	//内容区交互   开始
	window.onresize = function () {
		/*
		 调整分辨率
			1.没有点击的时候视口只能出现一屏  contentBind();
			2.点击后视口只能出现一屏  在1的基础上对每一屏的偏移量进行重新调整
			3.小箭头的位置也需要头部
		*/
		contentBind();
		cList.style.top = -now * (document.documentElement.clientHeight - head.offsetHeight) + "px";
		arrowEl.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
	}

	//鼠标滚轮
	if (content.addEventListener) {
		content.addEventListener("DOMMouseScroll", function (ev) {
			ev = ev || event;

			//让fn的逻辑在DOMMouseScroll事件被频繁触发的时候只执行一次
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn(ev)
			}, 200)

		});
	}

	content.onmousewheel = function (ev) {
		ev = ev || event;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn(ev)
		}, 200)
	};

	function fn(ev) {
		ev = ev || event;

		var dir = "";
		if (ev.wheelDelta) {
			dir = ev.wheelDelta > 0 ? "up" : "down";
		} else if (ev.detail) {
			dir = ev.detail < 0 ? "up" : "down";
		}

		preIndex = now;
		switch (dir) {
			case "up":
				if (now > 0) {
					now--;
					move(now);
				}
				break;
			case "down":
				if (now < cLiNodes.length - 1) {
					now++;
					move(now);
				}
				break;
		}
	}
		$(".smallwork li").mouseenter(function(){
			$(this).children(".top").css("width","100%");
			$(this).children(".left").css("height","100%");
			$(this).children(".bottom").css("width","100%");
			$(this).children(".right").css("height","100%");
		}).mouseleave(function(){
			$(this).children(".top").css("width",0);
			$(this).children(".left").css("height",0);
			$(this).children(".bottom").css("width",0);
			$(this).children(".right").css("height",0);
		})

	contentBind();
	function contentBind() {//调整尺寸
		//content内容区的高度=wrap的高度-head的高度
		content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
		for (var i = 0; i < cLiNodes.length; i++) {
			cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
		}
	}
	//内容区交互   结束


	//头部交互   开始
	headBind();//调用头部函数
	function headBind() {//头部函数
		//设置命名为up的div的动画
		firstUpNode.style.width = "100%";
		//调整三角形的位置     使三角形的中心点与第一个li元素的中心点的位置对齐  默认位置
		//firstLiNode.offsetWidth这是第一个li元素的整体位置，除以2就是中心点的位置
		//arrowEl.offsetWidth是<div class="arrow"></div>的位置，除以2是三角形的中心点的位置
		arrowEl.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
		//给所有的li元素循环绑定事件
		for (var i = 0; i < liNodes.length; i++) {
			//转绑很重要
			liNodes[i].index = i;//index索引
			liNodes[i].onclick = function () {//liNodes绑定事件
				preIndex = now;
				move(this.index);//this是liNodes[i]
				now = this.index;
			}
		}
		// for (var i = 0; i < dotLis.length; i++) {
		// 	//转绑很重要
		// 	dotLis[i].index = i;
		// 	dotLis[i].onclick = function () {
		// 		preIndex = now;
		// 		move(this.index);
		// 		now = this.index;
		// 	}
		// }
	}
	//头部交互   结束


	//动画的核心函数
	//move(4);
	function move(index) {
		for (var i = 0; i < upNodes.length; i++) {
			//upNodes[i].style.width="0";
			upNodes[i].style.width = "";
		}
		upNodes[index].style.width = "100%";
		arrowEl.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrowEl.offsetWidth / 2 + "px";
		//内容区切屏的位置，与三角形一起偏移位置
		cList.style.top = -index * (document.documentElement.clientHeight - head.offsetHeight) + "px";

		// for (var i = 0; i < dotLis.length; i++) {
		// 	dotLis[i].className = "";
		// }
		// dotLis[index].className = "active";

		//出入场
		if (anArr[index] && typeof anArr[index]["inAn"] === "function") {
			anArr[index]["inAn"]();
		}
		if (anArr[preIndex] && typeof anArr[index]["inAn"] === "function") {
			anArr[preIndex]["outAn"]();
		}
	}


	var bimg = document.querySelector(".box-img");
	var box = document.querySelector(".box");
	var bcon = document.querySelector(".box-content");
	box.addEventListener("mouseover",function(){
		bimg.style.transform="rotateY(90deg)";
		bcon.style.opacity="0.8";
		bcon.style.transform="rotateY(0deg)";
	})
	box.addEventListener("mouseout",function(){
		bimg.style.transform="rotateY(0deg)";
		bcon.style.opacity="0";
		bcon.style.transform="rotateY(90deg)";
	})
}