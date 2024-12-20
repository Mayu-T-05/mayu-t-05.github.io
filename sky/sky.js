  var technology = new Array(3);
  technology[0] = "技術"
  var sense = new Array(3);
  sense[0] = "感覚";
  var culture = new Array(3);
  culture[0] = "教養"
  var body = new Array(3);
  body[0] = "身体";
  var chatpallet


function myFunction() {
  //チャパレ削除
  document.getElementById('chatpallet').value = "";
  chatpallet =""
  chatpallet += "NV 【航海表】\nNEN 【航行系イベント】\nNEE 【遭遇系イベント】\nNEO 【船内系イベント】\nNEH 【困難系イベント】 \nNEL 【長旅系イベント】\nFT 【ファンブル表】\n\n";
  
  //変数宣言


  //能力値
  setAbility();
  chatpallet += ""
  chatpallet += "\n"

  //行為判定
  setActJudge();
  chatpallet += "\n"

  //ダメージ
  setDamage();
  chatpallet += "\n"

  //チャパレ出力
  document.getElementById('chatpallet').value = chatpallet;
}



//基本技能設定
function setAbility() {
  abilitySub(document.getElementById('technology_strong'), document.getElementById('technology_weak'), technology);
  addAbility(technology);

  abilitySub(document.getElementById('sense_strong'), document.getElementById('sense_weak'), sense);
  addAbility(sense);


  abilitySub(document.getElementById('culture_strong'), document.getElementById('culture_weak'), culture);
  addAbility(culture);


  abilitySub(document.getElementById('body_strong'), document.getElementById('body_weak'), body);
  addAbility(body);

}

//基本技能の得意・不得意取得→配列に追加
function abilitySub(strong, weak, arr) {
  if (strong && strong.checked) {
    arr[1] = 1;
  } else {
    arr[1] = 0;
  }

  if (weak && weak.checked) {
    arr[2] = 1;
  } else {
    arr[2] = 0;
  }

  return arr;
}

//基本技能用判定をチャパレに追加
function addAbility(name) {
  var d = 2 + name[1];
  var f = 1 + name[2];
  var t = d + "SN7#" + f + " 【" + name[0] + "】\n";
  chatpallet += t;
}

/*---------------------------------------*/
//組み合わせ技能の追加

function setActJudge(sheet) {
  //判定の組み合わせを配列に追加
  var actJudge = [["砲撃判定","technology","sense"],
                 ["修理判定","technology","culture"],
                 ["操舵判定","sense","culture"],
                 ["白兵判定","body","technology"],
                 ["侵入判定","body","technology"],
                 ["偵察判定","body","sense"],
                 ["大揺れ判定","body","sense"],
                 ["消火判定","body","culture"]];

  addActjudge(actJudge);
}

