(function(){
    var app = {
        hints: document.querySelectorAll('[data-hint]'),

        timing: function(){
            var self = this;
            setTimeout(function(){
                var t = performance.timing;
                var p = t.domInteractive - t.navigationStart;

                if (p < 2000){
                    var message = "This site has loaded in only " + (p/1000).toFixed(2) + " second!";
                    self.hints.item(0).setAttribute('data-hint', message);
                }                
            }, 0);
        },

        loadHints: function(){
            var self = this;

            (function iterate(i) {   
                setTimeout(function () {
                    self.hints.item(i).setAttribute('data-loaded','true');  
                    i++;
                    if (i < self.hints.length) iterate(i);  
                }, 200)
             })(0);
        },

        init: function(){
            this.timing();
            this.loadHints();
        }
    }

    if( app.hints ){
        return app.init();
    }
})(window);