'use strict';

angular.module('musicFrontApp')
  /**
   * @ngdoc function
   * @name musicFrontApp.controller:PlaylistCtrl
   * @description
   * # PlaylistCtrl
   * Controller of the musicFrontApp
   */
  .controller('PlaylistCtrl', ['$http', 'authService', function ($http, authService) {
    var vm = this
    // 当前页
    vm.currentPage = 1
    vm.user = authService.user
    // 评论内容
    vm.writeContent = ''
    // 每页的条目数
    vm.prePageItemCount = 10

    /**
     * 计算还可以添加的字数
     */
    vm.computeWriteCount = function () {
      return 140 - vm.writeContent.length
    }

    /**
     * 计算可输入文字字数的颜色
     */
    vm.computeWriteCountColor = function () {
      var _length = 140 - vm.writeContent.length
      if (_length > 15) { return { color: '#999' } }
      if (_length > 0) { return { color: '#F98C01' } }
      return { color: 'red' }
    }

    /**
     * 显示当前页码需要显示的评论数据
     */
    vm.computeCurrentPageShowComments = function () {
      var _len = (vm.currentPage - 1) * 10
      return vm.comments.slice(_len, _len + 10)
    }

    /**
     * 获取页数
     */
    vm.computePageCount = function () {
      var ret = []
      var _len = Math.ceil(vm.comments.length / vm.prePageItemCount)
      for (var _i = 0; _i < _len; _i++) {
        ret.push(_i + 1)
      }
      return ret
    }

    /**
     * 切换页码
     */
    vm.changePage = function (willPage) {
      vm.currentPage = willPage
    }

    vm.comments = [
      {
        id: '001',
        userid: '',
        username: '-淡络',
        content: '真心羡慕你们，能够把那些长得一样一样的网红准确的分清楚谁是谁',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '002',
        userid: '',
        username: '孖寳',
        content: '很早的INS照片……',
        postDateTime: Date.now(),
        upCount: 0,
        replyToComment: {
          id: '001',
          userid: '',
          username: '-淡络',
          content: '真心羡慕你们，能够把那些长得一样一样的网红准确的分清楚谁是谁',
          postDateTime: Date.now(),
          upCount: 0,
        },
      },
      {
        id: '003',
        userid: '',
        username: '爱听沃',
        content: '好听',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '004',
        userId: '',
        username: '叫家长',
        content: '拿走了什么 第一次',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '005',
        userId: '',
        username: '无殇q',
        content: '老婆说，《我很爱她》。老公说，《可他不爱我》。老婆说，《如果你爱他》。老公说，《想你爱我》。',
        postDateTime: Date.now(),
        upCount: 2,
      },
      {
        id: '006',
        userId: '',
        username: '丶浅璃',
        content: '厉害了',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '007',
        userId: '',
        username: '壹见双笙误终身',
        content: '还有《我是你的谁》《儿子，我是你爸爸》',
        postDateTime: Date.now(),
        upCount: 58,
      },
      {
        id: '008',
        userId: '',
        username: 'Arcana魔术师',
        content: '看封面我还以为是明日花。。。',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '009',
        userId: '',
        username: '755OH',
        content: '这么一说还有点像',
        postDateTime: Date.now(),
        upCount: 0,
        replyToComment: {
          id: '008',
          userId: '',
          username: 'Arcana魔术师',
          content: '看封面我还以为是明日花。。。',
          postDateTime: Date.now(),
          upCount: 0,
        },
      },
      {
        id: '010',
        userId: '',
        username: '尤瑞的集装箱',
        content: '牛逼啊',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '011',
        userId: '',
        username: '727843dgmpm',
        content: '什么歌都是？真LJ',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '012',
        userId: '',
        username: '梧桐灯语',
        content: '我不会唱歌……于是我不在唱歌 我笑出声了',
        postDateTime: Date.now(),
        upCount: 3,
      },
      {
        id: '013',
        userId: '',
        username: '张二丰Schlager',
        content: '拿走了什么 和 第一次 好污',
        postDateTime: Date.now(),
        upCount: 3,
      },
      {
        id: '014',
        userId: '',
        username: '妙吉客leo',
        content: '这算尬歌吗😀',
        postDateTime: Date.now(),
        upCount: 2,
      },
      {
        id: '015',
        userId: '',
        username: 'panpan1016',
        content: '逗比我就服你',
        postDateTime: Date.now(),
        upCount: 1,
      },
      {
        id: '016',
        userId: '',
        username: '旧_友_',
        content: '打开我头像 吓你一跳😀收藏你喜欢的歌单',
        postDateTime: Date.now(),
        upCount: 1,
      },
      {
        id: '017',
        userId: '',
        username: '二黄黄黄耶',
        content: '哈哈哈哈哈哈这个套路现在被我同学玩疯了',
        postDateTime: Date.now(),
        upCount: 0,
        replyToComment: {
          id: '007',
          userId: '',
          username: '壹见双笙误终身',
          content: '还有《我是你的谁》《儿子，我是你爸爸》',
          postDateTime: Date.now(),
          upCount: 58,
        },
      },
      {
        id: '018',
        userId: '',
        username: 'Leosend',
        content: '《孩子像你》- 薛凯琪 《不是我的》- 陈慧琪😀😀😀',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '019',
        userId: '',
        username: '恣意__Y',
        content: '12和13要换位置',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '020',
        userId: '',
        username: 'Heqianbo',
        content: '“啊哈，给我一杯忘情水”“谁是啊哈”“啊哈，这个人就是娘”.......“娘子，啊哈”',
        postDateTime: Date.now(),
        upCount: 57,
      },
      {
        id: '021',
        userId: '',
        username: '一枕黄粱梦沉酣_',
        content: '我给男票说几个赞就要他啪几次，别赞，最好一个都没有。',
        postDateTime: Date.now(),
        upCount: 0,
      },
      {
        id: '022',
        userId: '',
        username: '陆契',
        content: '我动动手指就让你爽得不要不要的，好像没什么不对',
        postDateTime: Date.now(),
        upCount: 173,
        replyToComment: {
          id: '021',
          userId: '',
          username: '一枕黄粱梦沉酣_',
          content: '我给男票说几个赞就要他啪几次，别赞，最好一个都没有。',
          postDateTime: Date.now(),
          upCount: 0,
        },
      },
      {
        id: '023',
        userId: '',
        username: '意外-LJZ',
        content: '《我很快乐》的反调应该是《你不是真正的快乐》',
        postDateTime: Date.now(),
        upCount: 223,
      },
      {
        id: '024',
        userId: '',
        username: 'itoFishe',
        content: '😀应该是《那个女孩》《那个男孩》《幸福了然后呢》《结婚》《偷情》《离婚》，全剧终',
        postDateTime: Date.now(),
        upCount: 860,
      },
      {
        id: '025',
        userId: '',
        username: 'ewsnudir',
        content: '默默竖个大拇指！不只歌名斗/逗 听起来也蛮不错的',
        postDateTime: Date.now(),
        upCount: 0,
      },
    ]
    vm.hotsFun = function () {
      console.log('调用')
      var _filterUpCount = vm.comments.filter(function (_ele_comment) {
        return _ele_comment.upCount > 10
      })
      return _filterUpCount.sort(function (a, b) {
        return a.upCount - b.upCount
      })
    }
    vm.hots = vm.comments.filter(function (_ele_comment) { return _ele_comment.upCount > 10 }).sort(function (_a, _b) { return _b.upCount - _a.upCount })
    vm.songs = [
      {
        name: '敢爱敢不爱',
        time: '04:14',
        musician: '郝婉彤',
        album: '敢爱敢不爱'
      },
      {
        name: '敢爱敢做',
        time: '04:59',
        musician: '林子祥',
        album: '38年音乐习作'
      },
      {
        name: '遇见MV',
        time: '03:30',
        musician: '孙燕姿',
        album: '经典全纪录(主打精华版)'
      },
      {
        name: '错过',
        time: '04:28',
        musician: '梁咏琪',
        album: '礼物'
      },
      {
        name: '会过去的MV',
        time: '04:17',
        musician: '梁静茹',
        album: '爱久见人心'
      },
      {
        name: '过不去',
        time: '03:44',
        musician: '张惠妹',
        album: '也许明天'
      },
      {
        name: '你给我听好MV',
        time: '04:48',
        musician: '陈奕迅',
        album: 'rice & shine'
      },
      {
        name: '别找我麻烦MV',
        time: '04:08',
        musician: '蔡健雅',
        album: '说到爱'
      },
      {
        name: '阿婆说',
        time: '04:06',
        musician: '陈一发儿',
        album: '阿婆说'
      },
      {
        name: '我太乖',
        time: '04:44',
        musician: '江语晨',
        album: '晴天娃娃'
      },
      {
        name: '丑八怪 - (原唱 : 薛之谦)',
        time: '04:26',
        musician: '李克勤',
        album: '我是歌手第四季 第8期'
      },
      {
        name: '无与伦比的美丽MV',
        time: '05:06',
        musician: '苏打绿',
        album: '无与伦比的美丽'
      },
      {
        name: '过火MV',
        time: '05:02',
        musician: '张信哲',
        album: '选哲'
      },
      {
        name: '刚刚好MV',
        time: '04:10',
        musician: '薛之谦',
        album: '初学者'
      },
      {
        name: 'High歌',
        time: '04:46',
        musician: '黄龄',
        album: '痒'
      },
      {
        name: '烦恼歌MV',
        time: '04:14',
        musician: '张学友',
        album: '在你身边'
      },
      {
        name: '我很快乐',
        time: '03:33',
        musician: '刘惜君',
        album: '爱情花园'
      },
      {
        name: '把悲伤留给自己',
        time: '05:27',
        musician: '蔡琴',
        album: '鲍比达&蔡琴 遇见'
      },
      {
        name: '慢慢',
        time: '04:43',
        musician: '张学友',
        album: '黑与白 新歌+精选 1985-2004'
      },
      {
        name: '匆匆',
        time: '02:35',
        musician: '胡德夫',
        album: '匆匆'
      },
      {
        name: '南方姑娘MV',
        time: '05:34',
        musician: '赵雷',
        album: '赵小雷'
      },
      {
        name: '北方爷们',
        time: '03:16',
        musician: '花粥',
        album: '热门华语271'
      },
      {
        name: '拿走了什么',
        time: '04:56',
        musician: 'A-Lin',
        album: '罪恶感'
      },
      {
        name: '第一次MV',
        time: '04:23',
        musician: '光良',
        album: '第1次个人创作专辑'
      },
      {
        name: '假如让我说下去',
        time: '03:27',
        musician: '杨千嬅',
        album: 'Simply Me'
      },
      {
        name: '好心分手MV',
        time: '03:00',
        musician: '王力宏/卢巧音',
        album: 'Dream Again(新歌+精选)'
      },
      {
        name: '最浪漫的事',
        time: '04:14',
        musician: '邝美云',
        album: '我和春天有个约会'
      },
      {
        name: '分手炮',
        time: '02:13',
        musician: '花粥',
        album: '很多无处存放的歌曲'
      },
      {
        name: '如果这就是爱情MV',
        time: '04:43',
        musician: '张靓颖',
        album: '我相信'
      },
      {
        name: '亲爱的，那不是爱情MV',
        time: '04:16',
        musician: '张韶涵',
        album: 'Ang 5.0'
      },
      {
        name: '正气歌',
        time: '03:41',
        musician: '梁汉文',
        album: '我最喜爱的Eric Kwok作品展'
      },
      {
        name: '去你的撩妹即正义',
        time: '02:53',
        musician: '阿肆',
        album: '去你的撩妹即正义'
      },
      {
        name: '爱的初体验 (Live) - liveMV',
        time: '03:37',
        musician: '纵贯线',
        album: 'Live in Taipei 出发/终点站'
      },
      {
        name: '胸大的姑娘',
        time: '02:02',
        musician: '留声玩具',
        album: '六局完胜'
      },
      {
        name: '你不在MV',
        time: '04:35',
        musician: '王力宏',
        album: '火力全开(新歌+精选)'
      },
      {
        name: '原来你也在这里',
        time: '03:39',
        musician: '刘若英',
        album: '我的失败与伟大'
      },
      {
        name: '我害怕MV',
        time: '04:08',
        musician: '薛之谦',
        album: '我害怕'
      },
      {
        name: '不怕不怕MV',
        time: '03:36',
        musician: '郭美美',
        album: '不怕不怕(台湾版)'
      },
      {
        name: '他不爱我MV',
        time: '03:58',
        musician: '莫文蔚',
        album: '就 i Karen 莫文蔚精选'
      },
      {
        name: '我很想爱他MV',
        time: '04:27',
        musician: 'Twins',
        album: '我们相爱6年'
      },
      {
        name: '我愿意MV',
        time: '04:31',
        musician: '王菲',
        album: '情.菲.得意'
      },
      {
        name: '我不愿意',
        time: '04:06',
        musician: '张学友',
        album: '黑与白 新歌+精选 1985-2004'
      },
      {
        name: '天天想你MV',
        time: '04:16',
        musician: '陈绮贞',
        album: 'A Piece of Summer II'
      },
      {
        name: '欲望把眼前的地板铺满',
        time: '07:49',
        musician: '张悬',
        album: '亲爱的…我还不知道'
      },
      {
        name: '宝贝MV',
        time: '05:26',
        musician: '张悬',
        album: '宝贝'
      },
      {
        name: '请你轻一点折磨我',
        time: '04:47',
        musician: '赵照',
        album: '过期荷尔蒙'
      },
      {
        name: '葡萄成熟时MV',
        time: '04:37',
        musician: '陈奕迅',
        album: 'U-87'
      },
      {
        name: '吃掉我(demo)',
        time: '03:09',
        musician: '金玟岐',
        album: '金玟岐作品集'
      },
      {
        name: '别问我是谁MV',
        time: '05:05',
        musician: '王馨平',
        album: '别问我是谁'
      },
      {
        name: '你是我的眼MV',
        time: '05:21',
        musician: '萧煌奇',
        album: '你是我的眼'
      },
      {
        name: '就是你',
        time: '04:00',
        musician: '戴佩妮',
        album: '爱疯了'
      },
      {
        name: '可惜不是你',
        time: '05:03',
        musician: '曹轩宾',
        album: '你的三次方'
      },
      {
        name: '那就这样吧',
        time: '04:28',
        musician: 'Rocky',
        album: '热门华语233'
      },
      {
        name: '我也不想这样MV',
        time: '04:57',
        musician: '王菲',
        album: '王菲'
      },
      {
        name: '我不会唱歌',
        time: '04:13',
        musician: '李克勤',
        album: '我是歌手第四季 第11期'
      },
      {
        name: '于是我不再唱歌',
        time: '04:55',
        musician: '旅行团',
        album: '于是我不再唱歌'
      },
      {
        name: '绅士MV',
        time: '04:50',
        musician: '薛之谦',
        album: '绅士'
      },
      {
        name: '无赖',
        time: '04:50',
        musician: '戴佩妮',
        album: '纯属意外'
      },
      {
        name: '喜欢你MV',
        time: '03:59',
        musician: 'G.E.M.邓紫棋',
        album: '喜欢你'
      },
      {
        name: '我不会喜欢你MV',
        time: '03:49',
        musician: '陈柏霖',
        album: '我可能不会爱你 电视原声带'
      },
      {
        name: '魔鬼中的天使 MV',
        time: '03:57',
        musician: '简弘亦',
        album: '魔鬼中的天使'
      },
      {
        name: '来自天堂的魔鬼MV',
        time: '04:05',
        musician: 'G.E.M.邓紫棋',
        album: '新的心跳'
      },
      {
        name: '真实MV',
        time: '04:35',
        musician: '张惠妹',
        album: '真实'
      },
      {
        name: '虚拟MV',
        time: '04:00',
        musician: '陈粒',
        album: '小梦大半'
      },
      {
        name: '向往',
        time: '03:59',
        musician: '李健',
        album: '为你而来'
      },
      {
        name: '心淡MV',
        time: '04:08',
        musician: '容祖儿',
        album: '我的骄傲'
      },
      {
        name: '你好毒MV',
        time: '03:55',
        musician: '张学友',
        album: '走过1999'
      },
      {
        name: '妳太善良',
        time: '03:46',
        musician: '张智霖',
        album: 'I Am Chilam'
      },
      {
        name: '有理想MV',
        time: '03:48',
        musician: '李荣浩',
        album: '有理想'
      },
      {
        name: '再见理想',
        time: '04:58',
        musician: 'Beyond',
        album: '组.Band岁月'
      },
      {
        name: '洁身自爱',
        time: '04:26',
        musician: '张国荣',
        album: 'I Am What I Am'
      },
      {
        name: '堕落MV',
        time: '03:42',
        musician: '王菲',
        album: '浮躁'
      },
      {
        name: '太坦白',
        time: '04:56',
        musician: '李荣浩',
        album: '模特'
      },
      {
        name: '沉默是金',
        time: '04:06',
        musician: '张国荣',
        album: 'Ultimate '
      },
      {
        name: '钟无艳',
        time: '04:36',
        musician: '谢安琪',
        album: 'Audiophile Compilations'
      },
      {
        name: '夏迎春',
        time: '03:28',
        musician: '陈晓琪',
        album: '7 Years'
      },
      {
        name: '春夏秋冬',
        time: '04:10',
        musician: '张国荣',
        album: 'I Am What I Am'
      },
      {
        name: '一年五季',
        time: '03:55',
        musician: '卢巧音',
        album: '4 Seasons In One Day'
      },
      {
        name: '囚鸟MV',
        time: '04:48',
        musician: '彭羚',
        album: '囚鸟'
      },
      {
        name: '像风一样自由',
        time: '03:41',
        musician: '许巍',
        album: '在路上……'
      },
      {
        name: '无所谓MV',
        time: '04:25',
        musician: '方大同/张靓颖',
        album: 'JTW西游记 (GOLD)'
      },
      {
        name: '执着',
        time: '05:32',
        musician: '许巍',
        album: '珍藏许巍作品全集'
      },
      {
        name: '飞鸟与鱼',
        time: '04:25',
        musician: '齐豫',
        album: 'The Unheard Of Chyi'
      },
      {
        name: '鱼鸟之恋(Live)',
        time: '05:26',
        musician: '谭维维',
        album: '我是歌手第三季 总决赛'
      },
      {
        name: '终于等到你MV',
        time: '04:55',
        musician: '张靓颖',
        album: '终于等到你'
      },
      {
        name: '我终于失去了你',
        time: '02:19',
        musician: '赵传',
        album: '隐藏的歌手 第七期'
      },
      {
        name: '分开旅行',
        time: '04:07',
        musician: '黄立行/刘若英',
        album: '音浪 新歌+精选'
      },
      {
        name: '我们终究会牵手旅行MV',
        time: '05:14',
        musician: '许飞',
        album: '许飞'
      },
      {
        name: '改变自己MV',
        time: '03:14',
        musician: '王力宏',
        album: '改变自己'
      },
      {
        name: '死性不改MV',
        time: '03:52',
        musician: 'Boy\'z/Twins',
        album: 'A Year To Remember'
      },
      {
        name: '黑暗中漫舞MV',
        time: '03:15',
        musician: '陈奕迅',
        album: 'Shall We Dance? Shall We Talk!'
      },
      {
        name: '阳光照进回忆里',
        time: '05:21',
        musician: '逃跑计划',
        album: '世界'
      },
      {
        name: '晴天MV',
        time: '04:46',
        musician: '刘瑞琦',
        album: '再次寻找周杰伦'
      },
      {
        name: '下雨天',
        time: '05:04',
        musician: '林忆莲/Blue Jeans',
        album: '林忆莲白金珍藏版'
      },
      {
        name: '三千年前',
        time: '03:41',
        musician: '关淑怡',
        album: 'Shirley\'s Era'
      },
      {
        name: '三千年后',
        time: '05:18',
        musician: '李香琴',
        album: '12金钗众生花'
      },
      {
        name: '海阔天空MV',
        time: '05:26',
        musician: 'Beyond',
        album: '海阔天空'
      },
      {
        name: '耿耿于怀',
        time: '03:39',
        musician: '麦浚龙',
        album: 'Proto'
      },
      {
        name: '爱不疚MV',
        time: '03:50',
        musician: '林峯',
        album: 'Your Love'
      },
      {
        name: '让我一次爱个够',
        time: '04:22',
        musician: '庾澄庆',
        album: '让我一次爱个够'
      },
      {
        name: '记得MV',
        time: '04:47',
        musician: '林俊杰',
        album: '她说 概念自选辑'
      },
      {
        name: '忘记',
        time: '03:38',
        musician: '周传雄',
        album: '忘记 transfer'
      },
      {
        name: '微笑',
        time: '03:33',
        musician: '海龟先生',
        album: '海龟先生'
      },
      {
        name: '狠狠哭',
        time: '04:34',
        musician: '郭采洁',
        album: '爱异想'
      },
      {
        name: '女孩MV',
        time: '04:28',
        musician: '李荣浩',
        album: '有理想'
      },
      {
        name: '大龄女子 - (Darling)MV',
        time: '05:08',
        musician: '彭佳慧',
        album: '走不回去的旅程'
      },
      {
        name: '美MV',
        time: '03:27',
        musician: '王力宏',
        album: '十八般武艺'
      },
      {
        name: '丑',
        time: '01:57',
        musician: '草东没有派对',
        album: '丑奴儿'
      },
      {
        name: '那个女孩',
        time: '04:27',
        musician: '陶喆/卢广仲',
        album: '再见你好吗 Hello Goodbye'
      },
      {
        name: '那个男人MV',
        time: '04:32',
        musician: '杨宗纬',
        album: '原色'
      },
      {
        name: '结婚',
        time: '05:52',
        musician: '李志',
        album: '我爱南京'
      },
      {
        name: '离婚',
        time: '04:55',
        musician: '李志',
        album: '被禁忌的游戏'
      },
      {
        name: '幸福了 然后呢MV',
        time: '05:07',
        musician: 'A-Lin',
        album: '幸福了 然后呢'
      },
      {
        name: '偷情 (Live)MV',
        time: '06:20',
        musician: '张敬轩',
        album: 'Hins Live in Passion 张敬轩 2014'
      },
      {
        name: '不要废话了',
        time: '03:53',
        musician: '陈势安',
        album: '亲爱的偏执狂'
      },
      {
        name: '抱一抱',
        time: '04:18',
        musician: '陈小春',
        album: '抱一抱'
      },
      {
        name: '偷窥秀',
        time: '04:01',
        musician: '蔡健雅',
        album: '失语者'
      },
      {
        name: '让我偷偷看你',
        time: '04:14',
        musician: '赵雷',
        album: '阿弥陀佛么么哒·一个孩子的心愿'
      },
      {
        name: '爱是怀疑',
        time: '02:34',
        musician: '刘瑞琦',
        album: '中国最强音12强合集'
      },
      {
        name: '爱要坦荡荡MV',
        time: '03:58',
        musician: '萧萧',
        album: 'Beautiful Angel'
      },
      {
        name: '说散就散MV',
        time: '03:50',
        musician: 'JC',
        album: '说散就散'
      },
      {
        name: '不见不散',
        time: '03:01',
        musician: '五月天',
        album: '那些你不要的'
      },
      {
        name: '好人',
        time: '03:47',
        musician: '侧田',
        album: '好人歌集'
      },
      {
        name: '坏人',
        time: '05:00',
        musician: '方炯镔',
        album: '好人？！'
      },
      {
        name: '晚安',
        time: '05:13',
        musician: '丢火车',
        album: '晚安'
      },
      {
        name: '早上好',
        time: '04:55',
        musician: '牛奶咖啡',
        album: '给你点儿颜色'
      },
      {
        name: '喜欢MV',
        time: '04:40',
        musician: '张悬',
        album: '亲爱的…我还不知道'
      },
      {
        name: '讨厌',
        time: '05:11',
        musician: 'Fine乐团',
        album: 'FEELINGS'
      },
      {
        name: '需要人陪MV',
        time: '04:11',
        musician: '王力宏',
        album: '十八般武艺'
      },
      {
        name: '独活',
        time: '03:42',
        musician: '洪卓立',
        album: '独活'
      },
      {
        name: '慢慢等MV',
        time: '03:53',
        musician: '韦礼安',
        album: '首张同名全创作专辑'
      },
      {
        name: '我等到花儿也谢了',
        time: '04:41',
        musician: '张学友',
        album: '真爱(新曲+真正精选)'
      },
      {
        name: '相信MV',
        time: '07:07',
        musician: '苏打绿',
        album: '无与伦比的美丽'
      },
      {
        name: '怀疑',
        time: '05:17',
        musician: '曹方',
        album: '浅彩虹'
      },
      {
        name: '有人',
        time: '03:17',
        musician: '麦浚龙',
        album: 'Nothing Lasts Forever'
      },
      {
        name: '没有人MV',
        time: '03:31',
        musician: '阿悄',
        album: '没有人'
      },
      {
        name: '天下太平',
        time: '04:11',
        musician: '陈奕迅/张学友',
        album: '林夕字传2'
      },
      {
        name: '天下大乱',
        time: '04:17',
        musician: '周柏豪',
        album: 'Roundabout'
      },
      {
        name: '浮夸MV',
        time: '04:43',
        musician: '陈奕迅',
        album: 'U-87'
      },
      {
        name: '认真',
        time: '03:43',
        musician: '黎瑞恩',
        album: '认真'
      },
      {
        name: '风继续吹',
        time: '05:11',
        musician: '张国荣',
        album: '最红'
      },
      {
        name: '如果风不再吹',
        time: '04:45',
        musician: '汪峰',
        album: '信仰在空中飘扬'
      },
      {
        name: '睡公主',
        time: '04:13',
        musician: '陈慧娴',
        album: '为你好'
      },
      {
        name: '灰姑娘',
        time: '05:07',
        musician: '郑钧',
        album: '赤裸裸'
      },
      {
        name: '珍惜',
        time: '04:19',
        musician: '苏有朋',
        album: '了解 精选辑'
      },
      {
        name: '浪费 - (原唱 : 林宥嘉)',
        time: '05:28',
        musician: '徐佳莹',
        album: '我是歌手第四季 第10期'
      },
      {
        name: '都一样',
        time: '05:03',
        musician: '李荣浩',
        album: '模特'
      },
      {
        name: '没有什么不同',
        time: '04:50',
        musician: '曲婉婷',
        album: 'Everything In The World (白金庆功版)'
      },
      {
        name: '后来的我们',
        time: '04:20',
        musician: '萧亚轩',
        album: '1087'
      },
      {
        name: '现在的我和她',
        time: '02:48',
        musician: '林俊杰',
        album: '和自己对话 From M.E. To Myself'
      },
      {
        name: '在你身边',
        time: '03:21',
        musician: '张学友',
        album: '在你身边'
      },
      {
        name: '遥不可及的你',
        time: '02:30',
        musician: '花粥',
        album: '2017（一）'
      },
      {
        name: '亲密关系MV',
        time: '03:59',
        musician: '郑秀文',
        album: 'Concert YY 黄伟文作品展 演唱会'
      },
      {
        name: '没有关系',
        time: '03:39',
        musician: '魏如萱',
        album: '优雅的刺猬'
      },
      {
        name: '在路上MV',
        time: '04:23',
        musician: '老狼/叶蓓/卢中强/川子/钟立风/马条/许飞/桂雨濛',
        album: '在路上'
      },
      {
        name: '失踪',
        time: '03:21',
        musician: '林忆莲',
        album: '属于我的林忆莲'
      },
      {
        name: '预谋邂逅MV',
        time: '04:16',
        musician: '阿肆',
        album: '预谋邂逅'
      },
      {
        name: '我设计一万种方式遇见你MV',
        time: '04:23',
        musician: '许飞',
        album: '许飞'
      },
      {
        name: '理想MV',
        time: '05:13',
        musician: '赵雷',
        album: '吉姆餐厅'
      },
      {
        name: '突然想到理想这个词',
        time: '04:36',
        musician: '郝云',
        album: '突然想到理想这个词'
      },
      {
        name: '疯了',
        time: '04:14',
        musician: '林忆莲',
        album: '梦了、疯了、倦了'
      },
      {
        name: '我没有疯',
        time: '05:03',
        musician: '张芸京',
        album: '小女孩'
      },
      {
        name: '怎么哭',
        time: '04:45',
        musician: '张芸京',
        album: '失败的高歌'
      },
      {
        name: '哭笑不得',
        time: '04:32',
        musician: '阿悄',
        album: '哭笑不得'
      },
      {
        name: '我只在乎你',
        time: '04:14',
        musician: '邓丽君',
        album: '我只在乎你'
      },
      {
        name: '不必在乎我是谁MV',
        time: '04:20',
        musician: '林忆莲',
        album: '不必在乎我是谁'
      },
      {
        name: '月亮代表谁的心',
        time: '03:25',
        musician: '陶喆',
        album: '黑色柳丁'
      },
      {
        name: '月亮代表我的心MV',
        time: '03:32',
        musician: '邓丽君',
        album: '再见我的爱人2(1977)'
      },
      {
        name: '你的眼神',
        time: '03:48',
        musician: '蔡琴',
        album: '你的眼神'
      },
      {
        name: '每个眼神都只身荒野',
        time: '03:25',
        musician: '郭顶',
        album: '飞行器的执行周期'
      },
      {
        name: 'PLAY 我呸MV',
        time: '03:12',
        musician: '蔡依林',
        album: '呸'
      },
      {
        name: '杀了她喂猪',
        time: '04:00',
        musician: '高晓松',
        album: '杀了她喂猪'
      },
      {
        name: '绝',
        time: '03:58',
        musician: '泳儿',
        album: '风·情歌'
      },
      {
        name: '充满希望 - (电影《监狱风云》主题曲)',
        time: '03:17',
        musician: '玛莉亚',
        album: '监狱风云'
      },
      {
        name: '天亮了',
        time: '03:42',
        musician: '韩红',
        album: '醒了'
      },
      {
        name: '天已黑 - (电视剧《欢乐颂2》情感主题曲)',
        time: '03:29',
        musician: '杨宗纬',
        album: '欢乐颂2 电视原声带'
      },
      {
        name: '于心有愧',
        time: '03:58',
        musician: '陈奕迅',
        album: 'H3M'
      },
      {
        name: '无愧于心 - (电视剧《少年包青天》主题曲)MV',
        time: '04:24',
        musician: '孙楠',
        album: '少年包青天1 主题曲'
      },
      {
        name: '祝福MV',
        time: '04:32',
        musician: '张学友',
        album: '祝福'
      },
      {
        name: '怨苍天变了心 - (电影《上海滩赌圣Ⅱ》主题曲)',
        time: '04:04',
        musician: '方季韦',
        album: '怨苍天变了心'
      },
      {
        name: '假如MV',
        time: '04:24',
        musician: '信乐团',
        album: '挑信'
      },
      {
        name: '只是没有如果 - (电视剧《那年青春我们正好》片尾曲)MV',
        time: '04:55',
        musician: '张靓颖/王铮亮',
        album: '只是没有如果'
      },
      {
        name: '相见恨晚MV',
        time: '04:14',
        musician: '彭佳慧',
        album: '美声荣耀'
      },
      {
        name: '相爱恨早 - (电视剧《致青春》片尾曲)',
        time: '04:29',
        musician: '那英',
        album: '相爱恨早'
      },
      {
        name: '忘记他是她',
        time: '06:19',
        musician: '关淑怡',
        album: '关淑怡完全集'
      },
      {
        name: '忘记他 - (电影《堕落天使》插曲)',
        time: '03:24',
        musician: '关淑怡',
        album: '堕落天使'
      },
      {
        name: '说好了一起去死',
        time: '03:19',
        musician: '有耳非文',
        album: '打狗女郎'
      },
      {
        name: '我曾经也想过一了百了 - (电影《北京遇上西雅图之不二情书》主题曲)MV',
        time: '05:31',
        musician: '汤唯',
        album: '我曾经也想过一了百了'
      },
      {
        name: '听说爱情回来过MV',
        time: '05:09',
        musician: '蔡依林',
        album: 'J世纪Jeneration大牌新曲+精选盘2006-2009'
      },
      {
        name: '爱情转移 - (电影《爱情呼叫转移》主题曲)MV',
        time: '04:19',
        musician: '陈奕迅',
        album: '认了吧'
      },
      {
        name: '爱MV',
        time: '03:20',
        musician: '莫文蔚',
        album: '[i]'
      },
      {
        name: '爱就一个字 - (动画《宝莲灯》主题曲)MV',
        time: '04:34',
        musician: '张信哲',
        album: '从开始到现在'
      },
      {
        name: '原来你什么都不要',
        time: '03:42',
        musician: '孙燕姿',
        album: 'Start 自选集'
      },
      {
        name: '我要你 - (电影《驴得水》主题曲)MV',
        time: '02:34',
        musician: '任素汐',
        album: '我要你'
      },
    ]

  }])
  /**
   * @ngdoc function
   * @name musicFrontApp.controller:AlbumCtrl
   * @description
   * # AlbumCtrl
   * Controller of the musicFrontApp'
   */
  .controller('AlbumCtrl', ['$http', function ($http) {
    var vm = this
    vm.list = []
  }])
