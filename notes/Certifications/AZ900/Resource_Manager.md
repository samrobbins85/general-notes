---
title: Control and organize Azure resources with Azure Resource Manager
---

# Principles of resource groups

<Definition name="Resource Groups">
A logical container for resources deployed on Azure
</Definition>

All resources must be in a resource group and a resource can only be a
member of a single resource group.

If you delete a resource group, all resources container within are also
deleted.

Resource groups are a scope for applying RBAC to limit access to allow
only what is needed

# Using tagging to organise resources

<Definition name="Tags">
Name/value pairs of text data that you can apply to resources and resource groups
</Definition>

A resource can have up to 50 tags

Tags can be used to group billing data or to keep track of usage for
different projects

Not all resources support tags, so you need to check if your resource
supports them

# Resource locks

<Definition name="Resource Locks">
A setting that can be applied to any resource to block modification or deletion
</Definition>

Resource locks can be either:

-   Delete - Allow all operations against the resource but block the
    ability to delete it

-   Read-only - Only allow read activities to be performed against it,
    blocking any modification or deletion of the resource
