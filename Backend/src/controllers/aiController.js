const aiService = require('../services/aiServices')

module.exports.getResponse = async (req,res) => {
    const code = req.body.code

    if (!code){
        return res.status(400).send("Prompt Required")
    }

    const response = await aiService(code)
    res.send(response)
}