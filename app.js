const { App } = require("@slack/bolt");

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	socketMode: true,
	appToken: process.env.SLACK_APP_TOKEN,
});

(async () => {
	await app.start(process.env.PORT || 3000);

	console.log("⚡️ Bolt app is running!");

	app.command("/brb", async ({ command, ack, respond }) => {
		await ack();

		if (command.text) console.log(command.text);

		if (command.user_id == process.env.SLACK_USER_ID) {
			await app.client.users.profile.set({
				token: process.env.SLACK_USER_TOKEN,
				profile: {
					status_text: "be right back",
					status_expiration:
						Math.round(+new Date() / 1000) +
						60 * parseInt(command.text),
				},
			});
		}
	});
})();
