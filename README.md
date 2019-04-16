
 vue -wz  项目运行 npm run build:sit-preview
 把dist中的 文件拷贝到public 中


pm2 部署 路径/root/learngit/expressTv
rm -rf /root/learngit/expressTv/*
rm -rf /root/learngit/expressTv/public/*
rm -rf /root/learngit/expressTv/public/static/*

pm2 restart  www
