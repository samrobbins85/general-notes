---
title: Azure Data Storage Options
---

# Benefits of storing data in the cloud

-   Automated backup and recovery

-   Replication across the globe

-   Support for data analytics

-   Encryption capabilities

-   Multiple data types

-   Data storage in virtual disks

-   Storage tiers

## Types of data

<Definition name="Structured Data">
Data that adheres to a schema. Relational data
</Definition>

<Definition name="Semi-Structured Data">
Using tags and keys to provide hierarchy. Used in NoSQL databases
</Definition>

<Definition name="Unstructured Data">
Data with no designated structure
</Definition>

# Azure Data storage

## Azure SQL database

Relational Database as a service. Based on Microsoft SQL Server database
engine.

Uses the Microsoft Data Migration Assistant to generate reports to guide
through migration.

## Azure Cosmos DB

Globally distributed database service supporting schema-less data
(NoSQL). Used for highly responsive and always-on applications

## Azure Blob storage

Holds unstructured data

## Azure data lake

Allows you to perform analytics on your data usage and prepare reports.
Data lake is a large repository that stores both structured and
unstructured data.

## Azure Files

Offers fully managed file shares in the cloud over SMB (Server Message
Block).

## Azure Queue

Used for storing large numbers of messages

Can be used to:

-   Create a backlog of work and to pass messages between different
    Azure web servers

-   Distribute load among different web servers/infrastructure and to
    manage bursts of traffic

-   Build resilience against component failure when multiple users
    access your data at the same time

## Disk storage

Provides disks for virtual machines and other services to access as they
need. Comes in many different sizes and performance levels, from SSDs to
HDDs.

## Storage tiers

Azure offers 3 storage tiers for blob object storage

1.  Hot storage - Accessed frequently

2.  Cool storage - Infrequent access

3.  Archive storage - Rarely accessed

## Encryption and replication

The following encryption types are available for your resources:

-   Azure Storage Service Encryption (SSE) - For data at rest. Encrypts
    before storing and decrypts during retrieval

-   Client side encryption - Data already encrypted by the client
    libraries. Decrypted during retrieval

# Comparison with on premises storage

| Needs                                              | On Premises                                                        | Azure data storage                                                |
| -------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Compliance and security                            | Dedicated servers required for privacy and security                | Client side encryption and encryption at rest                     |
| Store structured and unstructured data             | Additional IT resources with dedicated servers required            | Azure data lake and portal analyses and manages all types of data |
| Replication and high availability                  | More resources, licensing and servers required                     | Built in replication and redundancy features available            |
| Application sharing and access to shared resources | File sharing requires additional administration resources          | File sharing options without additional license                   |
| Relational data storage                            | Needs a database server with database admin role                   | Offers DBaaS options                                              |
| Distributed storage and data access                | Expensive storage, networking and compute resources needed         | Azure Cosmos DB provides distributed access                       |
| Messaging and load balancing                       | Hardware redundancy impacts budget and resources                   | Azure Queue provides effective load balancing                     |
| Tiered storage                                     | Management of tiered storage needs technology and labour skill set | Azure offers automated tiered storage of data                     |
