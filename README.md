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

5. Create a feature branch for the worlds:

```bash
cd mct1-worlds
git checkout -b feature/<feature_you_are_working_on>
```

The name is arbitrary, but it means that you can submit a pull request with your changes back to the main worlds repo in the Magikcraft GitHub organisation.

## Configuring the server

If you need to modify the port the server runs on, edit `server.properties` and change the value for `server-port`.

## Running the server

To run the server, use the following command:

```bash
java -jar paperclip
```

## Commands

* `/mct1 start` - Start the T1D condition

* `/mct1 stop` - Stop the T1D condition

* `/mv list` - List all worlds

* `/mv tp <worldname>` - teleport into world

* `/quest` - list all quests

* `/quest <questname>` - start quest

* `/quest <questname> stop` - end quest

## Quest worlds

The original world for a quest is cloned to a user-specific world when a quest starts. 

The worlds are in a sub-folder (which you checked out of GitHub), called `mct1-worlds`.

