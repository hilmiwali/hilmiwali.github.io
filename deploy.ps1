# Deploy script for GitHub Pages
# This script builds the Angular app and moves files from docs/browser to docs root

Write-Host "Building Angular application..." -ForegroundColor Cyan
npm run build

Write-Host ""
Write-Host "Moving files from docs/browser to docs root..." -ForegroundColor Cyan
Copy-Item -Path "docs\browser\*" -Destination "docs\" -Recurse -Force

Write-Host "Removing browser subfolder..." -ForegroundColor Cyan
Remove-Item -Path "docs\browser" -Recurse -Force

Write-Host ""
Write-Host "Deployment files ready in docs folder!" -ForegroundColor Green
Write-Host "Next steps: git add . -> git commit -> git push origin main" -ForegroundColor Yellow
