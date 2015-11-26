      var advanced_search_button = document.querySelector(".advanced-search-button");
      var advanced_search_block = document.querySelector(".advanced-search-block");

      advanced_search_button.addEventListener("click", function(event){
      	event.preventDefault();
      	advanced_search_block.classList.toggle("modal-content-show");
      	advanced_search_button.classList.toggle("advanced-search-button-open");
      });


      var catalog_card_btn_1 = document.querySelector(".applicants-catalog-card:nth-child(1) .catalog-card-btn");
      var card_1 = document.querySelector(".applicants-catalog-card:nth-child(1)");
      var full_card_1 = document.querySelector(".applicants-catalog-card:nth-child(1) + .for-applicants-full-card");
      var full_card_close_1 = full_card_1.querySelector(".full-card-close");

      catalog_card_btn_1.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_1.classList.add("modal-content-show");
      	card_1.classList.toggle("modal-content-close");
      });

      full_card_close_1.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_1.classList.remove("modal-content-show");
      	card_1.classList.remove("modal-content-close");
      });


      var catalog_card_btn_2 = document.querySelector(".applicants-catalog-card:nth-child(3) .catalog-card-btn");
      var card_2 = document.querySelector(".applicants-catalog-card:nth-child(3)");
      var full_card_2 = document.querySelector(".applicants-catalog-card:nth-child(3) + .for-applicants-full-card");
      var full_card_close_2 = full_card_2.querySelector(".full-card-close");

      catalog_card_btn_2.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_2.classList.toggle("modal-content-show");
      	card_2.classList.toggle("modal-content-close");
      });

      full_card_close_2.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_2.classList.remove("modal-content-show");
      	card_2.classList.remove("modal-content-close");
      });


      var catalog_card_btn_3 = document.querySelector(".applicants-catalog-card:nth-child(5) .catalog-card-btn");
      var card_3 = document.querySelector(".applicants-catalog-card:nth-child(5)");
      var full_card_3 = document.querySelector(".applicants-catalog-card:nth-child(5) + .for-applicants-full-card");
      var full_card_close_3 = full_card_3.querySelector(".full-card-close");

      catalog_card_btn_3.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_3.classList.toggle("modal-content-show");
      	card_3.classList.toggle("modal-content-close");
      });

      full_card_close_3.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_3.classList.remove("modal-content-show");
      	card_3.classList.remove("modal-content-close");
      });


      var catalog_card_btn_4 = document.querySelector(".applicants-catalog-card:nth-child(7) .catalog-card-btn");
      var card_4 = document.querySelector(".applicants-catalog-card:nth-child(7)");
      var full_card_4 = document.querySelector(".applicants-catalog-card:nth-child(7) + .for-applicants-full-card");
      var full_card_close_4 = full_card_4.querySelector(".full-card-close");

      catalog_card_btn_4.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_4.classList.toggle("modal-content-show");
      	card_4.classList.toggle("modal-content-close");
      });

      full_card_close_4.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_4.classList.remove("modal-content-show");
      	card_4.classList.remove("modal-content-close");
      });


      var catalog_card_btn_5 = document.querySelector(".applicants-catalog-card:nth-child(9) .catalog-card-btn");
      var card_5 = document.querySelector(".applicants-catalog-card:nth-child(9)");
      var full_card_5 = document.querySelector(".applicants-catalog-card:nth-child(9) + .for-applicants-full-card");
      var full_card_close_5 = full_card_5.querySelector(".full-card-close");

      catalog_card_btn_5.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_5.classList.toggle("modal-content-show");
      	card_5.classList.toggle("modal-content-close");
      });

      full_card_close_5.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_5.classList.remove("modal-content-show");
      	card_5.classList.remove("modal-content-close");
      });


      var catalog_card_btn_6 = document.querySelector(".applicants-catalog-card:nth-child(11) .catalog-card-btn");
      var card_6 = document.querySelector(".applicants-catalog-card:nth-child(11)");
      var full_card_6 = document.querySelector(".applicants-catalog-card:nth-child(11) + .for-applicants-full-card");
      var full_card_close_6 = full_card_6.querySelector(".full-card-close");

      catalog_card_btn_6.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_6.classList.toggle("modal-content-show");
      	card_6.classList.toggle("modal-content-close");
      });

      full_card_close_6.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_6.classList.remove("modal-content-show");
      	card_6.classList.remove("modal-content-close");
      });


      var catalog_card_btn_7 = document.querySelector(".applicants-catalog-card:nth-child(13) .catalog-card-btn");
      var card_7 = document.querySelector(".applicants-catalog-card:nth-child(13)");
      var full_card_7 = document.querySelector(".applicants-catalog-card:nth-child(13) + .for-applicants-full-card");
      var full_card_close_7 = full_card_7.querySelector(".full-card-close");

      catalog_card_btn_7.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_7.classList.toggle("modal-content-show");
      	card_7.classList.toggle("modal-content-close");
      });

      full_card_close_7.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_7.classList.remove("modal-content-show");
      	card_7.classList.remove("modal-content-close");
      });


      var catalog_card_btn_8 = document.querySelector(".applicants-catalog-card:nth-child(15) .catalog-card-btn");
      var card_8 = document.querySelector(".applicants-catalog-card:nth-child(15)");
      var full_card_8 = document.querySelector(".applicants-catalog-card:nth-child(15) + .for-applicants-full-card");
      var full_card_close_8 = full_card_8.querySelector(".full-card-close");

      catalog_card_btn_8.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_8.classList.toggle("modal-content-show");
      	card_8.classList.toggle("modal-content-close");
      });

      full_card_close_8.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_8.classList.remove("modal-content-show");
      	card_8.classList.remove("modal-content-close");
      });


      var catalog_card_btn_9 = document.querySelector(".applicants-catalog-card:nth-child(17) .catalog-card-btn");
      var card_9 = document.querySelector(".applicants-catalog-card:nth-child(17)");
      var full_card_9 = document.querySelector(".applicants-catalog-card:nth-child(17) + .for-applicants-full-card");
      var full_card_close_9 = full_card_9.querySelector(".full-card-close");

      catalog_card_btn_9.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_9.classList.toggle("modal-content-show");
      	card_9.classList.toggle("modal-content-close");
      });

      full_card_close_9.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_9.classList.remove("modal-content-show");
      	card_9.classList.remove("modal-content-close");
      });


      var catalog_card_btn_10 = document.querySelector(".applicants-catalog-card:nth-child(19) .catalog-card-btn");
      var card_10 = document.querySelector(".applicants-catalog-card:nth-child(19)");
      var full_card_10 = document.querySelector(".applicants-catalog-card:nth-child(19) + .for-applicants-full-card");
      var full_card_close_10 = full_card_10.querySelector(".full-card-close");

      catalog_card_btn_10.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_10.classList.toggle("modal-content-show");
      	card_10.classList.toggle("modal-content-close");
      });

      full_card_close_10.addEventListener("click", function(event){
      	event.preventDefault();
      	full_card_10.classList.remove("modal-content-show");
      	card_10.classList.remove("modal-content-close");
      });


      var resume_addition_btn = document.querySelector(".resume-addition-btn");
      var resume_addition_form = document.querySelector(".resume-addition-form");

      resume_addition_btn.addEventListener("click", function(event){
        event.preventDefault();
        resume_addition_btn.classList.add("modal-content-close");
        resume_addition_form.classList.add("modal-content-show")
      });