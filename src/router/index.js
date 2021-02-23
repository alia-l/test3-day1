const menu = [
	{
		title: '系统管理',
		key: 'system',
		router: '/system',
		children: [
			{
				title: '系统设置',
				key: 'system-setting',
				router: '/system_setting',
				component: 'SystemSetting'
			},
			{
				title: '权限设置',
				key: 'permission-setting',
				router: '/system/permission_setting',
				component: 'PermissionSetting'
			}
		]
	},
	{
		title: '用户管理',
		key: 'user',
		router: '/user',
		component: 'User'
	},
	{
		title: '商品管理',
		key: 'goods',
		router: '/goods',
		children: [
			{
				title: '优惠卡管理',
				key: 'card',
				router: '/goods/card',
				component: 'Card'
			},
			{
				title: '优惠卡管理2',
				key: 'card2',
				router: '/goods/card2',
				component: 'Card2'
			},
			{
				title: '优惠卡管理3',
				key: 'card3',
				router: '/goods/card3',
				component: 'Card3'
			},
			{
				title: '优惠卡管理4',
				key: 'card4',
				router: '/goods/card4',
				component: 'Card4'
			},
			{
				title: '优惠卡管理5',
				key: 'card5',
				router: '/goods/card5',
				component: 'Card5'
			},
			{
				title: '优惠卡管理5',
				key: 'card6',
				router: '/goods/card6',
				component: 'Card6'
			}
		]
	},
	{
		title: '商品类型管理',
		key: 'goods-type',
		router: '/goods_type',
		children: [
			{
				title: '卡类型管理',
				key: 'card-type',
				router: '/goods_type/card_type',
				component: 'CardType'
			},
			{
				title: '卡类型管理2',
				key: 'card-type2',
				router: '/goods_type/card_type2',
				component: 'CardType2'
			},
			{
				title: '卡类型管理3',
				key: 'card-type3',
				router: '/goods_type/card_type3',
				component: 'CardType3'
			},
			{
				title: '卡类型管理4',
				key: 'card-type4',
				router: '/goods_type/card_type4',
				component: 'CardType4'
			},
			{
				title: '卡类型管理5',
				key: 'card-type5',
				router: '/goods_type/card_type5',
				component: 'CardType5'
			},
			{
				title: '卡类型管理6',
				key: 'card-type6',
				router: '/goods_type/card_type6',
				component: 'CardType6'
			},
			{
				title: '卡类型管理7',
				key: 'card-type7',
				router: '/goods_type/card_type7',
				component: 'CardType7'
			}
		]
	}
]
export default menu
