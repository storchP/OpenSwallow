/**
 * リンク
 */
function callURL(URL)
  {
    window.open(URL, null, 'width=2000,height=3000,scrollbars=yes');
  };

function callCONFIG(URL)
  {
    window.open(URL, null, 'width=1900,height=1080,scrollbars=yes');
  };

/**
 * ローカルストレージ
 */
// カラー設定
function colorSet() {
    var setColor  = $('#side-color').val();
    alert(setColor);
    localStorageSetItem("COLOR", setColor);
}

// set
function localStorageSetItem(KEY, value) {
    localStorage.setItem(KEY, value);
    alert("Local Storage: データーをセットしました。")
}

// get
function localStorageGetItem(KEY) {
    var item = localStorage.getItem(KEY);
    alert(item);
}


/*
 * DOMから値を取る
*/

// 左サイドカラー
function colorSet() {
    var setColor  = $('#side-color').val();
    alert(setColor);
    localStorageSetItem("COLOR", setColor);
}

// 左サイドロゴ
function logoSet () {
    var setLogo  = $('#side-logo').val(); 
    var logodata = localStorageSetItem("LOGO");
}