#!/bin/bash
set -ex
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

# Install Chrome Driver for Selenium
wget https://chromedriver.storage.googleapis.com/103.0.5060.53/chromedriver_linux64.zip

sudo apt-get install unzip

unzip chromedriver_linux64.zip -d .

echo 'export PATH=$PATH:$pwd' >> ~/.bash_profile
source ~/.bash_profile



