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
* Java 17 (OpenJDK)
    * Gradle
* Spring Boot
    * Spring Web
    * Spring Data JPA
* PostgreSQL

TBD

## Tools
* Git
* IntelliJ IDEA
* DataGrip
* Windows 10

TBD

## Setup and development
All the instruction is written with Windows 10 in mind.
1. Install [Git](https://git-scm.com/downloads)  
What I like to do is to select "Windows Explorer integration -> Git Bash Here" in the "Select Components" window and use it whenever I need to want to use a git command. Besides that install whatever you want
2. Install [Java](https://jdk.java.net/17/) (OpenJDK 17+)
    * Download and unzip the package wherever you want Java installed
    * Add Java to your Environment Variables:
        * Open Windows Explorer with Win + E
        * Right-click This PC -> Properties
        * On the settings screen select Advanced system settings
        * Select Environment Variables...
        * Add JAVA_HOME to System variables:
            * Select New...
            * Variable name: "JAVA_HOME"
            * Variable value: path to your JDK dir
        * Add Java bin to Path:
            * Select "Path" variable and select Edit...
            * Select New and type "%JAVA_HOME%\bin"
        * Check if it works by typing "java --version" in Command Prompt. It should print your version of Java
        * Now you can use Java from Command Prompt
3. Install [PostgreSQL 14](https://www.postgresql.org/download/windows/)
    * Password for the database superuser (postgres): pass
    * Port number the server should listen on: 5432
    * Locale to be used by the new database cluster: Polish, Poland
    * No need to launch Stack Builder at exit for this project
4. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/)
5. Install [PostgreSQL GUI tool](https://www.google.com/search?q=best%20postgres%20gui) (I use JetBrains' DataGrip)
6. Clone the repository
    * Navigate to directory on your PC where you want this project to be stored with Git Bash
        * If you installed the Windows Explorer integration -> Git Bash component, you can navigate to the directory in Windows Explorer, right click and select "Git Bash Here"
    * Run command "git clone https://github.com/arturkristof/bugtracker.git"
        * It will automatically create a "bugtracker" folder for you
7. Open project in IntelliJ IDEA
    * Setup project SDK:
        * File | Project Structure...
        * Project Settings | Project | SDK | Add SDK | JDK... and choose your main JDK directory
        * In File | Project Structure... | Project Settings | Project make sure Language level is set to 17
8. Run project
    * Run/debug configuration is included in this repository
    * Grant the app access to network when firewall asks about that

TBD
