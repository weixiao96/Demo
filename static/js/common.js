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
export default{
	ImgFun,
	data:{
		FilesImg:''
	}
}
