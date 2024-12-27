import { Component } from '@angular/core';
import { ApiserviceComponent } from '../apiservice/apiservice.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private apiService: ApiserviceComponent) { }

  isLogin:boolean = false

  async Login(username:string,password:string){
    var credentials = {
      username:username,
      password:password
    }
    await this.apiService.User().postLogin(credentials).then((data:any) =>{
      this.isLogin = data.code == 1 ? true : false
    })

    

  }
  ngOnInit() {
    this.apiService.CohereAI(`rewrite in exactly 100 tokens: <div class="article-detail-content" id="article-detail-content"><div style="width: 100%;"><img src="https://images.contentstack.io/v3/assets/blt8ec5b78e9ea1d11d/bltcd5807c615a5c6e2/675025c47998565b81e2445b/EN_2411-T41614_Aptos_Nov_Event_1600x900.png?quality=50" alt="bannerCover" width="100%"></div><p>Step into the APT Force Field and unlock exclusive rewards by completing simple tasks. In this exciting event, you can earn points to redeem APT airdrops and 20g 24K gold bars in the Aptos Points Plaza. Plus, take part in the Aptos Deposit Showdown for a chance to share in a 1,200 APT prize pool. Rewards are limited and available on a first-come, first-served basis, so don’t miss out!</p><p></p><p><strong>Event Period: Dec 3, 2024, 12 AM UTC – Dec 23, 2024, 10 AM UTC</strong></p><p></p><p>Hit the <strong>Register Now </strong>button below to get started. </p><p><div style="text-align: center;"><a href="https://www.bybitglobal.com/APTFORCE/" target="_blank" rel="noreferrer"><button><strong>Register Now</strong></button></a></div></p><p></p><p><strong>Aptos Points Plaza </strong></p><p>Complete deposit, trading, and referral tasks to earn points. </p><p></p><p>Participants may redeem amazing rewards, including APT airdrops and 24K gold bar, using points earned. Limited rewards are distributed on a first-come, first-served!</p><p></p><p>Please note the Points Plaza will close when all rewards are fully redeemed. Any unredeemed points will become invalid. </p><p></p><p><div style="text-align: center;"><a href="https://www.bybitglobal.com/APTFORCE/" target="_blank" rel="noreferrer"><button><strong>Earn Points Now</strong></button></a></div></p><p></p><p><strong>Aptos Deposit Showdown </strong></p><p>Deposit APT for a chance to share 1,200 APT in the prize pool. </p><p></p><p><strong>How It Works </strong></p><p><strong>Step 1:</strong> Make a deposit of at least 50 APT. </p><p><strong>Step 2: </strong>Trade at least $1,000 worth of APT on Spot or Derivatives. </p><p><strong>Step 3:</strong> Deposit more APT on Bybit to secure a larger share of the prize pool. </p><p></p><p>The more you deposit, the larger your share of the prize pool. </p><p><div style="text-align: center;"><a href="https://www.bybitglobal.com/APTFORCE/" target="_blank" rel="noreferrer"><button><strong>Deposit Now</strong></button></a></div></p><p></p><p><strong>New User Perk</strong></p><p>The first 500 new users who make a first deposit of at least $100 of any asset on Bybit will earn a 10 USDT Bonus. </p><p></p><p></p><p><strong><em>Terms and Conditions</em></strong></p><p><em>• Users must complete Identity Verification Lv. 1 to be eligible to for the event. </em></p><p><em>• Institutional users, Pro users, Market Makers, and Subaccounts are not eligible to participate in this event.</em></p><p><em>• Eligible deposits do not include bonuses or coupons of any kind, or internal transfers from one Bybit account to another. Asset exchanges, intra-platform transfers, and on-chain fund circulations are not considered as asset increases.</em></p><p><em>• Users' deposits will be calculated as follows: Total Deposits in Eligible Assets −  Amount Withdrawn During Event Period. Eligible deposits include the following: P2P Trading, Fiat Deposit, One-Click Buy, and Crypto Deposit.</em></p><p><em>• The Points Plaza will close once all rewards are redeemed. Users must redeem all points before it closes. Any unused points will expire and be forfeited.</em></p><p><em>• Rewards in the Aptos Points Plaza are available in limited quantities and are distributed on a first-come, first-served basis. Some rewards can only be claimed once per user.</em></p><p><em>• Physical rewards will be distributed as an equivalent value of APT in airdrops.</em></p><p><em>• All rewards will be distributed to eligible winners' Rewards Hub. Winners need to claim the rewards manually in Rewards Hub within 14 days of receiving the rewards.</em></p><p><em>• Users whose accounts are under risk control review will not be able to receive rewards.</em></p><p><em>• In APT Deposit Showdown</em></p><p><em>a. Prize Pool Distribution: The prize pool will be shared based on each eligible participant's net APT deposit, calculated as: ( Eligible participant's net APT deposit amount / Total net APT deposit amount of all eligible participants ) × prize pool</em></p><p><em>b. Participants engaging in on-chain fund transfers will be detected and disqualified for receiving the rewards. The New User Perk is only available for users who have yet to make their first deposit.</em></p><p><em>• All participating users must strictly adhere to the Bybit Terms of Service. Bybit reserves the right to disqualify any participants who engage in dishonest or abusive activities during the event, including bulk-account registrations to farm additional bonuses and any other activities in connection with unlawful, fraudulent or harmful purposes.</em></p><p><em>• Bybit reserves the right to modify the terms of this event without notifying users in advance.</em></p><p><em>• Bybit reserves the right to the final interpretation of this event. If you have any questions, please contact our Customer Support.</em></p></div>`).then((data:any)=>{
      console.log(data);
      
    })
  }
}
