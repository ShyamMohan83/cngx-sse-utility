import { Injectable, NgZone } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IEventSource } from "./IEventSource";
@Injectable({
    providedIn: 'root'
})
export class SseUtilityService {
    private sourceStreamSubject = new Subject<IEventSource>();
    constructor(private _zone: NgZone) {
    }

    private createEventSourceObservable(url: string) : Observable<IEventSource>{
        return new Observable((observer: any) => {
            const eventSource = this.createEventSource(url);
            eventSource.onmessage = (event: MessageEvent) => {
                this._zone.run(()=>{
                    observer.next(event);
                });
            }
            eventSource.onerror = (error: Event) => {
                this._zone.run(()=>{
                    observer.next(error);
                });
                eventSource.close();
            }

        });
    }
    private subscribeToEventSource(url: string) {
        this.createEventSourceObservable(url).subscribe((data: IEventSource)=>{
            this.sourceStreamSubject.next(data)
        })
    }
    /**
     * check the browser compatibility 
     */
    private checkEventSourceBrowserSupport() {

    }
    /**
     * Create Event source stream
     */
    private createEventSource(url: string): EventSource {
        return new EventSource(url);
    }

    /**
     * convert source stream data to JSON
     */

    public convertStringDataToObject(data:string) {
        return JSON.parse(data);
    }



    /**
     * Return the RXJS Behavior subject to subscribe
     */
    public getEventSubscription() :Observable<IEventSource> {
        return this.sourceStreamSubject.asObservable();
    }

    public startProcess(url: string) {
        this.subscribeToEventSource(url);
    }

}