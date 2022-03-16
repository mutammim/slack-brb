# BRB for Slack

Very simple Slack app that can set your status to "be right back" for the given number of minutes. It's useful if you're having a conversation on Slack, and want to let people know you'll be away for a bit.

## Setup

Set the following environment variables:

-   `SLACK_SIGNING_SECRET`
-   `SLACK_APP_TOKEN`
-   `SLACK_BOT_TOKEN`
-   `SLACK_USER_TOKEN`
-   `SLACK_USER_ID`

With regards to the last two: yes, this app only supports one user for the time being.

Configure your Slack app to have the appropriate scopes and authorization. Ensure there's a Slack command named "brb".

Once that's done, deploy it on a server, and run `npm run start`. Enjoy!
