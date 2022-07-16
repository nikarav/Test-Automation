#!/bin/bash
set -ex
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

# Install Chrome Driver for Selenium
wget https://chromedriver.storage.googleapis.com/103.0.5060.53/chromedriver_linux64.zip

sudo apt-get install unzip

unzip chromedriver_linux64.zip -d .

sudo apt update
sudo apt install -y unzip xvfb libxi6 libgconf-2-4 
sudo mv chromedriver /usr/bin/chromedriver
sudo chown root:root /usr/bin/chromedriver
sudo chmod +x /usr/bin/chromedriver
npm install chromedriver
chromedriver --url-base=/wd/hub
#echo 'export PATH=$PATH:$pwd' >> ~/.bash_profile
#source ~/.bash_profile
