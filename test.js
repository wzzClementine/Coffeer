const test = [
  {
    id: 1,
    title: "添加原料",
    status: true,
    options: [
      {
        id: 11,
        name: "咖啡基底",
        status: true,
        material: [
          {
            id: 111,
            name: "浓缩咖啡Espresso",
            amount: 50 + "%"
          },
          {
            id: 112,
            name: "冰美式Americano",
            amount: 50 + "%"
          },
          {
            id: 113,
            name: "牛奶咖啡Milk Coffee",
            amount: 50 + "%"
          },
          {
            id: 114,
            name: "阿芙佳朵Affogato",
            amount: 50 + "%"
          },
          {
            id: 115,
            name: "苏打咖啡Soda Coffee",
            amount: 50 + "%"
          }
        ]
      },{
        id: 12,
        name: "奶制品",
        status: true,
        material: [
          {
            id: 121,
            name: "全脂牛奶",
            amount: 50 + "%"
          },{
            id: 122,
            name: "脱脂牛奶",
            amount: 50 + "%"
          },{
            id: 123,
            name: "豆奶",
            amount: 50 + "%"
          },
        ]
      },{
        id: 13,
        name: "糖浆",
        status: true,
        material: [
          {
            id: 131,
            name: "黄糖",
            amount: 50 + "%"
          },{
            id: 132,
            name: "白糖",
            amount: 50 + "%"
          },{
            id: 133,
            name: "方糖",
            amount: 50 + "%"
          },
        ]
      }
    ]
  },{
    id: 2,
    title: "添加工序",
    status: true,
    options: [
      {
        id: 21,
        name: "加热",
        status: true,
        material: [
          {
            id: 211,
            name: "加热温度",
            amount: 50 + "℃"
          }
        ]
      },
      {
        id: 21,
        name: "研磨",
        status: true,
        material: [
          {
            id: 211,
            name: "研磨时间",
            amount: 50 + "min"
          }
        ]
      },
      {
        id: 21,
        name: "加水",
        status: true,
        material: [
          {
            id: 211,
            name: "纯净水含量",
            amount: 50 + "ml"
          }
        ]
      },
      {
        id: 21,
        name: "冷藏",
        status: true,
        material: [
          {
            id: 211,
            name: "冷藏时间",
            amount: 50 + "min"
          },
          {
            id: 211,
            name: "冷藏温度",
            amount: 50 + "℃"
          }
        ]
      }
    ]
  },
];

console.log(JSON.stringify(test));
