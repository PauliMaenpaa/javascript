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

## Package-lock.json:

Package-lock.json file

- is generated for those operations where npm modifies either node_modules or package.json.
- provides the snapshot of all the current and previously used dependencies and subdependencies with exact versions.
- locks the versions for the consistent project setup accross different environments.

Files main purposes are

- Dependency Locking:

  - detailed record of dependency tree.
  - locks specific versions of packages, preventing unintended updates.

- Version Consistency:

  - everyone using uses the same versions of dependencies.
  - consistant building across different environments.

- Improved Installation Speed:
  - stores flat node_modules structure, which results faster and more reliable dependency installations.

While previously covered package.json file defines basic dependencies and configurations, package-lock.json locks the dependency tree to specific versions. This will ensure consistant and reproducible projects.
