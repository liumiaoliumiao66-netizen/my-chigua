// 配置文件 - 用于管理AI审核员弹窗的链接信息
// 只需修改此文件中的链接，无需在HTML文件中查找
window.chatConfig = {
    responseLinks: {
        pastResources: "https://pan.xunlei.com/s/VObvJBlQagu35pWKAiDoFF6XA1?pwd=qffz#", // 往期资源①链接
        backupResources: "https://pan.xunlei.com/s/VObvJFY12vXtXo7f8DRPg3IxA1?pwd=eqb9#", // 备用资源②链接
        purchaseLink: "http://f6b5f76f.rdbdz.cn/ts/?p=prddop&s=1", // 购买链接
        qqGroupLink: "https://qm.qq.com/q/Uu87JGaYwu" // QQ群链接（点击入群按钮）
    },
    // 可在此处添加更多需要集中管理的配置项
    animation: {
        shakeDuration: 500, // 弹窗震动效果持续时间（毫秒）
        messageDelay: 1500 // 最终回复消息延迟时间（毫秒）
    }
};

// 配置说明：
// 1. 如需修改链接，只需更新responseLinks对象中的对应属性值
// 2. 如需添加新链接，可在此对象中添加新的键值对
// 3. 此文件会被index.html自动加载和使用
