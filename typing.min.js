// library.js

(function(window) {
  function TypingJs(elementId, options) {
    var defaults = {
      strings: [],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 0,
      cursorChar: '|',
      cursorColor: 'black',
      loop: false,
      onComplete: null,
      onStop: null
    };

    this.options = Object.assign({}, defaults, options);
    this.element = document.getElementById(elementId);
    this.currentIndex = 0;
    this.currentString = '';
    this.isTyping = false;

    if (this.options.startDelay > 0) {
      var self = this;
      setTimeout(function() {
        self.startTyping();
      }, this.options.startDelay);
    } else {
      this.startTyping();
    }
  }

  TypingJs.prototype.startTyping = function() {
    this.isTyping = true;
    this.typeNextString();
  };

  TypingJs.prototype.typeNextString = function() {
    if (this.currentIndex >= this.options.strings.length) {
      if (this.options.loop) {
        this.currentIndex = 0;
      } else {
        this.isTyping = false;
        if (typeof this.options.onComplete === 'function') {
          this.options.onComplete();
        }
        return;
      }
    }

    var string = this.options.strings[this.currentIndex];
    this.currentIndex++;

    this.typeString(string);
  };

  TypingJs.prototype.typeString = function(string) {
    var self = this;
    var index = 0;

    var typingInterval = setInterval(function() {
      if (index < string.length) {
        self.currentString += string.charAt(index);
        self.element.innerHTML = self.currentString + '<span style="color: ' + self.options.cursorColor + '">' + self.options.cursorChar + '</span>';
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(function() {
          self.backspaceString(string);
        }, 1000); // Delay before backspacing
      }
    }, this.options.typeSpeed);
  };

  TypingJs.prototype.backspaceString = function(string) {
    var self = this;
    var index = string.length;

    var backspacingInterval = setInterval(function() {
      if (index >= 0) {
        self.currentString = string.substr(0, index);
        self.element.innerHTML = self.currentString + '<span style="color: ' + self.options.cursorColor + '">' + self.options.cursorChar + '</span>';
        index--;
      } else {
        clearInterval(backspacingInterval);
        self.typeNextString();
      }
    }, this.options.backSpeed);
  };

  TypingJs.prototype.stopTyping = function() {
    this.isTyping = false;
    if (typeof this.options.onStop === 'function') {
      this.options.onStop();
    }
  };

  // Expose the library to the global scope
  window.TypingJs = TypingJs;
})(window);
