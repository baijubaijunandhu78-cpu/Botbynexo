const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9XWEZwdVBoVFY4bVE1RWFrTlJ4Y1JYR0dQc1BqUGl0cFNYVDF1UlpYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlNtV0VqU2xGb2ZnQUh6WkNSTjVnMXJacnRUN0dtUlcvd0V4UWd6dUx3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRFhReE45N05NbEVHd0RqN21jQjB2MGhrbEdXYjVmbCsxQkJOTTAxbEZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqSCtLU3hFdCtobXo1emtSSFZ5bWxwOXdubERBVzRFUjZIVHRZZ01PUVQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHU0daRUplK053Y0ExbzhCKzF2M21USmtScGg5d0t6cHhmUkNmMkxka289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik96V2RReGxtWFdFRHVhWVRsV0V6TG82cy8yRUVSZXkydFRvNGdHRWphVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FTaG9wdnVzakdYaThuczRweFRZd013b21zWXgrNXNseTgvbTJKMDRHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3ZIZCtHYTJaQ0Q1alBOUDhMZGl2aVloNlYxSzI1aXVzZmMzcFp6TWVtQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlLaTZvRmYzV1dXM1VhczMwMXdwK3VrSkJVM3BtbDZOM0IwZzZhcjdmOXlmYjZWTUZjWTlzajZkQVpqNmY5N3M3M1NmWUR1eVFORVpTQ3ZIZTFpeURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJOekkwa3phQjFPN3lma0ZmdUR5OEdCZ0F4SUFpcXlWZWp3aHVWMFFYdlFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxNTYzMTI3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM4MzcxMTlDODE0QTZEQjJCNTRCOTUxN0M1OTZCODUiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MDY4OTcyM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE1NjMxMjc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0FFMDVFNTkyOTAwQTdFQTkyMjdFQjg4Q0IyMUVCOCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgwNjg5NzIzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTU2MzEyNzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDQ0IzQjkxNzhDRTE4NTNCOUFEOTQ0RURFRTUxNzk1IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODA2ODk3MjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxNTYzMTI3OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNENTJEODk3QzFFQUY0OUZDQzZBQTg1N0FGMDg3NDMiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MDY4OTcyM30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE1NjMxMjc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzA1OEUyRTdBNzY4ODg0RDU5RTk3RTIyQUM4MDJGMCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgwNjg5NzI4fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlIxSzVTUDExIiwibWUiOnsiaWQiOiIyNTQ3MTU2MzEyNzk6MTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNjYyODAxMjA2MjMyNjk6MTJAbGlkIiwibmFtZSI6IvCfkpAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09PTXVvVURFS3ZXak5FR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImxkMjNORzBHQ0UwOUdZWEtVRi8vS3RMNnQyN3RudTJDTXZzM3B5ekFJejA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdyUVpWT0VXMDlCVW8zWjRBSnpGOEVnS3V5U01IekpwTms0bkxrZVBWb1QrTUhlNm1PS0NmMkhpdnQ4L0tPOEVuMnJZNVFPRFc1alZKR3Myc0c2dUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOVnNxQVo1NGhDWTR5VkNiREhtS0t1dWUyM3Bac3h0OVNNUGxMZnllTUozSWlZL3BKaVZnR2pxT1ZaZUlIRFdnM1FnQUl2bXcxUE9RRzNCdkViN2xEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2NjI4MDEyMDYyMzI2OToxMkBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWlhkdHpSdEJnaE5QUm1GeWxCZi95clMrcmR1N1o3dGdqTDdONmNzd0NNOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzgwNjg5NzIyLCJsYXN0UHJvcEhhc2giOiJNOEs2eSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRUh1In0=",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "NEXO",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "917736728890",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "𝑶𝑵𝑳𝒀 𝑵𝑬𝑿𝑶",           // Owner's name
    DEV: process.env.DEV || "917736728890",                     // Developer's contact number
    DEVELOPER_NUMBER: '917736728890@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*NEXO VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "𝒐𝒏𝒍𝒚𝒏𝒆𝒙𝒐",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/2cuh10.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚 𝒏𝒆𝒙𝒐*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
