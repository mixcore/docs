del /S obj\* /q
del /S src\obj\* /q
del /S docs\* /q
del api\.manifest /q
COPY CNAME docs\CNAME
docfx\docfx docfx.json
git add .
git commit -m "Add existing file"
git push origin master
docfx\docfx --serve
pause