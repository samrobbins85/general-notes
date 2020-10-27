---
title: Azure Compute Options
---

# Essential Azure compute concepts

<Definition name="Virtual Machines">
Software emulations of physical computers.
</Definition>

<Definition name="Containers">
A virtualization environment for running applications. Don't include an operating system for the apps running inside the container. Bundle the libraries and components needed to run the application and use the existing host OS running the container.
</Definition>

<Definition name="Azure App Service">
Platform as a service designed to host web oriented applications.
</Definition>

<Definition name="Serverless Computing">
Cloud hosted execution environment that runs your code but abstracts the underlying hosting environments.
</Definition>

# Azure Virtual Machines

VMs are an ideal choice when you need:

-   Total control over the OS

-   The ability to run custom software

-   To use custom hosting configurations

When to use virtual machines:

-   During testing and development

-   When running applications in the cloud

-   When extending your datacenter to the cloud

-   During disaster recovery

## Scaling VMs

### Availability set

<Definition name="Availability Set">
A logical grouping of two or more VMs that help keep your application available during planned or unplanned maintenance.
</Definition>

<Definition name="Planned Maintenance Event">
When the underlying Azure fabric that hosts VMs is updated by Microsoft
</Definition>

When the VM is part of an availability set, updates are sequenced so
that not all the associated VMs are rebooted at the same time. They are
put into different update domains

<Definition name="Update Domains">
Groups of VMs and underlying physical hardware that can be rebooted at the same time
</Definition>

<Definition name="Unplanned Maintenance">
Hardware failure in the data centre, such as power outage or disk failure
</Definition>

<Definition name="Fault domain">
The group of virtual machines that all share common hardware that has failed.
</Definition>

With an availability set you get:

-   Up to three fault domains that have a server rack with dedicated
    power and network resources

-   Five logical update domains which then can be increased to 10

There is no cost for an availability set, just for the VMs in the set

### Virtual Machine Scale Sets

Virtual machine scale sets let you create and manage a group of
identical, load balanced VMs.

This allows you to centrally manage, configure and update many VMs to
provide highly available applications.

### Azure Batch

Azure batch enables large scale job scheduling and compute management

Batch:

-   Starts a pool of compute VMs for you

-   Installs applications and staging data

-   Runs jobs with as many tasks as you have

-   Identifies failures

-   Requeues work

-   Scales down the pool as work completes

# Containers

## Azure Container Instances

PaaS to upload containers and execute them directly with automatic
elastic scale

## Azure Kubernetes Service

A complete orchestration service for containers with multiple
architectures with multiple containers

<Definition name="Orchestration">
The task of automating, managing and interacting with many containers
</Definition>

## Microservice architecture

Breaking solutions into smaller, independent pieces. This allows the
separate components of the app to be maintained, scaled or updated
independently.

## Migrating to containers

![Migration to containers](/img/Certifications/AZ900/Compute/4-kub-migration.png)

The process is as follows:

1.  Convert the application to containers and publish to Azure Container
    Registry

2.  Deploy the containers to an AKS cluster

3.  Azure AD controls access to AKS resources

4.  You access Azure services

5.  Optionally, AKS is deployed with a virtual network

# Azure App Service

## Costs

You pay for the compute resources your app uses. The app service plan
determines how much hardware is devoted to the host. There’s even a free
tier for low traffic sites

## Types of app services

-   Web apps - Host web apps

-   API apps - Build REST-based Web APIs

-   Web Jobs - Run a program or script in the same context as a web app.
    They can be scheduled or run by a trigger

-   Mobile app back ends

    -   Store mobile app data in a cloud based SQL database

    -   Authenticate customers

    -   Send push notifications

    -   Execute custom back end logic

# Serverless

Serverless encompasses three ideas:

-   Abstraction of servers - Don’t need to manage them

-   Event-driven scale - Code runs when events come in

-   Micro billing - Only pay for the time code runs

## Azure functions

Azure functions are ideal for when you’re only concerned about the code
running your service. They commonly perform work in response to an
event.

Azure functions scale automatically based on demand.

Azure functions can be either:

-   Stateless - Behave as if they’ve been restarted every time they
    respond to an event

-   Stateful - A context is passed through the function to track prior
    activity

## Azure Logic Apps

Logic apps execute workflows designed to automate business scenarios and
built from predefined logic blocks.

Every logic app workflow starts with a trigger. Azure Logic apps can be
designed without code.

## Comparison

|                       | Functions                                                             | Logic apps                                            |
| --------------------- | --------------------------------------------------------------------- | ----------------------------------------------------- |
| **Development**       | Code First                                                            | Designer First                                        |
| **Connectivity**      | Few built in bindings, write code for all else                        | large collection of connectors, write code for others |
| **Actions**           | Each activity is an Azure function; write code for activity functions | Large collection of ready made functions              |
| **Monitoring**        | Azure application insights                                            | Azure portal, Log Analytics                           |
| **Management**        | REST API, Visual Studio                                               | Azure portal, REST API, PowerShell, Visual Studio     |
| **Execution context** | Locally and in cloud                                                  | Only in cloud                                         |
