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
                git branch: 'main', url: 'https://github.com/surajbisht-dev/My-Portfolio.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                echo "⚙️ Building backend Docker image..."
                dir('backend') {
                    sh 'docker build -t ${IMAGE_BACKEND}:latest .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo "🎨 Building frontend Docker image..."
                dir('portfolio') {
                    sh 'docker build -t ${IMAGE_FRONTEND}:latest .'
                }
            }
        }

        stage('Trivy Security Scan - Backend') {
            steps {
                echo "🧪 Scanning backend image for vulnerabilities..."
                sh '''
                    trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_BACKEND}:latest || true
                '''
            }
        }

        stage('Trivy Security Scan - Frontend') {
            steps {
                echo "🧪 Scanning frontend image for vulnerabilities..."
                sh '''
                    trivy image --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_FRONTEND}:latest || true
                '''
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                echo "☁️ Pushing Docker images to DockerHub..."
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
                echo "🧹 Cleaning workspace..."
                cleanWs()
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed. Check logs for details."
        }
    }
}
