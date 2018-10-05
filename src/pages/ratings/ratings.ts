import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
/**
 * Generated class for the RatingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ratings',
  templateUrl: 'ratings.html',
})
export class RatingsPage {

  	ratingsRef: AngularFireList<any>;
	@Input() imdbID: string;
	@Input() rateInPercent: number = 0;
  	rate: number = 0;
  	dataKey: any;

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				private angFirebase: AngularFireDatabase) {

							setTimeout(() => {
									this.ratingsRef = this.angFirebase.list( '/Ratings', ref => ref.orderByChild('imdbId').equalTo(this.imdbID) ); 
									this.ratingsRef.snapshotChanges()
													.pipe(
																map(actions => actions.map(a => {
																	if (a.payload.val().userId === 23)
																		return { key: a.key, ...a.payload.val() };
																	return null;
																}))
															).subscribe(resp => {
																	console.log(resp);
																	this.rateInPercent = this.getPercentage(this.rate);
																	if (resp.length) {
																		this.rate = resp[0].ratings;
																		this.rateInPercent = this.getPercentage(resp[0].ratings);
																		this.dataKey = resp[0].key;
																	}
															});
							});
							// console.log('from ratings page = ', this.ratings);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingsPage');
  }

  onModelChange(e) {
	  		this.rateInPercent = this.getPercentage(e);
			if (this.dataKey) {
				this.ratingsRef.set(this.dataKey, {
					imdbId: this.imdbID,
					ratings: e,
					userId: 23
				});
			} else {
				this.ratingsRef.push({
					imdbId: this.imdbID,
					ratings: e,
					userId: 23
				});
			}
  }

	private getPercentage(ratings: number) : any {
			const starTotal = 5;
			const starPercentage = (ratings / starTotal) * 100;
			const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
			return starPercentageRounded;
	}

}
