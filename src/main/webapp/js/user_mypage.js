$(function(){
	$('.p_update').click(function(){
		alert("수정기능 준비중입니다.");
	})
	
	$('.p_delete').click(function(){
		alert("탈퇴기능 준비중입니다.");
	})
//	
//	$('#article_no2 > div > .center_only').hide();
//	$('#article_no4 > .center_only').hide();
//	$('#article_no5 > .center_only').hide();
	
	
	$('.cash_re').click(function(){
		if(confirm("포인트를 충전하시겠습니까?")){
			 $.ajax({
	            type : "POST",
	            url : "cashupd.kb",
	            success :function(re){
	                result=re.trim();
	                if(result == "true"){
	                    alert("충전이 완료되었습니다.");
	                    location.reload(); // 새로고침
	                }else{
	                    alert("충전불가. 관리자에게 문의하십시요.")
	                }
	            },
	            error:function(e){   
	                alert(e.responseText); 
	            }
        }); 
		}else{
			alert("취소하셨습니다.")
		}
	})
	//스쿼드로 이동
	$('.no1_td2').click(function(){
		location.href = "#article_no2";
	})
	//경기장임대로 이동
	$('.no1_td3').click(function(){
		location.href = "#article_no3";
	})
	//관심상품으로 이동
	$('.no1_td4').click(function(){
		location.href = "#article_no4";
	})
	//장바구니로 이동
	$('.no1_td5').click(function(){
		location.href = "#article_no5";
	})
})