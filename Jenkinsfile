pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Run WDIO Tests') {
      steps {
        sh 'npx wdio config/wdio.android.conf.ts'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/logs/**', allowEmptyArchive: true
    }
  }
}
