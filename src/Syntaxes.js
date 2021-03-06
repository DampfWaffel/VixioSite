export default {
	Conditions: [
		{
			name: "Bot paused",
			description: "Tell if a bot is paused or not.",
			patterns: [
				"%bot/string% is paused [in %guild%]",
				"%bot/string% (is|are)(n't| not) paused [in %guild%]",
			],
			example: "if event-bot isn't paused:"
		},
		{
			name: "Bot is playing",
			description: "Check if a bot is playing something in a guild",
			patterns: [
				"%bot/string% is playing [in %guild%]",
				"%bot/string% (is|are)(n't| not) playing [in %guild%]",
			],
			example: "if event-bot is playing"
		},
		{
			name: "Member is deafened",
			description: "If the guild modifier is included, this passes if the member is deafened via a guild admin.If it isn't included, it passes if the user has either deafened themselves, or was deafened by an admin",
			patterns: [
				"%members% (is|are) [<guild>] deafened",
				"%members% (is|are)(n't| not) [<guild>] deafened",
			],
			example: "discord command $checkGuildMute <member>:,\ttrigger:,\t\tif arg-1 is guild muted:,\t\t\treply with \"%arg-1% is guild muted!\",\t\t\tstop,\t\treply with \"%arg-1% is not guild muted!\""
		},
		{
			name: "Emote is Animated",
			description: "Check if a emote is animated.",
			patterns: [
				"%emotes% (is|are) animated",
				"%emotes% (is|are)(n't| not) animated",
			],
			example: "discord command $emotes:,\ttrigger:,\t\tloop emotes of event-guild:,\t\t\tif loop-value is animated:,\t\t\t\tadd loop-value to {_animated::*},\t\t\telse:,\t\t\t\tadd loop-value to {_non::*},\t\tcreate embed:,\t\t\tset the author info of the embed to author named \"Emotes %reaction \"\":smile:\"\"%\" with no url and no icon,\t\t\tset the description of the embed to \"%name of event-guild% has %size of {_non::*}% regular emotes and %size of {_animated::*}% animated emotes!!\",\t\t\tset the colour of the embed to Purple,\t\t\tadd field named \"Local emotes (1/1)\" with value \"%{_non::*}%\" to embed,\t\t\tadd field named \"Animated emotes (1/1)\" with value \"%{_animated::*}%\" to embed,\t\tsend the last created embed to event-channel with event-bot"
		},
		{
			name: "Member Has Permission",
			description: "Check if a member has a permission, can also check if they have a permission in a certain GuildChannel.",
			patterns: [
				"%member% has permission %permission% [in %-channel%]",
				"%user% has permission %permission% [in %guild/channel%]",
				"%member% (doesn[']t|does not) have permission %permission% [in %-channel%]",
				"%user% (doesn[']t|does not) have permission %permission% [in %guild/channel%]",
			],
			example: "if event-member has permission voice connect"
		},
		{
			name: "Member has role",
			description: "Check if a member either does, or does not have either a specific %role% or a role with a certain name.",
			patterns: [
				"%member% (has|have) [the] role %role%",
				"%member% (does[n[']t]|does not) have [the] role %role%",
				"%member% (has|have) [the] role [named] %string%",
				"%member% (does[n[']t]|does not) have [the] role [named] %string%",
			],
			example: "discord command $role <member> <string>:,\ttrigger:,\t\tif arg-1 has role named arg-2:,\t\t\treply with \"%arg-1% does have a role named %arg-2%\",\t\t\tstop,\t\treply with \"%arg-1% does not have a role named %arg-2%\""
		},
		{
			name: "Member is muted",
			description: "If the guild modifier is included, this passes if the member is muted via a guild admin.If it isn't included, it passes if the user has either muted themselves, or was muted by an admin",
			patterns: [
				"%members% (is|are) [<guild>] muted",
				"%members% (is|are)(n't| not) [<guild>] muted",
			],
			example: "discord command $checkGuildMute <member>:,\ttrigger:,\t\tif arg-1 is guild muted:,\t\t\treply with \"%arg-1% is guild muted!\",\t\t\tstop,\t\treply with \"%arg-1% is not guild muted!\""
		},
		{
			name: "NSFW",
			description: "Lets you check if a channel builder or text channel is nsfw/sfw.",
			patterns: [
				"[the] nsfw state[s] of %channelbuilders/textchannels%",
				"%channelbuilders/textchannels%'[s] nsfw state[s]",
			],
			example: "discord command nsfw:,\tprefixes: $,\ttrigger:,\t\tif event-channel is nsfw:,\t\t\treply with \"%event-channel% is nsfw\""
		},
		{
			name: "Attachment is Image",
			description: "Check if a message attachment is an image.",
			patterns: [
				"%attachments% (is|are) [a[n]] image[s]",
				"%attachments% (is|are)(n't| not) [a[n]] image[s]",
			],
			example: "on guild message received:,\tset {_} to attachment of event-message,\tif {_} is set:,\t\tif {_} is not an image:,\t\t\tbroadcast \"%attachment url of {_}%\""
		},
		{
			name: "Create channel scope",
			description: "Provides a easy way to create either a text channel or a voice channel.",
			patterns: [
				"(make|create) [text] channel",
				"(make|create) voice channel",
			],
			example: "command /channel:,\ttrigger:,\t\tcreate text channel:,\t\tset name of the channel to \"Testing\",\t\tset {guild} to guild with id \"56156156615611\",\t\tset nsfw state of the channel to true,\t\tcreate the channel in {guild} with \"Jewel\""
		},
		{
			name: "Make Embed",
			description: "Provides a pretty and easy way of making a new embed with a bunch of different attributes",
			patterns: [
				"(make|create) (embed|embed %-embedbuilder%)",
				"(make|create) (embed|embed %-embedbuilder%) and send [(it|the embed)] to %users/channels% [(with|using) %bot/string%] [and store (it|the message) in %-objects%]",
				"(make|create) (embed|embed %-embedbuilder%) and reply with [(it|the embed)] [and store (it|the message) in %-objects%]",
			],
			example: "command $scope:,\ttrigger:,\t\tmake a new embed:,\t\t\tset color of embed the embed to red,\t\t\tset url of the embed to \"https://google.com\",\t\t\tset title of the embed to \"Google!\",\t\tset {_embed} to last made embed"
		},
		{
			name: "Create Invite to",
			description: "Create an invitation to a channel within a guild.",
			patterns: [
				"(make|create) [a[n]] invite to %channel% [(with|as) %bot/string%]",
			],
			example: "discord command invite:,\tprefixes: /,\ttrigger:,\t\tcreate invite to event-channel:,\t\t\tset the max usage of the invite to 1,\t\treply with \"Done!\""
		},
	],
	Effects: [
		{
			name: "Force Play",
			description: "This will force a bot to play a track and set the current playing track to be next in the queue. If the input isn't a single track or not able to be found it will not affect the bot.",
			patterns: [
				"force [%bot/string% to] play %string/track% [in %guild%]",
			],
			example: "force play \"some youtube url im too lazy to go find one\" in event-guild"
		},
		{
			name: "Join voice channel",
			description: "Join a voice channel with a bot",
			patterns: [
				"join %voicechannel% [with %bot/string%]"
			],
			example: "join event-channel"
		},
		{
			name: "Leave Voice Channel",
			description: "Make a bot leave it's voice channel in a guild.",
			patterns: [
				"make %bots/strings% (leave|disconnect from) (voice|vc) [in %guild%]",
			],
			example: "discord command leave:,\tprefixes: ##,\ttrigger:,\t\tif voice channel of event-bot in event-guild is set:,\t\t\tmake event-bot leave vc,\t\t\treply with \"I've left my voice channel\",\t\t\tstop,\t\treply with \"I'm not currently in any voice channels!\""
		},
		{
			name: "Pause track",
			description: "Pause a track a bot is playing in a guild, if it is already paused nothing happens",
			patterns: [
				"pause [the] (track|song) %bot/string% is playing [in %guild%]",
			],
			example: "pause the track event-bot is playing in event-guild"
		},
		{
			name: "Play audio",
			description: "Play a specific audio track or attempt to load something from a URL",
			patterns: [
				"play %strings/tracks% [in %guild%] [with %bot/string%]",
			],
			example: "play \"https://www.youtube.com/watch?v=elwTgpHlty0\" in guild with id \"2199673352656165156\" with \"Jewel\""
		},
		{
			name: "Resume track",
			description: "Resume a track a bot is playing in a guild, if the bot is not paused then nothing happens",
			patterns: [
				"resume [the] (track|song|music) %bot/string% (is playing|has paused) [in %guild%]",
			],
			example: "resume the track event-bot is playing"
		},
		{
			name: "Search Audio",
			description: "Lets you search various music sites for a query. You can either access the results via the search results expression, or store them in a variable.",
			patterns: [
				"search (youtube|soundcloud) for %strings% [and store the results in %listvariable%]"
			],
			example: "on join:,\tsearch youtube for \"%player%\" and store the results in {_results::*},\tif {_results::*} is set:,\t\tmessage \"Did you know there are %size of {_results::*}% videos about you on YouTube?\" to player"
		},
		{
			name: "Shuffle Queue",
			description: "This will randomize a bots queue",
			patterns: [
				"shuffle [the] queue of %bot/string% [in %guild%]",
			],
			example: "shuffle the queue of event-bot in event-guild"
		},
		{
			name: "Skip track",
			description: "Skip the current track a bot is playing in a guild",
			patterns: [
				"skip [the] (track|song)[s] %bot/string% is playing [in %guilds%]",
			],
			example: "skip track event-bot is playing in event-guild"
		},
		{
			name: "Stop track",
			description: "Stop a track a bot is playing in a guild",
			patterns: [
				"stop [the] (track|song) %bot/string% is playing [in %guild%]",
			],
			example: "stop the track event-bot is playing"
		},
		{
			name: "Mark Bot as Gametype",
			description: "Set a bot's game to a certain gametype. This can be: streaming/watching/playing/listening. For streaming you must include a valid twitch URL to stream to and a title.",
			patterns: [
				"mark %bot/string% as %gametype% [to] [with title] %string% [(and|on|with|at) url %-string%]",
			],
			example: "discord command watch <text>:,\tprefixes: ##,\ttrigger:,\t\tmark event-bot as watching arg-1,discord command play <text>:,\tprefixes: ##,\ttrigger:,\t\tmark event-bot as playing arg-1,discord command stream <text> <text>:,\tprefixes: ##,\ttrigger:,\t\tmark event-bot as streaming arg-1 with url arg-2,discord command listen <text>:,\tprefixes: ##,\ttrigger:,\t\tmark event-bot as listening to arg-1"
		},
		{
			name: "Retrieve User by ID",
			description: "Retrieve a User via their ID on Discord. This should be a fallback option! Use the user with id expression to get users normally. This searches all of discord, not just your accessible users.",
			patterns: [
				"(retrieve|grab) [the] user with id %string% [and store (them|the user) in %-objects%]",
			],
			example: "retrieve user with id \"65156156156156\" and store them in {_message}"
		},
		{
			name: "Logout of Bot",
			description: "Shutdown or logout of a bot, destroys the instance and closes the connection",
			patterns: [
				"(logout [of]|shutdown) %bot/string%",
			],
			example: "discord command $shutdown:,\ttrigger:,\t\tshutdown event-bot"
		},
		{
			name: "Grab Messages",
			description: "Grab a number of messages from a text channel",
			patterns: [
				"grab [the] last %number% messages in %textchannel%"
			],
			example: "discord command $purge <number>:,\texecutable in: guild,\ttrigger:,\t\tset {_num} to arg-1 ,\t\tgrab the last {_num} messages in event-channel,\t\tpurge the grabbed messages with event-bot,\t\tset {_error} to last vixio error ,\t\tif {_error} is set:,\t\t\treply with \"I ran into an error! `%{_error}%`\",\t\t\tstop,\t\treply with \"I have successfully purged %arg-1% messages\""
		},
		{
			name: "Grab Pinned Messages",
			description: "Grab the pinned messages of a channel or a dm with a user. Can be gotten with the last grabbed pinned messages expression.",
			patterns: [
				"(retrieve|grab) pinned messages (of|in|with) %textchannel/user%"
			],
			example: "grab pinned messages of event-channel"
		},
		{
			name: "Pin Message",
			description: "Pin a message in a channel.",
			patterns: [
				"pin %messages% [with %bot/string%]",
			],
			example: "pin event-message in event-channel"
		},
		{
			name: "Send typing",
			description: "Make a bot start typing in a text channel.",
			patterns: [
				"send typing in %textchannel/user% [with %bot/string%]"
			],
			example: "send typing in event-channel"
		},
		{
			name: "Login",
			description: "Login to a bot account with a token",
			patterns: [
				"(login|connect) to %string% (using|with) [the] name %string%",
			],
			example: "on skript load:,\tlogin to \"MjM3MDYyNzE0MTY0MjQ4NTc2.DFfAvg.S_YgY26hqyS1SgNvibrpcdhSk94\" with the name \"VixioButler\""
		},
		{
			name: "Change NSFW",
			description: "Lets you mark a text channel as sfw/nsfw",
			patterns: [
				"(make|mark) %textchannels% [as] [<n>]sfw (with|using) %bot/string%"
			],
			example: "discord command $nsfw <boolean>:,\ttrigger:,\t\tif arg-1 is true:,\t\t\tmark event-channel as nsfw with event-bot,\t\t\tstop,\t\tmark event-channel as sfw with event-bot"
		},
		{
			name: "Purge Messages",
			description: "Bulk delete a bunch of messages.",
			patterns: [
				"purge %messages% with %bot/string%",
			],
			example: "discord command $purge <number>:,\texecutable in: guild,\ttrigger:,\t\tset {_num} to arg-1 ,\t\tgrab the last {_num} messages in event-channel,\t\tpurge the grabbed messages with event-bot,\t\tset {_error} to last vixio error ,\t\tif {_error} is set:,\t\t\treply with \"I ran into an error! `%{_error}%`\",\t\t\tstop,\t\treply with \"I have successfully purged %arg-1% messages\""
		},
		{
			name: "Change TTS",
			description: "Lets you enable or disable text to speech for message builders",
			patterns: [
				"(enable|disable) t[ext ]t[o ]s[peech] for %messagebuilders%"
			],
			example: "enable tts for {_message builder}"
		},
		{
			name: "Updates",
			description: "Pauses or resumes update's to a message's data. For example, if updates are pausedand a new reaction is added to the paused message, the message will still showas if it doesn't have that reaction.",
			patterns: [
				"<pause|resume> updates (for|to) %messages%",
			],
			example: "on guild message receive:,\tpause updates for event-message"
		},
		{
			name: "Send file",
			description: "Send a file to a channel or a user. You can input a direct URL to the file or a direct path to the local image/file.",
			patterns: [
				"upload %string% [with (message|embed) %-message/string%] to %user/channel% [with %bot/string%] [and store (it|the message) in %-objects%]",
			],
			example: "discord command $upload [<text>] [<text>]:,\ttrigger:,\t\tif arg-1 is not set:,\t\t\tupload \"https://cdn.discordapp.com/attachments/236641445363056651/482328479288000513/e8873489-b8e8-41f0-bfdf-1af0e7f8689a.png\" to event-channel,\t\t\tstop,\t\tif arg-2 is not set:,\t\t\tupload arg-1 to event-channel,\t\t\tstop,\t\tupload arg-1 with message arg-2 to event-channel"
		},
		{
			name: "Create channel",
			description: "Create either a voice channel or a text channel as requested.",
			patterns: [
				"create text[(-| )]channel [named] %string% [in %guild%] [(as|with) %bot/string%]",
				"create voice[(-| )]channel [named] %string% [in %guild%] [(as|with) %bot/string%]",
			],
			example: "discord command $create <text> <text>:,\ttrigger:,\t\tif arg-1 contains \"voice\":,\t\t\tcreate voice channel named arg-2,\t\t\tstop,\t\telse if arg-1 contains \"text\":,\t\t\tcreate text channel named arg-2,\t\t\tstop,\t\treply with \"The first argument must either be \"\"text\"\" or \"\"voice\"\"\""
		},
		{
			name: "Clone Channel",
			description: "Clone a existing channel into either a new guild or the current guild under a new name.",
			patterns: [
				"clone %channel% [in[to] %guild%] [with [the] [new] name %-string%] [(with|as) %bot/string%] [and store (it|the channel) in %-objects%]",
			],
			example: "clone event-channel with the new name \"Rawr!\""
		},
		{
			name: "Create Channel Builder",
			description: "Create a channel created with the create channel scope",
			patterns: [
				"create %channelbuilder% in %guild% [(with|as) %bot/string%] [and store (it|the channel) in %-objects%]",
			],
			example: "discord command ##create:,\ttrigger:,\t\tcreate voice channel:,\t\t\tset the name of the channel to \"{@bot}\",\t\t\tset the bitrate of the channel to 69,\t\t\tcreate the channel in event-guild"
		},
		{
			name: "Create emote",
			description: "Create a emote in a specific guild, the first %string% can either be a direct url or a direct local path to a file.",
			patterns: [
				"create emote %string% with [the] name %string% [in %guild%] [with %bot/string%]",
			],
			example: "discord command $createEmote <text> <text>:,\ttrigger:,\t\tcreate emote arg-1 with name arg-2 ,\t\twait 2 seconds,\t\treply with \"%reaction arg-2%\""
		},
		{
			name: "Delete Discord Entity",
			description: "Delete any deletable discord entity",
			patterns: [
				"delete discord entit(y|ies) %messages/channels/roles/guilds/categories/emote% [with %bot/string%]",
			],
			example: "delete discord entity event-channel"
		},
		{
			name: "Bans list",
			description: "Retrieve all of the banned users in a guild. The results are stored in the retrieved bans expression",
			patterns: [
				"(retrieve|grab) [the] (bans|ban list) of %guild%",
			],
			example: "discord command $bans:,\ttrigger:,\t\tgrab bans of event-guild,\t\tset {_errors} to the last vixio error,\t\tif {_errors} is set:,\t\t\treply with \"I ran into an error! %{_errors}%\",\t\t\tstop,\t\treply with \"Here are the current bans: `%grabbed bans%`\""
		},
		{
			name: "Make Bot leave Guild",
			description: "Force a bot to leave a guild.",
			patterns: [
				"make %bot/string% leave %guild%",
			],
			example: "make event-bot leave event-guild"
		},
		{
			name: "Move Member to Voice Channel",
			description: "Move a member to a different voice channel, they must already be in a voice channel to be moved.",
			patterns: [
				"move %member% to %voicechannel% [with %bot/string%]"
			],
			example: "discord command $move <member> <string>:,\ttrigger:,\t\tset {_voiceChannel} to voice channel with id arg-2,\t\tif {_voiceChannel} is not set:,\t\t\treply with \"I could not find a voice channel by that id\",\t\t\tstop,\t\tmove arg-1 to {_voiceChannel}"
		},
		{
			name: "Member Permission in GuildChannel",
			description: "Allow, or deny a role or a member permissions to a channel",
			patterns: [
				"(allow|1�deny) %roles/members% [the] permission[s] %permissions% [in %channels%] [with %bot/string%]",
			],
			example: "discord command grant <text> <permission>:,\ttrigger:,\t\tif id of event-guild is not \"219967335266648065\":,\t\t\tstop,\t\tset {_role} to role with id arg-1,\t\tallow {_role} the permission arg-2 in event-channel,\t\tdeny the public role of event-guild the permission arg-2 in event-channel"
		},
		{
			name: "Create Invite to Channel",
			description: "Create a invitation to a channel. Can store the newly created invite with the storage option or use the last created invite expression.",
			patterns: [
				"create a[n] (invite|invitation) to %channel% [with %bot/string%] [and store it in %-objects%]",
			],
			example: "discord command invite:,\ttrigger:,\t\tcreate an invite to event-channel,\t\treply with \"%the last created invite%\""
		},
		{
			name: "Retrieve Invites of",
			description: "Retrieve invites in a Guild or a Channel in a Guild. Must use the last retrieved invites expression to get them after calling this.",
			patterns: [
				"(grab|retrieve) the invite(s| link[s]) of %guild/channel%",
			],
			example: "discord command test:,\tprefixes: /,\ttrigger:,\t\tretrieve the invites of event-guild,\t\treply with \"%last grabbed invites%\""
		},
		{
			name: "Ban user",
			description: "Ban either a user, a member, or a user by their ID",
			patterns: [
				"ban %users/strings% from %guild% [(due to|with reason|because of) %-string%] [and delete %-number% days [worth] of messages] [(with|as) %bot/string%]",
			],
			example: "command /ban <text>:,\ttrigger:,\t\tban arg-1 from guild with id \"622156156316116151\" due to \"Not following discord rules\" as \"Jewel\""
		},
		{
			name: "Deafen user",
			description: "Lets you deafen or undeafen a member/user. They must be in a voice channel for this to take effect.",
			patterns: [
				"[<un>]deafen %members% [(with|using) %bot%]",
			],
			example: "discord command $deaf <member>:,\ttrigger:,\t\tif voice channel of arg-1 is not set:,\t\t\treply with \"You cannot deaf or undeafen someone who is not in a voice channel\",\t\t\tstop,\t\tif arg-1 is not guild deafened:,\t\t\tdeafen arg-1 with event-bot,\t\t\treply with \"%arg-1% is now deaf\",\t\telse:,\t\t\tundeafen arg-1 with event-bot,\t\t\treply with \"%arg-1% is no longer deafened\""
		},
		{
			name: "Kick user",
			description: "Kick either a user, a member, or a user by their ID",
			patterns: [
				"kick %users/strings% from %guild% [(due to|with reason|because of) %-string%] [(with|as) %bot/string%]",
			],
			example: "command /kick <text>:,\ttrigger:,\t\tkick arg-1 from guild with id \"622156151\" due to \"Not following discord rules\" as \"Jewel\""
		},
		{
			name: "Mute/UnMute a User/Member",
			description: "Either guild mute a member, or guild unmute a member.",
			patterns: [
				"[<un>]mute %members% [(with|using) %bot%]",
			],
			example: "discord command $mute <member>:,\ttrigger:,\t\tif voice channel of arg-1 is not set:,\t\t\treply with \"You cannot mute or unmute someone who is not in a voice channel\",\t\t\tstop,\t\tif arg-1 is not guild muted:,\t\t\tmute arg-1 with event-bot,\t\t\treply with \"%arg-1% is now muted\",\t\telse:,\t\t\tunmute arg-1 with event-bot,\t\t\treply with \"%arg-1% is no longer muted\""
		},
		{
			name: "Unban user from Guild",
			description: "Un-ban a user from a guild as a bot.",
			patterns: [
				"unban %users/strings% from %guild% [(with|as) %bot/string%]",
			],
			example: "command /ban <text>:,\ttrigger:,\t\tunban arg-1 from event-guild"
		},
		{
			name: "Append String to Message Buillder",
			description: "Add text to a Message Builder. If you include the word 'line' then it will append a new line for you after your text.",
			patterns: [
				"append [line] %strings% to %messagebuilder%"
			],
			example: "command /build:,\ttrigger:,\t\tset {e} to a new message builder,\t\tset text of {e} to \"Hello\",\t\tappend \" World!\" to {e},broadcast \"The final product is: %text of {e}%\""
		},
		{
			name: "Add Reaction to Message",
			description: "Add a reaction to a message, can get a reaction with the reaction %string% expression",
			patterns: [
				"add %emotes% to %messages% [with %bot/string%]",
			],
			example: "add reaction \"smile\" to event-message with \"Jewel\""
		},
		{
			name: "Edit Message",
			description: "A more natural way to edit a message. Don't forget that you can only edit your own messages.",
			patterns: [
				"edit %messages% to (show|say) %message/string%",
			],
			example: "discord command $edit:,\ttrigger:,\t\treply with \"Ping\" and store it in {_msg},\t\tedit {_msg} to show \"Pong!\""
		},
		{
			name: "Remove Emote by User",
			description: "Remove a specific users emote from a message, this is for removing a users reacted emote in the reaction add event mostly.",
			patterns: [
				"remove %emotes% added by %user% from %message% [with %bot/string%]",
			],
			example: "on reaction added:,\tremove event-emote added by event-user from event-message"
		},
		{
			name: "Reply with",
			description: "Reply with a message in a event",
			patterns: [
				"reply with %messages/strings% [and store (it|the message) in %-objects%]",
			],
			example: "reply with \"Hello %mention tag of event-user%\""
		},
		{
			name: "Retrieve message with id",
			description: "Get a Message via it's ID from a Guild/TextChannel",
			patterns: [
				"retrieve message [with id] %string% [(in|from) %channel/user%]",
			],
			example: "discord command $addReaction <text> <text>:,\ttrigger:,\t\tretrieve message with id arg-1 ,\t\tif last retrieved message is not set:,\t\t\treply with \"Could not find a message with that id!\",\t\t\tstop,\t\tadd reaction arg-2 to reactions of last retrieved message with event-bot"
		},
		{
			name: "Send Message",
			description: "Send a message to either a user or a text channel.",
			patterns: [
				"send %message/string/messagebuilder/embedbuilder% to %channels/users% with %bot/string% [and store (it|the message) in %-objects%]"
			],
			example: "discord command $send <text> [<text>]:,\ttrigger:,\t\tif arg-2 is not set:,\t\t\tsend arg-1 to event-channel with event-bot,\t\t\tstop,\t\tset {_channel} to channel with id arg-2,\t\tif {_channel} is not set:,\t\t\treply with \"I could not find a channel with that id!\",\t\t\tstop,\t\tsend arg-1 to {_channel} with event-bot"
		},
		{
			name: "Delete message",
			description: "Delete a %message% with a specific bot",
			patterns: [
				"delete %message% with %bot/string%",
			],
			example: "delete event-message with \"Jewel\""
		},
	],
	Expressions: [
		{
			name: "Bot paused state",
			description: "Check if a bot is paused or not. Can be set to true/false.",
			patterns: [
				"%bot/string% paused state [in %guild%]",
			],
			example: "discord command $pause:,\texecutable in: guild,\ttrigger:,\t\tif event-bot is paused:,\t\t\tset event-bot paused state to false,\t\t\treply with \"I'm no longer paused\",\t\t\tstop,\t\tset event-bot paused state to true,\t\treply with \"I'm now paused\""
		},
		{
			name: "Queue of bot",
			description: "Get all the tracks a bot currently has queued up for a guild.",
			patterns: [
				"[the] queue of %bot/string% [in %guild%]",
			],
			example: "discord command $reset:,\ttrigger:,\t\treset the queue of event-bot,\t\treply with \"You have successfully cleared my queue\""
		},
		{
			name: "Track Bot Is Playing",
			description: "Get the tracks a bot is playing in a specific guild.",
			patterns: [
				"[the] track[s] %bot/string% is playing [in %guild%]",
			],
			example: "discord command $info:,\ttrigger:,\t\tset {_track} to track event-bot is playing,\t\tif {_track} is not set:,\t\t\treply with \"I am not currently playing anything!\",\t\t\tstop,\t\treply with \"I am currently playing %name of {_track}% by %author of {_track}%\""
		},
		{
			name: "Volume of bot",
			description: "Get the volume a bot is set to in a guild. Can be set to a number that is between 0 and 150. This can also be reset which sets the volume to 150. Anything over 150 is ignored and the volume is set to 150.",
			patterns: [
				"[the] volume of %bot/string% [in %guild%]",
			],
			example: "discord command $volume [<number>]:,\ttrigger:,\t\tif arg-1 is not set:,\t\t\treply with \"%volume of event-bot%\",\t\t\tstop,\t\tset the volume of event-bot to arg-1,\t\treply with \"My volume is now: `%volume of event-bot%`\""
		},
		{
			name: "Game type",
			description: "Get the type of game a user, a bot, or a bot specified by name is playing.",
			patterns: [
				"[the] game type[s] of %bots/users/strings%",
				"%bots/users/strings%'[s] game type[s]",
			],
			example: "discord command $streaming <user>:,\ttrigger:,\t\tset {_type} to the game type of event-user,\t\tif {_type} is streaming:,\t\t\treply with \"%arg-1% is live!\",\t\t\tstop,\t\treply with \"%arg-1% is not streaming currently\""
		},
		{
			name: "Guilds of bot",
			description: "Get all the guilds of a bot",
			patterns: [
				"[the] guild[s] of %bot/string%",
				"%bot/string%'[s] guild[s]",
			],
			example: ""
		},
		{
			name: "Mutual Guild of User",
			description: "Get all the guilds a user and a bot share. The bot may be assumed in events.",
			patterns: [
				"[the] mutual guilds (of|with) %user% [and %bot/string%]",
				"%user%[[']s] and %bot/string%[[']s] mutual guilds",
			],
			example: "discord command $mutual <user>:,\ttrigger:,\t\treply with \"I share %size of mutual guilds of arg-1% guilds with %arg-1%\""
		},
		{
			name: "Uptime Of Bot",
			description: "Get the amount of time a bot has been up in a skript date form.",
			patterns: [
				"[the] uptime[s] of %strings/bots%",
				"%strings/bots%'[s] uptime[s]",
			],
			example: "discord command $uptime:,\ttrigger:,\t\treply with \"I've been awake for %uptime of event-bot%\""
		},
		{
			name: "The Channel",
			description: "Get the channel in a create channel scope",
			patterns: [
				"[(the|a)][new] channel[(-| )builder]",
			],
			example: "discord command $setup:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to \"Bot channel\",\t\t\tset the topic of the channel to \"Hi Pika\",\t\t\tcreate the channel in event-guild and store it in {_chnl}"
		},
		{
			name: "Bitrate of channel builder",
			description: "Get the bitrate of a channel builder. The default value is 64kbps for channel builders. Rates multiplied by 1000.You can set or reset this (resets to 64kbps)",
			patterns: [
				"[the] bitrate[s] of %channelbuilders%",
				"%channelbuilders%'[s] bitrate[s]",
			],
			example: "discord command $create:,\ttrigger:,\t\tcreate voice channel:,\t\t\tset the name of the channel to \"{@bot}\",\t\t\tset the bitrate of the channel to 69,\t\t\tcreate the channel in event-guild"
		},
		{
			name: "User limit of a channel builder",
			description: "Get or sets the user limit of a channel builder",
			patterns: [
				"[the] user limit[s] of %channelbuilders%",
				"%channelbuilders%'[s] user limit[s]",
			],
			example: "discord command $create:,\ttrigger:,\t\tcreate voice channel:,\t\t\tset the name of the channel to \"{@bot}\",\t\t\tset the user limit of the channel to 5,\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I have successfully created the channel! ID: %id of {_chnl}%\""
		},
		{
			name: "Name of Channel Builder",
			description: "Get the name of a channel builder. Can be set to a string.",
			patterns: [
				"[the] name[s] of %channelbuilders%",
				"%channelbuilders%'[s] name[s]",
			],
			example: "discord command $create <text>:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to arg-1,\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I have successfully created the channel! ID: %id of {_chnl}%\""
		},
		{
			name: "NSFW State of a channel builder",
			description: "Returns whether or not a channel builder is NSFW (false by default). Can be set to either true or false.",
			patterns: [
				"[the] nsfw state[s] of %channelbuilders%",
				"%channelbuilders%'[s] nsfw state[s]",
			],
			example: "discord command $create <text> <boolean>:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to arg-1,\t\t\tset the nsfw state of the channel to arg-2,\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I've successfully created a channel named `%arg-1%`, ID: %id of {_chnl}%\""
		},
		{
			name: "Category of channel builder",
			description: "Get or set the category of a channel builder.",
			patterns: [
				"[the] (category|parent)[s] of %channelbuilders%",
				"%channelbuilders%'[s] (category|parent)[s]",
			],
			example: "discord command $create <text>:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to arg-1 ,\t\t\tset the parent of the channel to category named \"xd\",\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I've successfully created a channel named `%arg-1%`, ID: %id of {_chnl}%\""
		},
		{
			name: "Topic of channel builder",
			description: "Gets or sets the topic of a channel builder.",
			patterns: [
				"[the] topic[s] of %channelbuilders%",
				"%channelbuilders%'[s] topic[s]",
			],
			example: "discord command $create <text>:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to arg-1 ,\t\t\tset the topic of the channel to \"Hi Pika\",\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I've successfully created a channel named `%arg-1%`, ID: %id of {_chnl}%\""
		},
		{
			name: "Last Created Channel Builder",
			description: "Get the last made Channel Builder created via the Channel Builder scope.",
			patterns: [
				"[the] last[ly] [(made|created)] channel[[ ]builder]",
			],
			example: "discord command $create <text>:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to arg-1 ,\t\t\tset the topic of the channel to \"Hi Pika\",\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I've successfully created a channel named `%arg-1%`, ID: %id of {_chnl}%\""
		},
		{
			name: "Bitrate of Voice Channel",
			description: "Get the bitrate of a voice channel. The default value is 64kbps for channel builders. Rates multiplied by 1000. You can set or reset this (resets to 64kbps)",
			patterns: [
				"[the] bitrate[s] of %voicechannels%",
				"%voicechannels%'[s] bitrate[s]",
			],
			example: "discord command $bitrate <string> <number>:,\ttrigger:,\t\tset bitrate of voice channel with id arg-1 to arg-2"
		},
		{
			name: "User limit of Voice Channel",
			description: "Get or sets the user limit of a voice channel",
			patterns: [
				"[the] user limit[s] of %voicechannels%",
				"%voicechannels%'[s] user limit[s]",
			],
			example: "discord command $bitrate <string> <number>:,\ttrigger:,\t\tset user limit of voice channel with id arg-1 to arg-2 with event-bot"
		},
		{
			name: "Channel Named",
			description: "Get a channel via it's name, you can include the type of channel and/or the guild to speed the retrieval process up. The searching is case sensitive.",
			patterns: [
				"[(voice|text)][(-| )]channel[s] named %string% [in %-guild%]"
			],
			example: "discord command move <text>:,\ttrigger:,\t\tset {_} to voice channel named arg-1,\t\tif voice channel of event-member is not set:,\t\t\treply with \"Not in vc to move to\",\t\t\tstop,\t\tmove event-member to {_},\t\treply with \"Done! %event-member% was moved to %{_}%\""
		},
		{
			name: "NSFW state of Text Channel",
			description: "Returns whether or not a channel is NSFW (false by default). This can be set to a boolean or reset.",
			patterns: [
				"[the] nsfw state[s] of %textchannels%",
				"%textchannels%'[s] nsfw state[s]",
			],
			example: "discord command nsfw <boolean>:,\tprefixes: $,\ttrigger:,\t\tset nsfw state of event-channel to arg-1"
		},
		{
			name: "Category of Channel",
			description: "Get or set the category of a channel.",
			patterns: [
				"[the] (category|parent)[s] of %channels%",
				"%channels%'[s] (category|parent)[s]",
			],
			example: "discord command $category <string> <string>:,\ttrigger:,\t\tset {_category} to category named arg-2,\t\tset {_channel} to channel with id arg-1,\t\tset parent of {_channel} to {_category} with event-bot,\t\treply with \"Successfully moved %{_channel}% to %{_category}%\""
		},
		{
			name: "Position of",
			description: "Get or set the current position of a role or a channel. With channels, 0 is the highest channel, with roles 0 is the lowest custom role, then 1 is the next role up, then 2...",
			patterns: [
				"[the] discord position[s] of %channels/roles%",
				"%channels/roles%'[s] discord position[s]",
			],
			example: "discord command $pos <text>:,\ttrigger:,\t\tset {_vc} to channel with id arg-1,\t\treply with \"%{_vc}%\",\t\treply with \"%discord position of {_vc}%\""
		},
		{
			name: "Topic of Text Channel",
			description: "Get or set the topic of a text channel. You may also delete the topic to reset it.",
			patterns: [
				"the] topic[s] of %textchannels%",
				"%textchannels%'[s] topic[s]",
			],
			example: "set topic of event-channel to \"Hi Pika\" with event-bot"
		},
		{
			name: "Grabbed Messages",
			description: "Get the grabbed messages from the grab messages effect. This can be used in the purge effect to purge the messages.",
			patterns: [
				"[the] grabbed messages",
			],
			example: "discord command $purge <number>:,\texecutable in: guild,\ttrigger:,\t\tset {_num} to arg-1 ,\t\tgrab the last {_num} messages in event-channel,\t\tpurge the grabbed messages with event-bot,\t\tset {_error} to last vixio error ,\t\tif {_error} is set:,\t\t\treply with \"I ran into an error! `%{_error}%`\",\t\t\tstop,\t\treply with \"I have successfully purged %arg-1% messages\""
		},
		{
			name: "Last Retrieved Pins",
			description: "Get the results of the last grab pinned messages search.",
			patterns: [
				"[last] (grabbed|retrieved) (pins|pinned messages)",
			],
			example: "discord command $pins:,\ttrigger:,\t\tgrab pinned messages in event-channel,\t\treply with \"%grabbed pins%\""
		},
		{
			name: "Slowmode of TextChannel",
			description: "Set the slowmode of a text channel. Only text channels can have have their slowmode set and retrieved. This can be set, reset, and deleted.",
			patterns: [
				"[the] slowmode[s] of %channel/textchannel%",
				"%channel/textchannel%'[s] slowmode[s]",
			],
			example: "broadcast \"slowmode of event-channel\""
		},
		{
			name: "Used Alias",
			description: "Returns the used alias in a command",
			patterns: [
				"[the] used alias",
			],
			example: "broadcast the used alias"
		},
		{
			name: "Aliases of command",
			description: "Returns the aliases of a command",
			patterns: [
				"[the] [<usable>] aliases[s] of %discordcommands%",
				"%discordcommands%'[s] [<usable>] aliases[s]",
			],
			example: "broadcast aliases of \"commandname\" parsed as a discord command"
		},
		{
			name: "Last Argument",
			description: "Represents the argument of a command",
			patterns: [
				"[the] last arg[ument][s]"
			],
			example: "discord command say <string>:,\tprefixes: !, . and ;,\ttrigger:,\t\treply with arg-1 # replies with the first argument"
		},
		{
			name: "Used Command",
			description: "Returns the used command in a command",
			patterns: [
				"[the] used command",
			],
			example: "broadcast aliases of the used command"
		},
		{
			name: "All Commands",
			description: "Returns all registered discord commands",
			patterns: [
				"[all] discord commands",
			],
			example: "loop all discord commands:,\tbroadcast description of loop-value"
		},
		{
			name: "Description of Command",
			description: "Returns the description of a command.",
			patterns: [
				"[the] description[s] of %discordcommands%",
				"%discordcommands%'[s] description[s]",
			],
			example: "broadcast description of \"commandname\" parsed as a discord command"
		},
		{
			name: "Used Prefix",
			description: "Returns the used prefix in a command",
			patterns: [
				"[the] used prefix",
			],
			example: "broadcast the used prefix"
		},
		{
			name: "Prefixes of command",
			description: "Returns the prefixes of a command",
			patterns: [
				"[the] prefixes[s] of %discordcommands%",
				"%discordcommands%'[s] prefixes[s]",
			],
			example: "broadcast prefixes of \"commandname\" parsed as a discord command"
		},
		{
			name: "Command Recipient",
			description: "Returns the type of channel a command was sent to",
			patterns: [
				"[the] command recipient",
			],
			example: "broadcast the command recipient"
		},
		{
			name: "Usage of Command",
			description: "Returns the usage of a command.",
			patterns: [
				"[the] usage[s] of %discordcommands%",
				"%discordcommands%'[s] usage[s]",
			],
			example: "broadcast usage of \"commandname\" parsed as a discord command"
		},
		{
			name: "New/Current Embed",
			description: "If it isn't inside an embed scope, this expression returns a new embed. If it is inside of an embed scope, it returns the embed that belongs to that scope.",
			patterns: [
				"[(the|an|[a] new)] embed",
			],
			example: "# outside a scope,set {_e} to a new embed,make a new embed:,\tset color of embed the embed to red,\tset url of the embed to \"https://google.com\",\tset title of the embed to \"Google!\",set {_embed} to last made embed"
		},
		{
			name: "Author of Embed",
			description: "Returns the author of an embed. Can be set to any author.",
			patterns: [
				"[the] (author info|author)[s] of %embedbuilders%",
				"%embedbuilders%'[s] (author info|author)[s]",
			],
			example: "set author of {_embed} to author named \"Pikachu\""
		},
		{
			name: "Color of Embed",
			description: "Returns the color of an embed. Can be set to any color (e.g. red).",
			patterns: [
				"[the] colo[u]r[s] of %embedbuilders%",
				"%embedbuilders%'[s] colo[u]r[s]",
			],
			example: "set discord color of {_embed} to red"
		},
		{
			name: "Description of Embed",
			description: "Returns the description of an embed. Can be set to any string.",
			patterns: [
				"[the] description[s] of %embedbuilders%",
				"%embedbuilders%'[s] description[s]",
			],
			example: "set the description of {_embed} to \"This is a cool description!\""
		},
		{
			name: "Fields Of Embed",
			description: "Returns a embed's fields",
			patterns: [
				"[the] field[s] of %embedbuilders%",
				"%embedbuilders%'[s] field[s]",
			],
			example: "set {_fields::*} to fields of {_embed}"
		},
		{
			name: "Footer of Embed",
			description: "Returns the footer of an embed. Can be set any footer.",
			patterns: [
				"[the] footer[s] of %embedbuilders%",
				"%embedbuilders%'[s] footer[s]",
			],
			example: "set footer of {_embed} to a footer with text \"Hi Pika\" and icon \"https://i.imgur.com/TQgR2hW.jpg\""
		},
		{
			name: "Image of Embed",
			description: "Returns the image of an embed. Can be set any url.",
			patterns: [
				"[the] image[s] of %embedbuilders%",
				"%embedbuilders%'[s] image[s]",
			],
			example: "set the image of {_embed} to \"https://i.imgur.com/TQgR2hW.jpg\""
		},
		{
			name: "Embed of Message",
			description: "Get the Embed of a Message",
			patterns: [
				"[the] embed[s] of %messages%",
				"%messages%'[s] embed[s]",
			],
			example: "broadcast \"%embed of event-message%\""
		},
		{
			name: "Thumbnail of Embed",
			description: "Returns the thumbnail of an embed. Can be set to any string (e.g. https://i.imgur.com/TQgR2hW.jpg).",
			patterns: [
				"[the] (thumbnail|icon)[s] of %embedbuilders%",
				"%embedbuilders%'[s] (thumbnail|icon)[s]",
			],
			example: "set the thumbnail of {_embed} to \"https://i.imgur.com/TQgR2hW.jpg\""
		},
		{
			name: "Title of Embed",
			description: "Returns the title of an embed.",
			patterns: [
				"[the] title[s] of %embedbuilders%",
				"%embedbuilders%'[s] title[s]",
			],
			example: "set the embed title of {_embed} to title with text \"hey this is a cool title!\" and no icon"
		},
		{
			name: "Inline Embed",
			description: "Lets you easily make an embed with a couple common properties.",
			patterns: [
				"%embedbuilder% ((with|and) [the] title %-string%|titled %-string%)",
				"%embedbuilder% (with|and) [the] description %string%",
			],
			example: "set {_embed} to a new embed with the title \"Title\" and the description \"Description\""
		},
		{
			name: "Last Made Embed",
			description: "Returns the embed that was last made in a embed scope",
			patterns: [
				"[the] last[ly] [(made|created)] embed[[ ]builder]",
			],
			example: "set {_embed} to the last embed"
		},
		{
			name: "Url of Title",
			description: "Returns the url of a title.",
			patterns: [
				"[the] (url|link)[s] of %titles%",
				"%titles%'[s] (url|link)[s]",
			],
			example: "broadcast \"%link of {_embed}'s title%\""
		},
		{
			name: "Dimension of Image",
			description: "Returns a dimension of an embed's thumbnail, image, footer icon or icon. You can specify either width or height.",
			patterns: [
				"[the] <width|height>[s] of %thumbnails/imageinfos%",
				"%thumbnails/imageinfos%'[s] <width|height>[s]",
			],
			example: "reply with \"%width of {_embed}'s thumbnail%\""
		},
		{
			name: "Url of Image",
			description: "Returns the url of an embed's thumbnail, footer icon, author, icon or large image. Adding the proxy modifier to the syntax will return Discord's proxy url if possible.",
			patterns: [
				"[the] [<proxy>] url[s] of %thumbnails/imageinfos/footers/authorinfos%",
				"%thumbnails/imageinfos/footers/authorinfos%'[s] [<proxy>] url[s]",
			],
			example: "broadcast \"%proxy url of {_embed}'s thumbnail%\""
		},
		{
			name: "New Author Info",
			description: "Returns a author with the specified data",
			patterns: [
				"[an] author named %string% with [([the] url %-string%|no url)[( and [the]|, )]] [(icon %-string%|no icon)]]",
			],
			example: "set author of {_embed} to an author named \"Pikachu\" with the url \"http://vixio.space/docs\" and icon \"https://i.imgur.com/TQgR2hW.jpg\""
		},
		{
			name: "New Field",
			description: "Returns a field with the specified data",
			patterns: [
				"[(a|the)] (split|inline) field[s] [named %-string%] [with [the] value %-string%]",
				"[(a|the)] field[s] [named %-string%] [with [the] value %-string%]",
			],
			example: "set field of {_embed} to a split field named \"Super cool field\" and value \"Super cool value\""
		},
		{
			name: "New Footer",
			description: "Returns a footer with the specified data",
			patterns: [
				"[a] footer with [the] text %string%[( and [the]|, )(icon %-string%|no icon)]",
			],
			example: "set footer of {_embed} to a footer with text \"Hi Pika\" and icon \"https://i.imgur.com/TQgR2hW.jpg\""
		},
		{
			name: "New Title",
			description: "Returns a title with the specified data",
			patterns: [
				"[a] title [with] [the] text %string%[( and [the]|, )((url|link) %-string%|no (url|link))]",
			],
			example: "set title of {_embed} to a title with text \"Vixio\" and url \"https://i.imgur.com/TQgR2hW.jpg\""
		},
		{
			name: "New and Previous Channel",
			description: "Get the new channel or previous channel for the member channel switch event.",
			patterns: [
				"[the] (prev[ious]|old) [voice] channel",
				"[the] new [voice] channel",
			],
			example: "on member switch voice channel:,\tbroadcast \"%event-user% left %old channel% and joined %new channel%\""
		},
		{
			name: "Color",
			description: "A color that can be more specific that Skript's color type.",
			patterns: [
				"[java[ ]]colo[u]r from rgb %number%(, | and )%number%(, | and )%number%",
			],
			example: "set {_color} to color from rgb 0, 0 and 0 # results in black,set {_color} to black # results in black,set {_color} to \"black\" parsed as a color  # results in black"
		},
		{
			name: "Emoji Named",
			description: "Get a emoji by its name, if its a custom emote you must include the guild.",
			patterns: [
				"(emoji|emote|reaction)[s] %strings% [(from|in) %-guild%]",
			],
			example: "on guild message receive:,\tadd reaction \"smile\" to event-message"
		},
		{
			name: "Guild of",
			description: "Get the guild of various types.",
			patterns: [
				"[the] guild[s] of %channel/voicechannel/message/emote/category/role/member/invite%",
				"%channel/voicechannel/message/emote/category/role/member/invite%'[s] guild[s]",
			],
			example: "set {_guild} to guild of event-message"
		},
		{
			name: "ID of",
			description: "Get the ID of any discord entity.",
			patterns: [
				"[the] discord id[s] of %channel/guild/bot/user/message/role/avatar/category/member/emote/attachment%",
				"%channel/guild/bot/user/message/role/avatar/category/member/emote/attachment%'[s] discord id[s]",
			],
			example: "reply with \"%id of event-user%\""
		},
		{
			name: "Last Vixio Error",
			description: "Set when Vixio runs into a error, like a permission error.",
			patterns: [
				"[the] last vixio error",
			],
			example: "discord command $ban <member>:,\ttrigger:,\t\tban arg-1 from event-guild ,\t\tset {_error} to the last vixio error,\t\tif {_error} is set:,\t\t\treply with \"I tried to ban that user but didn't have the perms!\""
		},
		{
			name: "Mention of",
			description: "Get the mention tag of any discord entity that can be mentioned.",
			patterns: [
				"[the] mention tag[s] of %users/channel/members/emotes/roles/textchannel%",
				"%users/channel/members/emotes/roles/textchannel%'[s] mention tag[s]",
			],
			example: "reply with mention tag of event-user"
		},
		{
			name: "Name of",
			description: "Get the name of any discord entity. You can set the name of channels, guilds, bots, categories, and channel builders.",
			patterns: [
				"[the] discord name[s] of %channel/guild/bot/user/role/track/category/emote/field/attachment%",
				"%channel/guild/bot/user/role/track/category/emote/field/attachment%'[s] discord name[s]",
			],
			example: "broadcast \"%name of event-user%\""
		},
		{
			name: "New and Previous Nicknames",
			description: "Get the new or previous nickname from the nick change event.",
			patterns: [
				"[the] prev[ious] nick[name]",
				"[the] new nick[name]",
			],
			example: "on nickname change:,\tbroadcast \"%event-member% has changed their nick from %prev nick% to %new nick%\""
		},
		{
			name: "Added or Removed roles.",
			description: "Get the roles that were added or removed in the member role added and member role removed events.",
			patterns: [
				"[the] role[s]",
			],
			example: "SOON"
		},
		{
			name: "Search Results",
			description: "Represents the search results from the last usage of the search effect. The search results get reset every time the search effect is used.",
			patterns: [
				"[the] [last] search results",
			],
			example: "on join:,\tsearch youtube for \"%player%\" and store the results in {_results::*},\tif search results are set:,\t\tmessage \"Did you know there are %size of search results% videos about you on YouTube?\" to player"
		},
		{
			name: "User Named",
			description: "Retrieve a user by their name. If the [s] is included in users than this will return a list.If the s is not included but their are multiple people with the same name, then the first one will be returned.This does NOT retrieve the user from Discord. This is from what your bots can see.",
			patterns: [
				"user[s] (with [the] name|named) %string% [in %-guild%]"
			],
			example: "discord command user <text>:,\ttrigger:,\t\tset {_} to user with the name arg-1 in event-guild,\t\treply with \"Oh, found them! %discord name of {_}%##%discriminator of {_}%\""
		},
		{
			name: "Categories of guild",
			description: "Get all of the categories in a guild. You may add a category to this by name which creates a category, or delete/remove a category by inputting a category.",
			patterns: [
				"[the] categories[s] of %guilds%",
				"%guilds%'[s] categories[s]",
			],
			example: "discord command $categories:,\ttrigger:,\t\tset {_categories::*} to the categories of event-guild,\t\treply with \"Here are the current categories: `%{_categories::*}%`\""
		},
		{
			name: "Category named",
			description: "Get a Category by its name in a Guild.",
			patterns: [
				"[the] category (with [the] name|named) %string% [in %guild%]",
			],
			example: "discord command $create <text>:,\ttrigger:,\t\tcreate text channel:,\t\t\tset the name of the channel to arg-1 ,\t\t\tset the parent of the channel to category named \"xd\",\t\tcreate the last made channel in event-guild and store it in {_chnl},\t\treply with \"I've successfully created a channel named `%arg-1%`, ID: %id of {_chnl}%\""
		},
		{
			name: "Category with ID",
			description: "Get a Category via it's ID.",
			patterns: [
				"category with id %string% [in %-guild%]",
			],
			example: "reply with \"%category with id \"\"4516161651\"\"%\""
		},
		{
			name: "Owner of Guild",
			description: "Get or set the owner of a guild.",
			patterns: [
				"[the] discord owner[s] of %guilds%",
				"%guilds%'[s] discord owner[s]",
			],
			example: "discord command $transfer <member>:,\ttrigger:,\t\tset discord owner of event-guild to arg-1 with event-bot"
		},
		{
			name: "Afk channel of Guild",
			description: "Get the AFK voice channel of a guild. You can set this to another channel.",
			patterns: [
				"[the] afk channel[s] of %guilds%",
				"%guilds%'[s] afk channel[s]",
			],
			example: "discord command $afk:,\ttrigger:,\t\treply with \"%afk channel of event-guild%\""
		},
		{
			name: "Retrieved bans",
			description: "Get the last set of retrieved bans from a guild. The bot must have enough permissions to retrieve the bans list.",
			patterns: [
				"[last] (grabbed|retrieved) bans",
			],
			example: "discord command $bans:,\ttrigger:,\t\tgrab bans of event-guild,\t\treply with \"Here are the banned users: %grabbed bans%\""
		},
		{
			name: "Channels of",
			description: "Get all of the channels of a guild or category.",
			patterns: [
				"[the] channel[s] of %guild/category%",
				"%guild/category%'[s] channel[s]",
			],
			example: "discord command $channels [<text>]:,\ttrigger:,\t\tif arg-1 is not set:,\t\t\treply with \"Here are the current channels: `%channels of event-guild%`\",\t\t\tstop,\t\tset {_category} to category named arg-1,\t\treply with \"Here are the channels of the category named %arg-1%: `%channels of {_category}%`\""
		},
		{
			name: "Discord Creation Date of",
			description: "Get the creation date of most things in Discord.",
			patterns: [
				"[the] discord creation date[s] of %channel/guild/message/role/category/emote/attachment%",
				"%channel/guild/message/role/category/emote/attachment%'[s] discord creation date[s]",
			],
			example: "broadcast \"%discord creation date of event-guild%\""
		},
		{
			name: "Emotes of guild",
			description: "Get all of the emotes a guild has added.",
			patterns: [
				"[the] [<global>] emote[s] of %guild%",
				"%guild%'[s] [<global>] emote[s]",
			],
			example: "discord command $emotes:,\texecutable in: guild,\ttrigger:,\t\tloop emotes of event-guild:,\t\t\tif loop-value is animated:,\t\t\t\tadd loop-value to {_animated::*},\t\t\telse:,\t\t\t\tadd loop-value to {_non::*},\t\tcreate embed:,\t\t\tset the author info of the embed to author named \"Emotes %reaction \"\":smile:\"\"%\" with no url and no icon,\t\t\tset the description of the embed to \"%name of event-guild% has %size of {_non::*}% regular emotes and %size of {_animated::*}% animated emotes!!\",\t\t\tset the colour of the embed to Purple,\t\t\tadd field named \"Local emotes (1/1)\" with value \"%{_non::*}%\" to embed,\t\t\tadd field named \"Animated emotes (1/1)\" with value \"%{_animated::*}%\" to embed,\t\tsend the last created embed to event-channel with event-bot"
		},
		{
			name: "Icon URL of Guild",
			description: "Get a guild's icon url.",
			patterns: [
				"[the] icon[s] of %guilds%",
				"%guilds%'[s] icon[s]",
			],
			example: "reply with \"%icon of event-guild%\""
		},
		{
			name: "Last Created Invitation",
			description: "Get the last invite created by vixio, can specify the specific channel if you want.",
			patterns: [
				"[the] last created invite [for %-channel%]",
			],
			example: "discord command invite:,\ttrigger:,\t\tcreate an invite to event-channel,\t\treply with \"%the last created invite%\""
		},
		{
			name: "Members of",
			description: "Get all of the Member from a variety of different types.",
			patterns: [
				"[the] discord member[s] of %guild/category/channel%",
				"%guild/category/channel%'[s] discord member[s]",
			],
			example: "discord command $guild:,\ttrigger:,\t\treply with \"%size of discord members of event-guild%\""
		},
		{
			name: "Public Role of Guild",
			description: "Get the public role in a guild. This is the everyone role.",
			patterns: [
				"[the] public role[s] of %guild%",
				"%guild%'[s] public role[s]",
			],
			example: "discord command role:,\ttrigger:,\t\treply with \"`%public role of event-guild%`\""
		},
		{
			name: "Region of Guild",
			description: "Get the current region of a guild.",
			patterns: [
				"[the] region[s] of %guilds%",
				"%guilds%'[s] region[s]",
			],
			example: "broadcast \"%region of event-guild%\""
		},
		{
			name: "Role Named",
			description: "Get a role via it's name in a guild.",
			patterns: [
				"[the] role[<s>] (with [the] name|named) %string% [in %guild%]",
			],
			example: "discord command $role <text>:,\ttrigger:,\t\tset {_role} to role named arg-1,\t\tif {_role} is not set:,\t\t\treply with \"Could not find a role by that name!\",\t\t\tstop,\t\treply with \"I found the role! ID: %id of {_role}%\""
		},
		{
			name: "Roles of Guild",
			description: "Get all of the roles a guild has.",
			patterns: [
				"[the] role[s] of %guild%",
				"%guild%'[s] role[s]",
			],
			example: "discord command $roles:,\ttrigger:,\t\treply with \"Here are the current roles: `%roles of event-guild%`\""
		},
		{
			name: "Text Channels of",
			description: "Get all of the text channels in a guild or a category.",
			patterns: [
				"[the] text(-| )channel[s] of %guild/category%",
				"%guild/category%'[s] text(-| )channel[s]",
			],
			example: "discord command $channels [<text>]:,\ttrigger:,\t\tif arg-1 is not set:,\t\t\treply with \"Here are the current channels: `%channels of event-guild%`\",\t\t\tstop,\t\tset {_category} to category named arg-1,\t\treply with \"Here are the channels of the category named %arg-1%: `%channels of {_category}%`\""
		},
		{
			name: "Discord Verification level of Guild",
			description: "Get a Guild's verification level. This can be reset and set.",
			patterns: [
				"[the] discord verification level[s] of %guilds%",
				"%guilds%'[s] discord verification level[s]",
			],
			example: "broadcast \"%discord verification level of event-guild%\""
		},
		{
			name: "Voice Channels",
			description: "Get all of the voice channels of a guild or category.",
			patterns: [
				"[the] voice[(-| )]channels of %guild/category%",
				"%guild/category%'[s] voice[(-| )]channels",
			],
			example: "on guild message receive:,\tset {_channels::*} to voice channels of event-guild,\tloop {_channels::*}:,\t\tbroadcast \"%name of loop-value%\""
		},
		{
			name: "Channel of",
			description: "Get the channel an invite was created for.",
			patterns: [
				"[the] [discord] channel[s] of %invite%",
				"%invite%'[s] [discord] channel[s]",
			],
			example: "discord command parse <text>:,\tprefixes: /,\ttrigger:,\t\tretrieve the invites of event-guild ,\t\tset {in::*} to last grabbed invites,\t\tloop {in::*}:,\t\t\tif \"%loop-value%\" contains arg-1:,\t\t\t\tset {_} to loop-value,\t\tmake embed and send it to event-channel:,\t\t\tset the title of the embed to title with text \"Parsing results for invite: %invite url of {_}%\",\t\t\tset the colour of the embed to Cyan ,\t\t\tset the thumbnail of embed to \"https://cdn.discordapp.com/icons/236641445363056651/e51b2c2f4d539f7c18ae966d60992d25.png\",\t\t\tadd field named \"Max Uses\" with value \"%max uses of {_}%\" to embed ,\t\t\tadd field named \"Max Age (In Seconds)\" with value \"%max age of {_}%\" to embed,\t\t\tadd field named \"Time Created\" with value \"%creation date of {_}%\" to embed,\t\t\tadd field named \"Guild\" with value \"%guild of {_}%\" to embed,\t\t\tadd field named \"Channel\" with value \"%channel of {_}%\" to embed"
		},
		{
			name: "New/Current Invite",
			description: "If it isn't inside an invite creation scope, this expression returns a new invite. If it is inside an invite creation scope, it returns the invite that belongs to that scope.",
			patterns: [
				"[(the|an|[a] new)] invite",
			],
			example: "discord command rawr:,\tprefixes: /,\ttrigger:,\t\tcreate invite to event-channel with event-bot:,\t\t\tset max uses of the invite to 5,\t\t\tset {_} to the invite,\t\treply with \"%creation date of of {_}%\""
		},
		{
			name: "Max Age",
			description: "Set how long an invite that is being created in the invite creation scope should last. (In seconds).This defaults to 86400 seconds (24 Hours.). Set it to 0 if you want it to never expire. This number cannot be negative",
			patterns: [
				"[the] max age[s] of %invite%",
				"%invite%'[s] max age[s]",
			],
			example: "discord command invite:,\tprefixes: /,\ttrigger:,\t\tcreate invite to event-channel:,\t\t\tset the max usage of the invite to 1,\t\t\tset the max age of the invite to 36,\t\t\tset {_} to the invite,\t\treply with \"%max age of {_}%\""
		},
		{
			name: "Invite Max Usage",
			description: "Get either how many times an invite can be used, or set how many times an invite can be used inside the invite creation scope.",
			patterns: [
				"[the] max (use[s]|usage)[s] of %invite%",
				"%invite%'[s] max (use[s]|usage)[s]",
			],
			example: "discord command rawr:,\tprefixes: /,\ttrigger:,\t\tcreate invite to event-channel with event-bot:,\t\t\tset max uses of the invite to 5,\t\t\tset {_} to the invite,\t\treply with \"%max uses of {_}%\""
		},
		{
			name: "Creation date of Invite",
			description: "Get the time a discord invite was created.",
			patterns: [
				"[the] [invite] creation date[s] of %invite%",
				"%invite%'[s] [invite] creation date[s]",
			],
			example: "discord command rawr:,\tprefixes: /,\ttrigger:,\t\tcreate invite to event-channel with event-bot:,\t\t\tset max uses of the invite to 5,\t\t\tset {_} to the invite,\t\treply with \"%creation date of of {_}%\""
		},
		{
			name: "Invite Url of",
			description: "Get the Url of a Discord invite.",
			patterns: [
				"[the] invite url[s] of %invite%",
				"%invite%'[s] invite url[s]",
			],
			example: "discord command invite:,\tprefixes: /,\ttrigger:,\t\tcreate invite to event-channel:,\t\t\tset the max usage of the invite to 1,\t\t\tset {_} to the invite,\t\treply with \"Done! Created: %invite url of {_}%\""
		},
		{
			name: "Retrieved Invites",
			description: "Get the invites the retrieve invites effect retrieved.",
			patterns: [
				"[the] last (grabbed|retrieved) invites",
			],
			example: "discord command test:,\tprefixes: /,\ttrigger:,\t\tretrieve the invites of event-guild,\t\treply with \"%last grabbed invites%\""
		},
		{
			name: "Color of Role",
			description: "Get the color of a role. This can be set to any color.",
			patterns: [
				"[the] colo[u]r[s] of %roles%",
				"%roles%'[s] colo[u]r[s]",
			],
			example: "set the color of {_role} to red with event-bot"
		},
		{
			name: "Guild Deafened State of Member",
			description: "Get the deafened state of a member in a guild. If they are deafened by someone then this returns true. This will not be updated unless a user is in a voice channel when they are deafened.",
			patterns: [
				"[the] [<guild>] deafen[ed] state[s] of %members%",
				"%members%'[s] [<guild>] deafen[ed] state[s]",
			],
			example: "on guild message receive:,\treply with \"%deafen state of event-user in event-guild%\""
		},
		{
			name: "Join Date",
			description: "Get the date a member joined a guild. If you append discord then it gets the date they joined discord, otherwise its the date they joined the guild if the input is a member and the discord join date for users.",
			patterns: [
				"[the] [<discord>] join date[s] of %members/users%",
				"%members/users%'[s] [<discord>] join date[s]",
			],
			example: "reply with \"%discord join date of event-user%\""
		},
		{
			name: "Nickname of",
			description: "Gets a member's nickname (guild sensitive name). You can set this expression.",
			patterns: [
				"[the] discord nickname[s] of %members%",
				"%members%'[s] discord nickname[s]",
			],
			example: "set the discord nickname of event-member to \"new nickname\" with event-bot"
		},
		{
			name: "Online status of",
			description: "Get the online status of a user or a member. The online status can be set or reset for a bot.",
			patterns: [
				"[the] [online][(-| )]status[s] of %members/users/bots/strings%",
				"%members/users/bots/strings%'[s] [online][(-| )]status[s]",
			],
			example: "set status of event-bot to do not disturb"
		},
		{
			name: "Roles of Member",
			description: "Get the roles that a member has in a guild. You can remove, add and set the roles.",
			patterns: [
				"[the] role[s] of %members%",
				"%members%'[s] role[s]",
			],
			example: "remove role with id \"6110981981981\" from roles of event-member"
		},
		{
			name: "Voice Channel of Member",
			description: "Get the voice channel a member is in if they are in one.",
			patterns: [
				"[the] [current] voice[(-| )]channel of %members%",
				"%members%'[s] [current] voice[(-| )]channel",
			],
			example: "join voice channel of event-member"
		},
		{
			name: "Attachments of",
			description: "Get the attachments of a message.",
			patterns: [
				"[the] attachment[s] of %message%",
				"%message%'[s] attachment[s]",
			],
			example: "broadcast \"%discord name of attachment of event-message%\""
		},
		{
			name: "Attachment Height of",
			description: "Get the height of an attachment",
			patterns: [
				"[the] attachment height[s] of %attachment%",
				"%attachment%'[s] attachment height[s]",
			],
			example: "broadcast \"%height of attachment of event-message%\""
		},
		{
			name: "Attachment Url of",
			description: "Get the URL of a message attachment.",
			patterns: [
				"[the] attachment url[s] of %attachment%",
				"%attachment%'[s] attachment url[s]",
			],
			example: "broadcast \"%attachment url of attachment of event-message%\""
		},
		{
			name: "Attachment Width of",
			description: "Get the width of an attachment",
			patterns: [
				"[the] attachment width[s] of %attachment%",
				"%attachment%'[s] attachment width[s]",
			],
			example: "on guild message received:,\tset {_} to attachment of event-message,\tif {_} is set:,\t\tif {_} is an image:,\t\t\treply with \"its %attachment width of {_}% by %attachment height of {_}%\""
		},
		{
			name: "Embed of Message Builder",
			description: "Get the Embed of a Message Builder. You can set, delete and reset the embed.",
			patterns: [
				"[the] embed[s] of %messagebuilders%",
				"%messagebuilders%'[s] embed[s]",
			],
			example: "discord command $build:,\ttrigger:,\t\tmake embed:,\t\t\tadd field with value \"Hey there this is an embed!\" to the embed,\t\t\tset color of the embed to red,\t\tset {e} to a new message builder,\t\tset text of {e} to \"Hey there%nl%\",\t\tset embed of {e} to last embed,\t\tappend \"Info for embed attached to this builder: %color of embed of {e}%\" to {e},\t\tsend {e} to event-channel with event-bot\t"
		},
		{
			name: "Text of a message builder",
			description: "Get the text inside of a message builder. Can be either set, reset, or deleted.",
			patterns: [
				"[the] [<stripped>] text[s] of %messagebuilders%",
				"%messagebuilders%'[s] [<stripped>] text[s]",
			],
			example: "command /build:,\ttrigger:,\t\tset {e} to a new message builder,\t\tset text of {e} to \"Hey look at this\",\t\tbroadcast \"%text of {e}%\""
		},
		{
			name: "Message Builder",
			description: "Create a new MessageBuilder",
			patterns: [
				"a [new] message builder",
			],
			example: "set {e} to a new message builder"
		},
		{
			name: "TTS of Message Builder",
			description: "Get the TTS state of a Message Builder. The state can be set to true or false.",
			patterns: [
				"[the] tts state[s] of %messagebuilders%",
				"%messagebuilders%'[s] tts state[s]",
			],
			example: "discord command $tts:,\ttrigger:,\t\tset {_} to a new message builder,\t\tset tts state of {_} to true,\t\tsend {_} to event-channel with event-bot,\t\treply with \"done?\""
		},
		{
			name: "Reactions of Message",
			description: "Get the reactions of a message. Can be deleted, reset, removed and added to.",
			patterns: [
				"[the] reactions[s] of %messages%",
				"%messages%'[s] reactions[s]",
			],
			example: "on guild message receive:,\tadd reactions \"smile\" and \"frowning\" to reactions of event-message"
		},
		{
			name: "Author of Message",
			description: "Get the author of a message",
			patterns: [
				"[the] [discord] author[s] of %messages%",
				"%messages%'[s] [discord] author[s]",
			],
			example: "author of event-message"
		},
		{
			name: "Content of Message",
			description: "Get the content of a Message. The content can be set and deleted.",
			patterns: [
				"[the] [<stripped|display(able)?>] content[s] of %messages%",
				"%messages%'[s] [<stripped|display(able)?>] content[s]",
			],
			example: "content of event-message"
		},
		{
			name: "Jump URL of Message",
			description: "Get the direct jump url to a message.",
			patterns: [
				"[the] jump url[s] of %message%",
				"%message%'[s] jump url[s]",
			],
			example: ""
		},
		{
			name: "Last retrieved Message",
			description: "Get the last retrieved message called from the retrieve message effect. Cleared every time the retrieve message effect is used.",
			patterns: [
				"last retrieved [discord] message",
			],
			example: "set {_message} to last retrieved message"
		},
		{
			name: "Mentioned Channels",
			description: "Get the mentioned Channels in a Message",
			patterns: [
				"[the] mentioned channel[s] of %messages%",
				"%messages%'[s] mentioned channel[s]",
			],
			example: "set {_var::*} to event-message's mentioned channels"
		},
		{
			name: "Mentioned Roles",
			description: "Get the mentioned Roles in a Message",
			patterns: [
				"[the] mentioned role[s] of %messages%",
				"%messages%'[s] mentioned role[s]",
			],
			example: "set {_var::*} to event-message's mentioned roles"
		},
		{
			name: "Mentioned Users",
			description: "Get the mentioned Users in a Message",
			patterns: [
				"[the] mentioned user[s] of %messages%",
				"%messages%'[s] mentioned user[s]",
			],
			example: "set {_var::*} to event-message's mentioned users"
		},
		{
			name: "Timestamp of",
			description: "Returns the timestamp of either a message or an embed. You can set the time of an embed to any date (e.g. now).",
			patterns: [
				"[the] (timestamp|date)[s] of %embedbuilders/messages%",
				"%embedbuilders/messages%'[s] (timestamp|date)[s]",
			],
			example: "set the timestamp of {_embed} to now,,# You can also set it to a date in the past/future like this,,set {_thePast} to now,subtract 5 days from {_thePast},set the timestamp of {_embed} to {_thePast}"
		},
		{
			name: "Channel with ID",
			description: "Grabs a channel by its ID",
			patterns: [
				"channel with id %string% [in %-guild%]",
			],
			example: "broadcast \"%name of channel with id \"\"6515615645451561\"\"%"
		},
		{
			name: "Voice Channel with ID",
			description: "Get a Voice channel by it's ID, can include the Guild it is in for faster results.",
			patterns: [
				"voice(-| )channel with id %string% [in %-guild%]",
			],
			example: "discord command topic <string> <string>:,\tusage: topic <channel id> <new topic>,\tprefixes: $,\ttrigger:,\t\tset name of voice channel with id arg-1 to arg-2 with event-bot"
		},
		{
			name: "Guild  Named",
			description: "Get all the guilds with a certain name that vixio can find.",
			patterns: [
				"guild[s] named %string%",
			],
			example: "set {_var::*} to guilds named \"Vixio\""
		},
		{
			name: "Guild with ID",
			description: "Get a Guild via it's ID",
			patterns: [
				"(server|guild) with id %string%",
			],
			example: "broadcast name of guild with id \"16165192162168461\""
		},
		{
			name: "User in Guild",
			description: "Returns the member form of a user in the specified guild",
			patterns: [
				"%user% in %guild%",
			],
			example: "broadcast nickname of user with id \"1561515615610515\" in event-guild"
		},
		{
			name: "Role with ID",
			description: "Get a Role via it's ID. You may get the id of a role by either making the role mentionable and typing @rolename or by looping the roles of the guild and finding it by name. You could also use the `role named` syntax to retrieve the role outright.",
			patterns: [
				"role with id %string% [in %-guild%]",
			],
			example: "add role with id \"5151561851\" to roles of event-user in event-guild"
		},
		{
			name: "User with ID",
			description: "Get a User via their ID.",
			patterns: [
				"user with id %string%",
			],
			example: "broadcast name of user with id \"456145141891891\""
		},
		{
			name: "Mentionable State of Role",
			description: "Tell if a role can be publicly mentioned, can be set to true or false",
			patterns: [
				"[the] mentionable state[s] of %roles%",
				"%roles%'[s] mentionable state[s]",
			],
			example: "reply with \"%mentionable state of role with id \"\"55416516516516\"\"%"
		},
		{
			name: "Duration of Track",
			description: "Get the duration of a track. This is how long it is.",
			patterns: [
				"[the] duration[s] of %tracks%",
				"%tracks%'[s] duration[s]",
			],
			example: "broadcast \"%duration of track event-bot is playing%\""
		},
		{
			name: "Identifier of Track",
			description: "Get a track's identifier, this is the unique ID given to it by the hosting site.",
			patterns: [
				"[the] identifier[s] of %tracks%",
				"%tracks%'[s] identifier[s]",
			],
			example: "broadcast \"%identifier of track event-bot is playing%\""
		},
		{
			name: "Last Loaded Audio Track",
			description: "Get the last track a bot has loaded. This does not mean the track the bot is playing.",
			patterns: [
				"[the] last loaded [audio] track [of %bot/string%] [in %guild%]",
			],
			example: "reply with \"%the last loaded track%\""
		},
		{
			name: "Position of Track",
			description: "Get the position a track is at. This is the current play time the track is at.",
			patterns: [
				"[the] position[s] of %tracks%",
				"%tracks%'[s] position[s]",
			],
			example: "broadcast \"%position of track event-bot is playing%\""
		},
		{
			name: "Author of Track",
			description: "Get a track's author. This is the creator of the source.",
			patterns: [
				"[the] author[s] of %tracks%",
				"%tracks%'[s] author[s]",
			],
			example: "broadcast \"%author of track event-bot is playing%\""
		},
		{
			name: "Url of Track",
			description: "Get a track's url.",
			patterns: [
				"[the] ur(i|l)[s] of %tracks%",
				"%tracks%'[s] ur(i|l)[s]",
			],
			example: "broadcast \"%url of track event-bot is playing%\""
		},
		{
			name: "Avatar of User",
			description: "Get either the user's custom avatar or their default one that discord gave them. You can extract the id from the url using the ID expression.",
			patterns: [
				"[the] [discord] [<default>] avatar[s] of %users/bots/strings/member%",
				"%users/bots/strings/member%'[s] [discord] [<default>] avatar[s]",
			],
			example: "discord command $info <user>:,\ttrigger:,\t\treply with \"%avatar of arg-1%\""
		},
		{
			name: "Bot State Of User",
			description: "Check if a user is a bot or not.",
			patterns: [
				"[the] bot state[s] of %users%",
				"%users%'[s] bot state[s]",
			],
			example: "set {var} to bot state of event-user"
		},
		{
			name: "Discriminator of User",
			description: "Get the discriminator of a user, this is the four numbers after a users name.",
			patterns: [
				"[the] discriminator[s] of %users%",
				"%users%'[s] discriminator[s]",
			],
			example: "discord command $info <user>:,\ttrigger:,\t\treply with \"%discriminator of arg-1%\""
		},
		{
			name: "Game of User",
			description: "Get the game of a user. You may use this to set a bots game, this will set it as Playing: <whatever you input>. Use the mark as gametype effect to use the other types.",
			patterns: [
				"[the] game[s] of %members/users/bots/strings%",
				"%members/users/bots/strings%'[s] game[s]",
			],
			example: "discord command $info <user>:,\ttrigger:,\t\treply with \"%game of arg-1%\""
		},
		{
			name: "New Line",
			description: "Get a newline, which means skips to a new line",
			patterns: [
				"([a] new line|nl)",
			],
			example: "discord command $nl:,\ttrigger:,\t\tset {_m} to a message builder,\t\tappend \"Hey!\" to {_m},\t\tappend \"%nl%\" to {_m},\t\tappend \"There!\" to {_m},\t\treply with {_m}"
		},
		{
			name: "Zero width space",
			description: "Get a zero width space",
			patterns: [
				"[a] zero width space",
			],
			example: "append zero width space to {_messageBuilder}"
		},
	],
	Events: [
		{
			name: "Discord Command",
			description: "Vixio's custom Discord command system",
			patterns: [
				"discord command <([^\s]+)( .+)?$>",
			],
			example: "discord command cmd <member>:,\tprefixes: \"hey \", \"%mention tag of event-bot% \", ##,\taliases: info, user,\troles: Dev,\tdescription: Get some information about a user,\tusage: hey info <member>,\tbots: {@bot},\texecutable in: guild,\ttrigger:,\t\tset {_} to a message builder,\t\tappend line \"-=Who is %name of arg-1%=-\",\t\tappend line \"Name: %name of arg-1%\",\t\tappend line \"ID: %id of arg-1%\",\t\tappend line \"Mention tag: %mention tag of arg-1%\",\t\tappend line \"Status: %online status of arg-1%\",\t\treply with {_}"
		},
		{
			name: "Track end",
			description: "Fired when a song a bot is playing ends.",
			patterns: [
				"track end [seen by %-string%]",
			],
			example: "on track end seen by \"Jewel\""
		},
		{
			name: "Track Seek",
			description: "Fired when the position of a track a bot is playing is changed. This is when it is manually changed, via set position.",
			patterns: [
				"track seek [seen by %-string%]",
			],
			example: "on track seek seen by \"Jewel\""
		},
		{
			name: "Track start",
			description: "Fired when a song starts. May be when a new track in the queue starts or when the first track is played.",
			patterns: [
				"track start [seen by %-string%]",
			],
			example: "on track start seen by \"Jewel\""
		},
		{
			name: "Reaction Add",
			description: "Fired when a reaction is added to a message",
			patterns: [
				"reaction add[ed] [seen by %-string%]",
			],
			example: "on reaction add:"
		},
		{
			name: "Vixio Command",
			description: "Used to detect when a specific vixio command is fired",
			patterns: [
				"vixio command [%-string%]",
			],
			example: "on vixio command \"eval\":"
		},
		{
			name: "Guild Message Received",
			description: "Fired when a message is sent in a text channel that the bot can read.",
			patterns: [
				"(guild|server) message (receive[d] [seen]| sent) [by %-string%]"
			],
			example: "on guild message received seen by \"a bot\":"
		},
		{
			name: "Voice Join",
			description: "Fired when a user joins a voice channel",
			patterns: [
				"user join voice [seen by %-string%]",
				"voice [channel] join [seen by %-string%]",
			],
			example: "on voice channel join:"
		},
		{
			name: "Voice Leave",
			description: "Fired when a user leaves a voice channel",
			patterns: [
				"user leave voice [seen by %-string%]",
				"voice [channel] leave [seen by %-string%]",
			],
			example: "on voice channel leave:"
		},
		{
			name: "Private Message",
			description: "Fired when a private message is received or sent.",
			patterns: [
				"(private message|direct message) <receive(d)?( seen)?|sent> [by %-string%]",
			],
			example: "on direct message received:"
		},
		{
			name: "Reaction Remove",
			description: "Fired when a reaction is removed from a message",
			patterns: [
				"reaction remove[d] [seen by %-string%]",
			],
			example: "on reaction remove:"
		},
		{
			name: "Bot Join Guild",
			description: "Fired when a bot joins a new guild.",
			patterns: [
				"bot (join|enter) [new] guild [seen by %-string%]",
			],
			example: "on bot join guild"
		},
		{
			name: "Bot Leave Guild",
			description: "Fired when a bot leaves a guild. This could be caused by getting kicked or just naturally leaving.",
			patterns: [
				"bot (leave|exit) guild [seen by %-string%]",
			],
			example: "on bot leave guild:"
		},
		{
			name: "User Banned",
			description: "Fired when a user is banned from a guild.",
			patterns: [
				"user ban[ned] [seen by %-string%]",
			],
			example: "on user banned:"
		},
		{
			name: "User Unbanned",
			description: "Fired when a user is unbanned from a guild.",
			patterns: [
				"user unban[ned] [seen by %-string%]",
			],
			example: "on user unbanned:"
		},
		{
			name: "Role Added",
			description: "Fired when a Member receives a new role or roles. You can use the `the roles` expression to get all the roles.",
			patterns: [
				"member role add[ed] [seen by %-string%]",
			],
			example: "on member role add:"
		},
		{
			name: "Member Switch Voice Channel",
			description: "Fired when a member switches voice channels.",
			patterns: [
				"member (switch|move) [voice] channel [seen by %-string%]",
			],
			example: "on member switch voice channel:,\tbroadcast \"%event-user% left %old channel% and joined %new channel%\""
		},
		{
			name: "Guild Join",
			description: "Fired when a user joins a guild",
			patterns: [
				"(user|member) join (guild|server) [seen by %-string%]",
			],
			example: "on member join guild:"
		},
		{
			name: "Guild Leave",
			description: "Fired when a user leaves a guild. Could be caused by kicking them or them leaving on their own free will.",
			patterns: [
				"(guild|member) leave (guild|server) [seen by %-string%]",
			],
			example: "on member leave guild:"
		},
		{
			name: "Nickname Change",
			description: "Fired when a member changes their nickname.",
			patterns: [
				"[member] nick[name] (change|update) [seen by %-string%]",
			],
			example: "on nickname update:"
		},
		{
			name: "Role Removed",
			description: "Fired when a Member has a role or roles removed from them. You can use the `the roles` expression to get all the roles.",
			patterns: [
				"member role remove[d] [seen by %-string%]",
			],
			example: "on member role remove:"
		},
		{
			name: "Message Deleted",
			description: "Fired when a message is deleted",
			patterns: [
				"message delete[d] [seen by %-string%]",
			],
			example: "on message deleted"
		},
		{
			name: "Message Received",
			description: "Fired when a message is received anywhere, either a private message or a text channel",
			patterns: [
				"message receive[d] [seen by %-string%]",
			],
			example: "on message received:"
		},
	]
}
