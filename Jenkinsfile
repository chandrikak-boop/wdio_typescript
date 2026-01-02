pipeline {
  agent any

  tools {
    nodejs 'node20'
  }

  environment {
    ANDROID_HOME = "/Users/testvagranttechnologies/Library/Android/sdk"
    ANDROID_SDK_ROOT = "/Users/testvagranttechnologies/Library/Android/sdk"
    PATH = "${env.ANDROID_HOME}/emulator:${env.ANDROID_HOME}/platform-tools:${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Verify Android SDK') {
      steps {
        sh 'echo ANDROID_HOME=$ANDROID_HOME'
        sh 'adb version'
        sh 'emulator -version'
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
