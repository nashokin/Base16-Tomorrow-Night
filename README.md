## Base16 - Tomorrow Night, Visual Studio Code theme.
This theme is converted from [chriskempson/base16-textmate](https://github.com/chriskempson/base16-textmate) to Visual Studio Code compatible theme. White and purple colors were updated to be in sync with the Visual Studio custom settings for this theme.

### Code
![Base16 Visual Studio Code](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/Screenshot-code.png)

## settings.json
Copy this json to your Visual Studio user setting section for the purple customised look.
* [settings.json](https://github.com/nashokin/Base16-Tomorrow-Night/blob/master/settings.json)

### macOS
![Base16 Visual Studio Code mac](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/Screenshot-mac.png)
### Windows
![Base16 Visual Studio Code windows](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/Screenshot-windows.png)
### Linux
![Base16 Visual Studio Code windows](https://raw.githubusercontent.com/nashokin/Base16-Tomorrow-Night/master/Screenshot-linux.png)

### List of installed Vusial Studio Code extensions for screenshots
* Material Icon Theme - [Marketplace link](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* Git Lens - [Marketplace link](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* Braket Pair Colorizer - [Marketplace link](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
* ESLint - [Marketplace link](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Zsh packages
* zsh - [http://www.zsh.org](http://www.zsh.org)
* powerlevel9k theme for zsh -> git repo [powerlevel9k](https://github.com/bhilburn/powerlevel9k)
* zsh patched fonts -> git repo [fonts](https://github.com/powerline/fonts) - font used in configuration is "Ubuntu Mono derivative Powerline"; "Meslo LG S for Powerline" also my second best personal choice.
* nvm for zsh plugin -> git repo [zsh-nvm](https://github.com/lukechilds/zsh-nvm)

#### macOS zsh configuration (run these commands in Terminal)
* `brew update && brew upgrade && brew cleanup` - this command is not necessary, just to keep brew up to date
* `brew install zsh` - install the zsh shell
* `brew install zsh-completions` - additional command completions for zsh -> git repo [zsh-completions](https://github.com/zsh-users/zsh-completions)
* `git clone https://github.com/bhilburn/powerlevel9k.git ~/powerlevel9k` - or change the path to the folder you like, but also change in the next command below
* `echo 'source  ~/powerlevel9k/powerlevel9k.zsh-theme' >> ~/.zshrc`
* `git clone https://github.com/powerline/fonts.git --depth=1` - clone git repo with programmer fonts
* `cd fonts` and then `./install.sh`
* `git clone https://github.com/lukechilds/zsh-nvm.git ~/.zsh-nvm` - or the folder preference of your choice, same as for powerlevel9k
* `echo 'source ~/.zsh-nvm/zsh-nvm.plugin.zsh' >>  ~/.zshrc`

#### Windows
* coming soon

#### Linux (Ubuntu)
* coming soon

### For more information
* [Daniel Nashokin](http://www.zyker.com.au)
