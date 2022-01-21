FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/mkcert
WORKDIR /usr/mkcert 
COPY setup.sh /usr/mkcert/setup.sh
RUN chmod +x setup.sh
CMD ["./setup.sh"]




# FROM nginx
# COPY local.default.conf /etc/nginx/conf.d/default.conf
# RUN apt-get update
# RUN apt-get install wget
# RUN apt-get install -y libnss3-tools
# RUN mkdir /usr/mkcert
# WORKDIR /usr/mkcert 
# RUN wget https://github.com/FiloSottile/mkcert/releases/download/v1.1.2/mkcert-v1.1.2-linux-amd64 && mv mkcert-v1.1.2-linux-amd64 mkcert
# RUN chmod +x mkcert
# RUN ./mkcert -install
# RUN ./mkcert localhost