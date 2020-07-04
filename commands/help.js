const Messages = require('../messages');

/**
 * Show help information.
 */
function helpCommand(msg) {
    msg.reply(helpText());
    return Promise.resolve();
}
helpCommand.command = 'help';
helpCommand.helpText = Messages.helpText.help;

const helpText = () => {
    const allCommands = require('./all').commands;
    return `${Messages.helpGreeting}:\n\n`
        + allCommands
            .filter(cmd => !cmd.hidden)
            .map(cmd => `**${cmd.command}**: ${cmd.helpText}`).join('\n');
};

module.exports = helpCommand;
require('./all').registerCommand(helpCommand);
