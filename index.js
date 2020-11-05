const axios = require("axios")
const urls = ["https://positive-aquamarine-cotija.glitch.me"]
const urls = ["https://furry-swanky-stock.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
