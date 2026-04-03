const{useState,useEffect,useRef,useMemo,useCallback}=React;

// ═══ ICONS ═══
const Ic=({children,size=20,cl=""})=><svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cl}>{children}</svg>;
const XIcon=p=><Ic {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Ic>;
const Activity=p=><Ic {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></Ic>;
const BarChart3=p=><Ic {...p}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></Ic>;
const Coins=p=><Ic {...p}><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/></Ic>;
const Zap=p=><Ic {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Ic>;
const ArrowLeft=p=><Ic {...p}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></Ic>;
const MapIcon=p=><Ic {...p}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></Ic>;
const ChevronL=p=><Ic {...p}><path d="m15 18-6-6 6-6"/></Ic>;
const ChevronR=p=><Ic {...p}><path d="m9 18 6-6-6-6"/></Ic>;
const ChevronD=p=><Ic {...p}><path d="m6 9 6 6 6-6"/></Ic>;
const ChevronU=p=><Ic {...p}><path d="m18 15-6-6-6 6"/></Ic>;
const Layers=p=><Ic {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Ic>;
const BatteryC=p=><Ic {...p}><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" x2="23" y1="13" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></Ic>;
const Download=p=><Ic {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></Ic>;
const Edit3=p=><Ic {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></Ic>;
const Eye=p=><Ic {...p}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></Ic>;
const DollarSign=p=><Ic {...p}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></Ic>;
const Upload=p=><Ic {...p}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></Ic>;
const ArchiveIc=p=><Ic {...p}><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></Ic>;
const Plus=p=><Ic {...p}><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></Ic>;
const Trash=p=><Ic {...p}><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></Ic>;
const MapPin=p=><Ic {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Ic>;
const Pencil=p=><Ic {...p}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></Ic>;
const Route=p=><Ic {...p}><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></Ic>;
const StickyNote=p=><Ic {...p}><path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"/><path d="M14 3v4a2 2 0 0 0 2 2h4"/></Ic>;
const Palette=p=><Ic {...p}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z"/></Ic>;
const CircleIc=p=><Ic {...p}><circle cx="12" cy="12" r="10"/></Ic>;
const RectIc=p=><Ic {...p}><rect x="3" y="3" width="18" height="18" rx="2"/></Ic>;
const InfoIcon=p=><Ic {...p}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></Ic>;

// ═══ CONSTANTS ═══
const ADCODE={
'河北省':130000,'山西省':140000,'广东省':440000,'甘肃省':620000,'河南省':410000,
'宁夏回族自治区':640000,'江苏省':320000,'浙江省':330000,'陕西省':610000,
'北京市':110000,'天津市':120000,'山东省':370000,'安徽省':340000,'福建省':350000,
'上海市':310000,'湖北省':420000,'湖南省':430000,'江西省':360000,
'吉林省':220000,'黑龙江省':230000,'辽宁省':210000,'内蒙古自治区':150000,
'青海省':630000,'新疆维吾尔自治区':650000,'四川省':510000,'重庆市':500000,
'广西壮族自治区':450000,'贵州省':520000,'云南省':530000,'海南省':460000,
'西藏自治区':540000,'台湾省':710000,'香港特别行政区':810000
};
const ALL_PROVINCES=Object.keys(ADCODE);
const REQUIRED_PROVINCE_CODES=Object.values(ADCODE).map(String);

const ALIAS={'北京':'北京市','天津':'天津市','河北南网':'河北省','冀北':'河北省','山东':'山东省','山西':'山西省','安徽':'安徽省','福建':'福建省','上海':'上海市','江苏':'江苏省','浙江':'浙江省','湖北':'湖北省','湖南':'湖南省','河南':'河南省','江西':'江西省','吉林':'吉林省','黑龙江':'黑龙江省','辽宁':'辽宁省','甘肃':'甘肃省','宁夏':'宁夏回族自治区','青海':'青海省','陕西':'陕西省','新疆':'新疆维吾尔自治区','四川':'四川省','重庆':'重庆市','广东':'广东省','广西':'广西壮族自治区','贵州':'贵州省','云南':'云南省','海南':'海南省','蒙西':'内蒙古自治区','蒙东':'内蒙古自治区'};
const norm=n=>ALIAS[n]||n;
const shortName=n=>(n||'').replace(/省|市|自治区|回族|壮族|维吾尔|特别行政区/g,'');
const resolveProvinceName=(rawName)=>{
    if(!rawName)return null;
    if(ADCODE[rawName])return rawName;
    const normalized=norm(rawName);
    if(ADCODE[normalized])return normalized;
    const candidates=[
        `${rawName}省`,
        `${rawName}市`,
        `${rawName}自治区`,
        `${rawName}特别行政区`
    ];
    for(const c of candidates){
        if(ADCODE[c])return c;
    }
    const rawShort=shortName(rawName);
    return ALL_PROVINCES.find(p=>shortName(p)===rawShort)||null;
};
const hoverColor='#fbbf24';



// ═══ LOCAL MAP LOADER (static deployment friendly) ═══
const MAP_STORE=window.__HEATMAP_MAP_STORE__||(window.__HEATMAP_MAP_STORE__={china:null,provinces:{},loadedScripts:{}});
const LOCAL_MAP_SCRIPT_PATHS={
    china:'./maps/china.js',
    province:(code)=>`./maps/provinces/${code}.js`
};
const loadScriptOnce=(src)=>{
    if(MAP_STORE.loadedScripts[src]==='loaded')return Promise.resolve();
    if(MAP_STORE.loadedScripts[src])return MAP_STORE.loadedScripts[src];
    MAP_STORE.loadedScripts[src]=new Promise((resolve,reject)=>{
        const existing=document.querySelector(`script[data-dynamic-src="${src}"]`);
        if(existing){
            existing.addEventListener('load',()=>resolve(),{once:true});
            existing.addEventListener('error',()=>reject(new Error(`脚本加载失败: ${src}`)),{once:true});
            return;
        }
        const script=document.createElement('script');
        script.src=src;
        script.async=true;
        script.dataset.dynamicSrc=src;
        script.onload=()=>{MAP_STORE.loadedScripts[src]='loaded';resolve();};
        script.onerror=()=>{delete MAP_STORE.loadedScripts[src];reject(new Error(`脚本加载失败: ${src}`));};
        document.head.appendChild(script);
    });
    return MAP_STORE.loadedScripts[src];
};
const normalizeChinaGeoJSON=(geo)=>{
    if(!geo||!Array.isArray(geo.features))return geo;
    if(geo.__normalizedForHeatmap)return geo;
    const normalized={...geo,features:geo.features.map(feature=>{
        const next={...feature,properties:{...(feature.properties||{})}};
        const resolved=resolveProvinceName(next.properties?.name)||next.properties?.name;
        if(resolved)next.properties.name=resolved;
        return next;
    })};
    normalized.__normalizedForHeatmap=true;
    return normalized;
};
const ensureChinaGeoJSON=async()=>{
    if(!MAP_STORE.china){
        await loadScriptOnce(LOCAL_MAP_SCRIPT_PATHS.china);
    }
    if(MAP_STORE.china){
        MAP_STORE.china=normalizeChinaGeoJSON(MAP_STORE.china);
        return MAP_STORE.china;
    }
    throw new Error('全国地图文件缺失');
};
const ensureProvinceGeoJSON=async(code)=>{
    const key=String(code);
    if(!MAP_STORE.provinces[key]){
        await loadScriptOnce(LOCAL_MAP_SCRIPT_PATHS.province(key));
    }
    if(MAP_STORE.provinces[key])return MAP_STORE.provinces[key];
    throw new Error(`省级地图文件缺失: ${key}`);
};
const PROVINCE_CENTERS={
    '北京市':[116.40,39.90],'天津市':[117.20,39.12],'河北省':[114.48,38.03],'山西省':[112.55,37.87],'内蒙古自治区':[111.67,40.82],
    '辽宁省':[123.43,41.80],'吉林省':[125.32,43.90],'黑龙江省':[126.63,45.75],'上海市':[121.47,31.23],'江苏省':[118.78,32.04],
    '浙江省':[120.15,30.28],'安徽省':[117.28,31.86],'福建省':[119.30,26.08],'江西省':[115.89,28.68],'山东省':[117.00,36.67],
    '河南省':[113.62,34.75],'湖北省':[114.31,30.52],'湖南省':[112.98,28.19],'广东省':[113.27,23.13],'广西壮族自治区':[108.32,22.82],
    '海南省':[110.35,20.02],'重庆市':[106.55,29.56],'四川省':[104.06,30.67],'贵州省':[106.71,26.57],'云南省':[102.71,25.04],
    '西藏自治区':[91.11,29.65],'陕西省':[108.95,34.27],'甘肃省':[103.73,36.03],'青海省':[101.78,36.62],'宁夏回族自治区':[106.28,38.47],
    '新疆维吾尔自治区':[87.62,43.82],'台湾省':[121.52,25.05],'香港特别行政区':[114.17,22.32],'澳门特别行政区':[113.54,22.19]
};
const createRectFeature=(name,center=[104.11,35.55],halfWidth=2.8,halfHeight=1.9)=>{
    const [lng,lat]=center;
    return{
        type:'Feature',
        properties:{name},
        geometry:{
            type:'Polygon',
            coordinates:[[
                [lng-halfWidth,lat-halfHeight],[lng+halfWidth,lat-halfHeight],
                [lng+halfWidth,lat+halfHeight],[lng-halfWidth,lat+halfHeight],
                [lng-halfWidth,lat-halfHeight]
            ]]
        }
    };
};
const buildFallbackChinaGeoJSON=()=>({
    type:'FeatureCollection',
    features:ALL_PROVINCES.map(name=>createRectFeature(name,PROVINCE_CENTERS[name]||[104.11,35.55],2.6,1.75))
});
const buildFallbackProvinceGeoJSON=(provinceName)=>({
    type:'FeatureCollection',
    features:[createRectFeature(provinceName,PROVINCE_CENTERS[provinceName]||[104.11,35.55],3.8,2.6)]
});


const makeDefaultEntry=(name)=>({

    title:name,totalVolume:'暂无数据',
    marketVolumeDisplay:'暂无详细信息，点击编辑模式添加数据',
    tags:[],details:[],notes:'',color:null
});

// ═══ INITIAL DATASETS ═══
const INIT_FREQ={
    '河北省':{title:'河北省(南网)',totalVolume:'5000万元',marketVolumeDisplay:'每月储能分摊份额约5000万元',tags:['热度最高','2026开放'],details:[{label:'数据来源',value:'河北南网交易中心'}],mapValue:5000},
    '河南省':{title:'河南省',totalVolume:'4000万元',marketVolumeDisplay:'每月储能分摊份额约4000万元',tags:['热度高','2027开放'],details:[{label:'数据来源',value:'河南调度计划处主任'}],mapValue:4000},
    '广东省':{title:'广东省',totalVolume:'5000万元',marketVolumeDisplay:'每月独立储能市场总量5000万元',tags:['数据详实','收益占比90%'],details:[{label:'数据来源',value:'5-7月收益表'}],mapValue:5000},
    '山西省':{title:'山西省',totalVolume:'4100万元',marketVolumeDisplay:'每月市场总量4100万元',tags:['市场成熟','占比80%'],details:[{label:'数据来源',value:'实地调研(1-3月收益表)'}],mapValue:4100},
    '甘肃省':{title:'甘肃省',totalVolume:'2500-2600万元',marketVolumeDisplay:'25年7-9月调频总额连续上行至约2500-2600万元',tags:['趋势上涨'],details:[{label:'数据来源',value:'甘肃电力交易中心'},{label:'最新进展',value:'8、9月已上涨至约2600万元'}],mapValue:2500},
    '宁夏回族自治区':{title:'宁夏',totalVolume:'500万元',marketVolumeDisplay:'每月总量500万元',tags:['涨幅不大'],details:[{label:'数据来源',value:'实地调研'}],mapValue:500}
};

const INIT_ENERGY_RAW={
    '北京市':{range:[.318,.596],display:'0.318~0.596',note:'华北：峰谷价差',cat:'market'},
    '天津市':{value:.51,display:'0.51',note:'华北',cat:'market'},
    '河北省':{range:[.43,.6],display:'0.43–0.6',note:'两充两放~0.43；一充一放~0.6',cat:'actual'},
    '山东省':{value:.601,display:'0.601',note:'华北',cat:'market'},
    '山西省':{value:.45,display:'0.45',note:'华北：测算',cat:'actual'},
    '安徽省':{range:[.257,.607],display:'0.257~0.607',note:'华东',cat:'market'},
    '福建省':{range:[.216,.452],display:'0.216~0.452',note:'华东',cat:'market'},
    '上海市':{value:.679,display:'0.679',note:'一次谷充峰放',cat:'market'},
    '江苏省':{value:.2,display:'0.2',note:'华东：实测',cat:'actual'},
    '浙江省':{value:.1,display:'0.1',note:'华东：实测',cat:'actual'},
    '河南省':{value:.4,display:'0.4',note:'华中：实测',cat:'actual'},
    '湖北省':{range:[.229,.562],display:'0.229~0.562',note:'华中：两小时尖峰',cat:'market'},
    '湖南省':{range:[.246,.492],display:'0.246~0.492',note:'华中',cat:'market'},
    '江西省':{range:[.273,.547],display:'0.273~0.547',note:'华中',cat:'market'},
    '吉林省':{value:.469,display:'0.469',note:'东北',cat:'market'},
    '黑龙江省':{value:.395,display:'0.395',note:'东北',cat:'market'},
    '辽宁省':{value:.423,display:'0.423',note:'东北',cat:'market'},
    '内蒙古自治区':{range:[.223,.407],display:'蒙东0.342；蒙西0.223~0.407',note:'蒙东/蒙西',cat:'market'},
    '甘肃省':{value:.27,display:'0.27（河西均价）',note:'454个节点',cat:'actual'},
    '宁夏回族自治区':{value:.32,display:'0.32',note:'可做金融套利',cat:'actual'},
    '青海省':{range:[.231,.455],display:'0.231~0.455',note:'西北',cat:'market'},
    '陕西省':{value:.4,display:'0.4',note:'西北：实测',cat:'actual'},
    '新疆维吾尔自治区':{range:[.136,.290],display:'0.136~0.290',note:'西北',cat:'market'},
    '四川省':{range:[.166,.332],display:'0.166~0.332',note:'西南',cat:'market'},
    '重庆市':{range:[.262,.533],display:'0.262~0.533',note:'西南',cat:'market'},
    '广东省':{value:.18,display:'0.18',note:'南网：实测',cat:'actual'},
    '广西壮族自治区':{range:[.205,.411],display:'0.205~0.411',note:'南网',cat:'market'},
    '贵州省':{range:[.231,.463],display:'0.231~0.463',note:'南网',cat:'market'},
    '云南省':{value:.28,display:'0.28',note:'南网',cat:'market'},
    '海南省':{range:[.397,.737],display:'0.397~0.737',note:'南网',cat:'market'}
};

const buildEnergyEntries=()=>{
    const out={};
    Object.entries(INIT_ENERGY_RAW).forEach(([n,info])=>{
        const mid=info.value??((info.range?.[0]||0)+(info.range?.[1]||0))/2;
        out[n]={title:`${n} 电能量`,totalVolume:`${info.display} 元/kWh`,
            marketVolumeDisplay:info.note?`${info.display} 元/kWh ｜ ${info.note}`:`${info.display} 元/kWh`,
            tags:[info.cat==='actual'?'实测':'市场区间'],details:[{label:'价差',value:`${info.display} 元/kWh`},info.note?{label:'备注',value:info.note}:null].filter(Boolean),
            mapValue:mid,cat:info.cat,color:null};
    });
    return out;
};

const INIT_SPOT_PROGRESS_RAW={
    '广东省':{stage:'连续结算试运行',note:'已进入连续运行阶段'},
    '山西省':{stage:'现货正式运行',note:'现货市场机制相对成熟'},
    '山东省':{stage:'连续结算试运行',note:'持续优化规则与结算'},
    '甘肃省':{stage:'试运行',note:'正在推进现货运行能力建设'}
};

const buildSpotProgressEntries=()=>{
    const out={};
    ALL_PROVINCES.forEach((n)=>{
        const base=INIT_SPOT_PROGRESS_RAW[n];
        out[n]={
            title:`${n} 现货进程`,
            totalVolume:base?.stage||'待更新',
            marketVolumeDisplay:base?.note||'请填写现货市场阶段进展',
            spotStage:base?.stage||'',
            tags:['现货进程'],
            details:[{label:'现货阶段',value:base?.stage||'待填写'}],
            mapValue:1,
            color:base?'#60a5fa':null
        };
    });
    return out;
};

const INIT_CAPACITY={};
const capProvinces={'甘肃省':330,'山西省':100,'宁夏回族自治区':200,'河北省':150,'山东省':120,'内蒙古自治区':180,'新疆维吾尔自治区':160,'广东省':280,'河南省':130,'江苏省':200,'浙江省':180,'青海省':220,'陕西省':200,'湖北省':100,'湖南省':90,'四川省':80,'云南省':70,'辽宁省':140,'安徽省':110};
Object.entries(capProvinces).forEach(([n,v])=>{
    INIT_CAPACITY[n]={title:n,totalVolume:`${v} 元/kW·年`,marketVolumeDisplay:`容量电价 ${v} 元/kW·年`,tags:[],details:[],mapValue:v,color:null};
});

const INIT_RESOURCE={
    '河北省':{wind:32,solar:26,hydro:3,thermal:45},'山西省':{wind:28,solar:22,hydro:2,thermal:58},
    '广东省':{wind:18,solar:30,hydro:16,thermal:38},'甘肃省':{wind:40,solar:35,hydro:6,thermal:20},
    '河南省':{wind:20,solar:24,hydro:5,thermal:50},'江苏省':{wind:26,solar:34,hydro:8,thermal:40},
    '浙江省':{wind:16,solar:28,hydro:12,thermal:30},'陕西省':{wind:30,solar:22,hydro:10,thermal:35},
    '青海省':{wind:22,solar:40,hydro:18,thermal:12},'四川省':{wind:14,solar:18,hydro:60,thermal:12},
    '云南省':{wind:20,solar:22,hydro:55,thermal:10},'辽宁省':{wind:25,solar:18,hydro:8,thermal:35},
    '内蒙古自治区':{wind:55,solar:48,hydro:5,thermal:20},'新疆维吾尔自治区':{wind:50,solar:52,hydro:8,thermal:18}
};
const RES_LABELS={wind:'风电(万千瓦)',solar:'光伏(万千瓦)',hydro:'水电(万千瓦)',thermal:'火电(万千瓦)'};
const RES_KEY_ALIAS={wind:'wind',solar:'solar',hydro:'hydro',thermal:'thermal','风':'wind','风电':'wind','光':'solar','光伏':'solar','水':'hydro','水电':'hydro','火':'thermal','火电':'thermal'};

const INIT_STORAGE={
    '河北省':{power:1200,capacity:2800,count:42,filedCount:35},
    '山东省':{power:1600,capacity:3600,count:58,filedCount:48},
    '广东省':{power:2100,capacity:4600,count:65,filedCount:53},
    '江苏省':{power:1450,capacity:3200,count:47,filedCount:39},
    '甘肃省':{power:980,capacity:2300,count:33,filedCount:27},
    '内蒙古自治区':{power:1300,capacity:3000,count:44,filedCount:36}
};

const ANNO_TYPES={
    marker:{label:'标注点',icon:'pin',colors:['#22c55e','#7e22ce','#0ea5e9','#ef4444','#f59e0b','#0057F1']},
    route:{label:'输送路线',icon:'route',colors:['#334155','#16a34a','#7e22ce','#0ea5e9','#ef4444']},
    note:{label:'文字备注',icon:'note',colors:['#1e293b','#0369a1','#047857','#b91c1c']}
};
const MARKER_PRESETS=[
    {type:'N',label:'新能源(风/光)',color:'#22c55e',symbol:'circle'},
    {type:'F',label:'火电/煤电',color:'#7e22ce',symbol:'rect'},
    {type:'S',label:'调节/水电/核电',color:'#0ea5e9',symbol:'triangle'},
    {type:'L',label:'负荷中心',color:'#0057F1',symbol:'diamond'},
    {type:'E',label:'储能电站',color:'#f59e0b',symbol:'circle'},
    {type:'C',label:'自定义',color:'#ef4444',symbol:'circle'}
];


// ═══ LEGEND COMPONENT ═══
const LegendBar=({palette,min,max,unit,label,ticks,vertical=true})=>{
    const gradStr=vertical
        ?`linear-gradient(to top, ${palette[0]}, ${palette[Math.floor(palette.length/2)]}, ${palette[palette.length-1]})`
        :`linear-gradient(to right, ${palette[0]}, ${palette[Math.floor(palette.length/2)]}, ${palette[palette.length-1]})`;
    const tickLabels=ticks||[
        {pos:'0%',text:`${min}${unit??' '}`},
        {pos:'50%',text:`${((min+max)/2).toFixed(max>=100?0:2)}${unit??''}`},
        {pos:'100%',text:`${max}${unit??''}`}
    ];
    return(
        <div className="space-y-1.5">
            {label&&<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</div>}
            <div className="flex items-stretch gap-2">
                <div className="legend-bar w-3 rounded-md" style={{background:gradStr,minHeight:80}}/>
                <div className="flex flex-col justify-between py-0.5" style={{minHeight:80}}>
                    {[...tickLabels].reverse().map((t,i)=>(
                        <div key={i} className="text-[10px] text-slate-500 leading-none whitespace-nowrap">{t.text}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};



const APP_VERSION='stable-static-1.0.0';
const LOCAL_DRAFT_STORAGE_KEY='__HEATMAP_DRAFT_DATA__';
const DEFAULT_COLOR_SCALES={
    frequency:['#DBEAFE','#60A5FA','#2563EB','#1E40AF','#1E3A5F'],
    energy:['#E0E7FF','#818CF8','#6366F1','#4338CA','#312E81'],
    spotProgress:['#dbeafe','#93c5fd','#60a5fa','#3b82f6','#1d4ed8'],
    capacity:['#FEF3C7','#FBBF24','#F59E0B','#D97706','#92400E'],
    resource:['#D1FAE5','#6EE7B7','#34D399','#059669','#064E3B'],
    storage:['#CCFBF1','#5EEAD4','#2DD4BF','#0D9488','#115E59']
};
const cloneData=(value)=>JSON.parse(JSON.stringify(value));
const buildDefaultDataPayload=()=>({
    freqData:cloneData(INIT_FREQ),
    energyEntries:cloneData(buildEnergyEntries()),
    spotProgressData:cloneData(buildSpotProgressEntries()),
    capData:cloneData(INIT_CAPACITY),
    resEndow:cloneData(INIT_RESOURCE),
    storageData:cloneData(INIT_STORAGE),
    annotations:{},
    gridUploads:{},
    colorScales:cloneData(DEFAULT_COLOR_SCALES)
});
const normalizePayload=(payload={})=>{
    const defaults=buildDefaultDataPayload();
    return{
        freqData:cloneData(payload.freqData||defaults.freqData),
        energyEntries:cloneData(payload.energyEntries||defaults.energyEntries),
        spotProgressData:cloneData(payload.spotProgressData||defaults.spotProgressData),
        capData:cloneData(payload.capData||defaults.capData),
        resEndow:cloneData(payload.resEndow||defaults.resEndow),
        storageData:cloneData(payload.storageData||defaults.storageData),
        annotations:cloneData(payload.annotations||defaults.annotations),
        gridUploads:cloneData(payload.gridUploads||defaults.gridUploads),
        colorScales:cloneData({...defaults.colorScales,...(payload.colorScales||{})})
    };
};
const buildPublishDataFile=(payload)=>`window.__HEATMAP_PUBLISHED_DATA__ = ${JSON.stringify(normalizePayload(payload),null,2)};
`;
const parseImportedDataText=(text='')=>{
    const trimmed=String(text||'').trim();
    if(!trimmed)throw new Error('空文件');
    if(/^window\.__HEATMAP_PUBLISHED_DATA__/.test(trimmed)){
        const cleaned=trimmed.replace(/^window\.__HEATMAP_PUBLISHED_DATA__\s*=\s*/,'').replace(/;\s*$/,'');
        return JSON.parse(cleaned);
    }
    return JSON.parse(trimmed);
};
const getPublishedDataPayload=()=>normalizePayload(window.__HEATMAP_PUBLISHED_DATA__||{});
const hashString=(str='')=>{
    let hash=2166136261;
    for(let i=0;i<str.length;i+=1){
        hash^=str.charCodeAt(i);
        hash=Math.imul(hash,16777619);
    }
    return (hash>>>0).toString(16);
};
const getPayloadFingerprint=(payload)=>hashString(JSON.stringify(normalizePayload(payload)));
const loadDraftPayload=(publishedFingerprint)=>{
    try{
        const raw=window.localStorage?.getItem(LOCAL_DRAFT_STORAGE_KEY);
        if(!raw)return null;
        const parsed=JSON.parse(raw);
        if(parsed?.baseFingerprint!==publishedFingerprint)return null;
        return normalizePayload(parsed.payload||{});
    }catch(err){
        console.warn('读取本地草稿失败:',err?.message||err);
        return null;
    }
};
const saveDraftPayload=(payload,publishedFingerprint)=>{
    try{
        const savedAt=new Date().toISOString();
        window.localStorage?.setItem(LOCAL_DRAFT_STORAGE_KEY,JSON.stringify({
            appVersion:APP_VERSION,
            baseFingerprint:publishedFingerprint,
            savedAt,
            payload:normalizePayload(payload)
        }));
        return savedAt;
    }catch(err){
        console.warn('保存本地草稿失败:',err?.message||err);
        return null;
    }
};
const clearDraftPayload=()=>{
    try{window.localStorage?.removeItem(LOCAL_DRAFT_STORAGE_KEY);}catch(err){console.warn('清理本地草稿失败:',err?.message||err);}
};
const formatSavedAt=(iso)=>{
    if(!iso)return '未保存';
    try{return new Date(iso).toLocaleString('zh-CN',{hour12:false});}catch{return iso;}
};


// ═══ MAIN APP ═══
const App=()=>{

    const mapRef=useRef(null);
    const chartRef=useRef(null);
    const pieRef=useRef(null);
    const pieInst=useRef(null);

    const [marketType,setMarketType]=useState('frequency');
    const [energyView,setEnergyView]=useState('price');
    const [viewMode,setViewMode]=useState('china');
    const [curProvince,setCurProvince]=useState(null);
    const [selName,setSelName]=useState(null);
    const [loading,setLoading]=useState(true);
    const [mapError,setMapError]=useState('');
    const [sidebarOpen,setSidebarOpen]=useState(true);
    const [sidebarW,setSidebarW]=useState(280);
    const [isResizing,setIsResizing]=useState(false);
    const [editMode,setEditMode]=useState(false);
    const [showArchive,setShowArchive]=useState(false);
    const [previewImg,setPreviewImg]=useState(null);
    const resizeRef=useRef({x:0,w:280});
    const publishedPayload=useMemo(()=>getPublishedDataPayload(),[]);
    const publishedFingerprint=useMemo(()=>getPayloadFingerprint(publishedPayload),[publishedPayload]);
    const initialPayload=useMemo(()=>loadDraftPayload(publishedFingerprint)||publishedPayload,[publishedFingerprint,publishedPayload]);
    const [draftSavedAt,setDraftSavedAt]=useState(null);

    const [freqData,setFreqData]=useState(()=>cloneData(initialPayload.freqData));
    const [energyEntries,setEnergyEntries]=useState(()=>cloneData(initialPayload.energyEntries));
    const [spotProgressData,setSpotProgressData]=useState(()=>cloneData(initialPayload.spotProgressData));
    const [capData,setCapData]=useState(()=>cloneData(initialPayload.capData));
    const [resEndow,setResEndow]=useState(()=>cloneData(initialPayload.resEndow));
    const [resMetric,setResMetric]=useState('wind');
    const [resInput,setResInput]=useState('');
    const [storageData,setStorageData]=useState(()=>cloneData(initialPayload.storageData));
    const [storageInput,setStorageInput]=useState('');
    const [annotations,setAnnotations]=useState(()=>cloneData(initialPayload.annotations));
    const [gridUploads,setGridUploads]=useState(()=>cloneData(initialPayload.gridUploads));
    const [colorScales,setColorScales]=useState(()=>cloneData(initialPayload.colorScales));
    const [annoTool,setAnnoTool]=useState(null);
    const [annoColor,setAnnoColor]=useState('#22c55e');
    const [annoLabel,setAnnoLabel]=useState('');
    const [routeStart,setRouteStart]=useState(null);
    const [shapeStart,setShapeStart]=useState(null);
    const [annoOpacity,setAnnoOpacity]=useState(0.25);

    const buildCurrentPayload=useCallback(()=>normalizePayload({freqData,energyEntries,spotProgressData,capData,resEndow,storageData,annotations,gridUploads,colorScales}),[freqData,energyEntries,spotProgressData,capData,resEndow,storageData,annotations,gridUploads,colorScales]);
    const applyDataPayload=useCallback((payload)=>{
        const normalized=normalizePayload(payload);
        setFreqData(normalized.freqData);
        setEnergyEntries(normalized.energyEntries);
        setSpotProgressData(normalized.spotProgressData);
        setCapData(normalized.capData);
        setResEndow(normalized.resEndow);
        setStorageData(normalized.storageData);
        setAnnotations(normalized.annotations);
        setGridUploads(normalized.gridUploads);
        setColorScales(normalized.colorScales);
        setSelName(null);
        setCurProvince(null);
        setViewMode('china');
        setShowArchive(false);
    },[]);


    const activeDataKey=useMemo(()=>{
        if(marketType==='energy')return energyView==='spot-progress'?'spotProgress':'energy';
        return marketType;
    },[marketType,energyView]);

    const sidebarTitle=useMemo(()=>{
        if(viewMode==='province')return editMode?'标注工具':'省级图例';
        if(marketType==='frequency')return '调频辅助服务';
        if(marketType==='energy')return energyView==='spot-progress'?'现货市场进程':'电能量价差';
        if(marketType==='capacity')return '容量电价';
        if(marketType==='resource')return '资源禀赋';
        if(marketType==='storage')return '独立储能装机';
        return '图例';
    },[viewMode,editMode,marketType,energyView]);

    const getEntry=(name)=>{
        const datasets={frequency:freqData,energy:energyEntries,spotProgress:spotProgressData,capacity:capData,storage:storageData};
        return datasets[activeDataKey]?.[name]||null;
    };
    const getOrDefault=(name)=>getEntry(name)||makeDefaultEntry(name);

    const getColor=(value,min,max,palette)=>{
        const span=max-min||1;
        const ratio=Math.min(1,Math.max(0,(value-min)/span));
        return palette[Math.min(palette.length-1,Math.floor(ratio*(palette.length-1)))];
    };

    const resMetrics=useMemo(()=>{const k=new Set();Object.values(resEndow).forEach(i=>Object.keys(i).forEach(x=>k.add(x)));return Array.from(k);},[resEndow]);
    const resRange=useMemo(()=>{const v=Object.values(resEndow).map(x=>Number(x?.[resMetric])||0);return v.length?{min:Math.min(...v),max:Math.max(...v)}:{min:0,max:1};},[resEndow,resMetric]);

    const resData=useMemo(()=>{
        const out={};
        Object.entries(resEndow).forEach(([prov,metrics])=>{
            const val=Number(metrics?.[resMetric])||0;
            const total=Object.values(metrics).reduce((s,v)=>s+(Number(v)||0),0);
            const pieData=Object.entries(metrics).map(([k,v])=>({name:RES_LABELS[k]||k,value:Number(v)||0})).sort((a,b)=>b.value-a.value);
            out[prov]={title:`${prov} 资源禀赋`,totalVolume:`${RES_LABELS[resMetric]}: ${val} 万千瓦`,
                marketVolumeDisplay:`合计装机约${total.toFixed(1)} 万千瓦`,tags:['资源禀赋'],
                resourcePieData:pieData,details:pieData.map(i=>({label:i.name,value:`${i.value} 万千瓦`})),mapValue:val};
        });
        return out;
    },[resEndow,resMetric]);

    const storageRange=useMemo(()=>{
        const vals=Object.values(storageData).map(d=>Number(d?.power)||0).filter(v=>v>0);
        return vals.length?{min:Math.min(...vals),max:Math.max(...vals)}:{min:0,max:2000};
    },[storageData]);
    const storageEntries=useMemo(()=>{
        const out={};
        Object.entries(storageData).forEach(([prov,info])=>{
            const power=Number(info?.power)||0;
            const capacity=Number(info?.capacity)||0;
            const count=Number(info?.count)||0;
            const filedCount=Number(info?.filedCount)||0;
            out[prov]={
                title:`${prov} 独立储能装机`,
                totalVolume:`总功率: ${power} MW`,
                marketVolumeDisplay:`总容量 ${capacity} MWh · 数量 ${count} 座（备案 ${filedCount} 座）`,
                tags:['独立储能'],
                details:[
                    {label:'独立储能总功率',value:`${power} MW`},
                    {label:'独立储能总容量',value:`${capacity} MWh`},
                    {label:'独立储能数量',value:`${count}`},
                    {label:'备案数量',value:`${filedCount}`}
                ],
                mapValue:power,
                color:info?.color||null
            };
        });
        return out;
    },[storageData]);

    const freqRange=useMemo(()=>{
        const vals=Object.values(freqData).map(d=>d.mapValue||0).filter(v=>v>0);
        return vals.length?{min:Math.min(...vals),max:Math.max(...vals)}:{min:0,max:5000};
    },[freqData]);
    const capRange=useMemo(()=>{
        const vals=Object.values(capData).map(d=>d.mapValue||0).filter(v=>v>0);
        return vals.length?{min:Math.min(...vals),max:Math.max(...vals)}:{min:0,max:330};
    },[capData]);
    const energyRange=useMemo(()=>{
        const vals=Object.values(energyEntries).map(d=>d.mapValue||0).filter(v=>v>0);
        return vals.length?{min:Math.min(...vals),max:Math.max(...vals)}:{min:0,max:1};
    },[energyEntries]);

    const currentPalette=colorScales[activeDataKey]||colorScales.frequency;

    const tier1=['江苏省','浙江省','安徽省','山东省'];
    const tier2=['贵州省','云南省','广西壮族自治区','湖南省','湖北省','江西省','内蒙古自治区'];
    const tier3=['新疆维吾尔自治区','黑龙江省','吉林省','辽宁省','青海省'];

    const generateMapData=()=>{
        const data=[];
        if(marketType==='frequency'){
            Object.entries(freqData).forEach(([name,d])=>{
                if(d.mapValue>0){
                    const color=d.color||getColor(d.mapValue,freqRange.min,freqRange.max,currentPalette);
                    data.push({name,value:d.mapValue,itemStyle:{areaColor:color,borderColor:'#fff',borderWidth:1.2},emphasis:{itemStyle:{areaColor:hoverColor}}});
                }
            });
            tier1.forEach(n=>!freqData[n]&&data.push({name:n,value:-3,itemStyle:{areaColor:'#52525b',borderColor:'#fff',borderWidth:1},emphasis:{itemStyle:{areaColor:hoverColor}}}));
            tier2.forEach(n=>!freqData[n]&&data.push({name:n,value:-2,itemStyle:{areaColor:'#9ca3af',borderColor:'#fff',borderWidth:1},emphasis:{itemStyle:{areaColor:hoverColor}}}));
            tier3.forEach(n=>!freqData[n]&&data.push({name:n,value:-1,itemStyle:{areaColor:'#e5e7eb',borderColor:'#fff',borderWidth:1},emphasis:{itemStyle:{areaColor:hoverColor}}}));
        } else if(marketType==='capacity'){
            Object.entries(capData).forEach(([name,d])=>{
                if(d.mapValue>0){
                    const color=d.color||getColor(d.mapValue,capRange.min,capRange.max,currentPalette);
                    data.push({name,value:d.mapValue,itemStyle:{areaColor:color,borderColor:'#fff',borderWidth:1.2},emphasis:{itemStyle:{areaColor:hoverColor}}});
                }
            });
        } else if(marketType==='energy'){
            const source=energyView==='spot-progress'?spotProgressData:energyEntries;
            Object.entries(source).forEach(([name,d])=>{
                if(d.mapValue>0){
                    const color=energyView==='spot-progress'
                        ?(d.color||'#e2e8f0')
                        :(d.color||getColor(d.mapValue,energyRange.min,energyRange.max,currentPalette));
                    data.push({name,value:d.mapValue,itemStyle:{areaColor:color,borderColor:'#fff',borderWidth:1.2},emphasis:{itemStyle:{areaColor:hoverColor}}});
                }
            });
        } else if(marketType==='resource'){
            Object.entries(resData).forEach(([name,d])=>{
                if(d.mapValue>0){
                    const color=getColor(d.mapValue,resRange.min,resRange.max,currentPalette);
                    data.push({name,value:d.mapValue,itemStyle:{areaColor:color,borderColor:'#fff',borderWidth:1.2},emphasis:{itemStyle:{areaColor:hoverColor}}});
                }
            });
        } else if(marketType==='storage'){
            Object.entries(storageEntries).forEach(([name,d])=>{
                if(d.mapValue>0){
                    const color=d.color||getColor(d.mapValue,storageRange.min,storageRange.max,currentPalette);
                    data.push({name,value:d.mapValue,itemStyle:{areaColor:color,borderColor:'#fff',borderWidth:1.2},emphasis:{itemStyle:{areaColor:hoverColor}}});
                }
            });
        }
        return data;
    };

    // ─── Load Map (embedded GeoJSON only) ───
    const loadMap=async(mode,provinceName=null)=>{
        setLoading(true);
        setMapError('');
        try{
            let mapName='china';
            let geo=null;
            let code=null;

            if(mode==='province'&&provinceName){
                code=ADCODE[provinceName];
                if(!code){setLoading(false);return;}
                mapName=provinceName;
            }

            try{
                geo=mode==='china'
                    ?await ensureChinaGeoJSON()
                    :await ensureProvinceGeoJSON(code);
            }catch(mapErr){
                console.warn('Local GeoJSON unavailable, using fallback geometry.',mapErr?.message||mapErr);
                geo=mode==='china'?buildFallbackChinaGeoJSON():buildFallbackProvinceGeoJSON(provinceName);
                setMapError(`地图文件缺失，已切换简化底图：${mode==='china'?'全国':'省级'} ${provinceName||''}`.trim());
            }

            if(!geo)throw new Error(`未找到可用地图数据: ${mode==='china'?'全国':'省份'} ${provinceName||''}`.trim());
            if(!window.echarts)return;
            window.echarts.registerMap(mapName,geo);
            if(chartRef.current)chartRef.current.dispose();
            const chart=window.echarts.init(mapRef.current);
            chartRef.current=chart;

            let option={};
            if(mode==='china'){
                option={
                    backgroundColor:'transparent',
                    tooltip:{trigger:'item',backgroundColor:'rgba(255,255,255,.97)',borderColor:'#e2e8f0',borderWidth:1,padding:[12,16],textStyle:{color:'#1e293b',fontFamily:'inherit'},
                        extraCssText:'border-radius:10px;box-shadow:0 4px 24px rgba(0,0,0,.1);',
                        formatter:(params)=>{
                            if(params.value===undefined||params.value===null)return`<div style="font-weight:700;font-size:13px">${params.name}</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">点击查看详情 · 双击进入省级</div>`;
                            const entry=getEntry(params.name)||(marketType==='resource'?resData[params.name]:marketType==='storage'?storageEntries[params.name]:null);
                            if(!entry)return`<div style="font-weight:700;font-size:13px">${params.name}</div><div style="font-size:11px;color:#94a3b8;margin-top:4px">暂无数据 · 点击查看</div>`;
                            return`<div style="font-weight:700;font-size:13px;margin-bottom:4px;">${params.name}</div>`
                                +(entry.totalVolume?`<div style="font-size:12px;color:#475569;">${entry.totalVolume}</div>`:'')
                                +`<div style="font-size:10px;color:#2563eb;border-top:1px solid #f1f5f9;padding-top:5px;margin-top:5px;">单击查看 · 双击进入省级</div>`;
                        }},
                    series:[{name:'市场',type:'map',map:'china',roam:true,zoom:1.2,center:[104.114,37.55],
                        label:{show:true,fontSize:10,color:'rgba(0,0,0,.35)',fontFamily:'inherit'},
                        itemStyle:{areaColor:'#f1f5f9',borderColor:'#cbd5e1',borderWidth:1},
                        emphasis:{label:{show:true,color:'#854d0e',fontWeight:'bold'},itemStyle:{areaColor:hoverColor}},
                        data:generateMapData(),selectedMode:false}]
                };
            } else {
                const annos=annotations[provinceName]||{markers:[],routes:[],notes:[],shapes:[]};
                const markerData=annos.markers?.map(m=>({
                    name:m.label,value:[...m.coord,100],
                    symbol:MARKER_PRESETS.find(p=>p.type===m.preset)?.symbol||'circle',
                    symbolSize:16,
                    itemStyle:{color:m.color||'#22c55e',borderColor:'#fff',borderWidth:2,shadowBlur:4,shadowColor:'rgba(0,0,0,.3)'},
                    label:{show:true,formatter:m.label,position:'right',fontSize:11,color:'#1e293b',fontWeight:500},
                    tooltipData:m
               }))||[];
                const routeData=annos.routes?.map(r=>({
                    coords:r.coords,
                    lineStyle:{color:r.color||'#334155',width:r.width||2.5,opacity:.85,type:r.dashed?'dashed':'solid'},
                    tooltipData:r
                }))||[];
                const shapeData=(annos.shapes||[]).map((s,i)=>({value:[...s.coord1,i],shapeInfo:s}));

                option={
                    backgroundColor:'transparent',
                    tooltip:{trigger:'item',backgroundColor:'rgba(255,255,255,.97)',borderColor:'#e2e8f0',borderWidth:1,padding:12,textStyle:{color:'#1e293b'},
                        extraCssText:'border-radius:10px;box-shadow:0 4px 24px rgba(0,0,0,.1);',
                        formatter:p=>{
                            const d=p.data?.tooltipData;
                            if(!d)return p.name;
                            return`<div style="font-weight:700;color:${d.color||p.color}">${d.label||d.name||''}</div>`
                                +(d.desc?`<div style="font-size:12px;color:#64748b;">${d.desc}</div>`:'')
                                +(d.preset?`<div style="font-size:10px;color:#94a3b8;">${MARKER_PRESETS.find(x=>x.type===d.preset)?.label||''}</div>`:'');
                        }},
                    geo:{map:mapName,roam:true,zoom:1.0,silent:true,
                        label:{show:true,color:'#64748b'},
                        itemStyle:{areaColor:'#e8ecf1',borderColor:'#94a3b8',borderWidth:1.5},
                        emphasis:{disabled:true}},
                    series:[
                        {name:'形状',type:'custom',coordinateSystem:'geo',data:shapeData,silent:true,zlevel:1.5,
                            renderItem:(params,bindApi)=>{
                                const d=shapeData[params.dataIndex];if(!d)return null;
                                const s=d.shapeInfo;
                                const p1=bindApi.coord(s.coord1);
                                const p2=bindApi.coord(s.coord2);
                                const hex=s.color||'#3b82f6';
                                const op=s.opacity??0.25;
                                const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
                                const fillC=`rgba(${r},${g},${b},${op})`;
                                const strokeC=`rgba(${r},${g},${b},${Math.min(1,op+0.4)})`;
                                if(s.shapeType==='circle'){
                                    const cx=p1[0],cy=p1[1];
                                    const rad=Math.sqrt((p2[0]-p1[0])**2+(p2[1]-p1[1])**2);
                                    return{type:'circle',shape:{cx,cy,r:rad},style:{fill:fillC,stroke:strokeC,lineWidth:2}};
                                } else {
                                    const x=Math.min(p1[0],p2[0]),y=Math.min(p1[1],p2[1]);
                                    const w=Math.abs(p2[0]-p1[0]),h=Math.abs(p2[1]-p1[1]);
                                    return{type:'rect',shape:{x,y,width:w,height:h,r:4},style:{fill:fillC,stroke:strokeC,lineWidth:2}};
                                }
                            }},
                        {name:'路线',type:'lines',coordinateSystem:'geo',data:routeData,silent:true,
                            lineStyle:{width:2.5,opacity:.85},
                            effect:{show:true,symbol:'arrow',symbolSize:7,period:8},zlevel:1.8},
                        {name:'标注',type:'effectScatter',coordinateSystem:'geo',data:markerData,silent:true,
                            showEffectOn:'render',rippleEffect:{brushType:'fill',scale:2},zlevel:2}
                    ]
                };
                if(annos.notes?.length){
                    option.graphic=annos.notes.map(n=>({
                        type:'text',left:n.x||100,top:n.y||100,z:100,zlevel:10,
                        style:{text:n.text||'',fill:n.color||'#1e293b',fontSize:13,fontWeight:500,
                            backgroundColor:'rgba(255,255,255,.85)',padding:[4,8],borderRadius:4,
                            borderWidth:1,borderColor:'#e2e8f0'},
                        draggable:true
                    }));
                }
            }

            chart.setOption(option);
            setLoading(false);

            /* ── China mode: unified click/dblclick via timer ── */
            if(mode==='china'){
                let _cTimer=null,_cName=null;
                chart.on('click',(params)=>{
                    if(params.componentType!=='series'||params.seriesType!=='map')return;
                    const name=resolveProvinceName(params.name)||params.name;
                    if(_cTimer&&_cName===name){
                        clearTimeout(_cTimer);_cTimer=null;_cName=null;
                        if(ADCODE[name]){setCurProvince(name);setSelName(name);setViewMode('province');}
                    }else{
                        if(_cTimer)clearTimeout(_cTimer);
                        _cName=name;
                        _cTimer=setTimeout(()=>{setSelName(name);_cTimer=null;_cName=null;},280);
                    }
                });
            }
            /* ── Province mode: annotation clicks ── */
            if(mode==='province'){
                chart.getZr().on('click',(event)=>{
                    if(!annoTool||!editMode)return;
                    const pixel=[event.offsetX,event.offsetY];
                    if(annoTool==='note'){
                        addAnnotation(provinceName,null,pixel[0],pixel[1]);
                        return;
                    }
                    const coord=chart.convertFromPixel({geoIndex:0},pixel);
                    if(!coord||!isFinite(coord[0])||!isFinite(coord[1]))return;
                    if(annoTool==='circle'||annoTool==='rect'){
                        if(!shapeStart){setShapeStart(coord);return;}
                        addAnnotation(provinceName,coord,pixel[0],pixel[1]);
                        return;
                    }
                    addAnnotation(provinceName,coord,pixel[0],pixel[1]);
                });
            }
        }catch(e){
            console.error('Map error:',e);
            setMapError('地图数据加载失败：内置地图缺失且在线拉取失败，请检查网络后刷新页面。');
            setLoading(false);
        }
    };

    const addAnnotation=(prov,coord,px,py)=>{
        let added=false;
        setAnnotations(prev=>{
            const next={...prev};
            const a={...(next[prov]||{markers:[],routes:[],notes:[]})};
            if(annoTool==='marker'){
                if(!coord||!isFinite(coord[0])||!isFinite(coord[1]))return next;
                a.markers=[...(a.markers||[]),{id:Date.now(),coord,label:annoLabel||'新标注',color:annoColor,preset:'C',desc:''}];added=true;
            } else if(annoTool==='note'){
                a.notes=[...(a.notes||[]),{id:Date.now(),x:px,y:py,text:annoLabel||'备注',color:annoColor}];added=true;
            } else if(annoTool==='route'){
                if(!coord||!isFinite(coord[0])||!isFinite(coord[1]))return next;
                if(!routeStart){setRouteStart(coord);return next;}
                a.routes=[...(a.routes||[]),{id:Date.now(),coords:[routeStart,coord],label:annoLabel||'路线',color:annoColor,width:2.5}];
                setRouteStart(null);added=true;
            } else if(annoTool==='circle'||annoTool==='rect'){
                if(!coord||!isFinite(coord[0])||!isFinite(coord[1]))return next;
                if(!shapeStart){setShapeStart(coord);return next;}
                a.shapes=[...(a.shapes||[]),{id:Date.now(),shapeType:annoTool,coord1:shapeStart,coord2:coord,label:annoLabel||(annoTool==='circle'?'圆形区域':'矩形区域'),color:annoColor,opacity:annoOpacity}];
                setShapeStart(null);added=true;
            }
            next[prov]=a;
            return next;
        });
        if(added)setTimeout(()=>loadMap('province',prov),50);
    };

    const removeAnnotation=(prov,type,id)=>{
        setAnnotations(prev=>{
            const next={...prev};
            const a={...(next[prov]||{markers:[],routes:[],notes:[]})};
            a[type]=(a[type]||[]).filter(i=>i.id!==id);
            next[prov]=a;
            return next;
        });
        setTimeout(()=>loadMap('province',prov),50);
    };

    // ─── Effects ───
    useEffect(()=>{loadMap(viewMode,curProvince);},[viewMode,curProvince,marketType,energyView,resData,storageEntries,freqData,capData,energyEntries,spotProgressData,colorScales,annotations,annoTool,editMode,routeStart,shapeStart]);
    useEffect(()=>{setViewMode('china');setCurProvince(null);setSelName(null);setAnnoTool(null);setRouteStart(null);if(marketType!=='energy')setEnergyView('price');},[marketType]);
    useEffect(()=>{if(marketType==='energy'){setViewMode('china');setCurProvince(null);setSelName(null);}},[energyView]);
    useEffect(()=>{const h=()=>chartRef.current?.resize();window.addEventListener('resize',h);return()=>window.removeEventListener('resize',h);},[]);
    useEffect(()=>{
        const stamp=saveDraftPayload(buildCurrentPayload(),publishedFingerprint);
        if(stamp)setDraftSavedAt(stamp);
    },[buildCurrentPayload,publishedFingerprint]);
    useEffect(()=>()=>{
        if(chartRef.current)chartRef.current.dispose();
        if(pieInst.current)pieInst.current.dispose();
    },[]);

    useEffect(()=>{
        const entry=selName&&marketType==='resource'?resData[selName]:null;
        if(!pieRef.current||!entry?.resourcePieData?.length){if(pieInst.current){pieInst.current.dispose();pieInst.current=null;}return;}
        if(!pieInst.current)pieInst.current=window.echarts.init(pieRef.current);
        pieInst.current.clear();
        pieInst.current.setOption({tooltip:{trigger:'item',extraCssText:'border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.08);'},series:[{type:'pie',radius:['38%','68%'],itemStyle:{borderRadius:5,borderColor:'#fff',borderWidth:2},label:{formatter:'{b}: {d}%',color:'#0f172a',fontSize:11},data:entry.resourcePieData}]});
        pieInst.current.resize();
    },[selName,resData,marketType]);

    useEffect(()=>{
        if(!isResizing)return;
        const move=e=>setSidebarW(Math.min(Math.max(resizeRef.current.w+e.clientX-resizeRef.current.x,220),440));
        const up=()=>setIsResizing(false);
        window.addEventListener('mousemove',move);window.addEventListener('mouseup',up);
        return()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mouseup',up);};
    },[isResizing]);

    // ─── Handlers ───
    const parseLines=(text)=>text.split(/\r?\n/).map(line=>line.trim()).filter(Boolean);
    const splitColumns=(line)=>line.split(/[\t,，]/).map(i=>i.trim()).filter(Boolean);
    const applyResInput=()=>{
        if(!resInput.trim())return;
        const updates={};
        parseLines(resInput).forEach(line=>{
            const [provRaw,keyRaw,valRaw]=splitColumns(line);
            const prov=resolveProvinceName(provRaw)||provRaw;
            const key=RES_KEY_ALIAS[(keyRaw||'').toLowerCase()]||RES_KEY_ALIAS[keyRaw];
            const val=Number(valRaw);
            if(prov&&key&&Number.isFinite(val)){
                updates[prov]={...(updates[prov]||{}),[key]:val};
            }
        });
        if(Object.keys(updates).length){
            setResEndow(prev=>{
                const next={...prev};
                Object.entries(updates).forEach(([prov,metricObj])=>{
                    next[prov]={...(next[prov]||{}),...metricObj};
                });
                return next;
            });
        }
        setResInput('');
    };
    const applyStorageInput=()=>{
        if(!storageInput.trim())return;
        const updates={};
        parseLines(storageInput).forEach(line=>{
            const [provRaw,powerRaw,capacityRaw,countRaw,filedRaw]=splitColumns(line);
            const prov=resolveProvinceName(provRaw)||provRaw;
            const power=Number(powerRaw),capacity=Number(capacityRaw),count=Number(countRaw),filedCount=Number(filedRaw);
            if(prov&&[power,capacity,count,filedCount].every(Number.isFinite)){
                updates[prov]={power,capacity,count,filedCount};
            }
        });
        if(Object.keys(updates).length)setStorageData(prev=>({...prev,...updates}));
        setStorageInput('');
    };

    const handleBack=()=>{setViewMode('china');setCurProvince(null);setAnnoTool(null);setRouteStart(null);setShapeStart(null);};
    const closeSidebar=()=>setSelName(null);

    const updateEntry=(name,field,value)=>{
        const setters={frequency:setFreqData,energy:setEnergyEntries,spotProgress:setSpotProgressData,capacity:setCapData,storage:setStorageData};
        const setter=setters[activeDataKey];
        if(!setter)return;
        setter(prev=>{
            const entry={...(prev[name]||makeDefaultEntry(name))};
            if(field==='mapValue')entry.mapValue=Number(value)||0;
            else if(field==='color')entry.color=value;
            else if(field==='spotStage'){
                entry.spotStage=value;
                entry.totalVolume=value||'待更新';
                entry.details=[...(entry.details||[])];
                const idx=entry.details.findIndex(i=>i.label==='现货阶段');
                if(idx>-1)entry.details[idx]={...entry.details[idx],value:value||'待填写'};
                else entry.details.unshift({label:'现货阶段',value:value||'待填写'});
            }
            else if(field.startsWith('details.')){
                const[,idx,f]=field.split('.');
                entry.details=[...(entry.details||[])];
                entry.details[Number(idx)]={...(entry.details[Number(idx)]||{}), [f]:value};
            } else entry[field]=value;
            return{...prev,[name]:entry};
        });
    };

    const addDetail=(name)=>{
        const setters={frequency:setFreqData,energy:setEnergyEntries,spotProgress:setSpotProgressData,capacity:setCapData,storage:setStorageData};
        const setter=setters[activeDataKey];
        if(!setter)return;
        setter(prev=>{
            const entry={...(prev[name]||makeDefaultEntry(name))};
            entry.details=[...(entry.details||[]),{label:'新字段',value:'待填写'}];
            return{...prev,[name]:entry};
        });
    };

    const removeDetail=(name,idx)=>{
        const setters={frequency:setFreqData,energy:setEnergyEntries,spotProgress:setSpotProgressData,capacity:setCapData,storage:setStorageData};
        const setter=setters[activeDataKey];
        if(!setter)return;
        setter(prev=>{
            const entry={...(prev[name]||makeDefaultEntry(name))};
            entry.details=(entry.details||[]).filter((_,i)=>i!==idx);
            return{...prev,[name]:entry};
        });
    };

    const addTag=(name,tag)=>{
        const setters={frequency:setFreqData,energy:setEnergyEntries,spotProgress:setSpotProgressData,capacity:setCapData,storage:setStorageData};
        const setter=setters[activeDataKey];
        if(!setter)return;
        setter(prev=>{
            const entry={...(prev[name]||makeDefaultEntry(name))};
            entry.tags=[...(entry.tags||[]),tag];
            return{...prev,[name]:entry};
        });
    };

    // ★ NEW: Remove tag
    const removeTag=(name,tagIdx)=>{
        const setters={frequency:setFreqData,energy:setEnergyEntries,spotProgress:setSpotProgressData,capacity:setCapData,storage:setStorageData};
        const setter=setters[activeDataKey];
        if(!setter)return;
        setter(prev=>{
            const entry={...(prev[name]||makeDefaultEntry(name))};
            entry.tags=(entry.tags||[]).filter((_,i)=>i!==tagIdx);
            return{...prev,[name]:entry};
        });
    };
    const handleExportPublishData=()=>{
        const payload=buildCurrentPayload();
        const blob=new Blob([buildPublishDataFile(payload)],{type:'application/javascript;charset=utf-8'});
        const url=URL.createObjectURL(blob);
        const a=document.createElement('a');a.href=url;a.download='site-data.js';a.click();URL.revokeObjectURL(url);
    };
    const handleExportJSON=()=>{
        const payload=buildCurrentPayload();
        const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
        const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='heatmap-data-backup.json';a.click();URL.revokeObjectURL(url);
    };
    const handleImportData=(e)=>{
        const file=e.target.files?.[0];if(!file)return;
        const reader=new FileReader();
        reader.onload=(ev)=>{try{
            const payload=parseImportedDataText(String(ev.target.result||''));
            applyDataPayload(payload);
            const stamp=saveDraftPayload(payload,publishedFingerprint);
            if(stamp)setDraftSavedAt(stamp);
        }catch(err){
            console.error('导入失败',err);
            alert('导入失败：仅支持 site-data.js 或 JSON 备份文件。');
        }};
        reader.readAsText(file);e.target.value='';
    };
    const handleResetToPublished=()=>{
        clearDraftPayload();
        applyDataPayload(publishedPayload);
        setDraftSavedAt(null);
    };

    const handleGridUpload=(prov,files)=>{

        if(!editMode)return;
        files.forEach(f=>{const r=new FileReader();r.onload=e=>{setGridUploads(p=>({...p,[prov]:[...(p[prov]||[]),{id:`${f.name}-${Date.now()}`,src:e.target.result,name:f.name,updatedAt:new Date().toISOString()}]}));};r.readAsDataURL(f);});
    };

    // ─── Derived ───
    const tabs=[
        {key:'frequency',label:'二次调频',icon:<Activity size={14}/>,color:'#2563eb'},
        {key:'energy',label:'电能量',icon:<BatteryC size={14}/>,color:'#4f46e5'},
        {key:'capacity',label:'容量电价',icon:<DollarSign size={14}/>,color:'#d97706'},
        {key:'resource',label:'资源禀赋',icon:<Layers size={14}/>,color:'#059669'},
        {key:'storage',label:'独立储能装机',icon:<ArchiveIc size={14}/>,color:'#0f766e'}
    ];

    const mainTitle=viewMode==='province'?`${shortName(curProvince)} 省级详情`
        :marketType==='frequency'?'二次调频市场热力图'
        :marketType==='capacity'?'容量电价热力图'
        :marketType==='resource'?'资源禀赋热力图'
        :marketType==='storage'?'独立储能装机热力图'
        :energyView==='price'?'电能量价差热力图':'现货市场进程';

    const selEntry=useMemo(()=>{
        if(!selName)return null;
        if(marketType==='resource')return resData[selName]||makeDefaultEntry(selName);
        if(marketType==='storage')return storageEntries[selName]||makeDefaultEntry(selName);
        return getOrDefault(selName);
    },[selName,marketType,energyView,freqData,energyEntries,spotProgressData,capData,resData,storageEntries]);

    const provAnnos=curProvince?annotations[curProvince]||{markers:[],routes:[],notes:[],shapes:[]}:{markers:[],routes:[],notes:[],shapes:[]};
    const provGrids=(prov)=>[...(gridUploads[prov]||[])];

    // ─── Active tab color ───
    const activeTab=tabs.find(t=>t.key===marketType);
    const accentColor=activeTab?.color||'#2563eb';


    // ═══ RENDER ═══
    return(
    <div className="flex flex-col h-screen overflow-hidden relative" style={{background:'linear-gradient(135deg,#eef1f5 0%,#e4e9f0 50%,#eef1f5 100%)'}}>

        {/* ── Header ── */}
        <header className="glass border-b px-5 py-2.5 flex items-center justify-between z-20 shrink-0" style={{borderColor:'var(--glass-border)'}}>
            <div className="flex items-center gap-3">
                {viewMode==='province'?(
                    <button onClick={handleBack} className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-all hover:shadow-sm"><ArrowLeft size={15}/> 返回全国</button>
                ):(
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg" style={{background:`linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`}}>
                        <Activity size={18}/>
                    </div>
                )}
                <div>
                    <h1 className="text-[15px] font-bold text-slate-900 leading-tight tracking-tight">{mainTitle}</h1>
                    <div className="text-[10px] text-slate-400 mt-0.5 tracking-wide">{viewMode==='province'?'点击地图添加标注（编辑模式）':`单击查看详情 · 双击进入省级地图 · 发布文件: data/site-data.js`}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={()=>setEditMode(!editMode)} className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${editMode?'text-white border-transparent shadow-md':'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}
                    style={editMode?{background:`linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`}:{}}>
                    {editMode?<><Edit3 size={12}/> 编辑中</>:<><Eye size={12}/> 查看</>}
                </button>
                {editMode&&<>
                    <button onClick={handleExportPublishData} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 shadow-sm transition-all"><Download size={12}/> 发布数据</button>
                    <button onClick={()=>setShowArchive(true)} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-300 transition-all"><ArchiveIc size={12}/></button>
                </>}
            </div>
        </header>

        {/* ── Tabs ── */}
        <div className="glass border-b px-5 flex items-center gap-1 shrink-0 z-10" style={{borderColor:'var(--glass-border)'}}>
            {tabs.map(t=>(
                <button key={t.key} onClick={()=>setMarketType(t.key)}
                    className={`tab-btn flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold transition-all ${marketType===t.key?'active':''}`}
                    style={{color:marketType===t.key?t.color:'#94a3b8'}}>
                    {t.icon} {t.label}
                </button>
            ))}
            {marketType==='energy'&&(
                <div className="ml-3 flex items-center gap-0.5 bg-slate-100/80 rounded-lg p-0.5">
                    <button onClick={()=>setEnergyView('price')} className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${energyView==='price'?'bg-white text-indigo-700 shadow-sm':'text-slate-500 hover:text-slate-700'}`}>价差地图</button>
                    <button onClick={()=>setEnergyView('spot-progress')} className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${energyView==='spot-progress'?'bg-white text-indigo-700 shadow-sm':'text-slate-500 hover:text-slate-700'}`}>现货进程</button>
                </div>
            )}
        </div>

        {/* ── Body ── */}
        <div className="flex-1 relative w-full h-full overflow-hidden">
            <div className="w-full h-full flex">
                {/* Left Sidebar */}
                <div className="absolute left-0 top-0 bottom-0 z-40 glass border-r shadow-lg transition-all duration-300 flex flex-col overflow-hidden" style={{width:sidebarOpen?sidebarW:0,transform:sidebarOpen?'translateX(0)':'translateX(-100%)',borderColor:'var(--glass-border)'}}>
                    <div className="p-3 border-b border-slate-100/80 shrink-0 flex items-center gap-2">
                        <div className="w-1.5 h-4 rounded-full" style={{background:accentColor}}/>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{sidebarTitle}</span>
                    </div>
                    <div className="p-3 overflow-y-auto flex-1 space-y-4">
                        {viewMode==='china'&&(
                            <div className="space-y-4 fade-in">
                                {/* ★ IMPROVED LEGEND per view */}
                                {marketType==='frequency'&&(
                                    <>
                                    <LegendBar
                                        palette={currentPalette}
                                        min={freqRange.min} max={freqRange.max}
                                        unit="万"
                                        label="月度调频市场份额"
                                        ticks={[
                                            {pos:'0%',text:`${freqRange.min}万元`},
                                            {pos:'33%',text:`${Math.round(freqRange.min+(freqRange.max-freqRange.min)/3)}万`},
                                            {pos:'66%',text:`${Math.round(freqRange.min+2*(freqRange.max-freqRange.min)/3)}万`},
                                            {pos:'100%',text:`${freqRange.max}万元`}
                                        ]}
                                    />
                                    <div className="space-y-1.5">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">潜在开放梯队</div>
                                        <div className="space-y-1">
                                            {[{color:'#52525b',label:'第一梯队',desc:'华东核心省份'},{color:'#9ca3af',label:'第二梯队',desc:'中西部重点省'},{color:'#e5e7eb',label:'第三梯队',desc:'远期关注'}].map(t=>(
                                                <div key={t.label} className="flex items-center gap-2 py-1">
                                                    <div className="w-3 h-3 rounded" style={{backgroundColor:t.color}}/>
                                                    <span className="text-[11px] text-slate-600 font-medium">{t.label}</span>
                                                    <span className="text-[10px] text-slate-400">{t.desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100">
                                        覆盖 {Object.keys(freqData).length} 省份 · 数据越深蓝色表示月度调频市场份额越大
                                    </div>
                                    </>
                                )}

                                {marketType==='energy'&&energyView==='price'&&(
                                    <>
                                    <LegendBar
                                        palette={currentPalette}
                                        min={energyRange.min} max={energyRange.max}
                                        label="峰谷价差（元/kWh）"
                                        ticks={[
                                            {pos:'0%',text:`${energyRange.min.toFixed(2)}`},
                                            {pos:'50%',text:`${((energyRange.min+energyRange.max)/2).toFixed(2)}`},
                                            {pos:'100%',text:`${energyRange.max.toFixed(2)}`}
                                        ]}
                                    />
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-[11px]"><div className="w-3 h-3 rounded bg-indigo-100 border border-indigo-300"/><span className="text-slate-600">市场区间（测算）</span></div>
                                        <div className="flex items-center gap-2 text-[11px]"><div className="w-3 h-3 rounded bg-indigo-500 border border-indigo-600"/><span className="text-slate-600">实测数据</span></div>
                                    </div>
                                    <div className="text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100">
                                        覆盖 {Object.keys(energyEntries).length} 省份 · 颜色越深表示价差越大，储能套利空间越高
                                    </div>
                                    </>
                                )}

                                {marketType==='energy'&&energyView==='spot-progress'&&(
                                    <>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">现货市场阶段</div>
                                        {[{color:'#3b82f6',label:'正式运行',desc:'机制成熟'},{color:'#60a5fa',label:'连续结算试运行',desc:'持续优化'},{color:'#93c5fd',label:'试运行',desc:'能力建设'},{color:'#e2e8f0',label:'未开展/待更新',desc:'暂无进展'}].map(s=>(
                                            <div key={s.label} className="flex items-center gap-2 py-1">
                                                <div className="w-3 h-3 rounded" style={{backgroundColor:s.color}}/>
                                                <span className="text-[11px] text-slate-700 font-medium">{s.label}</span>
                                                <span className="text-[10px] text-slate-400">{s.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100">
                                        蓝色越深表示现货市场建设进度越领先
                                    </div>
                                    </>
                                )}

                                {marketType==='capacity'&&(
                                    <>
                                    <LegendBar
                                        palette={currentPalette}
                                        min={capRange.min} max={capRange.max}
                                        label="容量补偿（元/kW·年）"
                                        ticks={[
                                            {pos:'0%',text:`${capRange.min}`},
                                            {pos:'33%',text:`${Math.round(capRange.min+(capRange.max-capRange.min)/3)}`},
                                            {pos:'66%',text:`${Math.round(capRange.min+2*(capRange.max-capRange.min)/3)}`},
                                            {pos:'100%',text:`${capRange.max}`}
                                        ]}
                                    />
                                    <div className="text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100">
                                        覆盖 {Object.keys(capData).length} 省份 · 颜色越深（棕色系）表示容量补偿单价越高
                                    </div>
                                    </>
                                )}

                                {marketType==='resource'&&(
                                    <>
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">选择指标</div>
                                        <select value={resMetric} onChange={e=>setResMetric(e.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs focus:outline-none ef">
                                            {resMetrics.map(k=><option key={k} value={k}>{RES_LABELS[k]||k}</option>)}
                                        </select>
                                    </div>
                                    <LegendBar
                                        palette={currentPalette}
                                        min={resRange.min} max={resRange.max}
                                        label={`${RES_LABELS[resMetric]||resMetric} 装机`}
                                        ticks={[
                                            {pos:'0%',text:`${resRange.min} 万千瓦`},
                                            {pos:'50%',text:`${((resRange.min+resRange.max)/2).toFixed(0)} 万千瓦`},
                                            {pos:'100%',text:`${resRange.max} 万千瓦`}
                                        ]}
                                    />
                                    <div className="text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100">
                                        覆盖 {Object.keys(resData).length} 省份 · 绿色越深表示该类电源装机规模越大
                                    </div>
                                    {editMode&&<>
                                        <textarea
                                            value={resInput}
                                            onChange={e=>setResInput(e.target.value)}
                                            onPaste={e=>{e.stopPropagation();const text=e.clipboardData?.getData('text');if(text){e.preventDefault();setResInput(prev=>`${prev}${prev?'\n':''}${text}`);}}}
                                            placeholder="省份,指标,数值（支持逗号/制表符，如：河北省,wind,35）"
                                            className="w-full h-16 text-xs rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:outline-none ef"
                                            rows={3}
                                        />
                                        <button onClick={applyResInput} className="w-full bg-emerald-600 text-white text-[11px] font-bold py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm">应用数据</button>
                                    </>}
                                    </>
                                )}

                                {marketType==='storage'&&(
                                    <>
                                    <LegendBar
                                        palette={currentPalette}
                                        min={storageRange.min} max={storageRange.max}
                                        label="独立储能总功率（MW）"
                                        ticks={[
                                            {pos:'0%',text:`${storageRange.min} MW`},
                                            {pos:'50%',text:`${((storageRange.min+storageRange.max)/2).toFixed(0)} MW`},
                                            {pos:'100%',text:`${storageRange.max} MW`}
                                        ]}
                                    />
                                    <div className="text-[10px] text-slate-400 bg-slate-50 rounded-lg p-2 border border-slate-100">
                                        覆盖 {Object.keys(storageEntries).length} 省份 · 颜色越深表示独立储能总功率越高
                                    </div>
                                    {editMode&&<>
                                        <textarea
                                            value={storageInput}
                                            onChange={e=>setStorageInput(e.target.value)}
                                            onPaste={e=>{e.stopPropagation();const text=e.clipboardData?.getData('text');if(text){e.preventDefault();setStorageInput(prev=>`${prev}${prev?'\n':''}${text}`);}}}
                                            placeholder="省份,总功率MW,总容量MWh,数量,备案数量"
                                            className="w-full h-16 text-xs rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 focus:outline-none ef"
                                            rows={3}
                                        />
                                        <button onClick={applyStorageInput} className="w-full bg-teal-600 text-white text-[11px] font-bold py-2 rounded-lg hover:bg-teal-700 transition-colors shadow-sm">应用独立储能数据</button>
                                    </>}
                                    </>
                                )}

                                {/* Custom color scale editor (edit mode) */}
                                {editMode&&(
                                    <div className="space-y-1.5 bg-slate-50/80 rounded-lg p-2.5 border border-slate-100">
                                        <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1"><Palette size={11}/>自定义色阶</div>
                                        <div className="flex gap-1 flex-wrap">
                                            {currentPalette.map((c,i)=>(
                                                <input key={i} type="color" value={c} onChange={e=>{
                                                    setColorScales(prev=>{const next={...prev};next[activeDataKey]=[...next[activeDataKey]];next[activeDataKey][i]=e.target.value;return next;});
                                                }} title={`色阶 ${i+1}`}/>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Province-level annotation toolbar */}
                        {viewMode==='province'&&editMode&&(
                            <div className="space-y-3 fade-in">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">标注工具</div>
                             <div className="grid grid-cols-5 gap-1.5">
                                    {[{key:'marker',icon:<MapPin size={14}/>,label:'标注点'},{key:'route',icon:<Route size={14}/>,label:'路线'},{key:'note',icon:<StickyNote size={14}/>,label:'备注'},{key:'circle',icon:<CircleIc size={14}/>,label:'圆形'},{key:'rect',icon:<RectIc size={14}/>,label:'矩形'}].map(t=>(
                                        <button key={t.key} onClick={()=>{setAnnoTool(annoTool===t.key?null:t.key);setRouteStart(null);setShapeStart(null);}}
                                            className={`tool-btn flex flex-col items-center gap-1 py-2.5 rounded-lg text-[10px] font-bold border transition-all ${annoTool===t.key?'active bg-blue-50 text-blue-700 border-blue-200':'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}>
                                            {t.icon}<span>{t.label}</span>
                                        </button>
                                    ))}
                                </div>
                                {annoTool&&(
                                    <div className="space-y-2 bg-blue-50/60 border border-blue-100 rounded-lg p-2.5 fade-in">
                                        <div className="text-[10px] text-blue-700 font-bold">{annoTool==='marker'?'点击地图放置标注':annoTool==='route'?(routeStart?'再次点击确定路线终点':'点击地图选择路线起点'):annoTool==='note'?'点击地图放置备注':annoTool==='circle'?(shapeStart?'再次点击确定圆形边缘':'点击地图选择圆心'):annoTool==='rect'?(shapeStart?'再次点击确定对角':'点击地图选择矩形起角'):''}</div>
                                        <input value={annoLabel} onChange={e=>setAnnoLabel(e.target.value)} placeholder="名称/描述" className="w-full text-xs border border-blue-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none ef"/>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] text-slate-500">颜色:</span>
                                            <input type="color" value={annoColor} onChange={e=>setAnnoColor(e.target.value)}/>
                                            <div className="flex gap-1 ml-1">
                                                {(annoTool==='marker'?MARKER_PRESETS:[{color:'#334155'},{color:'#16a34a'},{color:'#7e22ce'},{color:'#ef4444'},{color:'#0ea5e9'}]).map((p,i)=>(
                                                    <button key={i} onClick={()=>{setAnnoColor(p.color);if(p.type)setAnnoLabel(p.label||'');}} className="w-5 h-5 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform" style={{backgroundColor:p.color}} title={p.label||p.color}/>
                                                ))}
                                            </div>
                                        </div>
                                        {(annoTool==='circle'||annoTool==='rect')&&(
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] text-slate-500 shrink-0">透明度:</span>
                                                <input type="range" min="0.05" max="0.8" step="0.05" value={annoOpacity} onChange={e=>setAnnoOpacity(parseFloat(e.target.value))} className="flex-1 h-1.5 accent-blue-600"/>
                                                <span className="text-[10px] text-slate-500 w-8 text-right">{Math.round(annoOpacity*100)}%</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                                {(provAnnos.markers?.length>0||provAnnos.routes?.length>0||provAnnos.notes?.length>0||provAnnos.shapes?.length>0)&&(
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase">已有标注</div>
                                        {provAnnos.markers?.map(m=>(
                                            <div key={m.id} className="flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5">
                                                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor:m.color}}/><span className="text-slate-700">{m.label}</span></div>
                                                <button onClick={()=>removeAnnotation(curProvince,'markers',m.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash size={12}/></button>
                                            </div>
                                        ))}
                                        {provAnnos.routes?.map(r=>(
                                            <div key={r.id} className="flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5">
                                                <div className="flex items-center gap-1.5"><div className="w-4 h-0.5 rounded" style={{backgroundColor:r.color}}/><span className="text-slate-700">{r.label}</span></div>
                                                <button onClick={()=>removeAnnotation(curProvince,'routes',r.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash size={12}/></button>
                                            </div>
                                        ))}
                                        {provAnnos.notes?.map(n=>(
                                            <div key={n.id} className="flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5">
                                                <div className="flex items-center gap-1.5"><StickyNote size={11} cl="text-slate-400"/><span className="text-slate-700">{n.text}</span></div>
                                                <button onClick={()=>removeAnnotation(curProvince,'notes',n.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash size={12}/></button>
                                            </div>
                                        ))}
                                        {provAnnos.shapes?.map(s=>(
                                            <div key={s.id} className="flex items-center justify-between text-[11px] bg-white border border-slate-100 rounded-lg px-2.5 py-1.5">
                                                <div className="flex items-center gap-1.5">
                                                    {s.shapeType==='circle'?<CircleIc size={11}/>:<RectIc size={11}/>}
                                                    <div className="w-2.5 h-2.5 rounded" style={{backgroundColor:s.color,opacity:s.opacity||0.25}}/>
                                                    <span className="text-slate-700">{s.label}</span>
                                                </div>
                                                <button onClick={()=>removeAnnotation(curProvince,'shapes',s.id)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash size={12}/></button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        {viewMode==='province'&&!editMode&&(
                            <div className="text-xs text-slate-400 bg-slate-50 rounded-lg p-3 border border-slate-100">切换到编辑模式可在省级地图上添加标注点、输送路线和文字备注。</div>
                        )}
                    </div>
                    {sidebarOpen&&<div className="absolute top-0 right-0 h-full w-1.5 cursor-col-resize hover:bg-blue-200/50 transition-colors" onMouseDown={e=>{resizeRef.current={x:e.clientX,w:sidebarW};setIsResizing(true);}}/>}
                </div>

                <button onClick={()=>setSidebarOpen(!sidebarOpen)} className="absolute top-3 z-30 bg-white/90 backdrop-blur-sm p-1.5 rounded-r-lg shadow-md border border-l-0 border-slate-200 text-slate-500 hover:text-slate-800 transition-all hover:shadow-lg" style={{left:sidebarOpen?sidebarW:0}}>
                    {sidebarOpen?<ChevronL size={14}/>:<ChevronR size={14}/>}
                </button>

                {/* Map */}
                <div className="flex-1 relative">
                    {loading&&(
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-50" style={{background:'rgba(240,242,246,.85)',backdropFilter:'blur(4px)'}}>
                            <div className="w-8 h-8 rounded-full border-[3px] border-t-transparent animate-spin" style={{borderColor:`${accentColor}40`,borderTopColor:'transparent',borderRightColor:accentColor}}/>
                            <span className="text-xs text-slate-400 tracking-wide">加载地图数据…</span>
                        </div>
                    )}
                    {mapError&&!loading&&(
                        <div className="absolute inset-x-6 top-4 z-50 rounded-lg border border-red-200 bg-red-50/95 text-red-700 px-4 py-2.5 text-xs shadow-sm">
                            {mapError}
                        </div>
                    )}
                    <div ref={mapRef} className="w-full h-full cursor-pointer"/>
                </div>
            </div>

            {/* ── Right Detail Panel ── */}
            <div className={`detail-panel absolute right-0 top-0 bottom-0 z-30 w-full md:w-[440px] bg-white md:border-l border-slate-200 transform transition-transform duration-300 ease-out flex flex-col ${selName?'translate-x-0':'translate-x-full'}`}>
                {selName&&selEntry&&(
                    <>
                    <div className="p-4 border-b border-slate-100 flex justify-between items-start shrink-0" style={{background:'linear-gradient(135deg,#f8fafc,#ffffff)'}}>
                        <div className="flex-1 space-y-2.5">
                            {editMode?(
                                <input value={selEntry.title||''} onChange={e=>updateEntry(selName,'title',e.target.value)} className="text-lg font-bold text-slate-900 border border-slate-200 rounded-lg px-2.5 py-1.5 w-full focus:outline-none ef"/>
                            ):(
                                <h2 className="text-lg font-bold text-slate-800 tracking-tight">{selEntry.title||selName}</h2>
                            )}
                            <div className="flex flex-wrap gap-1.5 items-center">
                                {editMode?(
                                    <input value={selEntry.totalVolume||''} onChange={e=>updateEntry(selName,'totalVolume',e.target.value)} className="text-xs border rounded-lg px-2.5 py-1 font-bold focus:outline-none ef" style={{borderColor:`${accentColor}40`,background:`${accentColor}08`,color:accentColor}} placeholder="总量"/>
                                ):(
                                    selEntry.totalVolume&&<span className="px-2.5 py-1 rounded-lg text-[11px] font-bold" style={{background:`${accentColor}10`,color:accentColor,border:`1px solid ${accentColor}25`}}>{selEntry.totalVolume}</span>
                                )}
                                {/* ★ Tags with delete */}
                                {(selEntry.tags||[]).map((t,i)=>(
                                    <span key={i} className="tag-chip bg-slate-100 text-slate-600 border border-slate-200">
                                        {t}
                                        <span className="tag-x text-slate-400 hover:text-red-500" onClick={(e)=>{e.stopPropagation();removeTag(selName,i);}}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                        </span>
                                    </span>
                                ))}
                                {editMode&&<button onClick={()=>{const t=prompt('输入标签');if(t)addTag(selName,t);}} className="tag-chip bg-slate-50 text-slate-400 border border-dashed border-slate-300 hover:border-blue-300 hover:text-blue-500 cursor-pointer">+ 标签</button>}
                            </div>
                        </div>
                        <button onClick={closeSidebar} className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 ml-2 transition-colors"><XIcon size={18}/></button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {editMode&&marketType!=='resource'&&marketType!=='storage'&&(
                            <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100">
                                {!(marketType==='energy'&&energyView==='spot-progress')&&(
                                    <div className="flex-1 space-y-1">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase">地图数值</div>
                                        <input type="number" value={selEntry.mapValue||0} onChange={e=>updateEntry(selName,'mapValue',e.target.value)} className="w-full border border-slate-200 rounded-lg px-2.5 py-1.5 text-sm font-bold text-slate-900 bg-white focus:outline-none ef"/>
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">{marketType==='energy'&&energyView==='spot-progress'?'进程填色':'自定义颜色'}</div>
                                    <div className="flex items-center gap-1.5">
                                        <input type="color" value={selEntry.color||currentPalette[Math.floor(currentPalette.length/2)]} onChange={e=>updateEntry(selName,'color',e.target.value)}/>
                                        {selEntry.color&&<button onClick={()=>updateEntry(selName,'color',null)} className="text-[10px] text-slate-400 hover:text-red-500 transition-colors">重置</button>}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="rounded-xl p-4 border border-slate-100 bg-slate-50/50">
                            <div className="flex items-center gap-1.5 font-semibold mb-2.5 text-slate-600 text-sm"><Coins size={16}/>概览</div>
                            {marketType==='energy'&&energyView==='spot-progress'&&(
                                <div className="mb-2.5">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">现货市场阶段</div>
                                    {editMode?(
                                        <input value={selEntry.spotStage||''} onChange={e=>updateEntry(selName,'spotStage',e.target.value)} placeholder="如：连续结算试运行 / 正式运行" className="w-full border border-slate-200 rounded-lg px-2.5 py-2 text-sm font-semibold text-slate-700 focus:outline-none ef bg-white"/>
                                    ):(
                                        <div className="inline-flex px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold">{selEntry.spotStage||'待更新'}</div>
                                    )}
                                </div>
                            )}
                            {editMode?(
                                <textarea className="w-full border border-slate-200 rounded-lg px-2.5 py-2 text-sm focus:outline-none ef bg-white" rows={3} value={selEntry.marketVolumeDisplay||''} onChange={e=>updateEntry(selName,'marketVolumeDisplay',e.target.value)}/>
                            ):(
                                <p className="text-sm text-slate-700 leading-relaxed">{selEntry.marketVolumeDisplay}</p>
                            )}
                        </div>

                        {selEntry.resourcePieData&&<div ref={pieRef} className="w-full h-48"/>}

                        {provGrids(selName).length>0&&(
                            <div className="space-y-2">
                                <div className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1"><Layers size={11}/>网架/规划</div>
                                <div className="grid gap-2 sm:grid-cols-2">{provGrids(selName).map(item=>(
                                    <div key={item.id} className="bg-slate-50 rounded-lg border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                                        <img src={item.src} alt="" className="w-full h-28 object-cover cursor-pointer" onClick={()=>setPreviewImg(item)}/>
                                        <div className="text-[10px] text-slate-500 px-2 py-1 truncate">{item.name}</div>
                                    </div>
                                ))}</div>
                            </div>
                        )}
                        {editMode&&(
                            <label className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors">
                                <Upload size={13}/>上传网架/规划图
                                <input type="file" accept="image/*" multiple onChange={e=>handleGridUpload(selName,Array.from(e.target.files||[]))} className="hidden"/>
                            </label>
                        )}

                        <div className="space-y-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-1"><BarChart3 size={11}/>详细数据</div>
                            <div className="bg-slate-50 rounded-xl border border-slate-100 divide-y divide-slate-100">
                                {(selEntry.details||[]).map((item,idx)=>(
                                    <div key={idx} className="p-3 flex flex-col gap-1">
                                        {editMode?(
                                            <div className="flex items-center gap-1.5">
                                                <input value={item.label} onChange={e=>updateEntry(selName,`details.${idx}.label`,e.target.value)} className="flex-1 border border-slate-200 rounded px-2 py-0.5 text-[11px] text-slate-500 bg-white focus:outline-none ef" placeholder="字段名"/>
                                                <button onClick={()=>removeDetail(selName,idx)} className="text-slate-300 hover:text-red-500 transition-colors"><Trash size={12}/></button>
                                            </div>
                                        ):(
                                            <span className="text-[11px] text-slate-400">{item.label}</span>
                                        )}
                                        {editMode?(
                                            <input value={item.value} onChange={e=>updateEntry(selName,`details.${idx}.value`,e.target.value)} className="border border-slate-200 rounded px-2 py-1 text-sm bg-white focus:outline-none ef"/>
                                        ):(
                                            <span className="text-sm text-slate-800 pl-2.5 border-l-2 border-slate-200">{item.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {editMode&&<button onClick={()=>addDetail(selName)} className="flex items-center gap-1 w-full justify-center py-2.5 rounded-lg text-xs font-bold bg-slate-50 text-slate-500 border border-dashed border-slate-300 hover:border-blue-300 hover:text-blue-600 transition-colors"><Plus size={13}/>添加字段</button>}
                        </div>
                    </div>
                    </>
                )}
            </div>
        </div>

        {/* ── Archive Modal ── */}
        {showArchive&&(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={()=>setShowArchive(false)}>
                <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 space-y-4" onClick={e=>e.stopPropagation()}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-sm"><ArchiveIc size={16}/>数据存档</div>
                        <button onClick={()=>setShowArchive(false)} className="text-slate-400 hover:text-slate-600 transition-colors"><XIcon size={16}/></button>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">代码与地图文件已固定。你后续只需要在页面里编辑，然后导出 <code className="font-mono text-[11px]">site-data.js</code> 覆盖仓库里的 <code className="font-mono text-[11px]">data/site-data.js</code> 即可发布。</p>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 space-y-1">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">当前浏览器草稿</div>
                        <div className="text-[11px] text-slate-600">自动保存时间：{formatSavedAt(draftSavedAt)}</div>
                    </div>
                    <button onClick={handleExportPublishData} className="w-full text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow-md" style={{background:`linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`}}><Download size={13}/>导出发布数据（site-data.js）</button>
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={handleExportJSON} className="bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors shadow-sm"><Download size={13}/>导出备份JSON</button>
                        <label className="bg-white border border-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl cursor-pointer hover:border-slate-300 flex items-center justify-center gap-1.5 transition-colors"><Upload size={13}/>导入数据<input type="file" accept=".json,.js" onChange={handleImportData} className="hidden"/></label>
                    </div>
                    <button onClick={handleResetToPublished} className="w-full bg-white border border-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:border-slate-300 transition-colors">恢复到已发布版本</button>
                </div>
            </div>
        )}

        {/* ── Preview ── */}
        {previewImg&&(
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6" onClick={()=>setPreviewImg(null)}>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full" onClick={e=>e.stopPropagation()}>
                    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                        <span className="text-sm font-semibold text-slate-700">{previewImg.name||'预览'}</span>
                        <button onClick={()=>setPreviewImg(null)} className="text-slate-400 hover:text-slate-700 transition-colors"><XIcon size={16}/></button>
                    </div>
                    <div className="max-h-[80vh] overflow-auto bg-slate-50"><img src={previewImg.src} alt="" className="w-full object-contain"/></div>
                </div>
            </div>
        )}
    </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);