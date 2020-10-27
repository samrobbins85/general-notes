---
title: Azure Networking Options
---

# Deploying your site to Azure

## Using an N tier architecture

An architectural pattern that can be used to build loosely-coupled
systems is N-tier

This divides an architecture into two or more logical tiers.
Architecturally, a higher tier can access services from a lower tier,
but a lower tier should never access a higher tier.

Tiers help separate concerns and ideally are designed to be reusable.
Using a tiered architecture also simplifies maintenance. Tiers can be
updated or replaced independently, and new tiers can be inserted if
needed.

## Virtual Network

<Definition name="Virtual Network">
A logically isolated network on Azure
</Definition>

A virtual network allows Azure resources to securely communicate with
each other, the internet and on premises networks.

A virtual network is scoped to a single region; however, multiple
virtual networks from different regions can be connected together using
virtual network peering.

Virtual networks can be segmented into one or more subnets to allow you
to organize and secure your resources into discrete sections.

For VMs that the users interact with directly, such as the web tier, the
VM will have both a public and private IP, whereas other tiers will just
have private IPs.

<Definition name="VPN Gateway">
Allows a secure connection between an Azure Virtual Network and an on-premises location over the internet
</Definition>

## Network security group

This allows or denies inbound network traffic to your Azure resources in
a similar way to a firewall.

# Azure Load Balancer

<Definition name="Availability">
How long your service is up and running without interruption
</Definition>

<Definition name="Resiliency">
A system's ability to stay operational during abnormal conditions
</Definition>

<Definition name="Load Balancer">
A way of distributing traffic evenly among each system in a pool
</Definition>

The user connects to the load balancer, which then decides which Virtual
Machine will process the request. This also allows you to run
maintenance tasks without interrupting service as the load balancer
detects that the VM is unresponsive and directs traffic to other VMs in
the pool.

## What is Azure load balancer?

You can use it with:

-   Incoming internet traffic

-   Internal traffic across Azure services

-   Port forwarding for specific traffic

-   Outbound connectivity for VMs in your virtual network

With Azure load balancer, there’s no infrastructure or software to
maintain, just a set of rules.

## Azure Application Gateway

Azure Application gateway is a load balancer for web applications. It
uses Azure Load balancer at the transport level but uses routing rules
for more advanced scenarios.

Benefits over a load balancer:

-   Cookie affinity

-   SSL termination

-   Web application firewall

-   URL rule based routes

-   Rewrite HTTP headers

# Azure Traffic Manager

<Definition name="Network Latency">
The time it takes for data to travel over the network
</Definition>

One way to improve network latency is to scale out exact copies of your
service to more than one region

Azure Traffic Manager uses the DNS server that’s closest to the user to
direct user traffic to a globally distributed endpoint.
