# UXP-Photoshop

This is a Gatsby site template built with [Adobe I/O Gatsby Theme](https://github.com/adobe/gatsby-theme-aio).  

Follow the [instructions](https://github.com/adobe/gatsby-theme-aio#getting-started) to get started.

## Author quick start (WIP)

1. Clone repo
2. Create your `.env` file ([instructions](https://github.com/adobe/gatsby-theme-aio#env-settings-for-github-contributors))
3. `npm install`
4. `npm run dev`
5. Make a new branch from main (be sure your local repository is up-to-date before doing this) using the convention `author-name/docs-work-name`
6. Write great things in `src/pages`
7. Configure nav in `gatsby-config.js` as needed ([instructions](https://github.com/adobe/gatsby-theme-aio#global-navigation))

## Committing Changes

**For the author**

1. Push your changes to a new branch
2. Create a pull request, with an appropriate reviewer.

**For the reviewer**

1. The reviewer must approve the pull request on GitHub
2. Merge the pull request to main
3. Delete the branch and inform the author of the deletion (if this is missed, the author can also remove the branch)

## Deploying

We deploy changes at the end of every sprint, first to STAGE and then to PRODUCTION. These deployments are done by the **Deployment Captain (DC)** and **Deployment First Officer (DFO)** for the given sprint.

### To STAGE (End of Sprint)

> Note: This is typically a Wednesday, but may be adjusted for sprints of non-standard duration. This is intended to be _two days before_ the end of the week in which the sprint ends so as to provide appropriate buffer.

* DC: Edit package.json and bump the version, appending `-stage` as a version label.
* DC: Create branch & PR (named as `<version>-stage`) from change, assigning `deploy:dev` tag, and assign an appropriate reviewer. This should be the Deployment First Officer.
* DFO: approve change (triggering deploy to stage); WAIT for build to succeed, and then close the PR and delete the corresponding branch.

### To PRODUCTION (Day after STAGE)

> Note: This is typically a Thursday, but may be adjusted for sprints of non-standard duration. This is intended to be the day _before_ the end of the week in which the sprint ends so as to provide some buffer for fixes or rollbacks.

* DC: Edit package.json and remove `-stage` as a version label.
* DC: Create branch & PR (named as `<version>`) from change, assigning `deploy` tag, and assign an appropriate reviewer. This should be the Deployment First Officer.
* DFO: approve change (triggering deploy to production); WAIT for build to succeed, and then close the PR and delete the corresponding branch.

### Version Bumps

* Content-only changes with no link changes should only bump the patch version. 
* If links / side-nav are changed, bump the minor version.

### Troubleshooting deploys

**Pull request was merged but changes weren't deployed**

This is likely because: 

- The PR was merged by the author without a reviewer's approval
- The PR wasn't tagged with the appropriate deploy tag
- The review didn't use GitHub's review feature to approve the PR
- You deployed to stage and merged to main before deploying to prod

As a workaround, if all of your changes are already merged to main, you can do the following:

1. Create a new branch from main
2. Bump the version number in `package.json`
3. Follow the deploy steps laid out in the previous sections

## Redirections
Over the course of time, we have moved certain files around. In order to make sure that the bookmarked URLs are not disrupted, we have setup the following redirections
- https://developer.adobe.com/photoshop/uxp/2022/uxp/* -> https://developer.adobe.com/photoshop/uxp/2022/uxp-api/*
- https://developer-stage.adobe.com/photoshop/uxp/* -> https://developer.adobe.com/photoshop/uxp/*
- https://developer.adobe.com/photoshop/uxp/ -> https://developer.adobe.com/photoshop/uxp/2022/
