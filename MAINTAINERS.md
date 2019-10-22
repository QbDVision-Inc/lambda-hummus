# To Create A New Release

Steps:
1. On a debian docker image using the **version of node** you want, install hummus
    1. `vi package.json` # Update the hummus version
    1. `npm install`
1. Copy the hummus.node file to this repo
    1. `cp node_modules/hummus/binding/hummus.node /mnt/C/projects/lambda-hummus/binding/hummus.node`
1. Zip it up
    1. `zip a hummus.node.zip hummus.node`
1. Update package.json with the new version info
1. Publish it
    1. `npm publish`
