# Laboratorio 1
[ Objetivo ]
Integrar Github + Jenkins (CI) logrando el siguiente flujo:

GITHUB push
  ↓
Conexión a Jenkins mediante Ngrok
Jenkins
  ↓
Instalar dependencias
  ↓
Despliega el proyecto


Para lo anterior deberan:
- Clonar el repositorio y subirlo a su cuenta de github (repositorio publico)
- Iniciar Docker y levantar una imagen de Jenkins
- Descargar e iniciar ngrok
- Generar un tunel para el servicio de Jenkins
- Crear un nuevo item en Jenkins de tipo pipeline
- Conectar el repositorio de Github WebHooks con Jenkins
- Configurar el Pipeline script con las siguientes instrucciones:

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

- Instalar en Jenkins Node como Plugin
- En Tools añadir una instalación de NodeJS  Node18
- Realizar un commit a master y verificar en Jenkins el despliegue.
- Añadir ejecución de test
- Añadir verificación de dependencias
*** Corregir los defectos hasta obtener un despliegue exitoso.
Cambio