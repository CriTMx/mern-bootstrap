function alphaSort()
{
    var s = document.getElementById("inp").value;
    console.log("s = " + s);
    
    for (i = 0; i < s.length - 1; i++)
    {
        for (j = 0; j < s.length - i - 1; j++)
        {
            // console.log(s[j] + " " + s[j+1] + " " + s[j]>s[j+1]);
            if (s[j] > s[j+1])
            {
                var temp = s[j];
                s[j] = s[j+1];
                s[j+1] = temp;
            }
        }
    }

    document.getElementById("result").innerHTML = s;
    console.log("final s = " + s);
}