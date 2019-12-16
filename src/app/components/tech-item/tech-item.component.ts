import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TechItemModel } from '../../models/TechItemModel';
@Component({
	selector: 'app-tech-item',
	templateUrl: './tech-item.component.html',
	styleUrls: [ './tech-item.component.scss' ]
})
export class TechItemComponent implements OnInit {
	@Input() techItemRecieved: string;
	@Output() manageTech: EventEmitter<TechItemModel> = new EventEmitter();
	item: TechItemModel = {
		techItem: '',
		isChecked: false
	};
	isChecked: boolean = false;

	constructor() {}

	ngOnInit() {}
	onToggle() {
		this.isChecked = !this.isChecked;
		this.item.techItem = this.techItemRecieved;
		this.item.isChecked = this.isChecked;
		this.manageTech.emit(this.item);
	}
}
