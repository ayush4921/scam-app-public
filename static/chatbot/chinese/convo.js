function course_complete() {   
  Swal.fire('恭喜！ 您已完成模拟。')
}


var convo = {ice:{
        says:['美好周末即将来临，您想出去吗？苏菲给了我您的电话号码。在这点击以查询我的个人资料：bit.ly/freespiritgal84'] ,
        reply: [{
          question: '点击链接以验证图片。',
          answer: 'incorrect_0',
      },
      {
          question: '回复发件人以询问更多详情。',
          answer: 'incorrect_0',

      },{
        question: '回电以确认日期和时间。',
        answer: 'incorrect_0',
        },{
        question: '不理会或删除短讯。',
        answer: 'true_0',
        }
      ],
      },
      incorrect_0:{
      says:['您的答案不正确。','您不应该点击任何未经请求的短讯中的链接。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_1',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_0:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_1',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_1:{
        says:['基于网络安全理由，您的 OCBC 信用卡已被暂停。请登录 OCBC iBanking http://ib.0cbc.sg 重启信用卡或拨打热线 83484800'] ,
        reply: [{
          question: '点击链接立即查证有关问题。',
          answer: 'incorrect_1',
      },
      {
          question: '不理会或删掉短讯。',
          answer: 'true_1',

      },{
        question: '拨打 83484800 与 OCBC 客户服务员通话。                 ',
        answer: 'incorrect_1',
        },{
        question: '不要点击链接，反而输入 http://ib.0cbc.sg 以登录到您自己的银行帐户。',
        answer: 'incorrect_1',
        }
      ],
      },
      incorrect_1:{
      says:['您的答案不正确。','不要使用未经请求的短讯中的任何链接或电话号码。如需确认，请拨打在银行信用卡背面的热线号码查询。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_2',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_1:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_2',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_2:{
        says:['您有一个来自 91889178 的未接来电。您的语音信箱中有 1 条未读信息。拨打 87561334 并按 1 来听取您的信息。'] ,
        reply: [{
          question: '直接拨打91889178，因为这是您未接电话的来源。',
          answer: 'incorrect_2',
      },
      {
          question: '拨打 87561334，但为了安全起见，选择不按 1。',
          answer: 'incorrect_2',

      },{
        question: '不理会或删除短讯。',
        answer: 'true_2',
        },{
        question: '拨打87561334，并按照指示按 1来听取您的信息。',
        answer: 'incorrect_2',
        }
      ],
      },
      incorrect_2:{
      says:['您的答案不正确。','不要使用未经请求的短讯中的任何链接或电话号码。如果来电者确实需要联系您，他/她应该会再次打电话给您。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_3',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_2:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_3',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_3:{
        says:['由于付款被拒绝，您的 Netflix 帐户已被暂停。点击 netfiix.com/payment 以更新您的信用卡。'] ,
        reply: [{
          question: '通过发送SMS的号码致电Netflix以查询有关事宜。',
          answer: 'incorrect_3',
      },
      {
          question: '点击链接以立即重启您的帐户，防止中断。',
          answer: 'incorrect_3',

      },{
        question: '致电给相关银行并投诉相关差劲客户服务。',
        answer: 'incorrect_3',
        },{
        question: '不理会或删除短讯。',
        answer: 'true_3',
        }
      ],
      },
      incorrect_3:{
      says:['您的答案不正确。','试问自己是否有 Netflix 帐户。即使有Netflix 帐户，您也不应该使用链接登录您的 Netflix 帐户，反而您应该正确使用Netflix官方网站登录您的账户。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_4',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_3:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_4',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_4:{
        says:['您好，我的手机丢了，现在我正使用别人的手机给你打电话。你能否电子转账PayLah给我 $50以便我可以先购买一张 SIM 卡吗？'] ,
        reply: [{
          question: '立刻电子转帐给他，因为他是您的好朋友，必须立即帮他解决危机。',
          answer: 'incorrect_4',
      },
      {
          question: '购买 SIM 卡并打电话给发件人。',
          answer: 'incorrect_4',

      },{
        question: '回复发件人以表示关注。',
        answer: 'incorrect_4',
        },{
        question: '不理会或删除短讯。',
        answer: 'true_4',
        }
      ],
      },
      incorrect_4:{
      says:['您的答案不正确。','在这种情况下，我们甚至不知道这个“朋友”的名字！'] ,  
       reply: [{
              question: '继续',
              answer: 'course_5',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_4:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_5',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_5:{
        says:['PS5 $688 限时优惠！只接受银行转账。97779665 送完为止！'] ,
        reply: [{
          question: '立即拨打此电话号码以为您的孙子预定他一直想要的这台新款PS5游戏机。',
          answer: 'incorrect_5',
      },
      {
          question: '转账给 97779665 以预定这台新款PS5游戏机，因为这是限时优惠。',
          answer: 'incorrect_5',

      },{
        question: '不理会或删除讯息。',
        answer: 'true_5',
        },{
        question: '转发这个信息给您的朋友，因为他一直在寻找能够购买到新款PS5游戏机的好价钱。',
        answer: 'incorrect_5',
        }
      ],
      },
      incorrect_5:{
      says:['您的答案不正确。','我们必须谨慎对待远低于市场价格的报价。不要转发未经验证的讯息。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_6',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_5:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_6',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_6:{
        says:['我接到 +65 xxxx xxxx 的电话。我是否应该接听这通电话？'] ,
        reply: [{
          question: '我们应该接听这通电话以确认来电者是否属实。',
          answer: 'incorrect_6',
      },
      {
          question: '拒绝并堵住来电者。',
          answer: 'incorrect_6',

      },{
        question: '不理会来电。',
        answer: 'true_6',
        },{
        question: '回答完后再向警方报案。',
        answer: 'incorrect_6',
        }
      ],
      },
      incorrect_6:{
      says:['您的答案不正确。','从新加坡境内拨打的电话不应有地区的代码(+65)。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_7',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_6:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_7',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_7:{
        says:['我收到了一个号码开头带有+的海外电话。我应该接这通电话？'] ,
        reply: [{
          question: '我们应该接听这通电话以确认来电者是否属实。',
          answer: 'incorrect_7',
      },
      {
          question: '拒绝并堵住来电者。',
          answer: 'incorrect_7',

      },{
        question: '不理会来电。',
        answer: 'true_7',
        },{
        question: '回答完毕后向警方报案。',
        answer: 'incorrect_7',
        }
      ],
      },
      incorrect_7:{
      says:['您的答案不正确。','除非您在等候来自海外的电话，否则不必要理会此类电话。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_8',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_7:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_8',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_8:{
        says:['您通过网上约会平台认识了一个女孩，并安排见面。女孩说她的老板会联系你。 她的老板要求您支付 $500的 Razor 金币以预防防止虐待女孩。您应该怎么做？'] ,
        reply: [{
          question: '付钱给老板，这样你就可以和女孩见面并和她面对面交谈。',
          answer: 'incorrect_8',
      },
      {
          question: '不理会并堵住女孩，因为预先支付电子款项是一个非常危险的信号。',
          answer: 'true_8',

      },{
        question: '继续和女孩聊天，期望有一天能够不需付钱就可以和她见面。',
        answer: 'incorrect_8',
        },{
        question: '请求老板让自己用另一种方式来付钱，这样你就可以和女孩见面了。',
        answer: 'incorrect_8',
        }
      ],
      },
      incorrect_8:{
      says:['您的答案不正确。','需要预先转账付款都具有风险。我们不必要相信这样的索求，更何况是陌生人！'] ,  
       reply: [{
              question: '继续',
              answer: 'course_9',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_8:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_9',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_9:{
        says:['你接到一个招聘代理的电话，对方解说有一个网站可以让你在完成每项任务后，可以赚取 $20至$100。为了帮助你上网注册，对方需要您的个人资料和身份证照片。而且，对方要求您转帐到此网站以支付相关行政费。您应该怎么做？'] ,
        reply: [{
          question: '上网注册，并提供个人资料。',
          answer: 'incorrect_9',
      },
      {
          question: '转帐到此网站，因为这是个赚钱的大好机会！',
          answer: 'incorrect_9',

      },{
        question: '要求来电者见面以查询相关讯息。',
        answer: 'incorrect_9',
        },{
        question: '不理会并堵住来电者。',
        answer: 'true_9',
        }
      ],
      },
      incorrect_9:{
      says:['您的答案不正确。','在任何情况下，您都不应该将您个人身份证的资料发送给任何人，更何况是陌生人！'] ,  
       reply: [{
              question: '继续',
              answer: 'course_10',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_9:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_10',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_10:{
        says:['您发现自己被骗了，诈骗者要求您转帐更多的钱，不然您无法取回您之前所支付的钱。您应该怎么做？'] ,
        reply: [{
          question: '听从他的指示，并转帐更多的钱给他，希望您能取回您所有的钱。',
          answer: 'incorrect_10',
      },
      {
          question: '停止与诈骗者的所有联系并向警方报案。',
          answer: 'true_10',

      },{
        question: '询问诈骗者您是否可以支付更少的钱来取回一部分的钱。',
        answer: 'incorrect_10',
        },{
        question: '恳求诈骗者是否有其它方法能够取回您的钱。',
        answer: 'incorrect_10',
        }
      ],
      },
      incorrect_10:{
      says:['您的答案不正确。','在这种情况下，无论您怎么做，诈骗者都不会退还你的钱。而且，如果钱已经被转移到海外，那么警察就很难追回已被转移到海外的钱。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_11',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_10:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_11',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_11:{
        says:['您收到一条提供贷款的讯息，并回复发件人以获取更多有关信息。发件人答复您有必要提供您的 SingPass 详细资料以确认您的就业状态。你应该怎么做？'] ,
        reply: [{
          question: '提供您的 SingPass ID、密码和 SMS 的一次性密码 (OTP)',
          answer: 'incorrect_11',
      },
      {
          question: '提供他们您的相关就业文件以及个人资料。',
          answer: 'incorrect_11',

      },{
        question: '不理会并堵住发件人。',
        answer: 'true_11',
        },{
        question: '只提供他们您的 SingPass ID 和密码。',
        answer: 'incorrect_11',
        }
      ],
      },
      incorrect_11:{
      says:['您的答案不正确。','Singpass 的详细资料可用于执行多项重要活动，例如开立银行帐户。您不应该将个人资料和 Singpass 的详细信息与他人分享。'] ,  
       reply: [{
              question: '继续',
              answer: 'course_12',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_11:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '继续',
              answer: 'course_12',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },course_12:{
        says:['您收到一个自称来自移民局的 whatapps 语音电话，并要求您按照指示执行某些任务，否则您的个人护照将被取消。该账号图片还显示了移民局的徽标，看起来是真实的。你应该怎么做？'] ,
        reply: [{
          question: '按照移民局官员的指示执行相关任务。',
          answer: 'incorrect_12',
      },
      {
          question: '不理会并堵住相关号码。致电移民局热线以确认此讯息是否属实。',
          answer: 'true_12',

      },{
        question: '根据他们的要求提供您的个人资料或相关银行信息。',
        answer: 'incorrect_12',
        },{
        question: '先根据他们的要求执行相关事宜，过后再去进行确认。',
        answer: 'incorrect_12',
        }
      ],
      },
      incorrect_12:{
      says:['您的答案不正确。','移民局等相关政府机构绝对不会通过短讯要求您提供个人详资料。此类请求通常是诈骗手段。'] ,  
       reply: [{
              question: '恭喜，您完成这项目了',
              answer: 'course_13',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },
      true_12:{
          says:['恭喜，您答对了！您刚刚避免自己受骗！'],
          reply: [{
              question: '恭喜，您完成这项目了',
              answer: 'course_complete',
          },{
            question: '重来',
            answer: 'ice',
        }]
      },}