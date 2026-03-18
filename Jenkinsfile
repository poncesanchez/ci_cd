
properties([
  pipelineTriggers([
    githubPush()
  ])
])

pipeline {
  agent any
  
  tools {
    nodejs 'node18'
  }
  
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'URL_REPOSITORIO_GIT'
      }
    }

    stage('Install') {
      steps {
        echo "Instalando dependencias..."
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        echo "Desplegando aplicación..."
        sh 'echo "Deploy completado"'
      }
    }
  }
}
