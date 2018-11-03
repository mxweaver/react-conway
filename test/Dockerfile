# ----- BASE -----
FROM node:8.12.0-alpine as base

# install dependencies for node-canvas
RUN apk add --no-cache \
    build-base \
    g++ \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    bash \
    imagemagick

# ----- BUILDER -----
FROM base as builder

RUN mkdir /etc/react-conway
ADD package.json /etc/react-conway
ADD package-lock.json /etc/react-conway
WORKDIR /etc/react-conway
RUN npm install

ADD . /etc/react-conway

# ----- RUNNER -----
FROM base

COPY --from=builder /etc/react-conway /etc/react-conway
WORKDIR /etc/react-conway

CMD npm run test