FROM evilguy/angular-cli:0.1

# Install bash
RUN apk add --update bash \
  && rm -rf /var/cache/apk/*

# Copy current application
COPY ./include/angular-app/ /usr/angular-app
COPY ./include/run.sh /

RUN cd /usr/angular-app/ \
  && npm install

EXPOSE 9098

CMD /run.sh
