pipeline {
    agent any

    environment {
        IMAGE_BACKEND = "surajbishtdev/portfolio-backend"
        IMAGE_FRONTEND = "surajbishtdev/portfolio-frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "📦 Checking out source code..."
                git branch: 'main', url: 'https://github.com/surajbisht-dev/My-Portfolio.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                echo "⚙️ Building backend Docker image..."
                dir('backend') {
                    sh 'docker build -t surajbishtdev/portfolio-backend:latest .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo "🎨 Building frontend Docker image..."
                dir('portfolio') {
                    sh 'docker build -t surajbishtdev/portfolio-frontend:latest .'
                }
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                echo "☁️ Pushing Docker images to DockerHub..."
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push surajbishtdev/portfolio-backend:latest
                        docker push surajbishtdev/portfolio-frontend:latest
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
