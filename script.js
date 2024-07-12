var text;
let buttons=document.querySelectorAll(".btn");

//function to click each button
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        let t=e.target.textContent;
        if(t=="="){
            text=eval(text);
            document.querySelector(".text").value=text;
        }
        else if(t=="X")
        {
            t="*";
            text=text+t;
            document.querySelector(".text").value=text;
        }
        else if(t=="÷"){
            t="/";
            text=text+t;
            document.querySelector(".text").value=text;
        }
        else if(t=="C")
        {
            text="";
            document.querySelector(".text").value=text;
        }
        else if(t=="√")
            {
                let number = parseFloat(document.querySelector(".text").value);
                if (number >= 0) {
                    // Handle non-negative numbers only
                    document.querySelector(".text").value = Math.sqrt(number);
                }
        }
        else if(t=="x²")
        {
            let num=parseFloat(document.querySelector(".text").value);
            if(num>=0)
            {
                document.querySelector(".text").value=num*num;
            }
        }
        else{
        text=text +t;
        document.querySelector(".text").value=text;
        }
    })
});