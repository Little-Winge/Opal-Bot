module.exports = {
	name: '8ball',
	description: 'Answers a question with 8 different',
	execute(message, args) {
		const eightball = require('8ball')()
	message.channel.send(`do you need a new lease on life? ${eightball}`)
	}
};