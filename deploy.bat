set -e
cd .\docs\.vuepress\dist

git init
git add -A
git commit -m 'deploy'

git push git@github.com:RT-LOC/docs.git master:gh-pages