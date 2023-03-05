$(function(){

	getTable();
	getCnt();

	$(".checkall").change(function(){
		$(".j-check").prop("checked",$(this).prop("checked"));
		getSum();
	});

	$('.j-check').change(function(){
		if ( $('.j-check:checked').length==$('.j-check').length ) {
			$('.checkall').prop('checked',true);
		} else {
			$('.checkall').prop('checked',false);
		}
		getSum();
	});

	$(".inc").click(function(){
		 // parent() 找到元素中的 副元素
      // children() 找到所有 副元素
      // find() 找到此節點 以下的 全部元素
      // siblings() 找全部同樣的 元素
      // val 找到元素中的值
		var n=$(this).siblings('.itxt').val();
		n++;
		$(this).siblings('.itxt').val(n);

		var p=$(this).parents(".p-num").siblings('.p-price').html();
		var price="NT$" + (p*n).toFixed(0);
		$(this).parents('.p-num').siblings('.p-sum').html(price);
		getSum();
	});

	$(".dec").click(function(){
		 // parent() 找到元素中的 副元素
      // children() 找到所有 副元素
      // find() 找到此節點 以下的 全部元素
      // siblings() 找全部同樣的 元素
      // val 找到元素中的值
		var n=$(this).siblings('.itxt').val();
		if (n == 0)
			return false;

		n--;
		$(this).siblings('.itxt').val(n);

		var p=$(this).parents(".p-num").siblings('.p-price').html();
		var price="NT$" + (p*n).toFixed(0);
		$(this).parents('.p-num').siblings('.p-sum').html(price);
		getSum();
	});

	// 輸入後更新價格
	$(".itxt").change(function(){
		var n=$(this).val();
		var p=$(this).parents(".p-num").siblings('.p-price').html();
		var price="NT$" + (p*n).toFixed(0);
		$(this).parents('.p-num').siblings('.p-sum').html(price);
		getSum();
	});

	 // delete
	$(".p-action").click(function(){
		$(this).parents('.p-item').remove();
		getSum();
		getCnt();

		var mybody=$("#tbody").html();
		localStorage.shopping=mybody;
	});
});

//處理total
function getSum() {
	 //parents 把 有選取的 找到 p-item
	var cnt=0;
	
	var item=$(".j-check:checked").parents(".p-item");
	//在用 find()找到往後的全部元素後 再找到 value(itxt) 做加總
	item.find(".itxt").each(function(index,element){
		//找到 的 itxt 裡面的值 加總
		cnt += parseInt($(element).val());
	});
	//console.log(cnt);
	$(".p-amt em").text(cnt);

	var money=0;
	item.find(".p-sum").each(function(){
		str=$(this).text();
		mstr=str.substring(3);
		//console.log(str + "," + mstr);
		//找到 的 itxt 裡面的值 加總
		money += parseInt(mstr);
	});
	$(".total em").text(money);
}

 // 取得購物車總數
function getCnt() {
	var cnt=0;
	$(".p-item").each(function(){
		cnt++;
	});
	$("#mycnt").text(cnt);
	localStorage.count=cnt;
}

function getTable() {
	var shopping;
	
	if (localStorage.shopping)
		shopping=localStorage.shopping;
	else
		shopping="";

	$("#tbody").html(shopping);
}