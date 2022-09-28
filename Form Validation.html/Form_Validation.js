function validation()
{
    var flag=true;
    i=document.getElementsByTagName("input");
    s=document.getElementsByTagName("span");
    if(i[0].value.length=0)
    {
        s[0].innerHTML="Field cannot be empty"
        s[0].style.color="red"
        flag=false;
    }
    if(i[1].value.length>=4 || i[1].value.length>12)
    {
        s[1].innerHTML="password length must be from 4 to 12"
        s[1].style.color="red"
        flag=false;
    }
    else
    {
        s[0].innerHTML=""
    }
    if(i[2].value.length!=10)
    {
        flag=false;
    }
    for(var j=3;j<=6;j++)
    if(i[j].checked==true)
    break;
    if(j==7)
        flag=false;
    }
    return flag;
}