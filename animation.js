function BgFadeAnime() {
    $('.bgLRextendTrigger').each(function(){
        let elemPos = $(this).offset().top-50;
        let scroll =  $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('bgLRextend');
        }else{
            $(this).removeClass('bgLRextend');
        }
    });

    $('.bgappearTrigger').each(function(){
        let elemPos = $(this).offset().top-50;
        let scroll =  $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
            $(this).addClass('bgappear');
        }else{
            $(this).removeClass('bgappear');
        }
    });

    
}
$(window).on('load',function(){
    BgFadeAnime();
});


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      let elemPos = $(this).offset().top-30;//要素より、50px上の
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeup');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeup');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });

  
