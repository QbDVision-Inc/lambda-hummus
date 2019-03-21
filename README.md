# lambda-hummus

This repository contains only the pre-built binary for running hummus in an AWS Lambda function.  This is so you can deploy hummus to a Lambda function from a Windows machine.  To do so:
```
npm install hummus --save
npm install lambda-hummus --save
copy node_modules/hummus/binding/hummus.node node_modules/hummus/binding/hummus_backupForMyOS.node
copy node_modules/lambda-hummus/binding/hummus.node node_modules/hummus/binding/hummus.node
```

And then deploy your lambda function as you would normally.
