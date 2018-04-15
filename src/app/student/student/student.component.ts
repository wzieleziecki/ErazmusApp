import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

	studentForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.studentForm = fb.group({
			'name': ['', Validators.compose([Validators.required])],
			'lastName': ['', Validators.compose([Validators.required])]
		});
	}

	ngOnInit() {
	}

	submitForm(form: any){
		console.log('form');
		console.dir(form);
	}

}