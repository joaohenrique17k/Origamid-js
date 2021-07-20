export default class Countdown{
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _actualDate(){
        return new Date()
    }
    get _trasformDate(){
        return new Date(this.futureDate)
    }
    get _timeStampDiff(){
        return this._trasformDate.getTime() - this._actualDate.getTime();
    }
    get days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    get hours(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get minutes(){
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get segunds(){
        return Math.floor(this._timeStampDiff / 1000);
    }
    get total(){
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const segunds = this.segunds % 60;

        return { 
            days,
            hours,
            minutes,
            segunds
        }
    }

}

console.log('teste')