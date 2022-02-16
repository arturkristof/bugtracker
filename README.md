# Bugtracker
Work in progress bugtracker webapp.

## Table of contents
* [General info](#general-info)
* [Purpose](#purpose)
* [Tech Stack](#tech-stack)
* [Tools](#tools)
* [Setup and development](#setup-and-development)

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
    * Spring Data JPA
* PostgreSQL

TBD

### Frontend
* HTML
* CSS
* JavaScript
* WebPack

TBD

## Tools
* Git
* IntelliJ IDEA
* VS Code
* DataGrip
* Windows 10

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

        .\mvnw.cmd clean install
        .\mvnw.cmd spring-boot:run

    * Go to `http://localhost:8080/`
    * If you're using IntelliJ, run configurations are included in the repository


TBD
