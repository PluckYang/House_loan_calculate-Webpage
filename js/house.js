window.onload = function() {
	bind(ele("unitPrice"),"blur",function(){
		validateUnitPrice() ;
	}) ;
	bind(ele("rentPrice"),"blur",function(){
		validateRentPrice() ;
	}) ;
	bind(ele("proPrice"),"blur",function(){
		validateProPrice() ;
	}) ;
	bind(ele("area"),"blur",function(){
		validateArea() ;
	}) ;
	bind(ele("cost"),"blur",function(){
		validateCost() ;
	}) ;
	bind(ele("calBut"),"click",function(){
		if (validateForm()) { //表单所有元素通过格式验证之后可以进行具体的计算操作
			var unitPrice = parseFloat(ele("unitPrice").value) ;
			var rentPrice = parseFloat(ele("rentPrice").value) ;
			var proPrice = parseFloat(ele("proPrice").value) ;
			var area = parseFloat(ele("area").value) ;
			var pay = parseFloat(ele("pay").value)/100 ;
			var cost = parseFloat(ele("cost").value)/100 ;
			//得出计算的结果
			ele("firstResult").innerHTML = " $" + round(unitPrice * area * pay,2) ;
			ele("allResult").innerHTML = " $" + round(unitPrice * area * (1-pay),2) ;
			ele("costResult").innerHTML = " $" + round(unitPrice * area * (1-pay) * (1+cost)/12,2) ;
			ele("rentResult").innerHTML = " $" + round(rentPrice * area,2) ;
			ele("proResult").innerHTML = " $" + round(proPrice * area ,2) ;

		}
	}) ;
	bind(ele("resetBut"),"click",function(){
		resetForm() ;
	}) ;
}
function validateUnitPrice() {
	return validateNumber("unitPrice") ;
}
function validateRentPrice() {
	return validateNumber("rentPrice") ;
}
function validateProPrice() {
	return validateNumber("proPrice") ;
}
function validateArea() {
	return validateNumber("area") ;
}
function validateCost() {
	return validateNumber("cost") ;
}
function validateForm() {
	return validateUnitPrice() && validateRentPrice() && validateProPrice() && validateArea() && validateCost() ;
}
function resetForm() {
	ele("unitPrice").value = "" ;
	ele("rentPrice").value = "" ;
	ele("proPrice").value = "" ;
	ele("area").value = "" ;
	ele("cost").value = "" ;

	ele("unitPrice").className = "init" ;
	ele("rentPrice").className = "init" ;
	ele("proPrice").className = "init" ;
	ele("area").className = "init" ;
	ele("cost").className = "init" ;

	ele("unitPriceSpan").innerHTML = "请输入房屋出售单价/平米" ;
	ele("rentPriceSpan").innerHTML = "请输入房屋出租单价/平米" ;
	ele("proPriceSpan").innerHTML = "请输入房屋物业费单价/平米" ;
	ele("areaSpan").innerHTML = "请输入房屋面积" ;
	ele("costSpan").innerHTML = "请输入贷款的利率(%)" ;

}
