@echo off
echo Setting up react-grid-divider package...
echo.

echo [1/5] Copying CSS utilities...
call copy-css.bat

echo [2/5] Installing dependencies...
call pnpm install

echo [3/5] Initializing git repository...
git init

echo [4/5] Configuring git user...
git config user.email "oriolperezolivares@gmail.com"
git config user.name "operezol"

echo [5/5] Creating initial commit...
git add .
git commit -m "Initial commit: react-grid-divider package"

echo.
echo ========================================
echo Setup complete!
echo ========================================
echo.
echo Next steps:
echo 1. Create a GitHub repository at: https://github.com/operezol/react-grid-divider
echo 2. Run: git remote add origin https://github.com/operezol/react-grid-divider.git
echo 3. Run: git push -u origin main
echo 4. Build the package: pnpm run build
echo 5. Publish to npm: npm publish
echo.
pause
