"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var http_3 = require('@angular/http');
require('rxjs/add/operator/map');
var variables_1 = require('../variables');
var configuration_1 = require('../configuration');
var WebReservationsApi = (function () {
    function WebReservationsApi(http, basePath, configuration) {
        this.http = http;
        this.basePath = 'http://hostme-services-qa.azurewebsites.net';
        this.defaultHeaders = new http_1.Headers();
        this.configuration = new configuration_1.Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }
    WebReservationsApi.prototype.addNewReservation = function (restaurantId, value, extraHttpRequestParams) {
        return this.addNewReservationWithHttpInfo(restaurantId, value, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    WebReservationsApi.prototype.findRestaurants = function (lat, lon, name, extraHttpRequestParams) {
        return this.findRestaurantsWithHttpInfo(lat, lon, name, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    WebReservationsApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
        return this.getReservationAvailabilityWithHttpInfo(restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    WebReservationsApi.prototype.getRestaurantById = function (restaurantId, extraHttpRequestParams) {
        return this.getRestaurantByIdWithHttpInfo(restaurantId, extraHttpRequestParams)
            .map(function (response) {
            if (response.status === 204) {
                return undefined;
            }
            else {
                return response.json();
            }
        });
    };
    WebReservationsApi.prototype.addNewReservationWithHttpInfo = function (restaurantId, value, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/web/restaurants/" + restaurantId + "/reservations");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling addNewReservation.');
        }
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling addNewReservation.');
        }
        var consumes = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml',
            'application/x-www-form-urlencoded',
            'image/jpg',
            'image/jpeg',
            'image/png'
        ];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        headers.set('Content-Type', 'application/json');
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Post,
            headers: headers,
            body: value == null ? '' : JSON.stringify(value),
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    WebReservationsApi.prototype.findRestaurantsWithHttpInfo = function (lat, lon, name, extraHttpRequestParams) {
        var path = this.basePath + "/api/rsv/web/restaurants/find";
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (lat !== undefined) {
            queryParameters.set('lat', lat);
        }
        if (lon !== undefined) {
            queryParameters.set('lon', lon);
        }
        if (name !== undefined) {
            queryParameters.set('name', name);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    WebReservationsApi.prototype.getReservationAvailabilityWithHttpInfo = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/web/restaurants/" + restaurantId + "/availability");
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getReservationAvailability.');
        }
        if (date === null || date === undefined) {
            throw new Error('Required parameter date was null or undefined when calling getReservationAvailability.');
        }
        if (partySize === null || partySize === undefined) {
            throw new Error('Required parameter partySize was null or undefined when calling getReservationAvailability.');
        }
        if (rangeInMinutes === null || rangeInMinutes === undefined) {
            throw new Error('Required parameter rangeInMinutes was null or undefined when calling getReservationAvailability.');
        }
        if (date !== undefined) {
            queryParameters.set('date', date);
        }
        if (partySize !== undefined) {
            queryParameters.set('partySize', partySize);
        }
        if (rangeInMinutes !== undefined) {
            queryParameters.set('rangeInMinutes', rangeInMinutes);
        }
        if (areas !== undefined) {
            queryParameters.set('areas', areas);
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    WebReservationsApi.prototype.getRestaurantByIdWithHttpInfo = function (restaurantId, extraHttpRequestParams) {
        var path = this.basePath + ("/api/rsv/web/restaurants/" + restaurantId);
        var queryParameters = new http_1.URLSearchParams();
        var headers = new http_1.Headers(this.defaultHeaders.toJSON());
        if (restaurantId === null || restaurantId === undefined) {
            throw new Error('Required parameter restaurantId was null or undefined when calling getRestaurantById.');
        }
        var consumes = [];
        var produces = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        var requestOptions = new http_2.RequestOptions({
            method: http_2.RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            responseType: http_3.ResponseContentType.Json
        });
        return this.http.request(path, requestOptions);
    };
    WebReservationsApi = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Optional()),
        __param(1, core_1.Inject(variables_1.BASE_PATH)),
        __param(2, core_1.Optional()), 
        __metadata('design:paramtypes', [http_1.Http, String, configuration_1.Configuration])
    ], WebReservationsApi);
    return WebReservationsApi;
}());
exports.WebReservationsApi = WebReservationsApi;
//# sourceMappingURL=WebReservationsApi.js.map