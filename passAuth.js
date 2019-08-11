var password = "thisisapassword";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

while (response != password && !error)
{
    if (entryCount < entryLimit)
    {
        response = window.prompt ("Enter the hidden code!")
        entryCount++;
    }
    else
    {
        error = true;
    }
}

if (error)
{
    alert("Too many entries!");
}
else
{
    alert("Mission Success!");    
}

