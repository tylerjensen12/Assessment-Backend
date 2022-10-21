const rubiks = require('./db.json')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = ['Fortune Not Found: Abort, Retry, Ignore?', 'Success is a journey, not a destination.', 'You are in good hands this evening.', 'Your hard work will payoff today.', 'Every wise man started out by asking many questions.', 'A friend is a present you give yourself.', 'Your life will get more and more exciting.']
        
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
      
        res.status(200).send(randomFortune)
    },

    getRubiks: (req, res) => {
        res.status(200).send(rubiks)
    },

    deleteRubiks: (req, res) =>  {
        const deleteId = req.params.id
        let index = rubiks.findIndex(element => element.id === +deleteId)
        rubiks.splice(index, 1)
        res.status(200).send(rubiks)
    },

    updateRubiks: (req, res) => {
        let type = req.body.type
        let id = req.params.id
        let index = rubiks.findIndex(element => element.id === +id)


        if(type === 'plus') {
            rubiks[index].rating++
            res.status(200).send(rubiks)
        } else if (type === 'minus') {
            rubiks[index].rating--
            res.status(200).send(rubiks)
        } else {
            res.sendstatus(400)
        }
    }
}