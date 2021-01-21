---
id: installation
title: Installation
sidebar_label: 1. Installation
slug: /getting-started/installation
---

This guide uses Docker Compose to deploy Tyk.  Click on "Other Install Methods" in the sidebar to view the rest of the provided installation methods


### Docker-Compose

First, we clone the docker-compose repository

```bash
$ git clone https://github.com/sedkis/tyk-gw-docker-dev-env
Cloning into 'tyk-gw-docker-dev-env'...

$ cd tyk-gw-docker-dev-env 
```

And then we run Tyk Gateway and Redis.  We can pass `-d` flag to run the processes in the background.
```bash
$ docker-compose up
```

When we're done, we can remove Tyk and Redis, along with associated volumes, with `docker-compose`:
```bash
$ docker-compose down -v
```
