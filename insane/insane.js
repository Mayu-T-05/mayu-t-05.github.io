.accordion {
    max-width: 230px;
    margin-bottom: 7px;
    border: 2px solid #d0d0d0;
    border-radius: 5px;
    
}

.accordion summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1em 2em;
    color: #333333;
    font-weight: bold;
    cursor: pointer;
    max-width: 200px; /* 最大幅を設定 */
    font-size: 0.7em;  /* フォントサイズを小さくする */
    white-space: nowrap; /* 折り返しを防ぐ */
    overflow: hidden; /* 内容がはみ出した場合に隠す */
    text-overflow: ellipsis; /* はみ出した部分を省略記号にする */
}

.accordion summary::-webkit-details-marker {
    display: none;
}

.accordion summary::after {
    transform: translateY(-25%) rotate(45deg);
    width: 7px;
    height: 7px;
    margin-left: 10px;
    border-bottom: 3px solid #333333b3;
    border-right: 3px solid #333333b3;
    content: '';
    transition: transform .3s;
}

.accordion[open] summary::after {
    transform: rotate(225deg);
}

.accordion p {
    transform: translateY(-10px);
    opacity: 0;
    margin: 0;
    padding: .3em 2em 1.5em;
    color: #333333;
    transition: transform .5s, opacity .5s;
    max-width: 150px; /* 最大幅を設定 */
    font-size: 0.7em;  /* フォントサイズを小さくする */
}

.accordion[open] p {
    transform: none;
    opacity: 1;
}

.content {
    display: grid;
    grid-template-areas: 
        "sidebar title title title"
        "sidebar left middle right";
    grid-template-columns: 1fr 2fr 2fr 2fr;
    gap: 10px;
    width: 100%;
}

.sidebar {
    grid-area: sidebar;
    background-color: #8b008b;
}

.title {
    grid-area: title;
    text-align: left; /* タイトルを左揃え */
}

.left {
    grid-area: left;
}
.middle {
    grid-area: middle;
}
.right {
    grid-area: right;
    text-align: left;
}



table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-size: 0.8rem;
    margin: 10px;
}

td, th {
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 8px;
}

th {
    background-color: rgb(235, 235, 235);
}

td {
    text-align: center;
}

tr:nth-child(even) td {
    background-color: rgb(250, 250, 250);
}

tr:nth-child(odd) td {
    background-color: rgb(245, 245, 245);
}

caption {
    padding: 10px;
}

.make_Chatpallet, .copy {
    display: flex;
    justify-content: left;
    align-items: left;
    margin: 0 auto;
    padding: .9em 2em;
    border: 1px solid #2589d0;
    border-radius: 5px;
    background-color: #fff;
    color: #2589d0;
    font-size: 1em;
}
