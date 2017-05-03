echo 'Download nodejs'
wget  https://nodejs.org/download/release/v6.10.0/node-v6.10.0-linux-x64.tar.xz
tar -xvf node-v6.10.0

echo 'install nodejs'
mv node-v6.10.0 /usr/local

echo 'prepare the profile'
echo 'export "PATH=$PATH:/usr/local/nodejs/bin"' >>/etc/profile
source /etc/profile

echo 'Install git'
yum install git

echo 'get the project repos from github'
git clone https://github.com/binarychen/logi.git

cp logi/mongodb-org-3.4.repo /etc/yum.repos.d/.

echo 'install mongodb-org'
yum install -y mongodb-org

echo 'config mongodb-org'