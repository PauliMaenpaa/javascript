# NPM Packages

## What is npm

npm (Node Package Manager) is standard package manager for Node.js

it installs, updates and manages downloads of dependencies of project

dependencies are pre-built pieces of code, such as libraries and packages, that project needs to work

alternatives for npm: **Yarn & pnpm**

## Basic npm Commands:

### Initializing a Project:

`npm init`

`npm init -y`

### Installing Packages:

`npm install <package-name>`

### Installing Dev Dependencies:

`npm install <package-name> --save-dev`

### Uninstalling Packages:

`npm uninstall <package-name>`

### Updating Packages:

`npm update <package-name>`

### Listing Installed Packages:

`npm list`

### Installing Global Packages:

`npm install -g <package-name>`

## Package.json:

Package.json file

- is the core of a Node.js system, and it contains the metadata of the project
- is used to manage project metadata, dependencies, scripts and configurations

File content can be categorized as

1. Identifying metadata properties: consist identifying properties, such as name of the project, version, license, author, description etc.
2. Functional metadata properties: consist functional values/properties, such as entry/starting point, dependencies, scripts, repository links etc.

Can be created in two ways

1. `npm init` file will be filled with default values. User needs to fill the vital information.
2. Creating and writing file from scratch and including it to project.

**Package.json needs to be actual JSON, not just a JavaScript object literal**

#### JSON:

```
{
  "name": "my-project",
  "version": "1.0.0"
}
```

#### JS Object literal:

```
{
  name: 'my-project',
  version: '1.0.0'
}
```

More about package.json on npm docs: https://docs.npmjs.com/cli/v10/configuring-npm/package-json

## Package-lock.json:
