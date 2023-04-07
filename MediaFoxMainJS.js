function connectUiAlert()
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/Pahomk/mediafox/main/uiAlert.js", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            eval(xhr.responseText);
        }
    };
    xhr.send();
}
connectUiAlert();
