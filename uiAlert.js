function uiAlert()
{
            var btnJoke = ['&#x1F44D','ОК','Понятно','Хорошо','Закрыть', 'Прекрасно'];
            var body = document.body;

            var bodyCreateShadow = document.createElement('div');
            bodyCreateShadow.classList.add('ui-body-shadow')

            for (let el of Array.from(document.body.children))
                bodyCreateShadow.appendChild(el);
            document.body.appendChild(bodyCreateShadow);

            var uiAlertContent = document.createElement('div');
            uiAlertContent.classList.add('ui-Alert-block')
            uiAlertContent.style = "position: absolute; left: 0; top: -400px; right: 0; display: flex; justify-content: center; margin-top:10px; transition: all 1s ease-in-out 0.5s";
            uiAlertContent.innerHTML = "<div class='ui-Alert-content ui-box ui-text-sm ui-font-bold' style='position: sticky; z-index:999; text-align: center;'> Welcome to MediaFox &#x1F98A <br> <div class='ui-text-sm ui-font-medium' stlye='padding:0px; margin:0px'><div style='margin: 2px 0 1px 0'>IPhone 15 УЖЕ В ПРОДАЖЕ!</div> <div style='margin: 2px 0 1px 0'><img src='https://i.ibb.co/hLmtzPg/image-Photo-Room-png-Photo-Room.png' alt='Изображение IPhone 15'/></div></div> <div><input class='ui-button ui-button-grand' style='width: 100%; margin-top:10px' type='button' value='"+btnJoke[Math.floor(Math.random() * btnJoke.length-1)+1]+"'/></div></div>";
            document.body.prepend(uiAlertContent);

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
            document.addEventListener('scroll',freezeScroll);
            document.dispatchEvent(new CustomEvent('scroll'));
            function closeAlert()
            {
                AlertBlock.style.top="-900px";
                bodyShadow.classList.add('ui-shadow--remove');
                setTimeout(()=>{
                    for (let el of Array.from(document.querySelector('.ui-body-shadow').children))
                        body.appendChild(el);
                    bodyCreateShadow.remove();
                    document.removeEventListener('scroll',freezeScroll);
                    document.body.style.overflow="auto";
                    bodyShadow.classList.remove('ui-shadow--remove');
                    bodyShadow.classList.remove('ui-shadow--active');
                    AlertBlock.remove();
                },2000);
            }
            AlertBlock.querySelector('.ui-button').addEventListener('click',()=>
            {
                clearTimeout(alertTimeout);
                closeAlert();
            });
            alertTimeout = setTimeout(()=>{
                closeAlert();
            },4000);  
}
