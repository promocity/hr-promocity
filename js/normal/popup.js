      var callback_header_btn = document.querySelector(".header-contacts-btn");
      var callback_footer_btn = document.querySelector(".main-footer-btn");
      var modal_window = document.querySelector(".modal-content-window");
      var modal_bg = document.querySelector(".modal-bg"); 

      callback_header_btn.addEventListener("click", function(event){
      	event.preventDefault();
      	modal_window.classList.add("modal-content-show");
      	modal_bg.classList.add("modal-content-show");
      });

      callback_footer_btn.addEventListener("click", function(event){
      	event.preventDefault();
      	modal_window.classList.add("modal-content-show");
      	modal_bg.classList.add("modal-content-show");
      });

      modal_bg.addEventListener("click", function(event){
      	event.preventDefault();
      	modal_window.classList.remove("modal-content-show");
      	modal_bg.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
			  if (event.keyCode == 27) {

			    if (modal_window.classList.contains("modal-content-show"))
			    modal_window.classList.remove("modal-content-show");

			    if (modal_bg.classList.contains("modal-content-show"))
			    modal_bg.classList.remove("modal-content-show");	
			  }
			});