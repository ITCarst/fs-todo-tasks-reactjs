FROM phusion/baseimage:latest

# Custom init script of phusion's stripped ubuntu image
CMD ["/sbin/my_init"]

ARG source_dir=/opt/tasks

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/* && \
	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
	curl -sL https://deb.nodesource.com/setup_7.x | bash - && \
	apt-get install -y nodejs yarn bzip2 git

# Caching node_modules
COPY package.json /tmp/package.json
RUN cd /tmp && yarn && \
	mkdir -p $source_dir/node_modules && cp -r /tmp/node_modules $source_dir

WORKDIR $source_dir
COPY . $source_dir
RUN cd $source_dir

ENV PORT=8000

EXPOSE $PORT
CMD yarn run build && yarn start