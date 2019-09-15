(function(){
    var app = {
        hints: document.querySelectorAll('[data-hint]'),

        timing: function(){
            var self = this;
            setTimeout(function(){
                var t = performance.timing;
                var p = t.domInteractive - t.navigationStart;
                var message = "Don't let your users wait for ever.";

                if (p < 500){
                    message = "It took only " + p + " miliseconds to load this site!";
                } else if (p < 2000){
                    message = "This site has loaded in " + (p/1000).toFixed(2) + " second!";
                }

                // Inject in DOM
                self.hints.item(0).setAttribute('data-hint', message);
            }, 0);
        },

//         // Returns true if the input text value matches the content
//         hasPhrase: function(block, element, query){

//             var text = block.querySelector(element);
//             if(text){
//                 return text.innerHTML.toLowerCase().indexOf(query)>=0
//             } else {
//                 return false
//             }
//         },

//         updateCount: function(c){
//             switch(c){
//                 case 0 : return "Sorry, we haven't got this record yet. <a href=\"https://github.com/proochster/shortcode/issues\">Submit a request here</a>";
//                 case 1 : return "<strong>1</strong> result found";
//                 default : return "<strong>" + c + "</strong> results found";
//             }
//         },

//         searchLoop: function(){
                
//             var self = this;
            
//             // Reset search counter
//             counter = 0;
            
//             // Searched term value
//             var inputPhrase = this.searchInput.value.toLowerCase();
            
//             // Loop through the list of shortcodes
//             this.shortCodes.forEach(function(code){
                
//                 // Reset display of the shortcodes
//                 code.setAttribute('data-display','false');
                
//                 // Look for the searched phrase in title and desccription
//                 if(self.hasPhrase(code,'.sc__title',inputPhrase) || self.hasPhrase(code,'.sc__text',inputPhrase)){
//                     code.setAttribute('data-display','true');
                    
//                     // Count elements that match the searched term
//                     counter++;                    
//                 }
//             });

//             // Update the counter after the search is finished
//             this.searchCount.innerHTML = this.updateCount(counter);
//         },

//         // Search shortcode
//         search: function(){

//             var self = this;
//             var counter = self.shortCodes.length;
//             self.searchCount.innerHTML = self.updateCount(counter);
          
//             this.searchInput.onkeyup = function(){
                
//                 self.searchLoop();
//                 self.updateSearchIcon();
//                 self.clearSearch();
//             }
//         },

//         updateSearchIcon: function(){

//             if (this.searchInput.value) {
//                 this.searchInput.nextElementSibling.classList.add('search__clear');
//             } else {
//                 this.searchInput.nextElementSibling.classList.remove('search__clear');
//             }
//         },

//         clearSearch: function(){

//             var self = this;

//             if(this.searchWrapper.querySelector('.search__clear')){
//                 this.searchWrapper.querySelector('.search__clear').onclick = function(){
//                     self.searchInput.value = '';
//                     self.searchLoop();
//                     self.updateSearchIcon();
//                 };
//             }
//         },

        init: function(){
            this.timing();
        }
    }

    if( app.hints ){
        return app.init();
    }
})(window);