# Athena Student Planner

Athena is a planning tool that combines the traditional calendar with a ticketing system. By students for students. For more information, please refer to the [docs](https://www.notion.so/Student-Planner-d846991fccc54418981b09f31fbb4fd9).

## Maintainers

Leon Xu, Johnny Cao, Harris Chong

## Git Development Flow

Trunk based development. DO NOT directly push to main branch. Create a branch and then create a PR for adding new features.

## Install Prerequisites

1. Install MySQL + MySQL Workbench (Windows tutorial: https://www.youtube.com/watch?v=2c2fUOgZMmY&ab_channel=AmitThinks)

   a. Please set your mySQL root password to `xxxx` during setup

2. Install node and npm via nvm version manager (https://github.com/coreybutler/nvm-windows)

   a. For stable build, try node 16.13.2

3. Install Go (https://go.dev/doc/install)

## Start Athena

1. To setup MySQL database: cd into `backend` and `go run seeds.go`
