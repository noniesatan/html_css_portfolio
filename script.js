function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hambuger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
 }
 var i = 0;
            var txt = 'Front end and Application Developer.';
            var speed = 50;
            
            function typeWriter() {
              if (i < txt.length) {
                document.getElementById("txtmove").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
              }
            }
           setInterval(()=>{
            i = 0;
            document.getElementById("txtmove").innerHTML = "";
  
            // Start typing effect again
            typeWriter();
           },10000)
        
