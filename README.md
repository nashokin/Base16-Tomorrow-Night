## Base16 - Tomorrow Night, theme for Visual Studio Code
This theme is converted from [chriskempson/base16-textmate](https://github.com/chriskempson/base16-textmate) to Visual Studio Code compatible theme. White and purple colors were updated to be in sync with the Visual Studio custom settings for this theme.

### Code
![Base16 Visual Studio Code](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/images/Screenshot-code.png)

### Theme settings
Copy this json to your Visual Studio Code user setting section for the purple customised look.

- [settings.json](https://github.com/nashokin/Base16-Tomorrow-Night/blob/master/settings.json)
	- **macOS** `Cmd + Shift + P` **Windows/Linux** `Ctrl + Shift + P` - to open the command drop down in Visual Studio Code
	- select `Preferences: Open Settings (JSON)` to open the user settings JSON configuration panel
	- copy/paste everything from `settings.json` into right hand side panel and save; delete all previous settings before paste; merge it if you know what you're doing :)

#### macOS
![Base16 Visual Studio Code mac](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/images/Screenshot-mac.png)
#### Windows
![Base16 Visual Studio Code windows](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/images/Screenshot-windows.png)
#### Linux
![Base16 Visual Studio Code windows](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/images/Screenshot-linux.png)

### List of installed Vusial Studio Code extensions for screenshots
- **Material Icon Theme** - marketplace [link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- **Git Lens** - marketplace [link](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- **Braket Pair Colorizer** - marketplace [link](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- **ESLint** - marketplace [link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Zsh packages
- **zsh** shell - [http://www.zsh.org](http://www.zsh.org)
- **powerlevel9k** theme for zsh -> git repo [powerlevel9k](https://github.com/bhilburn/powerlevel9k)
- **Powerline** patched fonts for use in **zsh** shell -> git repo [fonts](https://github.com/powerline/fonts) - font used in configuration is "Ubuntu Mono derivative Powerline"; "Meslo LG S for Powerline" also my second best personal choice.
- **nvm** for zsh plugin -> git repo [zsh-nvm](https://github.com/lukechilds/zsh-nvm)

#### macOS zsh configuration (run these commands in Terminal)
- `brew update && brew upgrade && brew cleanup` - this command is not necessary, just to keep **brew** up to date :)
- `brew install zsh` - install the **zsh** shell
- `brew install zsh-completions` - additional command completions for **zsh** -> git repo [zsh-completions](https://github.com/zsh-users/zsh-completions)
- `git clone https://github.com/bhilburn/powerlevel9k.git ~/powerlevel9k` - or change the path to the folder you like, but also change in the next command below
- `echo 'source  ~/powerlevel9k/powerlevel9k.zsh-theme' >> ~/.zshrc`
- `git clone https://github.com/powerline/fonts.git --depth=1` - clone git repo with programmer fonts
- `cd fonts` and then `./install.sh`
- `git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh-nvm` - or the folder preference of your choice, same as for powerlevel9k
- `echo 'source ~/.zsh-nvm/zsh-nvm.plugin.zsh' >>  ~/.zshrc`

#### Windows
- install Ubuntu from Windows Store, follow the prompts to complete the installation
- start Ubunty shell from the Start Menu
- update all packege to the latest version - `sudo apt update && sudo apt upgrade`
- `sudo apt install zsh` - install the **zsh** shell, will prompt for password
- optionally install **zsh-completions** by following the Ubuntu instructions below
- `git clone https://github.com/bhilburn/powerlevel9k.git ~/powerlevel9k` - or change the path to the folder you like, but also change in the next command below
- `echo 'source  ~/powerlevel9k/powerlevel9k.zsh-theme' >> ~/.zshrc`
- close the Ubuntu shell
- start PowerSheel or CommandPromt
- clone fonts git repo -> `git clone https://github.com/powerline/fonts.git --depth=1`
- in **WindowsExplorer** navigate to the fonts folder and install the dev font of your choice; in my case it's "`Ubuntu Mono derivative Powerline.ttf`"
- open RegEdit and navigate to this key `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont`
- add new string value with the name "000" and the value of your preferred font, in my case it's "`Ubuntu Mono derivative Powerline`"
- restart your computer for the changes to get applied
- go to PowerShell or CommandPrompt and change the default font to the font added in the RegEdit
- in Visual Studio Code press `Ctrl + ~` to open the bult-in console and type "`ubuntu`" and then in the Ubuntu terminal type "`zsh`" to launch the **zsh** shell

#### Linux (Ubuntu)
- `sudo apt update && sudo apt upgrade` - this command is not necessary, just to keep **Ubuntu** up to date :)
- `sudo apt install zsh` - install the **zsh** shell, will prompt for password
- **zsh-completions** - more repos at this [url] -> git repo [zsh-completions](https://software.opensuse.org/download.html?project=shells%3Azsh-users%3Azsh-completions&package=zsh-completions)
	- **Ubuntu 18.04** - `sudo sh -c "echo 'deb http://download.opensuse.org/repositories/shells:/zsh-users:/zsh-completions/xUbuntu_18.04/ /' > /etc/apt/sources.list.d/shells:zsh-users:zsh-completions.list"`
	- **Ubuntu 16.04** - `sudo sh -c "echo 'deb http://download.opensuse.org/repositories/shells:/zsh-users:/zsh-completions/xUbuntu_16.04/ /' > /etc/apt/sources.list.d/shells:zsh-users:zsh-completions.list"`
	- `sudo apt update`
	- `sudo apt install zsh-completions`
- `git clone https://github.com/bhilburn/powerlevel9k.git ~/powerlevel9k` - or change the path to the folder you like, but also change in the next command below
- `echo 'source  ~/powerlevel9k/powerlevel9k.zsh-theme' >> ~/.zshrc`
- `git clone https://github.com/powerline/fonts.git --depth=1` - clone git repo with programmer fonts
- `cd fonts` and then `./install.sh`
- `git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh-nvm` - or the folder preference of your choice, same as for powerlevel9k
- `echo 'source ~/.zsh-nvm/zsh-nvm.plugin.zsh' >>  ~/.zshrc`

### For more information
- Daniel Nashokin - **www:** [http://www.zyker.com.au](http://www.zyker.com.au) **email:** [nashokin@outlook.com.au](mailto:nashokin@outlook.com.au)

![Robot Thumbs Up](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/images/Robot-thumbs-up.png)
