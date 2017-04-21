node {
    try {
        stage('Checkout') {
            checkout scm
        }

        errors = []
        def isPR = env.BRANCH_NAME != 'components'
        def pwd = pwd()

        docker.image('experium/node:6.10').inside {
            stage('Install') {
                sh "yarn install"
            }

            parallel (
                'metrics': {
                    stage('Metrics') {
                        status = sh script: "yarn run lint${isPR ? ':boil' : ''}", returnStatus: true
                        step([$class: 'CheckStylePublisher', pattern: 'reports/eslint.xml', usePreviousBuildAsReference: true])

                        if (status == 1) {
                            errors.push('Lint failed')
                            echo "Lint exit with code ${status}"
                            error "${status}"
                        }
                    }
                },
                'tests': {
                    stage('Tests') {
                        status = sh script: 'yarn test', returnStatus: true

                        if (status == 1)  {
                            errors.push('tests failed')
                            echo "Tests exit with code ${status}"
                            error "${status}"
                        }
                    }
                },
                'build': {
                    stage('Build') {
                        try {
                            output = sh script: 'yarn build', returnStdout: true
                        } catch (err) {
                            errors.push('build failed')
                            throw err
                        } finally {
                            echo output
                        }
                    }
                }
            )

            if (!isPR) {
                stage('Publish') {
                    sh "npm run publish-npm"
                }
            }
        }

        if (!isPR) {
            stage('Publish artifacts') {
                step([$class: 'ArtifactArchiver', artifacts: 'dist/**/*', fingerprint: true])
            }

        }

        stage('Notification') {
            slackSend color: 'good', message: "${env.JOB_NAME} - <${env.BUILD_URL}|#${env.BUILD_NUMBER}> success"
        }
    } catch (err) {
        stage('Notification') {
            if (currentBuild.result == 'UNSTABLE') {
                slackSend color: 'warning', message: "${env.JOB_NAME} - <${env.BUILD_URL}|#${env.BUILD_NUMBER}> build success, but deploy failed: ${errors.join(', ')}"
            } else {
                slackSend color: 'danger', message: "${env.JOB_NAME} - <${env.BUILD_URL}|#${env.BUILD_NUMBER}> failed: ${errors.join(', ')}"
                throw err
            }
        }
    } finally {
        step([$class: 'WsCleanup']);
    }
}
