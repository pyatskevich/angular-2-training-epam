export class Course {
	public id: number = null;
	public date: string = null;
	public title: String = null;
	public time: number = null;
	public description: string = null;
	public topRated: boolean = null;

	constructor(obj?) {
		if(obj) {
			this.id = obj.id;
			this.date = obj.date;
			this.title = obj.title;
			this.time = obj.time;
			this.description = obj.description;
			this.topRated = obj.topRated;
		}
	}
}
