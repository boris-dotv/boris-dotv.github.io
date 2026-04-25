import displayAvril from './components/apps/avril';
import displayGithub from './components/apps/github';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutBoris } from './components/apps/boris';
import { displayTerminalCalc } from './components/apps/calc';

const apps = [
    {
        id: "about-boris",
        title: "About Me (Double-Click!)",
        icon: './themes/Yaru/apps/about-me.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayAboutBoris,
    },
    {
        id: "github",
        title: "Github",
        icon: './themes/Yaru/apps/code.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayGithub,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/browser.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "avril",
        title: "beloved Avril",
        icon: './themes/Yaru/apps/music.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayAvril,
    },
    {
        id: "calc",
        title: "Calculator",
        icon: './themes/Yaru/apps/calculator.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/terminal.svg',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gear.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/apps/trash.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/mail.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: false,
        screen: displayGedit,
    },
]

export default apps;