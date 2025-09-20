// 配置文件 - 用于管理AI审核员弹窗的链接信息
// 只需修改此文件中的链接，无需在HTML文件中查找
window.chatConfig = {
    responseLinks: {
        pastResources: "https://pan.quark.cn/s/2f450027f29f", // 往期资源①链接
        backupResources: "https://pan.xunlei.com/s/VO_ba0xD3S-7ajVvx58xbsB9A1?pwd=bc77#", // 备用资源②链接
        purchaseLink: "http://1ec43602.smhbj.cn/ts/?p=prddop&s=1" // 购买链接
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