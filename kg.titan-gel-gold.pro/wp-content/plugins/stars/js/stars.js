(function($){$(document).ready(function(){setTimeout(function(){var post_id=$(".star-ratings").data('id');if(post_id==undefined||post_id===0)
return;$.ajax({url:starsValues.ajax_url,type:'post',data:{action:'stars_add_view',post_id:post_id}});},3000);});}(jQuery));