new class REIFUU_Plugin_demo1 extends window.reifuuPluginCore.REIFUU_Plugin {
    name = '测试';
    versions = '0.0.1';
    depend = {
        core: '0.0.1'
    };
    config = {
        '主要配置': {
            a: this.server.schemastery.boolean().default(true),
            b: this.server.schemastery.boolean().default(false),
            c: this.server.schemastery.string(),
            d: this.server.schemastery.string().role('secret')
        },
        '次要配置': {
            e: this.server.schemastery.string().pattern(/^custom$/i),
            f: this.server.schemastery.array(Number),
            g: this.server.schemastery.array(String),
            h: this.server.schemastery.button('test')
        }
    };

    constructor() {
        super();
        this.plugInit(this);
        
        // 插件进行初始化代码
        // 理论上插件允许多开，只要把变量定义在这个类里面就好了

        /* code */
    }

    start() {
        // 插件主代码
        /* code */
    }

    stop() {
        // 插件消除影响代码
        /* code */
    }

    test(){
        console.log('button被点击')
    }
};
