pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/surajbisht-dev/My-Portfolio.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t myportfolio-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t myportfolio-frontend ./portfolio'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'trivy image myportfolio-backend || true'
                sh 'trivy image myportfolio-frontend || true'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner -Dsonar.projectKey=My-Portfolio -Dsonar.sources=.'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
