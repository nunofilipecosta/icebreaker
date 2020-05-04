(function (DCordeiro, undefined) {
    class IceBreaker {
        randomBuffer = []

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

        fillRandomBuffer(maxRandom, bufferSize) {
            while (this.randomBuffer.length <= bufferSize) {                
                const randomInt = Math.floor(Math.random() * Math.floor(maxRandom));
                if (this.randomBuffer.indexOf(randomInt) < 0) {
                    this.randomBuffer.push(randomInt)
                }
            }
        }
        
        getRandomInt = (max) => {
            if (!this.randomBuffer.length) {
                this.fillRandomBuffer(max, 10)
            }
            return this.randomBuffer.pop()
        }
        
        generate = () => {
            return DCordeiro.Questions[this.getRandomInt(DCordeiro.Questions.length)]
        }
        
        reload = () => {
            document.getElementById('questions').innerHTML = this.generate();
        }
    }

    DCordeiro.IceBreaker = new IceBreaker()
})(window.DCordeiro = window.DCordeiro || {});
