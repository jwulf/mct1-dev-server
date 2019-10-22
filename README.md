# mct1-dev-server

A Dockerless server for doing development on MCT1

## Setup

1. Fork this repository ([mct1-dev-server](https://github.com/jwulf/mct1-dev-server)) on GitHub.

2. Clone your fork:

```bash 
git clone <git_url_of_your_mct1-dev-server_fork>
```

3. Fork the mct1-worlds repository from [https://github.com/Magikcraft/mct1-worlds](https://github.com/Magikcraft/mct1-worlds).

4. Clone your mct1-worlds fork inside the `mct1-dev-server` folder:

```bash
cd mct1-dev-server
git clone <git_url_of_your mct1-worlds_fork>
```

## Running the server

If you need to modify the port the server runs on, edit `server.properties`.