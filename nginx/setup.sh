#!/bin/sh
if [ "$NODE_ENV" = "development" ]
then
    echo "Node environment in development... Creating self signed certs."
    apt-get update
    apt-get install wget
    apt-get install -y libnss3-tools
    wget https://github.com/FiloSottile/mkcert/releases/download/v1.1.2/mkcert-v1.1.2-linux-amd64 && mv mkcert-v1.1.2-linux-amd64 mkcert
    chmod +x mkcert
    ./mkcert -install
    ./mkcert localhost
else
    echo "Node environment in production... Skipping self signed cert."
fi

nginx -g 'daemon off;'