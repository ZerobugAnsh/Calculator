let screen = document.getElementById("display");

let first = "";
let second = "";
let op = "";

function appendValue(value)
{
    if(value=="+" || value=="-" || value=="*" || value=="/")
    {
        op = value;
        screen.value += value;
    }
    else
    {
        if(op=="")
        {
            first += value;
        }
        else
        {
            second += value;
        }

        screen.value += value;
    }
}

function clearDisplay()
{
    screen.value="";
    first="";
    second="";
    op="";
}

function calculate()
{
    let a = Number(first);
    let b = Number(second);
    let ans;

    if(op=="+")
    {
        ans = a + b;
    }
    else if(op=="-")
    {
        ans = a - b;
    }
    else if(op=="*")
    {
        ans = a * b;
    }
    else if(op=="/")
    {
        if(b==0)
        {
            screen.value="Error";
            return;
        }

        ans = a / b;
    }

    screen.value = ans;

    first = ans.toString();
    second = "";
    op = "";
}