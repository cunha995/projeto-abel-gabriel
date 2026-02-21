@echo off
REM Script para corrigir erros de permissão do npm e instalar dependências na raiz do projeto
cd /d "d:\projeto abel gabriel"
echo Limpando cache do npm...
npm cache clean --force
echo Instalando dependências na raiz...
npm install
if %errorlevel% neq 0 (
  exit /b %errorlevel%
) else (
  echo Dependências instaladas com sucesso na raiz!
)
