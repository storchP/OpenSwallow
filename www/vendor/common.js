// This is a JavaScript file





// config open
function openConfigWindow() {
  config.style.visibility ="visible";
}

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

// delete
function localStorageRemoveItem() {
    localStorage.removeItem(KEY);
    document.getElementById("content").innerHTML = "";
}

// delete all
function localStorageClear() {
    localStorage.clear();
    document.getElementById("content").innerHTML = "";
}

/*
 * DOMから値を取る
*/

function colorSet() {
    var setColor  = $('#side-color').val();
    //sideColor = document.forms.side-color-form.side-color;
    alert(setColor);
    localStorageSetItem("COLOR", setColor);
}