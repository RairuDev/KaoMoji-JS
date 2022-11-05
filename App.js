$(function () {
  // id = 'start-button'を押した時の処理を記述
  $('#start-button').on('click',
    function () {
      if ($('#start-button').text() === "スタート！！") {
        // console.log("スタートが押されたよ");
        // id = buttonの要素に'disabled', trueを追加する（ここでボタンの制御）
        $('#start-button').prop('disabled', true);
        // id = emojiの要素にε=ヽ(*￣∇￣)ノ文字列を追加している
        $('#emoji').text('ε=ヽ(*￣∇￣)ノ');
        // countに０を代入
        var count = 0;
        // setTimeoutでfunctionを“5秒後”に実行
        setTimeout(function progress() {
          // countに１づつたす
          count++;
          // もし、countの値が10以下なら
          if (count <= 10) {
            // ここでid = emojiの要素に文字列ε=を先頭に追加して行っている
            $('#emoji').prepend('ε=');
            setTimeout(progress, 500);
          }
        }, 500);
        setTimeout(function () {
          $('#start-button').prop('disabled', false);
          $('#start-button').text('位置について');
        }, 5500);//5500は500を10回処理した後に表示したいから
      }
      else {
        $('#start-button').text('スタート！！');
        $('#emoji').text('ヽ( ￣∇￣)ノ');
        // console.log("位置についてが押されたよ");
      }

    }
  )

})
