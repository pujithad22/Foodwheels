bit();
    
    function bit(){
        var xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let o=JSON.parse(xhttp.responseText)
            console.log(o);
            for(var i=0;i<o.recipes.length;i++)
            {
                document.getElementById("myul").innerHTML+="<li><img class='size' src="+o.recipes[i].image+"><p class='txt'>"+o.recipes[i].name+"</p><div class='cat'>"+o.recipes[i].category+"</div><button onclick='bag("+i+")'>Add to bag</button></li>";
            }
    }
    };
    
        xhttp.open(
            "GET",
            "http://temp.dash.zeta.in/food.php",
            true
        );
        xhttp.send();
    
    }
    function find()
    {
    ul=document.getElementById("myul");
    console.log(ul);
    items=document.getElementById("myul").getElementsByTagName("li");
    console.log(items);
    for(i=0;i<items.length;i++)
    {
        console.log(document.getElementsByTagName('p')[i].innerHTML);
        console.log(document.getElementById("search").value);
        var name=document.getElementById("myul").getElementsByTagName('p')[i].innerHTML;
        var isp=document.getElementById("search").value;
       
       if(name.indexOf(isp)!== -1)
       {
           document.getElementById("myul").getElementsByTagName('img')[i].style.display="block";
           document.getElementById("myul").getElementsByTagName('div')[i].style.display="block";
           document.getElementById("myul").getElementsByTagName('p')[i].style.display="block";
           document.getElementById("myul").getElementsByTagName('button')[i].style.display="block";
           console.log("found");
       }
       else
       {
            document.getElementById("myul").getElementsByTagName('img')[i].style.display="none";
            document.getElementById("myul").getElementsByTagName('p')[i].style.display="none";
            document.getElementById("myul").getElementsByTagName('div')[i].style.display="none";
            document.getElementById("myul").getElementsByTagName('button')[i].style.display="none";
            console.log("not found");
       }
       
        console.log(isp);
    }
    }


    function starters(pi)
    {
        ul=document.getElementById("myul");
       // console.log(ul);
        items=document.getElementById("myul").getElementsByTagName("li");
       //sss console.log("starters entered");
        console.log(pi);
        for(i=0;i<items.length;i++)
        {
            var cate=document.getElementById("myul").getElementsByTagName('div')[i].innerHTML;
            console.log("category is : "+cate);
            if(cate==pi)
            {
                document.getElementById("myul").getElementsByTagName('img')[i].style.display="block";
                document.getElementById("myul").getElementsByTagName('p')[i].style.display="block";
                document.getElementById("myul").getElementsByTagName('div')[i].style.display="block";
                document.getElementById("myul").getElementsByTagName('button')[i].style.display="block";
                console.log("found");
            }
            else
            {
                document.getElementById("myul").getElementsByTagName('img')[i].style.display="none";
                document.getElementById("myul").getElementsByTagName('p')[i].style.display="none";
                document.getElementById("myul").getElementsByTagName('div')[i].style.display="none";
                document.getElementById("myul").getElementsByTagName('button')[i].style.display="none";
                console.log("not found");
            }
        }
        
        
   }
   var count=0;
   function bag(num)
   {
       count++;
       console.log(num);
       console.log(document.getElementById('myul').getElementsByTagName('img')[num].src);
       document.getElementById('notif').innerHTML=count;// document.getElementById('notif').innerHTML+1;
       document.getElementById("cartul").innerHTML+="<li><img class='size' src="+document.getElementById('myul').getElementsByTagName('img')[num].src+"><p>"+document.getElementById('myul').getElementsByTagName('p')[num].innerHTML +"</li>";
   
    }
    function viewcart()
    {
        document.getElementById("cart").style.display="block";
        
    }
    