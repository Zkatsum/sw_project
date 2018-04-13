define(function (){
    // 倒计时翻转组件
    function FlipTimer(opts){
        this.opts = $.extend({
            box: '.flip-box',
            isFlip: true
        }, opts);
        this.$flipBox = $(this.opts.box);
        this.flipTimer = this.opts.datetime || this.$flipBox.attr('data-timer') || '';
        this.timer = null;

        this.init();
    }
    FlipTimer.prototype = {
        init: function (){
            var _this = this;
            this.createFlipInner();
            if (this.opts.isFlip) {
                this.endDate = new Date(this.flipTimer);
                this.endTime = this.endDate.getTime();
                setTimeout(function (){
                    _this.updateTime();
                }, 0);
            }
            // this.updateTime();
        },
        updateTime: function (){
            var _this = this;
            var nowDateTime = new Date().getTime();
            var countDownTime = this.endTime - nowDateTime;
            var times = {
                hour: this.timeToString(Math.floor(countDownTime / 1000 / 60 / 60 % 24)),
                minute: this.timeToString(Math.floor(countDownTime / 1000 / 60 % 60)),
                second: this.timeToString(Math.floor(countDownTime / 1000 % 60))
            }
            if (times.hour < 99 && countDownTime > 1){
                for (var i in times){
                    this.setTimes(i, times[i]);
                }
                this.timer = setTimeout(function (){
                    _this.updateTime()
                }, 1000);
            } else {
                typeof this.opts.timeEndCallback === 'function' && this.opts.timeEndCallback();
            }
            // console.log(times);
        },
        stopTime: function (){
            var _this = this;
            clearTimeout(this.timer);
            this.$flipBox.html('');
            setTimeout(function() {
                _this.createFlipInner();
            }, 365);
        },
        createFlipInner: function (){
            var html = [
                '<div class="flip-group">',
                    '<div class="flip-digit">',
                        '<span class="num top hour-tens-top">0</span>',
                        '<span class="num bottom hour-tens-bottom"><i>0</i></span>',
                        '<div class="flip-swapper hour-tens-swapper">',
                            '<span class="num top hour-tens-top-anim">0</span>',
                            '<span class="num bottom hour-tens-bottom-anim"><i>0</i></span>',
                        '</div>',
                    '</div>',
                    '<div class="flip-digit">',
                        '<span class="num top hour-ones-top">0</span>',
                        '<span class="num bottom hour-ones-bottom"><i>0</i></span>',
                        '<div class="flip-swapper hour-ones-swapper">',
                            '<span class="num top hour-ones-top-anim">0</span>',
                            '<span class="num bottom hour-ones-bottom-anim"><i>0</i></span>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="flip-colon">:</div>',
                '<div class="flip-group">',
                    '<div class="flip-digit">',
                        '<span class="num top minute-tens-top">0</span>',
                        '<span class="num bottom minute-tens-bottom"><i>0</i></span>',
                        '<div class="flip-swapper minute-tens-swapper">',
                            '<span class="num top minute-tens-top-anim">0</span>',
                            '<span class="num bottom minute-tens-bottom-anim"><i>0</i></span>',
                        '</div>',
                    '</div>',
                    '<div class="flip-digit">',
                        '<span class="num top minute-ones-top">0</span>',
                        '<span class="num bottom minute-ones-bottom"><i>0</i></span>',
                        '<div class="flip-swapper minute-ones-swapper">',
                            '<span class="num top minute-ones-top-anim">0</span>',
                            '<span class="num bottom minute-ones-bottom-anim"><i>0</i></span>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="flip-colon">:</div>',
                '<div class="flip-group">',
                    '<div class="flip-digit">',
                        '<span class="num top second-tens-top">0</span>',
                        '<span class="num bottom second-tens-bottom"><i>0</i></span>',
                        '<div class="flip-swapper second-tens-swapper">',
                            '<span class="num top second-tens-top-anim">0</span>',
                            '<span class="num bottom second-tens-bottom-anim"><i>0</i></span>',
                        '</div>',
                    '</div>',
                    '<div class="flip-digit">',
                        '<span class="num top second-ones-top">0</span>',
                        '<span class="num bottom second-ones-bottom"><i>0</i></span>',
                        '<div class="flip-swapper second-ones-swapper">',
                            '<span class="num top second-ones-top-anim">0</span>',
                            '<span class="num bottom second-ones-bottom-anim"><i>0</i></span>',
                        '</div>',
                    '</div>',
                '</div>'
            ].join('');
            this.$flipBox.html(html);
        },
        setTimes: function (type, time){
            this.setTime(this.getPreviousTime(type + '-tens'), time[0], type + '-tens')
            this.setTime(this.getPreviousTime(type + '-ones'), time[1], type + '-ones')
        },
        setTime: function (previousTime, newTime, type){
            if (previousTime === newTime) {
                return;
            }
            setTimeout(function() {
                $('.' + type + '-top', this.$flipBox).text(newTime);
            }, 150);
            setTimeout(function() {
                $('.' + type + '-bottom > i', this.$flipBox).text(newTime);
            }, 365);
            this.animateTime(previousTime, newTime, type);
        },
        animateTime: function (previousTime, newTime, type){
            var top, bottom, _this = this;
            top = $('.' + type + '-top-anim', this.$flipBox);
            bottom = $('.' + type + '-bottom-anim', this.$flipBox);
            top.show();
            bottom.show();
            top.text(previousTime);
            bottom.find('i').text(newTime);
            this.animateNumSwap(type);
            setTimeout(function() {
                _this.hideNumSwap(type);
            }, 365);
        },
        animateNumSwap: function(type) {
            $('.' + type + '-swapper').addClass('animate');
        },
        hideNumSwap: function(type) {
            $('.' + type + '-swapper').removeClass('animate');
            $('.' + type + '-top-anim', this.$flipBox).hide();
            $('.' + type + '-bottom-anim', this.$flipBox).hide()
        },
        getPreviousTime: function (type){
            return $('.' + type + '-top', this.$flipBox).text();
        },
        timeToString: function (currentTime){
            var t;
            t = currentTime.toString();
            if (t.length === 1) {
                return '0' + t;
            }
            return t;
        }
    };
    return FlipTimer;
});