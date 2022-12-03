pipeline {
  agent any

  environment {
    IMAGE_NAME  = 'vincentparisi/reactcal'
    SOURCE      = 'C:/kubernetes/Application/ReactProject/reactcalc'
    IMAGE_TAG = 'latest'
    APP_NAME = 'jenkins-example-react'
  }


  stages {
        stage("verify tooling") {
            steps {
                sh '''
                docker version
                docker info
                docker compose version 
                '''
            }
        }
        stage('Start Point ') {
            steps {
                echo 'Tying to Start Docker '
            }
        }

        stage('Build') {
            steps {
                //sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG $SOURCE'
                }
        }
  }

}