(function(){

// Intro, Hints and Hints animation
    var App = {
        hints: document.querySelectorAll('[data-hint]'),

        timing: function(){
            var self = this;
            setTimeout(function(){
                var t = performance.timing;
                var p = t.domInteractive - t.navigationStart;

                if (p < 2000 && p > 0 ){
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

    if( App.hints.length ){
        App.init();
    }

// Contact form
    var ContactForm = {
        form: document.getElementsByName('contact-form').item(0),
        form_email: document.getElementsByName('email').item(0),
        form_message: document.getElementsByName('message').item(0),
        prompt: document.getElementById('prompt'),

        registerEvent: function(){
            var self = this;
            this.form.addEventListener('submit', function(e){
                e.preventDefault();

                self.submitForm(self.form_email.value, self.form_message.value);
            } );
        },

        submitForm: function(email_val, message_val){
            var self = this;
            var newMessageRecord = firebase.database().ref('messages').push().set({
                email: email_val,
                message: message_val
            })
            .then(() => {
                self.formSubmitted("Thank you. Your message was sent.", "success");
            })
            .catch((e) => {
                self.formSubmitted(e, "error");
            });
        },

        formSubmitted: function(message, type){
            // Reset form inputs
            this.form_email.value = "";
            this.form_message.value = "";

            // Display form messatge
            this.prompt.setAttribute('data-hidden','false');
            this.prompt.innerHTML = message;
            this.prompt.classList.add(type);
        },

        initFirebase: function(){
            var firebaseConfig = {
                apiKey: "AIzaSyDixcIOFL3dRLBi0bxwn9-rAdsRnogMMno",
                authDomain: "thewebsitesguy-contact.firebaseapp.com",
                databaseURL: "https://thewebsitesguy-contact.firebaseio.com",
                projectId: "thewebsitesguy-contact",
                storageBucket: "thewebsitesguy-contact.appspot.com",
                messagingSenderId: "139250666036",
                appId: "1:139250666036:web:5e7c32e8bcb85dd79dd861"
            };
            firebase.initializeApp(firebaseConfig);
        },
        
        init: function(){
            this.initFirebase();
            this.registerEvent();
        }
    }

    if( ContactForm.form ){
        ContactForm.init();
    }
})(window);