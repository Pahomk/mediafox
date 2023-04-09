function connectLink(link, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var script = document.createElement("script");
                script.text = xhr.responseText;
                document.head.appendChild(script);
                callback(null); // Вызываем callback без ошибки
            } else {
                callback(new Error("ERROR: " + xhr.statusText));
            }
        }
    };
    xhr.send();
}

//uiAlert
connectLink("https://raw.githubusercontent.com/Pahomk/mediafox/main/uiAlert.js", function(err) {
    if (err) {
        document.body.innerHTML="FATAL LOAD SCRIPTS ERROR";
    } else {
        try {
           document.querySelector(".homepage__container");
            uiAlert();
        }
        catch (error) {
            checkJsCorrupt();
        }
    }
});

function checkJsCorrupt()
{
   if (!(typeof footerHandler === 'function' && typeof getVars === 'function' && typeof contextDetect === 'function' && typeof consoleMessage === 'function'))
   {
       try{
            warningHandler();
       }
       catch{
               document.body.innerHTML="";
               window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
       }
   }
   else
   {
       document.body.innerHTML="HTML CLASSES IS CORRUPTED";
   }
}
