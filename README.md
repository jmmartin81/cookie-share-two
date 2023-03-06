
## App Two to share cookies

This app try to receive a cookie from the app1 (https://github.com/jmmartin81/cookie-share-one)

This app will run on port 3002

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

```

## To use it on Ngrok 

Must follow the following article:

https://medium.com/@singhgautam7/ngrok-make-full-use-of-free-tier-version-to-expose-your-localhost-to-the-internet-1160e652d794

Ngrok yml must be like:

```bash
    version: "2"
    authtoken: <yourToken>
    tunnels:
    first:
        addr: 3001
        proto: http 
        host_header: "rewrite"
    second:
        addr: 3002
        proto: http
        host_header: "rewrite"
```

To run ngrok:
```bash
ngrok start --all
```

## Changes to Make to the code 

The follows files must be replace the urls with ngrok urls will give to you when it runs.

```bash 
app.js on line 21.
```