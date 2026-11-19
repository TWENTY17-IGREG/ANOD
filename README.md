# ANOD · Projects

Archive of ANOD projects and proofs of concept: a static page, no build step.

- `index.html` is the page; you don't normally need to touch it.
- `projects.js` is the project list; edit this to add or update a project.

## Add or update a project

1. Open `projects.js` (on GitHub: open the file, then the pencil icon).
2. Copy the TEMPLATE at the top of the file and paste it after the last project. Put a comma after the previous project's closing `}`.
3. Fill in the fields, then commit.
4. GitHub Pages republishes the site in about a minute.

If the page shows "projects.js could not be read", the last edit broke the syntax. The usual cause is a missing comma, quote or bracket.

## Publish with GitHub Pages (once)

In the repository, go to Settings → Pages. Under Source, choose **Deploy from a branch**, then **main** and **/ (root)**, and save.

The site will be at `https://<user>.github.io/<repo>/`.

## Preview locally

Open `index.html` in a browser. No server is needed.

Everything in this repository is public once Pages is on.
