@echo off
REM Script para corrigir erros de permissão do npm e instalar dependências
cd /d "d:\projeto abel gabriel\contabilidade"
echo Limpando cache do npm...
npm cache clean --force
echo Instalando dependências...
npm install
  echo.
  echo Houve um erro na instalação. Tente rodar este script como Administrador ou desative temporariamente o antivírus.
  pause
) else (
  echo.
  echo Dependências instaladas com sucesso!
  pause
)
if %errorlevel% neq 0 (
