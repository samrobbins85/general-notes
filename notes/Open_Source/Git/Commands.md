---
title: "Git Commands"
---

# Init

To create a new git repository, you should use the `init` command, you can run
it like so

```shell
git init
```

and a git repository will be created in your current directory

# Clone

However in many cases you will be working from a repository on a git provider
like GitHub. For this you should use the `clone` command, this allows you to
make a copy on your computer and links the repository so you can use the `push`
and `pull` commands (explained later).

You can do this simply from the GitHub website by clicking on the green **code**
button and copying the link provided

![Clone URL](/img/open_source/git/commands/clone.png "Getting the clone URL")

Once you copy this URL, add it after `git clone` like so

```shell
git clone https://github.com/init-OSS/initoss.git
```

This will create a copy of the repository in the current directory

# Add

Prior to understanding the `git add` command, you must first understand the
**staging area**

## Staging area

The staging area is a place between your working directory and the git tree. The
benefit here is that you might not want to add all the files you have changed in
one commit. An example of why you might want to do this is if you have forgotten
to commit for a while and so have changed files that reflect a number of
different changes. This will work to help you to separate those changes.

## Add command

A common use case is that you want to add all the changed files to the staging
area, this can be done like so

```shell
git add -A
```

However you can also add single files like this:

```shell
git add file.txt
```

# Commit

A git commit is a snapshot of the code in its current state. This is useful as
it allows you to see how the code has changed over time, and if you introduce
any bugs, it allows you to go back to a version prior to that introduction.

It also allows others to better understand the code as they can see how
different features were introduced.

A git commit will be made from the **staging area**, so you will have to run
`git add` in some way before this

The most common way to do this from the command line is:

```shell
git commit -m "Message"
```

The `-m` flag here is to provide a message. If you do a simple `git commit` it
will open your text editor to provide a message.

# Push

A git push is the process of moving the code from your computer to where it is
hosted.

A project can have multiple **remotes**, which are places the code is stored,
however most will only have one. The naming convention for a single remote is to
call it `origin`. This is what the remote will be called if you clone a
repository.

A git push command is accompanied by the remote you want and the branch in that
remote, so the most common git push command will be:

```shell
git push origin main
```

`main` is moving to be the default branch name over `master`, but you will still
see many repositories with `master` as the default branch, and so a push command
would be

```shell
git push origin master
```
