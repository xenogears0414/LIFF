<!DOCTYPE html>
<html lang="jp" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XP LIFF</title>
     <script type="text/javascript" src="sdk.js"></script>

    <script type="text/javascript">
    document.addEventListener("DOMContentLoaded", () => {
      liff
    //    .init({
  //        liffId: '<LIFF_ID>'
    //    })
        .then(() => {
          document.getElementById('go').addEventListener('click', () => {
            if (!liff.isInClient()) {
              document.getElementById('log').value += 'sendMessagesText ng\n';
            } else {
              liff.sendMessages([{
                'type': 'text',
                'text': document.getElementById('sendMessagesTextText').value
              }]).then(function() {
                document.getElementById('log').value += 'sendMessagesText completed\n';
              }).catch(function(error) {
                document.getElementById('log').value += 'sendMessagesText()=' + error + '\n';
              });
            }
          });
        })
        .catch((err) => {
          document.getElementById('log').value = 'init ng\n' + err;
        });
    });
    </script>
  </head>
  <body>
    <div>
      <h3>メッセージを送信する</h3>
      <div>text<input type="text" id="sendMessagesTextText" placeholder="text" value=""/></div>
      <input type="button" id="go" value="実行"/>
      <textarea id="log" style="width:96%;height:100px;"></textarea>
    </div>
  </body>
</html>