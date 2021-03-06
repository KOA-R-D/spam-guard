const mentionActions = require('../eventActions/mentionSpam.js')

module.exports = async (client, message) => {

	if (!message.guild || message.author.bot) return;
	const args = message.content.split(/\s+/g); // Return the message content and split the prefix.
	const command =
		message.content.startsWith(config.prefix) &&
		args.shift().slice(config.prefix.length).toLowerCase();

	if (command) {
		const commandfile =
			client.commands.get(command) ||
			client.commands.get(client.aliases.get(command));

		if (commandfile) {
			commandfile.execute(client, message, args).then(() => {
				message.delete(1500);
			}); // Execute found command
		}
	}
    mentionActions.preventMentionSpam(message);
    
};
