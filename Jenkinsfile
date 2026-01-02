pipeline {
  agent any

  tools {
    nodejs 'node20'
  }

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
}
