@echo off
title Flowerssobo - dev server

rem --- Add portable Node to PATH ---
set "PATH=%LOCALAPPDATA%\nodejs;%PATH%"

rem --- Go to project folder ---
cd /d "%~dp0"

echo.
echo  ==========================================
echo   Flowerssobo - starting local site
echo  ==========================================
echo.
echo   The browser will open in about 7 seconds.
echo   To stop the server: close this window
echo   or press Ctrl + C.
echo.

rem --- Open browser after a short delay (server needs time) ---
start "" cmd /c "timeout /t 7 >nul & start http://localhost:3000"

rem --- Start the dev server (this window stays open) ---
call npm run dev

rem --- If the server stops, keep the window open ---
echo.
echo  Server stopped.
pause
