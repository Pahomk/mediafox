function uiAlert()
{
    var btnJoke = ['&#x1F44D','ОК','Понятно','Хорошо','Закрыть'];
    document.body.innerHTML =  "<div class='ui-body-shadow'>"+document.body.innerHTML+"</div>"
    document.body.innerHTML = "<div class='ui-Alert-block' style='position: absolute; left: 0; top: -400px; right: 0; display: flex; justify-content: center; margin-top:10px; transition: all 1s ease-in-out 0.5s'><div class='ui-Alert-content ui-box ui-text-sm ui-font-bold' style='position: sticky; z-index:999; text-align: center;'> Welcome to MediaFox &#x1F98A <br> <div class='ui-text-sm ui-font-medium' stlye='padding:0px; margin:0px'><div style='margin: 2px 0 1px 0'>Проект в рамках курсовой работы</div></div> <div><input class='ui-button ui-button-grand' style='width: 100%; margin-top:10px' type='button' value='"+btnJoke[Math.floor(Math.random() * btnJoke.length-1)+1]+"'/></div></div></div>"+document.body.innerHTML;
    let bodyShadow=document.querySelector(".ui-body-shadow");
    let AlertBlock = document.body.querySelector('.ui-Alert-block');
    bodyShadow.style="display: flex; flex-direction: column; min-height: 100vh;";
    bodyShadow.classList.add('ui-shadow--active');
    AlertBlock.style.top="0";
    function freezeScroll(event)
    {
        window.scrollTo(0, 0);
        document.body.style.overflow="hidden";
    }
    document.addEventListener('DOMContentLoaded',freezeScroll)
    function closeAlert()
    {
        AlertBlock.style.top="-400px";
        bodyShadow.classList.add('ui-shadow--remove');
        setTimeout(()=>{
            document.removeEventListener('DOMContentLoaded',freezeScroll);
            document.body.style.overflow="auto";
            bodyShadow.classList.remove('ui-shadow--remove');
            bodyShadow.classList.remove('ui-shadow--active');
            AlertBlock.remove();
        },1000);
    }
    AlertBlock.querySelector('.ui-button').addEventListener('click',()=>
    {
        clearTimeout(alertTimeout);
        closeAlert();
    });
    alertTimeout = setTimeout(()=>{
        closeAlert();
    },4000);
    document.querySelector('.ui-Alert');
}
