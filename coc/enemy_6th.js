// ステータス用データ作成
// HP
function calculateHp() {  
    var con = parseInt(document.getElementById('con_score').value,10);
    var siz = parseInt(document.getElementById('siz_score').value,10);

    if (!isNaN(con) && !isNaN(siz)) { // conとsizが入力された時だけ計算する
        var hp = Math.ceil((con + siz) / 2); // HPはCONとSIZの平均値
        document.getElementById('hp_score').value = hp;
    } else {
        document.getElementById('hp_score').value = ''; // 片方が空白の場合はHPを空にする
    }
}

// MP・SAN・幸運
function calculateSanMpLuck() {  
    var mp = parseInt(document.getElementById('pow_score').value,10);
    var san = mp * 5;
    document.getElementById('mp_score').value = mp;
    document.getElementById('san_score').value = san;
    document.getElementById('luck').value = san;
}

// 知識
function calculateKnouladge() {
    var eduScore = parseInt(document.getElementById('edu_score').value,10);
    var knowledge = eduScore * 5; 
    document.getElementById('knowledge').value = knowledge;
}

// アイデア
function calculateIdea() {
    var intScore = parseInt(document.getElementById('int_score').value,10);
    var idea = intScore * 5; 
    document.getElementById('idea').value = idea;
}

// ダメージ
function calculateDb() {
    var db1 = document.getElementById('db1').value;
    var db2 = document.getElementById('db2').value;
    var db3 = document.getElementById('db3').value;
    var db = "";
    if (!db1 && !db3) {
        db = "";
    } else if (!db1 && db3) {
        db = "+" + db3;
    }else{db = "+" + db1 + "d" + db2 + "+" + db3;}
    return db;
}

// エネミーデータ作成
function makeEnemy() {
    var enemydata = {
        kind: "character",
        data: {
            name: document.getElementById('enemy_name').value,
            initiative: Number(document.getElementById('dex_score').value),
            status: [{
                label: "HP",
                value: document.getElementById('hp_score').value,
                max: document.getElementById('hp_score').value
            }, {
                label: "MP",
                value: document.getElementById('mp_score').value,
                max: document.getElementById('mp_score').value
            }, {
                label: "SAN",
                value: document.getElementById('san_score').value,
                max: document.getElementById('san_score').value
            }],
            params: makeParameter(),
            iconUrl: document.getElementById('icon').value,
            faces: makeIcons(),
            color: document.getElementById('color').value,
            commands: makeCommands()
        }
    };
    document.getElementById('enemydata').value = JSON.stringify(enemydata);
}

// 差分設定用
function makeIcons() {
    var icons = [];
    for (var i = 1; i <= 10; i++) {
        var iconValue = document.getElementById('diff_url' + i).value;
        var iconName = document.getElementById('diff_name' + i).value;
        if (iconValue) { // 値が空でない場合
            icons.push({ iconUrl: iconValue, label: iconName });
        }
    }
    return icons;
}

// 差分チャパレ用パーツ作成
function makeIconChatPallet() {
    var iconcp = [];
    for (var i = 1; i <= 10; i++) {
        var iconName = document.getElementById('diff_name' + i).value;
        if (iconName) { // 値が空でない場合
            iconcp.push(iconName + '\n');
        }
    }
    return iconcp;
}

// 技能チャパレ用パーツ作成
function makeCommands() {
    var ch = 'CCB<=';
    var command = "";
    let elements = document.getElementsByName('check_type');
    if (elements.item(1).checked) {
        ch = 'CC<=';
    }

    for (var i = 1; i <= 10; i++) {
        var skillName = document.getElementById('skill_name' + i).value;
        var skillScore = document.getElementById('skill_score' + i).value;
        if (skillName) { // 値が空でない場合
            command += ch + skillScore + ' 【' + skillName + '】\n';
        }
    }

    var commands = makeIconChatPallet() + command + makeDamageChatpallet() + makeStatusChatPallet(ch);
    return commands;
}

// ダメージチャパレ用パーツ作成
function makeDamageChatpallet() {
    var db = calculateDb();
    var damage = '1d3' + db + ' 【ダメージ判定】\n' + '1d4' + db + ' 【ダメージ判定】\n' + '1d6' + db + ' 【ダメージ判定】\n';
    return damage;
}

// ステータス(判定)チャパレ用パーツ作成
function makeStatusChatPallet(ch) {
    var status = ch + '{STR}*5 【STR】\n' + ch + '{CON}*5 【CON】\n' + ch + '{POW}*5 【POW】\n' + ch + '{DEX}*5 【DEX】\n' + ch + '{APP}*5 【APP】\n' + ch + '{INT}*5 【INT】\n' + ch + '{EDU}*5 【EDU】\n';
    return status;
}

// ステータスパーツ作成
function makeParameter() {
    var param = [
        { label: "STR", value: document.getElementById('str_score').value },
        { label: "CON", value: document.getElementById('con_score').value },
        { label: "POW", value: document.getElementById('pow_score').value },
        { label: "DEX", value: document.getElementById('dex_score').value },
        { label: "APP", value: document.getElementById('app_score').value },
        { label: "SIZ", value: document.getElementById('siz_score').value },
        { label: "INT", value: document.getElementById('int_score').value },
        { label: "EDU", value: document.getElementById('edu_score').value }
    ];
    return param;
}

// クリップボードにコピー
function copyEnemy() {
    const input_text = document.getElementById("enemydata").value;
    navigator.clipboard.writeText(input_text).then(function() {
        // コピー成功時の処理
        alert("コピー成功");
    }).catch(function(error) {
        // コピー失敗時の処理
        alert("コピーに失敗しました: " + error);
    });
}
