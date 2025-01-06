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

//恐怖心の二段階プルダウン
function change(e) {
    // 親セレクタで選択したカテゴリ番号
    const selectCategory = e.options[e.selectedIndex].dataset.category;
    // 子セレクタのoptionリスト
    const childs = document.getElementById('children').children;
    for(let i in childs) {
        const child = childs[i];
        // 子セレクタのoptionにdata-categoryが設定されている
        if(child.dataset !== undefined && child.dataset.category !== undefined) {
            // 親で選択したcategoryと異なればdisabledをtrueに、同じならfalseに変更
            child.disabled = child.dataset.category !== selectCategory ? true : false;
        }
    }
}
