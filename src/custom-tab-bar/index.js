Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'home-o',
				text: '首页',
				url: '/pages/index'
			},
			{
				icon: 'apps-o',
				text: '分类',
				url: '/pages/items/category'
			},
			{
				icon: 'newspaper-o',
				text: '资讯',
				url: '/pages/articles/index'
			},
			{
				icon: 'user-o',
				text: '我的',
				url: '/pages/users/me'
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
