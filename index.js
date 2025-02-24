const { AoiClient } = require("aoi.js");
const { InviteManager } = require("@akarui/aoi.invite");

const client = new AoiClient({
    token: config.Token, // Token do Bot
    prefix: ".", // Prefixo do Bot
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

new InviteManager(
  client,
  {
    sk: "11111111112222222222333333333344",
  },
  ["inviteJoin", "inviteLeave"]
);

// Comando Ping
client.command({
    name: "ping",
    code: `Pong! $pingms`
});

// Comando de Avaliação
client.command({
    name: "eval",
    code: `$eval[$message]`
});

client.loadCommands("./commands"); // Carrega os comandos da pasta "comandos"

// Iniciar o bot
client.login();

client.variables({
    canal_ticket: "",
    criador_ticket: "",
    categoria_ticket: "",
    cargo_ticket: "",
    registros_ticket: "",
    feedback_ticket: "",
    assumido_ticket: "",
    desc_ticket: "",
    color_ticket: "ffffff",
    description_ticket: "",
    title_ticket: "",
    thumbnail_ticket: "",
    image_ticket: "",
    footer_ticket: "",
    user_ticket: "",
    channelvar_ticket: "",
});