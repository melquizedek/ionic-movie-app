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
  rate: number;
  dataKey: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private angFirebase: AngularFireDatabase) {

                setTimeout(() => {
                    this.ratingsRef = this.angFirebase.list( '/Ratings', ref => ref.orderByChild('imdbId').equalTo(this.imdbID) ); 
                    this.ratingsRef
                            .snapshotChanges()
                            .pipe(
								map(actions => actions.map(a => {
									if (a.payload.val().userId === 23)
										return { key: a.key, ...a.payload.val() };
									return null;
								}))
							).subscribe(resp => {
								console.log(resp);
								if (resp.length) {
									this.rate = resp[0].ratings;
									this.dataKey = resp[0].key;
								}
							} );
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingsPage');
  }

  onModelChange(e) {
    console.log(e, this.imdbID);
	
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

}
