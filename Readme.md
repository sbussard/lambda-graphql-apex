# lambda-graphql-apex

Install [Apex](http://apex.run) and configure your [AWS Credentials](http://apex.run/#aws-credentials) then follow the instructions below.

Install NPM dependencies:

```
$ npm install
```

Initialize the function role:
```
$ apex init
```

*This creates a folder at `./functions/hello`. You should delete it.*

Add extra options from `project.json_stub` to generated `project.json` to include the runtime, handler and hook options.

Deploy the functions:

```
$ apex deploy
```

Try it out:

```
$ apex invoke graphql-example < event.json
```

AWS Resources that will be created:
- IAM role
- IAM policy
- Lambda function
