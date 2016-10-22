# Eightpoint <a href="https://circleci.com/gh/wulkano/eightpoint">![Eightpoint CircleCI Builds](https://img.shields.io/circleci/project/wulkano/eightpoint.svg)</a>
An 8pt grid and modern reset focused on typography and accessibility.


## Configuring
If you'd like to help contribute to 8. or simply configure it suit your project you can do so with our gulpfile.

All you need to do is clone this repo, run `npm install -g gulp-cli` and `npm install` in the directory you cloned to and then run `gulp`. This will start a development task that watches for changes within `./src/eight.css` and all modular files, then gulp will pipe those changes into a pure CSS format with both un-minified and minified files in `./dist/`.

At the top of the modular CSS files, there are variables which aim to make it easy for you to configure your 8. environment without diving into the code or worrying about any ramifications.


## Contributing
Please read through any issues that may be open if you've noticed an issue and check that an issue doesn't already exist in the repo. Otherwise, please feel free to submit an issue as long as it isn't asking for help how to use a css file. For help there please head to stackoverflow or the like.

When modifying eight.css, preparing for a Pull Request, please run `gulp lintStyles` before submitting a Pull Request to make sure any tests won't fail. We like to keep the code nice and tidy and working.

Please also search for any pull requests that may have attempted to do the same thing you're implementing. We may have closed the PR due to a number of reasons.
