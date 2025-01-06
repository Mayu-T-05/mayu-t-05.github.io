// クリップボードにコピー
function copyCP() {
    const input_text = document.getElementById("CP").value;
    navigator.clipboard.writeText(input_text).then(function() {
        // コピー成功時の処理
        alert("コピー成功");
    }).catch(function(error) {
        // コピー失敗時の処理
        alert("コピーに失敗しました: " + error);
    });
}
