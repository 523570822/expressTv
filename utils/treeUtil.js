
function treeObj(originObj){
    //对象深拷贝
    let obj ={};

    for ( key in originObj){
        var val = originObj[key];
        if(val!=null&&typeof val === 'object'){
            obj[key]= arguments.callee(val);
        }else{
            obj[key]=val;
        }

       // obj[key] = typeof val === 'object' ? arguments.callee(val):val;
    }
    //对象新增children键值，用于存放子树
    obj['children'] = [];
    return obj;
}

//data：带转换成树形结构的对象数组
//attributes：对象属性
exports.toTreeData=function toTreeData (data, attributes) {
    let resData = data;
    let tree = [];

    //找寻根节点
    for (let i = 0; i < resData.length; i++) {

        if (resData[i][attributes.parentId] === ''|| resData[i][attributes.parentId] === null||resData[i][attributes.parentId] === 0) {
            tree.push( treeObj(resData[i]) );
            resData.splice(i, 1);
            i--;
        }
    }

    run(tree);

    //找寻子树
    function run(chiArr) {
        if (resData.length !== 0) {
            for (let i = 0; i < chiArr.length; i++) {
                for (let j = 0; j < resData.length; j++) {
                    if (chiArr[i][attributes.id] === resData[j][attributes.parentId]){
                        let obj = treeObj(resData[j]);
                        chiArr[i].children.push(obj);
                        resData.splice(j, 1);
                        j--;
                    }
                }
                run(chiArr[i].children);
            }
        }
    }

    return tree;

}

/*let data = allRes;
// 属性配置信息
let attributes = {
    id: 'id',
    parentId: 'parentId',
};
let treeData = toTreeData(data, attributes);

console.log(treeData);*/
