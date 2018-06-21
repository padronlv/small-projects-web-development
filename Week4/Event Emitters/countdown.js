var events = require('events');
var Countdown = function(time) {
    this.time = time;
    let fn = () => {
        setTimeout(() => {
            this.emit('secondElapsed', this.time);
            if (this.time > 0) {
                this.time--;
                fn();
            }
        }, 1000);
    };
    fn();


};
Countdown.prototype = new events.EventEmitter;




module.exports.Countdown = Countdown;
