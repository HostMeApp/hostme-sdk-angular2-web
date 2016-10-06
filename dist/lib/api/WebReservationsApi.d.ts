import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as models from '../model/models';
import { Configuration } from '../configuration';
export declare class WebReservationsApi {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    addNewReservation(restaurantId: number, value: models.CreateWebReservation, extraHttpRequestParams?: any): Observable<models.Reservation>;
    findRestaurants(lat?: number, lon?: number, name?: string, extraHttpRequestParams?: any): Observable<Array<models.RestaurantInfo>>;
    getReservationAvailability(restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, areas?: string, extraHttpRequestParams?: any): Observable<Array<models.OnlineAvailability>>;
    getRestaurantById(restaurantId: number, extraHttpRequestParams?: any): Observable<models.RestaurantInfo>;
    addNewReservationWithHttpInfo(restaurantId: number, value: models.CreateWebReservation, extraHttpRequestParams?: any): Observable<Response>;
    findRestaurantsWithHttpInfo(lat?: number, lon?: number, name?: string, extraHttpRequestParams?: any): Observable<Response>;
    getReservationAvailabilityWithHttpInfo(restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, areas?: string, extraHttpRequestParams?: any): Observable<Response>;
    getRestaurantByIdWithHttpInfo(restaurantId: number, extraHttpRequestParams?: any): Observable<Response>;
}