function addActjudge(arr) {
  for (var i = 0; i < arr.length; i++) {
    var judge = arr[i][0];

    //判定サマリ作成
    switch (judge) {
      case "修理判定":
        if (document.getElementById('workbench').checked || document.getElementById('pilothouseB').checked) { //作業台・操舵室B
          
          //ダイス数
          var d1 = getAbilityValue(arr[i][1], 1);
          var d2 = getAbilityValue(arr[i][2], 1);
          var d = d1 + d2 + 2;
          if (d > 3) {
            d = 3;
          }

          //ファンブル値
          var f1 = getAbilityValue(arr[i][1], 2);
          var f2 = getAbilityValue(arr[i][2], 2);
          var f = f1 + f2 + 1;
          
          //目標値
          var m = 6;
          
          //判定文作成
          var t = d + "SN" + m + "#" + f + " 【" + arr[i][0] + "】\n";
          chatpallet += t;
          break;
          
        }else{
        
          //ダイス数
          var d1 = getAbilityValue(arr[i][1], 1);
          var d2 = getAbilityValue(arr[i][2], 1);
          var d = d1 + d2 + 2;
          if (d > 3) {
          d = 3;
          }

          //ファンブル値
          var f1 = getAbilityValue(arr[i][1], 2);
          var f2 = getAbilityValue(arr[i][2], 2);
          var f = f1 + f2 + 1;

          //目標値
          var m = 7;

          //判定文作成
          var t = d + "SN" + m + "#" + f + " 【" + arr[i][0] + "】\n";
          chatpallet += t;
          break;


        }
        

      case "偵察判定":
        if (document.getElementById('periscope').checked) { //ペリスコープ
          //ダイス数
          var d1 = getAbilityValue(arr[i][1], 1);
          var d2 = getAbilityValue(arr[i][2], 1);
          var d = d1 + d2 + 2;
          if (d > 3) {
            d = 3;
          }

          //ファンブル値
          var f1 = getAbilityValue(arr[i][1], 2);
          var f2 = getAbilityValue(arr[i][2], 2);
          var f = f1 + f2 + 1;

          //目標値
          var m = 6;

          //判定文作成
          var t = d + "SN" + m + "#" + f + " 【" + arr[i][0] + "】\n";
          chatpallet += t;
          
        } else if (document.getElementById('radar').checked) {  //電探
          
          //ダイス数
          var d1 = technology[0][1];
          var d2 = culture[0][1];
          var d = d1 + d2 + 2;
          if (d > 3) {
            d = 3;
          }

          //ファンブル値
          var f1 = technology[0][2];
          var f2 = culture[0][2];;
          var f = f1 + f2 + 1;

          //目標値
          var m = 8;

          //判定文作成
          var t = d + "SN" + m + "#" + f + " 【" + arr[i][0] + "】\n";
          chatpallet += t;
          
        }else{
        
           //ダイス数
          var d1 = getAbilityValue(arr[i][1], 1);
          var d2 = getAbilityValue(arr[i][2], 1);
          var d = d1 + d2 + 2;
          if (d > 3) {
          d = 3;
          }

          //ファンブル値
          var f1 = getAbilityValue(arr[i][1], 2);
          var f2 = getAbilityValue(arr[i][2], 2);
          var f = f1 + f2 + 1;

          //目標値
          var m = 7;

          //判定文作成
          var t = d + "SN" + m + "#" + f + " 【" + arr[i][0] + "】\n";
          chatpallet += t;

        }
        break;

      default:
        //ダイス数
        var d1 = getAbilityValue(arr[i][1], 1);
        var d2 = getAbilityValue(arr[i][2], 1);
        var d = d1 + d2 + 2;
        if (d > 3) {
          d = 3;
        }

        //ファンブル値
        var f1 = getAbilityValue(arr[i][1], 2);
        var f2 = getAbilityValue(arr[i][2], 2);
        var f = f1 + f2 + 1;

        //目標値
        var m = 7;

        //判定文作成
        var t = d + "SN" + m + "#" + f + " 【" + arr[i][0] + "】\n";
        chatpallet += t;
        
        break;
    }


  }

  //回避判定有無
  if (document.getElementById('avoidance').checked) {

    if (document.getElementById('pilothouseA').checked) {  //操舵室A
      //ダイス数
      var d1 = sense[1];
      var d2 = culture[1];
      var d = d1 + d2 + 2;
      if (d > 3) {
        d = 3;
      }

      //ファンブル値
      var f1 = sense[2];
      var f2 = culture[2];
      var f = f1 + f2 + 1;

      //目標値
      var m = 6;

      //判定文作成
      var t = d + "SN" + m + "#" + f + " 【回避判定】\n";
      chatpallet += t;
    }
    else if (document.getElementById('cockpit').checked) {   //コックピット

      //ダイス数
      var d1 = sense[1];
      var d2 = culture[1];
      var d = d1 + d2 + 2;
      if (d > 3) {
        d = 3;
      }

      //ファンブル値
      var f1 = sense[2];
      var f2 = culture[2];
      var f = f1 + f2 + 1;

      var m = 8;

      var t = d + "SN" + m + "#" + f + " 【回避判定】\n";
      chatpallet += t;
    } else {

      //ダイス数
      var d1 = sense[1];
      var d2 = culture[1];
      var d = d1 + d2 + 2;
      if (d > 3) {
        d = 3;
      }

      //ファンブル値
      var f1 = sense[2];
      var f2 = culture[2];
      var f = f1 + f2 + 1;

      var m = 7;

      var t = d + "SN" + m + "#" + f + " 【回避判定】\n";
      chatpallet += t;
    }
  }
}

