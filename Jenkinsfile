pipeline {
  agent any
  stages {
    stage('clone') {
      steps {
        git(url: 'https://github.com/Harhao/electron-vite-react-starter.git', branch: 'master')
      }
    }

    stage('test') {
      steps {
        sh 'npm clean cache'
        sh 'npm config set registry https://registry.npm.taobao.org'
        sh '''npm install &&
npm run lint'''
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}
