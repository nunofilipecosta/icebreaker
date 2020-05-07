(function (icebreaker, undefined) {
    const USED_QUESTIONS_BUFFER_MAX_SIZE = 10;

    class IceBreaker {
        usedQuestionsBuffer = []

        start = () => {
            document.getElementById('start').style.display='none';
            document.getElementById('play').style.display='flex';
            document.getElementById('header').classList.add('small');
        }

        restart = () => {
            document.getElementById('play').style.display='none';
            document.getElementById('start').style.display='flex';
            document.getElementById('header').classList.remove('small');
        }
        
        getRandomInt = (max) => { 
            let bufferContainsRandomInt = false
            let randomInt = -1            

            do {
                randomInt = Math.floor(Math.random() * Math.floor(max));
                bufferContainsRandomInt = this.usedQuestionsBuffer.indexOf(randomInt) >= 0
                if (!bufferContainsRandomInt) {
                    this.usedQuestionsBuffer.push(randomInt)
                }
            } while(bufferContainsRandomInt)

            if (this.usedQuestionsBuffer.length > USED_QUESTIONS_BUFFER_MAX_SIZE) {
                this.usedQuestionsBuffer = this.usedQuestionsBuffer.slice(1, this.usedQuestionsBuffer.length)
            }

            return randomInt
        }
        
        generate = () => {
            return icebreaker.Questions[this.getRandomInt(icebreaker.Questions.length)]
        }
        
        reload = () => {
            document.getElementById('questions').innerHTML = this.generate();
        }
    }

    icebreaker.IceBreaker = new IceBreaker()
})(window.icebreaker = window.icebreaker || {});