function getAbilityValue(ability, index) {
  if (ability === "technology") {
    return technology[index];
  } else if (ability === "sense") {
    return sense[index];
  } else if (ability === "culture") {
    return culture[index];
  } else if (ability === "body") {
    return body[index];
  }
  return 0;
}



/*------------------------------------------
武装系処理の追加*/

function setDamage() {
  weapon = [
     [document.getElementById('cannon').checked,"カノン砲","",4],
     [document.getElementById('calvaline').checked,"カルバリン砲","",3],
     [document.getElementById('falconet').checked,"ファルコネット砲","",3],
     [document.getElementById('rapid').checked,"ラピッド砲","",5],
     [document.getElementById('carronade').checked,"カロネード砲",6,2],
     [document.getElementById('ribeau').checked,"リボー砲","",3],
     [document.getElementById('death_ray').checked,"殺人光線",46,1],
     [document.getElementById('death_ray').checked,"殺人光線",28,1],
     [document.getElementById('death_ray').checked,"殺人光線",19,1],
     [document.getElementById('pyroclastic').checked,"火炎放射器","[火災]",2],
     [document.getElementById('torpedo').checked,"ロケット魚雷","",6],
     [document.getElementById('anchor').checked,"アンカー","[大揺れ]",2],
     [document.getElementById('varistor').checked,"バリスタ","",3],
     [document.getElementById('ram').checked,"突撃衝角",46,1],
     [document.getElementById('spear').checked,"吶喊槍",12346789,1],
     [document.getElementById('moon_voyage').checked,"月世界旅行砲",12346789,1]
  ];
  addDamage(weapon);
}


function addDamage(weapon) {


  for (var i = 0; i < weapon.length; i++) {
      var damageValue = ""
      var attackNum = ""
      var t = ""

    if (powder_magazine.checked) {
      attackNum = 1
    }
    
    if (weapon[i][0]) {
      damageValue = weapon[i][2];
      attackNum = attackNum + weapon[i][3]
      t = "D" + damageValue + "/" + attackNum + " 【" + weapon[i][1] + "】\n"
      chatpallet += t;
      if (document.getElementById('ballistics').checked) {
        chatpallet += "D" + damageValue + "/" + attackNum + "@2 【" + weapon[i][1] + "+弾道学:命中マスを1つ下に】\n"
        chatpallet += "D" + damageValue + "/" + attackNum + "@4 【" + weapon[i][1] + "+弾道学:命中マスを1つ左に】\n"
        chatpallet += "D" + damageValue + "/" + attackNum + "@6 【" + weapon[i][1] + "+弾道学:命中マスを1つ右に】\n"
        chatpallet += "D" + damageValue + "/" + attackNum + "@8 【" + weapon[i][1] + "+弾道学:命中マスを1つ上に】\n"
      }
    }
  }

  if (document.getElementById('avoidance').checked) {
    chatpallet += "AVO@2 【回避運動（命中マスを1つ下に）】\nAVO@4 【回避運動（命中マスを1つ左に）】\nAVO@6 【回避運動（命中マスを1つ右に）】\nAVO@8 【回避運動（命中マスを1つ上に）】\n"
  }
}



// クリップボードにコピー
function copy() {
    const input_text = document.getElementById("chatpallet").value;
    navigator.clipboard.writeText(input_text).then(function() {
        // コピー成功時の処理
        alert("コピー成功");
    }).catch(function(error) {
        // コピー失敗時の処理
        alert("コピーに失敗しました: " + error);
    });
}
