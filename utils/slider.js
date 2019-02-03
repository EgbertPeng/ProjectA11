var debug = getApp.debug || true;
var SliderData = {
  datas:[],//数据包
  blankWidth:12,//空白处宽度
  newImgWidth:18,//
  totalWidth:0,//总宽度
  x:0,//当前滚动x
  firstX:0,//初始化首次位置
  curPage:1,//当前页面
  indicateDots:[]//小数点
};
var that = null;
var direction = 'left';//滚动方向
var autoRun = true;
var duration = 200;
var interval = 2000;
var startSlideCallback = null;
var endSlideCallback = null;
var autoRunTimer ;
var slideTimer;
var lastX;
var firstX;
var firstPointX = 0;//手指触摸屏幕时的x坐标
var sliderLock = 0;//滚动锁，不能多次滚动

function initMySlider(opt){
  if(opt.that==null){
    console.log('请输入正确的this');
    return;
  }

//初始化用户传参
that = opt.that;
SliderData.datas = opt.datas || SliderData.datas;
SliderData.blankWidth = opt.blankWidth==undefined?SliderData.blankWidth:opt.newImgWidth;
SliderData.newImgWidth = opt.newImgWidth == undefined?
SliderData.newImgWidth:opt.newImgWidth;
autoRun = opt.autoRun;
interval = opt.interva || interval;
duration = opt.duration || duration;
direction =opt.direction || direction;
startSliderCallback = opt.startSlide || startSlideCallback;
endSlideCallback = opt.endSlide || endSlideCallback;
//初始化用户传参

var len = SliderData.datas.length;
if(len < 1){
  return;
}
for(var i=0;i<len;i++){
  SliderData.indicateDots.push(i+1);
}
var firstImg = SliderData.datas[0];
var lastImg = SliderData.datas[len-1];
SliderData.datas.unshift(lastImg);//将最后一张图片重复放到前边
SliderData.datas.push(firstImg);//将第一张图片放到后排,做无缝连接

//开始计算参数
var w = wx.getSystemInfoSync().screenWidth;//屏幕宽度
var kx = SliderData.blankWidth;//白色控制宽度,默认12px
var nx = SliderData.newImgWidth;//新图片突出来，默认18px
var ox = kx + nx * 2;//每页无效的宽度，包含一个空白和两个新突出图片
var pageWidth = w - ox;//每页的大小，屏幕宽度-无效宽度
var fx = pageWidth - nx;//首次打开时的默认位置
SliderData.totalWidth = SliderData.datas.length * pageWidth
SliderData.firstX = -fx;
SliderData.x = -fx;

that.setData({
  SliderData:SliderData
});
dealEvent(that);
//
//

startSlideCallback && startSlideCallback(1);
endSlideCallback && endSlideCallback(1);
}

function dealEvent(){
  that.sliderTouchStart = function (opt){
    sliderTimer && clearInterval(sliderTimer);
    sliderLock = 0;
    autoRunTimer && clearInterval(autoRunTimer);
    lastX = SliderData.x;
    firstPointX = opt.touches[0].clientX;
  };
  that.sliderTouchMove =function(opt){
    var pointx = opt.touches[0].clientX;
    SliderData.x = lastX + (pointx - firstPointX);
    that.setData({
      SliderData:SliderData
    });
  };
  that.sliderTouchEnd = function(opt){
    slidePage(that,0);
    if(autoRun){
      autoRunMyslider(that,interval);
    }
  };
  that.sliderTouchCancel = that.sliderTouchEnd;
  that.onHide = function(){
   autoRunTimer && clearInterval(autoRunTimer);
  };
  that.onShow = function(){
    if(autoRun){
      autoRunMyslider(that,interval);
    }
  }
}

//自动开始滚动
function autoRunMyslider(that ,t){
  autoRunTimer && clearInterval(autoRunTimer);
  autoRunTimer = setInterval(function(){
    var dir = direction=='right'?1:-1;
    slidePage(that,dir);
  },t);
}
//一次性滚动一屏，并且有方向
function slidePage(that ,page){
  var lastX = SliderData.x - SliderData.newImgWidth;
  var totalWidth = SliderData.totalWidth;
  var perScreenX = totalWidth/SliderData.datas.length;
  var remain = (perScreenX - Math.abs(lastx%perScreenX))%perScreenX;
  if(remain>0){
    //看离那边近就跑那边
    if(remain<perScreenX/2){
      slideTo(that,-remain);
    }else{
      slideTo(that,perScreenX-remain);
    }
  }else{
    slideTo(that,perScreenX * page);
  }
}
function slideTo(that,x){
  //锁，如果正在滚动，那么不允许操作
  if(sliderLock == 1) return;
  sliderLock = 1;
  var i =0;
  var timeStep =20;//x毫秒刷新一次
  var lastx = SliderData.x;
  var perScreenX = SliderData.totalWidth/SliderData.datas.length;
  var step = Math.floor(perScreenX/(duration/timeStep));
  var totalWidth = SliderData.totalWidth;

  sliderTimer = setInterval(function(){
    var curPage = 0;
    if(i==0){
      curPage = Math.abs(Math,round((lastx + x -18)/perScreenX),0);
      curPage = curPage == SliderData.datas.length-1?1:curPage;
      curPage = curPage == 0?SliderData.datas.length -2 :curPage;
      startSlideCallback && startSlideCallback(curPage);
    }
    if(i >= Math.abs(x)){
      slideTimer && clearInterval(slideTimer);
      //想做滚动到了边际，处理无缝滚动
      if(lastx + x>= SliderData.newImgWidth){
        SliderData.x = SliderData.newImgWidth - (totalWidth
        
        )
      }
    }
  })
}