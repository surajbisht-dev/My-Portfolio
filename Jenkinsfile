pipeline {
    agent any

    environment {
        DOCKERHUB_USER = "surajbishtdev"
        IMAGE_BACKEND = "${DOCKERHUB_USER}/portfolio-backend"
        IMAGE_FRONTEND = "${DOCKERHUB_USER}/portfolio-frontend"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "📦 Checking out source code..."
                // Explicitly checkout repo here
                git branch: 'main', url: 'https://github.com/surajbisht-dev/My-Portfolio.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t ${IMAGE_BACKEND}:latest .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('portfolio') {
                    sh 'docker build -t ${IMAGE_FRONTEND}:latest .'
                }
            }
        }

        stage('Trivy Security Scan - Backend') {
            steps {
                sh 'trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_BACKEND}:latest || true'
            }
        }

        stage('Trivy Security Scan - Frontend') {
            steps {
                sh 'trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_FRONTEND}:latest || true'
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_BACKEND}:latest
                        docker push ${IMAGE_FRONTEND}:latest
                    '''
                }
            }
        }

        stage('Cleanup') {
            steps {
                cleanWs()
            }
        }
    }

    post {
        success { echo "✅ Pipeline completed successfully!" }
        failure { echo "❌ Pipeline failed. Check logs for details." }
    }
}
