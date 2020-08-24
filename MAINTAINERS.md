# To Create A New Release

Steps:
1. On a debian docker image using the **version of node** you want. Then:
    1. `npm install hummus` # Install hummus
    1. `vi package.json` # Update the hummus version
    1. `npm install`
1. Copy the hummus.node file to this repo
    1. `cp node_modules/hummus/binding/hummus.node binding/hummus.node`
1. Zip it up
    1. `cd binding/`
    1. `rm hummus.node.zip` # Remove the old one, if it exists
    1. `zip a hummus.node.zip hummus.node`
1. Delete the unzipped version
    1. `rm hummus.node`
1. Update package.json with the new version info
1. Publish it
    1. `npm publish`
1. Commit and push your changes
1. Create [a new release on GitHub](https://github.com/CherryCircle/lambda-hummus/releases/new)
