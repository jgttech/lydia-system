[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Lydia

## Getting Started

- Download the repo
- Install [PNPM](https://pnpm.js.org/): `npm i -g pnpm`
- Open base directory in terminal
- Run: `pnpm i`
- Run: `npx lerna bootstrap`

## Projects

- ai
  - apollo
  - paralleldots
- communication
  - twilio
- database
- gateway
- trainer
  - react-web

## Status Codes

- **200**: *Ok*
  + Indicates successful request.
- **404**: *Not Found*
  + Indicates that a request could not find whatever was searched for.

---

## AWS Configuration

### AWS CodeCommit

#### Repositories
- [lydia](https://us-east-2.console.aws.amazon.com/codesuite/codecommit/repositories/lydia/browse?region=us-east-2)

---

### AWS CodeBuild

#### Build projects
- [lyida-database-build](https://us-east-2.console.aws.amazon.com/codesuite/codebuild/projects/lydia-database-build/history?region=us-east-2)
  + ![Build Status](https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiSnVGQzh4RXNLdWFGcEMydGZlSGxIN20vbUVvVHNnbFNnQkxGRUgveHhWQWlkbGpEK1p3dTI5VzZLWUNmRmRWOGEvc1pjSjBEWmZLSE9mZE9JbGVDdGdrPSIsIml2UGFyYW1ldGVyU3BlYyI6IlVlbjVOSUdXRWpLQVJXOCsiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=dev)
- [lydia-trainer-build](https://us-east-2.console.aws.amazon.com/codesuite/codebuild/projects/lydia-trainer-build/history?region=us-east-2)
  + ![Build Status](https://codebuild.us-east-2.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMGJIYWQ1WWlmZXBZWG5PY3M1eHdJQXFzYmM5RjNJSUt5OEdpeVV0U2lvdHlHY0dweVlqV0dkdFp3bU5WYWdiRURkUmdaWjdKQlVBLzhoNkpNZFdNZFJVPSIsIml2UGFyYW1ldGVyU3BlYyI6Ik5ONU4xTFJwL2xtcmp6aTkiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=dev)

---

### AWS CodePipeline

#### Pipelines
- [lyida-database-pipeline](https://us-east-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/lydia-database-pipeline/view?region=us-east-2)
- [lyida-trainer-pipeline](https://us-east-2.console.aws.amazon.com/codesuite/codepipeline/pipelines/lydia-trainer-pipeline/view?region=us-east-2)

---

### AWS Elastic Beanstalk

#### Applications
- [lydia-database-test](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/environment/dashboard?applicationName=lydia-database-test&environmentId=e-xbcsygawst)
- [lydia-trainer-test](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/application/overview?applicationName=lydia-trainer-test)

#### Environments
- [LydiaDatabaseTest-env](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/environment/dashboard?applicationName=lydia-database-test&environmentId=e-xbcsygawst)
- [LydiaTrainerTest-env](https://us-east-2.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-2#/environment/dashboard?applicationName=lydia-trainer-test&environmentId=e-jtwhhedesu)