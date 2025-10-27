pipeline {
    agent any

    tools {
        nodejs 'node' 
    }

    environment {
        SONARQUBE = 'SonarQubeServer' // Name you used in Jenkins Sonar config
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/surajbisht-dev/My-Portfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('portfolio') {
                    sh 'npm install'
                }
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Code Quality Scan') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('portfolio') {
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh 'docker build -t myportfolio-app .'
                }
            }
        }
    }
}
