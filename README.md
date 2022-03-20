# Bugtracker
Work in progress bugtracker webapp.

## Table of contents
* [General info](#general-info)
* [Purpose](#purpose)
* [Tech Stack](#tech-stack)
* [Tools](#tools)
* [Setup and development](#setup-and-development)
* [Documentation](#documentation)
* [Git Workflow](#git-workflow)
* [Code Style](#code-style)

## General info
This project is a bugtracker (Jira clone if you will).

## Purpose
I am creating this application to work on my self-growth as a Java developer and for fun. I believe I can learn a lot by focusing on researching things I am going to use while developing the app instead of going for finished product ASAP, so it is for sure going to take a long time. 

I intend to create a full documentation including functional designs, technical designs, software requirements specification, environment setup manuals etc. before I start implementation process, just as I would do at work for programmers that would work on the project in the future. And I am going to do it using LaTeX to learn it.

## Tech Stack
### Backend
* Java 17 (OpenJDK)
    * Maven
* Spring Boot
    * Spring Web
    * Spring Data JPA (Hibernate)
* PostgreSQL 14

TBD

### Frontend
* HTML
* Bootstrap
* TypeScript
* WebPack

TBD

### Docs
* LaTeX
* DBML

## Tools
* Git
* IntelliJ IDEA
* VS Code
* Overleaf
* DataGrip
* Windows 10
* dbdiagram.io

TBD

## Setup and development
All the instruction is written with Windows 10 in mind.
1. Install [Git](https://git-scm.com/downloads)
2. Install [Java](https://jdk.java.net/17/) (OpenJDK 17+)
    1. Download and unzip the package wherever you want Java installed
    2. Add `JAVA_HOME` to your system variables with your Java install dir (e.g. `C:\Java\jdk-17.0.2`)
    3. Add `%JAVA_HOME%\bin` to your `Path` system variable
    4. Check if it works by typing `java --version` in Command Prompt. It should print your version of Java
3. Install [Maven](https://maven.apache.org/install.html)
    * Don't forget to add the `bin` folder to your `Path` system variable
4. Install [PostgreSQL 14](https://www.postgresql.org/download/windows/)
    * Password for the database superuser (postgres): `pass`
    * Port number the server should listen on: `5432`
    * Locale to be used by the new database cluster: `Polish, Poland`
    * No need to launch Stack Builder at exit for this project
5. Clone the repository
6. Run the project

        >mvnw clean install
        >mvnw spring-boot:run

    * Go to `http://localhost:8080/`
    * If you're using IntelliJ, run configurations are included in the repository
    
TBD

## Documentation
1. Install [MiKTeX](https://miktex.org/download)
2. Compile LaTeX files to PDFs

        >cd docs
        >compile

3. The documentation is in `docs/target`

## DB Schema
You can find DB schema in [docs/db](docs/db).

## Git Workflow
This project uses Gitflow workflow.  
Please refer to [this tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) or any other of your liking.

## Code style
### Java
[palantir-java-format](https://github.com/palantir/palantir-java-format#maven-integration-via-spotless)  
To check if files are formatted properly:

        >mvnw spotless:check -pl backend

The check will also run with `>mvwn verify`.  
To apply formatting:

        >mvnw spotless:apply -pl backend

If you want to use `spotless:apply` or `spotless:check` from IntelliJ Maven plugin, first copy `.mvn/jvm.config` to `backend/.mvn/jvm.config`. 
Don't worry, it is already configured to be ignored by git.
