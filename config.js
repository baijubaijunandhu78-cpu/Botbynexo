const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VUW7KiSBDdS/1qtAgKSMSNGETkooLgC3WiP0oooHhbFCh2uIeO2cBscZYwgff5Md1xh6+iHpknzzmZP0CW4xLNUQOkH6AguIYUtUvaFAhIYFz5PiKgCzxIIZAAUldhtE3J9Xl9zZO5nq2mntqb9CfJtpTD0SQ43IbHi+roSfwE7l1QVKcEu78JaHLNaXTiREsZVGrAnaCXFbkKMROcZnTfC24XgdPsZu00gydwbyNCTHAWqEWIUkRgMkeNBTH5GvxmmeFiKDpzJ9lPo8o6G5qyP4ebZTKqjku+ZrGrLy7+3lKNr8Hf9Q41uSHdSEwsprfwKPTQMD/PGv6wOjj2yOtMRlND9tP95QV+iYMMebqHMopp82XetbF6VpqbLwSpES07hadagllfhSjts7bVG3ZmwSKJJ9Npevka8CLswGsWb8Ikngw1HDr7GxdFXs+oz3KvpMpqsQ0d25gW08Nn4BZ580r8f3jHxrqvDc7j5dVYefNVoVxJvTvm2jDicLXU+PF8QE6JXE7j4Gvwn/kNt3EK10kQH+3yeMnHkZYyz3x2vbKsYvqp4RLXn0DO/YAPaUV+h9K6LWyj2AS5aI1qZmtnyMfoFB7QKpw4+aQc2WsSCEht1IXHeVxsKq5w9M0KXtMiiUcXsqnCnlklgqOrztzm9wE6h/LTo6IYNboHpP69CwgKcEkJpDjP2j1x2AXQq9fIJYg+2AUVR2fsrWCdlS7Gq61wwmu1Qw+FXuHxgZedeYXOxbRi85HxBLqgILmLyhJ5z7ikOWkMVJYwQCWQ/vzeBRm60hfdHtn6XBf4mJR0m1VFkkPvTdX3U+i6eZXRdZO5SrtABEjMxzaiFGdB2RJZZZC4Ia6REkJaAsmHSYneS0QEeUCipELvbavkXsv8TNWO2ko0QRekD0WwByTADgdCf8hzfVYYSf3BH+W3SxsWFsW3DFHQBcnLNZ5nRabPMjzLsfzjZnvQBRlsg4F//v7rZ0v5K942vIcoxEkJJKAs10aVbyfqcnOMqKppshrISiCDj/renPIiReKxnKkxmqIyI+2wn2+nvd6cLnjKCjSrWMWoS65obrJ+Y57+IwiQQD97dobT7em0rCPLk0PLmpNSrXs+j3ICI7UHd4dmkIjryUl1HVYj67w+KNpCFTbFWByHg4ldM/sZxLd9Be14dqpnSAme2mweqrGLPifbxS4T24Zpzy8LhriO6WqXreirvqhyOjPgKkVBSoOEI5ZtcReeS3SF10TdwG1n97wT1P3O9ErOdOvS4DJ7Y3FaVL15+NFDyevswg97tcq1vz5Gj1HwKsEvJXoB3DqNuXc/vX0dKr9ozPFx79Hbio6D0LRW6bRJxn6vIesO8SrhKNAgWggm75YXxRiB+/17FxQJpH5OUiABmHkkfyQnedU6V8/8/DfJlLGuj+3AbCtOYEnlj27Y4BSVFKYFkPqCyAgsO2L7XZA2clGsKaRvXQTk9jNsEdz/BSv/vwthBwAA",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "NEXO",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
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
        
