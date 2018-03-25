pipeline {
    agent any
    stages {
        stage('prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test:unit'
                sh 'npm run test:integration'
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('package') {
            steps {
                sh "docker build -t 394595319667.dkr.ecr.ap-northeast-1.amazonaws.com/liuliang-app-demo:${env.BUILD_NUMBER} ."
                sh "eval \$(aws ecr get-login --no-include-email --registry-ids 394595319667 --region ap-northeast-1)"
                sh "docker push 394595319667.dkr.ecr.ap-northeast-1.amazonaws.com/liuliang-app-demo:${env.BUILD_NUMBER}"
                sh "docker rmi 394595319667.dkr.ecr.ap-northeast-1.amazonaws.com/liuliang-app-demo:${env.BUILD_NUMBER}"
            }
        }
        stage('deploy to dev') {
            steps {
                build job: 'deploy-app-demo', parameters: [[$class: 'StringParameterValue', name: 'BUILD_NUMBER', value: "${env.BUILD_NUMBER}"]]
            }
        }
    }
}
