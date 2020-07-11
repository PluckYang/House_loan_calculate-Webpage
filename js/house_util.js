/*
表示进行数据是否为空的验证
eleId表示要操作的组件的Id名称
*/
function validateEmpty(eleId) {
	var obj = ele(eleId) ; //取得指定的对象
	if (obj != null) { //现在对象已经取得
		if (obj.value == "") { //现在数据为空
			setFailure(obj) ;
			return false ;
		} else {
			setSuccess(obj) ;
			return true ;
		}
	}
	return false ;
}
/*
使用正则进行数据验证操作
eleId 组件元素的Id
regex 正则验证规则
*/
function validateRegex(eleId,regex) { //正则判断内容
	if  (validateEmpty(eleId)) {
		if (!regex.test(ele(eleId).value)) {
			setFailure(ele(eleId)) ;
			return false ;
		} else {
			setSuccess(ele(eleId)) ;
			return true ;
		}
	}
	return false ;
}
/*
验证输入的内容是否是数字,是包含小数的
*/
function validateNumber(eleId) {
	return validateRegex(eleId,/^\d+(\.\d+)?$/) ;
}
/*
根据Id取得一个具体的对象，简化调用的难度
*/
function ele(eleId) {
	return document.getElementById(eleId) ;
}
/*
设置错误显示时的信息
obj 要进行错误样式设计的元素
className 样式信息
text 显示的文本信息
*/
function setValidateStyle(obj,className,text) {
	var objSpan = ele(obj.id + "Span") ; //根据对象的id属性找到Span
		obj.className = className ;
	if (objSpan != null) { //用户已经定义过了此元素
		objSpan.innerHTML = text ;
	}
}
function setSuccess(obj) {
	setValidateStyle(obj,"success","<font color='green'>√</font>") ;
}
function setFailure(obj) {
	setValidateStyle(obj,"failure","<font color='red'>×</font>") ;
}
function bind(obj,type,fun) {
	obj.addEventListener(type,fun,false) ;
}
function round(num,scale) {
	return Math.round(num * Math.pow(10,scale)) / Math.pow(10,scale) ;
}
