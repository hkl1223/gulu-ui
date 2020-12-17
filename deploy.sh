rm-rf dist
yarn build
cd dist
git init
git add .
git commit -m "update"
git branch -M main
git remote add origin https://github.com/hkl1223/gulu-ui-website.git
git push -u origin main
cd -
echo hkl1223.github.io/gulu-ui-website/#/