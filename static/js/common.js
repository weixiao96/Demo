// 上传图片
const ImgFun = (e) => {
	var file = e.target.files[0]
	// 获取图片的大小，做大小限制有用
	let imgSize = file.size
	// 比如上传头像限制5M大小，这里获取的大小单位是b
	if (imgSize <= 50 * 1024) {
		// 合格
		// 开始渲染选择的图片
		// 本地路径方法 1
		this.a.data.FilesImg= e.target.files[0]
		console.log("大小合适",this.a.data.FilesImg);
		// base64方法 2
		// var reader = new FileReader()
		 // 读出 base64
		// reader.readAsDataURL(file)
		// reader.onloadend = function () {
			// 图片的 base64 格式, 可以直接当成 img 的 src 属性值
			// var dataURL = reader.result
			// console.log(dataURL)
			// _this.imgStr = dataURL
			// 下面逻辑处理
		// }
	} else {
	return "false"
	}
}
// 获取当前时间
const getNowFormatDate = ()=> {
  var date = new Date();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var Hours = date.getHours()
      var Minute = date.getMinutes()
      var Seconds = date.getSeconds()

      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      if (Hours >= 0 && Hours <= 9) {
          Hours = "0" + Hours;
      }
      if (Minute >= 0 && Minute <= 9) {
          Minute = "0" + Minute;
      }
      if (Seconds >= 0 && Seconds <= 9) {
          Seconds = "0" + Seconds;
      }

      var currentDate = date.getFullYear() + "-" + month + "-" + strDate
              + " " + Hours + ":" + Minute + ":" + Seconds;
      return currentDate;
}
// 格式化时间
const formatDate = ()=> {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
}
// 
export default{
	ImgFun,
  getNowFormatDate,
  formatDate,
	data:{
		FilesImg:'',
    fullHeight:  document.documentElement.clientHeight,
    fullWidth: document.documentElement.clientWidth
	}
}
