export class ConstLauncher {
  static TYPES: string[] = ['Application','Link', 'Directory'];
  static VERSION: string[] = ['1.0','1.5'];
  static ENCODING: string[] = ['UTF-8'];
  static PRINCIPAL_CATEGORIES = [
    { name: 'AudioVideo', description: 'A multimedia (audio/video) application' },
    { name: 'Audio', description: 'An audio application' },
    { name: 'Video', description: 'A video application' },
    { name: 'Development', description: 'An application for development' },
    { name: 'Education', description: 'Educational software' },
    { name: 'Game', description: 'A game' },
    { name: 'Graphics', description: 'Graphical application' },
    { name: 'Network', description: 'Network application such as a web browser' },
    { name: 'Office', description: 'An office type application' },
    { name: 'Settings', description: 'Settings applications' },
    { name: 'System', description: '	System application, "System Tools" such as say a log viewer or network monitor' },
    { name: 'Utility', description: 'Small utility application, "Accessories"' },

  ];
  static LINK_EXEC =[
    {name:'Firefox New', exec:'firefox --new-window'},
    {name:'Firefox New Tab', exec:'firefox --new-tab'},
    {name:'Firefox New Tab', exec:'firefox --private-window'},
    {name:'Google Chrome New', exec:'google-chrome --new-window'},
    {name:'Google Chrome Private', exec:'google-chrome --incognito'},
  ];
  static ICONS_SIZE = [16, 24, 32, 48, 64, 72, 96, 128, 256, 512];
}
