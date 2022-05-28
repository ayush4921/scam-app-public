function course_complete(){
  Swal.fire('Congratulations! You have completed the Simulation.')
}

var convo = {ice:{
        says:['(Q1/13) Beautiful weekend coming up. Wanna go out? Sophie gave me your number. Check out my profile here: bit.ly/freespiritgal84'] ,
        reply: [{
          question: 'Click on the link to verify the pictures.',
          answer: 'incorrect_0',
      },
      {
          question: 'Reply to the sender asking for more info.',
          answer: 'incorrect_0',

      },{
        question: 'Call back to confirm the date and time.',
        answer: 'incorrect_0',
        },{
        question: 'Ignore / Delete the message.',
        answer: 'true_0',
        }
      ],
      },
      incorrect_0:{
      says:['Your answer is incorrect.','You should not click on any link/URL within an unsolicited text message.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_1',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_0:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_1',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_1:{
        says:['(Q2/13) Your OCBC credit card has been suspended for security reasons. Please login to OCBC iBanking http://ib.0cbc.sg for reactivation or call hotline 83484800'] ,
        reply: [{
          question: 'Click on the link to investigate the issue immediately.',
          answer: 'incorrect_1',
      },
      {
          question: 'Ignore / Delete the message.',
          answer: 'true_1',

      },{
        question: 'Call 83484800 to speak to 0cbc operator',
        answer: 'incorrect_1',
        },{
        question: 'Do not click on the link,  manually key in http://ib.0cbc.sg to login to your own account instead.',
        answer: 'incorrect_1',
        }
      ],
      },
      incorrect_1:{
      says:['Your answer is incorrect.','Do not use any references (URL/phone number etc) from the unsolicited message. If you need to confirm, call the bank using the official hotline found behind your bank card instead.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_2',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_1:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_2',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_2:{
        says:['(Q3/13) You have a missed call from 91889178. You have 1 unread message in your Voicemail box. Call 87561334 and press 1 to retrieve your message.'] ,
        reply: [{
          question: 'Call 91889178 directly since this is where your missed call is from.',
          answer: 'incorrect_2',
      },
      {
          question: 'Call 87561334 and do not press 1 just to be safe.',
          answer: 'incorrect_2',

      },{
        question: 'Ignore / Delete the message.',
        answer: 'true_2',
        },{
        question: 'Call 87561334, follow instructions and press 1 to retrieve your message.',
        answer: 'incorrect_2',
        }
      ],
      },
      incorrect_2:{
      says:['Your answer is incorrect.','Do not use any references (URL/phone number etc) from the unsolicited message. If the caller genuinely need to reach you, he/she should be calling again.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_3',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_2:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_3',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_3:{
        says:['(Q4/13) Your Netflix account has been suspended as payment was declined. Click netfIix.com/payment to update your credit card.'] ,
        reply: [{
          question: 'Call Netflix via the number used to send you this SMS for immediate attention.',
          answer: 'incorrect_3',
      },
      {
          question: 'Click on the link to quickly reactivate the account to prevent disruption.',
          answer: 'incorrect_3',

      },{
        question: 'Call your credit card issuing bank to complain about the poor service.',
        answer: 'incorrect_3',
        },{
        question: 'Ignore / Delete the message.',
        answer: 'true_3',
        }
      ],
      },
      incorrect_3:{
      says:['Your answer is incorrect.','Ask yourself if you even have a Netflix account; context is the key! Even if you do, you should login to your Netflix account without using the URL specified to ensure you are visiting the official website of the service provider.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_4',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_3:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_4',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_4:{
        says:['(Q5/13) Hey bro, I lost my phone and now im using someone else mobile to call you because I only remember your number. Can you PayLah $50 here so that I can purchase a SIM card 1st? This is urgent!!'] ,
        reply: [{
          question: 'He\'s your best buddy, transfer the money 1st to solve his problem since this is an urgent matter.',
          answer: 'incorrect_4',
      },
      {
          question: 'Buy the SIM card and call the sender.',
          answer: 'incorrect_4',

      },{
        question: 'Reply back to the sender to show concern.',
        answer: 'incorrect_4',
        },{
        question: 'Ignore / Delete the message.',
        answer: 'true_4',
        }
      ],
      },
      incorrect_4:{
      says:['Your answer is incorrect.','In this situation, we do not even know the name of this "friend"!'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_5',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_4:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_5',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_5:{
        says:['(Q6/13) PS5 $688 limited time offer! Bank transfers only. 97779665 while stocks last!'] ,
        reply: [{
          question: 'Quickly call the number to secure a unit for your grandson as he has always wanted this model.',
          answer: 'incorrect_5',
      },
      {
          question: 'Send the money to 97779665 to reserve 1st since this is a limited time offer.',
          answer: 'incorrect_5',

      },{
        question: 'Ignore / Delete the message.',
        answer: 'true_5',
        },{
        question: 'Forward to your friend as he has been looking for a good price for the PS5.',
        answer: 'incorrect_5',
        }
      ],
      },
      incorrect_5:{
      says:['Your answer is incorrect.','Offers that are way below market price should always be treated with caution. Do not forward messages that are unverified.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_6',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_5:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_6',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_6:{
        says:['(Q7/13) I have received a call from +65 xxxx xxxx. Should I answer it or not?'] ,
        reply: [{
          question: 'Yes. We should answer it and find out if it is legitimate caller.',
          answer: 'incorrect_6',
      },
      {
          question: 'Deny and block the caller',
          answer: 'incorrect_6',

      },{
        question: 'Ignore the call',
        answer: 'true_6',
        },{
        question: 'Answer it and report it to the police after.',
        answer: 'incorrect_6',
        }
      ],
      },
      incorrect_6:{
      says:['Your answer is incorrect.','Calls from within Singapore should not have the country code prefixed (+65).'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_7',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_6:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_7',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_7:{
        says:['(Q8/13) I have received a overseas call with + at the start of the number. Should I answer it or not?'] ,
        reply: [{
          question: 'Yes. We should answer it and find out if it is legitimate caller.',
          answer: 'incorrect_7',
      },
      {
          question: 'Deny and block the caller',
          answer: 'incorrect_7',

      },{
        question: 'Ignore the call',
        answer: 'true_7',
        },{
        question: 'Answer it and report it to the police after.',
        answer: 'incorrect_7',
        }
      ],
      },
      incorrect_7:{
      says:['Your answer is incorrect.','Always ignore such calls unless you are expecting a call from overseas.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_8',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_7:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_8',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_8:{
        says:['(Q9/13) You have met a girl through dating application and have arranged for meetup. Girl say her boss will contact you. Boss asked to pay $500 in Razor gold credits to prevent abuse of host. What should you do?'] ,
        reply: [{
          question: 'Pay the boss so that you can meet the girl and talk to the girl in person',
          answer: 'incorrect_8',
      },
      {
          question: 'Ignore and block the girl as paying credit upfront is a red flag',
          answer: 'true_8',

      },{
        question: 'Continue talking to the girl and hope to meetup without having to pay',
        answer: 'incorrect_8',
        },{
        question: 'Ask to pay the boss in another method so you can meet the girl',
        answer: 'incorrect_8',
        }
      ],
      },
      incorrect_8:{
      says:['Your answer is incorrect.','There is an inherent risk of recipient absconding with upfront payments. Do not trust such request especially from strangers.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_9',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_8:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_9',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_9:{
        says:['(Q10/13) You have received a call from a job agent advertising that there is a website that can earn $20 to $100 for each task you complete. In order to register for the website, they will need your personal particular and photo of IC. The task will then require you transfer money to website for admin fees. What should you do?'] ,
        reply: [{
          question: 'Register on the website and provide them your personal information',
          answer: 'incorrect_9',
      },
      {
          question: 'Transfer money to the website as it is easy money',
          answer: 'incorrect_9',

      },{
        question: 'Ask the caller for meetup to verify the details',
        answer: 'incorrect_9',
        },{
        question: 'Ignore and block the caller',
        answer: 'true_9',
        }
      ],
      },
      incorrect_9:{
      says:['Your answer is incorrect.','Under no circumstances should you share your NRIC to anyone, much less a stranger.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_10',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_9:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_10',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_10:{
        says:['(Q11/13) You realized you have been in a scam and the scammer asks you to transfer more money or else you couldn\'t get back the money. What should you do?'] ,
        reply: [{
          question: 'Go through with it and transfer more money and hope that your money will come back to you',
          answer: 'incorrect_10',
      },
      {
          question: 'Stop all communication with the scammer and report it to the police',
          answer: 'true_10',

      },{
        question: 'Ask the scammer if you can pay lesser money to retrieve percentage of your money back',
        answer: 'incorrect_10',
        },{
        question: 'Plead with the scammer to see how else you can get back your money',
        answer: 'incorrect_10',
        }
      ],
      },
      incorrect_10:{
      says:['Your answer is incorrect.','In cases like this, the scammer will never return your money no matter what you do and the money transferred to oversea will be hard for the police to retrieve if the money has already been withdrawn oversea.'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_11',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_10:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_11',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_11:{
        says:['(Q12/13) You receive a message offering loan and you respond to the guy for more details. The guy informed you that it is necessary to share your SingPass details for employment status verification. What should you do?'] ,
        reply: [{
          question: 'Provide them your SingPass IDs, password and SMS One-time password',
          answer: 'incorrect_11',
      },
      {
          question: 'Share with them documents of your employment status as well as whatever personal particular they require',
          answer: 'incorrect_11',

      },{
        question: 'Ignore and block the guy.',
        answer: 'true_11',
        },{
        question: 'Provide them your SingPass ID and password only.',
        answer: 'incorrect_11',
        }
      ],
      },
      incorrect_11:{
      says:['Your answer is incorrect.','Singpass Details can be used to perform important action such as creating bank account. Personal Information and Singpass Details should never be shared to anyone'] ,  
       reply: [{
              question: 'Continue',
              answer: 'course_12',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_11:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Continue',
              answer: 'course_12',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },course_12:{
        says:['(Q13/13) You receive a voice call from whatapps claiming to be from the ICA and requires you to perform some action or your passport will be revoked. The profile picture also shows the ICA logo and seems legitimate. What should you do?'] ,
        reply: [{
          question: 'Perform the action as what the officer has requested you to',
          answer: 'incorrect_12',
      },
      {
          question: 'Ignore and block the number. Call the ICA hotline to verify if it is legitimate.',
          answer: 'true_12',

      },{
        question: 'Provide them your personal information/banking credentials as requested',
        answer: 'incorrect_12',
        },{
        question: 'Perform the action requested first and verify later',
        answer: 'incorrect_12',
        }
      ],
      },
      incorrect_12:{
      says:['Your answer is incorrect.','Government agencies such as ICA will never request for personal particulars via messaging application. Such requests are typically cases of scams.'] ,  
       reply: [{
              question: 'Congratulations! you completed the simulation',
              answer: 'course_complete',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },
      true_12:{
          says:['Congratulations! You just prevented yourself from a scam.'],
          reply: [{
              question: 'Congratulations! you completed the simulation',
              answer: 'course_complete',
          },{
            question: 'Start Over',
            answer: 'ice',
        }]
      },}