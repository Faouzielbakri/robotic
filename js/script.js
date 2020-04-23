		function toggle(){
            var sec = document.getElementById('sec');
            var team = document.getElementById('team');
            var cours = document.getElementById('Cours');
            var about = document.getElementById('about');
            var contact = document.getElementById('contact');
            var nav = document.getElementById('navigation');
            var tog = document.getElementById('toggle');
            sec.classList.toggle('active');
            team.classList.toggle('active');
            cours.classList.toggle('active');
            about.classList.toggle('active');
            contact.classList.toggle('active');
            tog.classList.toggle('active');
            nav.classList.toggle('active');
			}
	 function  des(){
                    // - Code to execute when all DOM content is loaded. 
                  // - including fonts, images, etc.
                    setTimeout(function(){
                         const loader = document.querySelector(".concharger");
                         const balck = document.querySelector(".balck");
                         loader.className += " hidden"; // class "loader hidden"
                         balck.parentNode.removeChild(balck);
                               }, 2000)

              }
