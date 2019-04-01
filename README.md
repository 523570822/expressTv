
pm2 部署 路径/root/learngit/expressTv
rm -rf /root/learngit/expressTv/*
rm -rf /root/learngit/expressTv/public/*
rm -rf /root/learngit/expressTv/public/static/*

pm2 restart  www
