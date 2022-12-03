pipeline {
  agent any

  environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    IMAGE_NAME = 'VincentParisi/frontend'
    IMAGE_TAG = 'latest'
    APP_NAME = 'jenkins-example-react'
  }


  stages {
        stage('Start Point ') {
            steps {
                echo 'Tying to Start Docker '
            }
        }
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
      }
    }
  }
}