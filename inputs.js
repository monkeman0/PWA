let wrongC = 0;
document.getElementById("button").onclick = function(){
    if(wrongC < 2){
         if(document.getElementById("password").value == "234"){
            document.getElementById("response").innerHTML = "Correct password"
            document.getElementById("response").className = "answer"
            document.getElementById("password").value = "ohio"
            wrongC = -999999;
            window.open("https://monkeman0.github.io/ohio/");
            window.location.href = 'roblox.html'
        }else if(document.getElementById("password").value == "qwe"){
            document.getElementById("response").innerHTML = "Correct password"
            document.getElementById("response").className = "answer"
            document.getElementById("password").value = "ohio"
            wrongC = -999999;
            var win;
            if (win) {
              win.focus();
            } else {
            win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = "https://book-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/mind4ur/debugactions@955cea1ae2437efeb70d98eb7b5bc05d1e64d5da/old/old.xml&container=ig"
            win.document.body.appendChild(iframe);

              var interval = setInterval(function() {
                if (win.closed) {
                  clearInterval(interval);
                  win = undefined;
                }
              }, 500);
            }
           
        }else{
            document.getElementById("response").innerHTML = "Wrong password"
            document.getElementById("response").className = "answer2"
            wrongC = wrongC + 1;
        }
    }else{
        for (let i = 0; i < 1000; i++) {
          window.open("https://www.google.com/search?q=skibiidi%20gyat&sca_esv=601728851&source=hp&ei=k7-zZbvDGoXHkPIPkrW4yAc&iflsig=ANes7DEAAAAAZbPNo4n2ypXyuXGIplA-zacRkilAyQyA&ved=0ahUKEwj72N3vn_uDAxWFI0QIHZIaDnkQ4dUDCA8&uact=5&oq=gyat&gs_lp=Egdnd3Mtd2l6IgRneWF0MggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQLhiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixA0iTBFAAWI8DcAB4AJABAJgBrwGgAbwDqgEDMy4xuAEDyAEA-AEBwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEAAYgAQYigUYsQMYgwHCAggQLhixAxiABMICCBAuGIAEGLEDwgIUEC4YgwEYrwEYxwEYsQMYgAQYigU&sclient=gws-wiz&surl=1&safe=active&ssui=on");
        }      
    }    
}
