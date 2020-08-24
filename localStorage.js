var className; 
var subjectName;

var check1=false;
var check2=false;

function getData(e)
{

    e.style.color = 'white';
    e.style.backgroundColor='green'
    subjectName=e.innerHTML;
    console.log(subjectName);
    sessionStorage.setItem("subjectName", subjectName);//take jab b name chye ho to get name ker k lele hum "name"
    check1=true;
}

function getClass(e)
{
      
    e.style.color = 'white';
    e.style.backgroundColor='purple'
    e.style.borderRadius='10%'
    className=e.innerHTML;
    console.log(className);
    sessionStorage.setItem("className",className);//take jab b name chye ho to get name ker k lele hum "name"
    check2=true;
}


function go()
{
    if(check1==true&&check2==true)
    {
        location.href = "data.html";//jo hum ne page banya ha store krne k bad wahn pe ye target kra ha ha
    }
    else
    {
        alert("Please Select the class and Subject to proceed further");
    }
}