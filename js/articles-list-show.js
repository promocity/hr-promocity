			var articles_list_btn = document.querySelector(".articles-list-btn");
      var articles_list_full = document.querySelector(".articles-list-full")

      articles_list_btn.addEventListener("click", function(event){
        event.preventDefault();
        articles_list_btn.classList.add("articles-list-btn-close")
        articles_list_full.classList.add("articles-list-full-show");
      });